// In your application code

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const defaultData = { readings: [] }; // Ensure defaultData matches
const db = new Low(adapter, defaultData);

export async function getDailyReading(date) {
	await db.read();

	// Find the reading for the specified date
	const reading = db.data.readings.find((entry) => entry.date === date);

	if (reading) {
		return reading.data;
	} else {
		throw new Error(`No reading found for date: ${date}`);
	}
}