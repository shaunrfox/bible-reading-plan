import { promises as fs } from "fs";
import path from "path";

/**
 * Type definitions (optional) to describe your data shape.
 * You can refine these as needed based on your JSON structure.
 */
export interface ReadingData {
  services: {
    "Morning Prayer": {
      readings: Array<{
        full: { citation: string };
      }>;
    };
    "Evening Prayer": {
      readings: Array<{
        full: { citation: string };
      }>;
    };
  };
  calendarDate: {
    date: string;
    season: {
      name: string;
      colors?: string[];
    };
  };
  // ...any other fields you need
}

/**
 * Loads a day's reading from the JSON file in data/<year>/<date>.json
 * @param date - An ISO date string (YYYY-MM-DD)
 * @returns The parsed data or throws an error if not found/invalid.
 */
export async function getDailyReading(date: string): Promise<ReadingData> {
  // Extract the year from the date (e.g. "2025" from "2025-01-13")
  const year = date.substring(0, 4);

  try {
    const response = await fetch(
      `/bible-reading-plan/data/${year}/${date}.json`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (err: any) {
    console.error("Error fetching data:", err);
    throw new Error(`Error loading data for ${date}: ${err.message}`);
  }
}
