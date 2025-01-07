// Query data from the local SQLite database
function getSectionData(db: Database, sectionId: number) {
  const stmt = db.prepare("SELECT * FROM sections WHERE id = ?");
  stmt.bind([sectionId]);

  if (stmt.step()) {
    const section = stmt.getAsObject();
    const items = getItemsForSection(db, sectionId);
    return { ...section, items };
  }

  return null;
}

// Helper to fetch items for a section
function getItemsForSection(db: Database, sectionId: number) {
  const stmt = db.prepare("SELECT * FROM items WHERE sectionId = ?");
  stmt.bind([sectionId]);

  const items: any[] = [];
  while (stmt.step()) {
    items.push(stmt.getAsObject());
  }

  return items;
}

// Example API response
(async () => {
  const db = await setupDatabase("https://api.dailyoffice2019.com/api/");
  const sectionData = getSectionData(db, 1); // Get section with ID 1
  console.log(sectionData);
})();
