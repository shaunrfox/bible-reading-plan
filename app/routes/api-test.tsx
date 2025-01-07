import React, { useEffect, useState } from "react";
import initSqlJs, { Database } from "sql.js";

function App() {
  const [db, setDb] = useState<Database | null>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const SQL = await initSqlJs();
      const database = new SQL.Database();
      setDb(database);

      // Populate the database with example data
      await setupDatabase("https://api.dailyoffice2019.com/api/");
    }

    fetchData();
  }, []);

  // Fetch local data from SQLite
  const getLocalData = () => {
    if (!db) return;

    const stmt = db.prepare("SELECT * FROM sections");
    const results: any[] = [];

    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }

    setData(results);
    stmt.free();
  };

  return (
    <div>
      <button onClick={getLocalData}>Load Data</button>
      <ul>
        {data.map((section) => (
          <li key={section.id}>{section.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
