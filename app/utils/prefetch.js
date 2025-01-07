import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// API base URL
const API_BASE_URL = 'https://api.dailyoffice2019.com/api/v1/';

// Configure LowDB to use a JSON file for storage
const adapter = new JSONFile('db.json');
const defaultData = { readings: [] }; // Provide default data
const db = new Low(adapter, defaultData);

async function fetchAllData(startDate, endDate) {
	// Load existing data from the JSON file
	await db.read();

	// Ensure db.data.readings is an array
	db.data.readings = db.data.readings || [];

	// Generate the range of dates you need
	const dates = generateDateRange(startDate, endDate);

	// Fetch data for all dates
	const dataPromises = dates.map(async (date) => {
		try {
			const response = await fetch(`${API_BASE_URL}readings/${date}`);
			if (!response.ok) {
				console.error(`Failed to fetch data for ${date}: ${response.statusText}`);
				return null; // Skip this date on error
			}
			const data = await response.json();
			return { date, data };
		} catch (error) {
			console.error(`Error fetching data for ${date}:`, error);
			return null; // Skip this date on error
		}
	});

	const validData = (await Promise.all(dataPromises)).filter((entry) => entry !== null);

	// Create a Map from existing readings for quick lookup
	const readingsMap = new Map(db.data.readings.map((entry) => [entry.date, entry.data]));

	// Overwrite or add new readings
	for (const entry of validData) {
		readingsMap.set(entry.date, entry.data); // Overwrites existing data for the date
	}

	// Create an array from the map entries and sort it by date
	const mergedReadings = Array.from(readingsMap.entries())
		.map(([date, data]) => ({ date, data }))
		.sort((a, b) => new Date(a.date) - new Date(b.date));

	// Store the merged and sorted data back into db.data.readings
	db.data.readings = mergedReadings;

	await db.write();

	console.log('Data fetching and storing completed successfully.');
}

// Function to generate a range of dates in 'YYYY-MM-DD' format
function generateDateRange(startDate, endDate) {
	const dates = [];
	let currentDate = new Date(startDate);
	const endDateTime = new Date(endDate);
	endDateTime.setDate(endDateTime.getDate() + 1); // Add one day to make it inclusive

	while (currentDate < endDateTime) {  // Changed <= to < since we added a day to endDateTime
		const dateString = currentDate.toISOString().split('T')[0]; // 'YYYY-MM-DD'
		dates.push(dateString);
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return dates;
}

// Execute the function
// Get command-line arguments
const args = process.argv.slice(2);
const startDate = args[0]; // e.g., '2024-07-01'
const endDate = args[1]; // e.g., '2024-07-31'

if (!startDate || !endDate) {
	console.error('Please provide start date and end date in YYYY-MM-DD format as command-line arguments.');
	process.exit(1);
}

fetchAllData(startDate, endDate).catch((error) => console.error('Error in fetchAllData:', error));