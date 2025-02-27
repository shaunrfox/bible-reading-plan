import { getDataPath } from './assetPaths';

/**
 * Type definitions to describe the data shape.
 */
export interface ReadingData {
  services: {
    [key: string]: {
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
  try {
    const dataUrl = getDataPath(date);
    console.log('Fetching data from:', dataUrl);

    const response = await fetch(dataUrl);
    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(
        `Failed to load reading data: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    console.error('Error fetching data:', err);
    throw new Error(`Error loading data for ${date}: ${err.message}`);
  }
}
