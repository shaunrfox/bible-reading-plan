// Endpoints:
// - /readings/{year}-{month}-{day}:
//	 - https://api.dailyoffice2019.com/api/v1/readings/2024-07-01
// - /{year}-{month}:
// 		- https://api.dailyoffice2019.com/api/v1/calendar/2024-07

const API_BASE_URL = "https://api.dailyoffice2019.com/api/v1/";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// Configure LowDB with a separate test database
const adapter = new JSONFile("test-readings.json");
const defaultData = { readings: [] };
const db = new Low(adapter, defaultData);

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

    // Load existing data
    await db.read();

    // Add or update reading data
    const existingIndex = db.data.readings.findIndex((r) => r.date === date);
    if (existingIndex >= 0) {
      db.data.readings[existingIndex] = { date, data };
    } else {
      db.data.readings.push({ date, data });
    }

    // Write to file
    await db.write();
    console.log(`Data written to test-readings.json for date: ${date}`);

    return data;
  } catch (error) {
    console.error("Error in fetchDailyReadings:", error);
    throw new Error("Failed to fetch daily readings");
  }
}

export async function fetchMonthReadings(year_month) {
  try {
    const response = await fetch(`${API_BASE_URL}calendar/${year_month}`);
    console.log(`Fetching month readings for year_month: ${year_month}`);
    console.log(`Response status: ${response.status}`);
    console.log(`Response status text: ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch month readings: ${errorText}`);
      throw new Error(`Failed to fetch month readings: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data fetched:", data);
    return data;
  } catch (error) {
    console.error("Error in fetchMonthReadings:", error);
    throw new Error("Failed to fetch month readings");
  }
}
