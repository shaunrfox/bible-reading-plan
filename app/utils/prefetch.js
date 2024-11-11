// prefetch.js

import fetch from 'node-fetch';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// API base URL
const API_BASE_URL = 'https://api.dailyoffice2019.com/api/v1/';

// Configure LowDB to use a JSON file for storage
const adapter = new JSONFile('db.json');
const defaultData = { readings: [] }; // Provide default data
const db = new Low(adapter, defaultData);

async function fetchAllData() {
	// Load existing data from the JSON file
	await db.read();

	// No need to initialize db.data here since it's already set

	// Generate the range of dates you need
	const dates = generateDateRange('2024-11-10', '2024-11-15');

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

	const allData = await Promise.all(dataPromises);

	// Filter out any null results due to fetch errors
	const validData = allData.filter((entry) => entry !== null);

	// Store the fetched data in the database
	db.data.readings = validData;
	await db.write();

	console.log('Data fetching and storing completed successfully.');
}

// Function to generate a range of dates in 'YYYY-MM-DD' format
function generateDateRange(startDate, endDate) {
	const dates = [];
	let currentDate = new Date(startDate);

	while (currentDate <= new Date(endDate)) {
		const dateString = currentDate.toISOString().split('T')[0]; // 'YYYY-MM-DD'
		dates.push(dateString);
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return dates;
}

// Execute the function
fetchAllData().catch((error) => console.error('Error in fetchAllData:', error));