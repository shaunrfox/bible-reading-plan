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
  // Extract the year from the date (e.g. "2025" from "2025-01-13")
  const year = date.substring(0, 4);

  try {
    // Use different base paths for dev and prod
    const basePath = import.meta.env.DEV ? '' : '/bible-reading-plan';
    const dataUrl = `${basePath}/data/${year}/${date}.json`;
    console.log('Fetching data from:', dataUrl);

    const response = await fetch(dataUrl);
    console.log('Response status:', response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error('Response text:', text);
      throw new Error(
        `Failed to load reading data: ${response.status} ${response.statusText}`,
      );
    }

    const text = await response.text();
    console.log('Response text preview:', text.substring(0, 200) + '...');

    const data = JSON.parse(text);
    return data;
  } catch (err: any) {
    console.error('Error fetching data:', err);
    throw new Error(`Error loading data for ${date}: ${err.message}`);
  }
}
