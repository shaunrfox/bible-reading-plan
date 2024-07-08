const API_BASE_URL = 'https://api.dailyoffice2019.com/api/v1/';

export async function fetchDailyReadings(date) {
	try {
		const response = await fetch(`${API_BASE_URL}readings/${date}`);
		console.log(`Fetching daily readings for date: ${date}`);
		console.log(`Response status: ${response.status}`);
		console.log(`Response status text: ${response.statusText}`);

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Failed to fetch daily readings: ${errorText}`);
			throw new Error(`Failed to fetch daily readings: ${response.statusText}`);
		}

		const data = await response.json();
		console.log('Data fetched:', data);
		return data;
	} catch (error) {
		console.error('Error in fetchDailyReadings:', error);
		throw new Error('Failed to fetch daily readings');
	}
}