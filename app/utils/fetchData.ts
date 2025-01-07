import initSqlJs, { Database } from "sql.js";
import fs from "fs";

// Fetch all data from the API
async function fetchAPIData(apiUrl: string): Promise<any[]> {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`);
  }
  return response.json();
}

// Create SQLite tables based on data structure
function createTables(db: Database) {
  db.run(`
    CREATE TABLE IF NOT EXISTS sections (
      id INTEGER PRIMARY KEY,
      title TEXT,
      description TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY,
      sectionId INTEGER,
      content TEXT,
      FOREIGN KEY (sectionId) REFERENCES sections(id)
    );
  `);
}

// Insert data into SQLite tables
function populateDatabase(db: Database, data: any) {
  const insertSection = db.prepare(
    "INSERT INTO sections (id, title, description) VALUES (?, ?, ?)"
  );
  const insertItem = db.prepare(
    "INSERT INTO items (id, sectionId, content) VALUES (?, ?, ?)"
  );

  data.forEach((section: any) => {
    insertSection.run(section.id, section.title, section.description);
    section.items.forEach((item: any) => {
      insertItem.run(item.id, section.id, item.content);
    });
  });

  insertSection.free();
  insertItem.free();
}

// Initialize database and populate it
async function setupDatabase(apiUrl: string) {
  const SQL = await initSqlJs();

  // Create a new in-memory SQLite database
  const db = new SQL.Database();

  try {
    const data = await fetchAPIData(apiUrl);
    createTables(db);
    populateDatabase(db, data);
    console.log("Database populated successfully");
  } catch (error) {
    console.error("Error:", error);
  }

  return db;
}

// Example usage
(async () => {
  const db = await setupDatabase("https://api.dailyoffice2019.com/api/");
  // Export the database to a file
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync("database.db", buffer);
  console.log("Database exported successfully");
})();
