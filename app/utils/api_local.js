import readings from "./db.json" assert { type: "json" };

export async function getDailyReading(date) {
	// Find the reading for the specified date
	const reading = readings.readings.find((entry) => entry.date === date);

	if (reading) {
		return reading.data;
	} else {
		throw new Error(`No reading found for date: ${date}`);
	}
}
