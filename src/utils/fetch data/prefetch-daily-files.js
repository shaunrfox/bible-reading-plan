import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { promises as fs } from "fs";
import path from "path";

// API base URL
const API_BASE_URL = "https://api.dailyoffice2019.com/api/v1/";

// Configure LowDB to use a JSON file for storage
const adapter = new JSONFile("db4.json");
const defaultData = { readings: [] }; // Provide default data
const db = new Low(adapter, defaultData);

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
  }
}

async function fileExists(date) {
  const year = date.substring(0, 4);
  const filePath = path.join("data", year, `${date}.json`);
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function fetchAllData(startDate, endDate) {
  // Load existing data from the JSON file
  await db.read();

  // Ensure db.data.readings is an array
  db.data.readings = db.data.readings || [];

  // Generate the range of dates you need
  const dates = generateDateRange(startDate, endDate);

  // Process dates in batches to avoid overwhelming the API
  const batchSize = 10;
  for (let i = 0; i < dates.length; i += batchSize) {
    const batch = dates.slice(i, i + batchSize);
    console.log(
      `---------------------------\nStarting batch\n---------------------------`
    );
    const promises = batch.map(async (date) => {
      // Check if file already exists
      if (await fileExists(date)) {
        console.log(`${date} - skipped, file already exists`);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}readings/${date}`);
        if (!response.ok) {
          console.error(
            `Failed to fetch data for ${date}: ${response.statusText}`
          );
          return;
        }

        const data = await response.json();
        const year = date.substring(0, 4);
        const dirPath = path.join("data", year);
        const filePath = path.join(dirPath, `${date}.json`);

        await ensureDirectoryExists(dirPath);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        console.log(`${date} - saved file`);
      } catch (error) {
        console.error(`Error processing ${date}:`, error);
      }
    });

    await Promise.all(promises);

    // Add a small delay between batches to be nice to the API
    if (i + batchSize < dates.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  console.log("Data fetching and storing completed successfully.");
}

// Function to generate a range of dates in 'YYYY-MM-DD' format
function generateDateRange(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  const endDateTime = new Date(endDate);
  endDateTime.setDate(endDateTime.getDate() + 1); // Add one day to make it inclusive

  while (currentDate < endDateTime) {
    // Changed <= to < since we added a day to endDateTime
    const dateString = currentDate.toISOString().split("T")[0]; // 'YYYY-MM-DD'
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
  console.error(
    "Please provide start date and end date in YYYY-MM-DD format as command-line arguments."
  );
  process.exit(1);
}

fetchAllData(startDate, endDate).catch((error) =>
  console.error("Error in fetchAllData:", error)
);

// node app/utils/prefetch-daily-files.js 2024-07-01 2024-07-31
