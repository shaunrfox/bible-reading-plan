import initSqlJs, { Database } from 'sql.js';
import fs from 'fs';
import { OfficeDay } from '../types/database';

async function loadLocalDatabase(dbPath: string): Promise<Database> {
  const SQL = await initSqlJs();
  const fileBuffer = fs.readFileSync(dbPath);
  return new SQL.Database(fileBuffer);
}

async function getPsalm(
  dbPath: string,
  psalmNumber: number,
): Promise<Psalm | null> {
  const db = await loadLocalDatabase(dbPath);

  const psalmStmt = db.prepare(`
    SELECT * FROM psalter_psalm 
    WHERE number = ?
  `);
  psalmStmt.bind([psalmNumber]);

  if (psalmStmt.step()) {
    const psalm = psalmStmt.getAsObject() as Psalm;

    // Get verses
    const verseStmt = db.prepare(`
      SELECT * FROM psalter_psalmverse 
      WHERE psalm_id = ? 
      ORDER BY number
    `);
    verseStmt.bind([psalm.id]);

    const verses: PsalmVerse[] = [];
    while (verseStmt.step()) {
      verses.push(verseStmt.getAsObject() as PsalmVerse);
    }

    psalm.verses = verses;
    db.close();
    return psalm;
  }

  db.close();
  return null;
}

async function getOfficeDay(
  dbPath: string,
  month: number,
  day: number,
): Promise<OfficeDay | null> {
  const db = await loadLocalDatabase(dbPath);

  const stmt = db.prepare(`
    SELECT * FROM office_standardofficeday od
    INNER JOIN office_officeday base ON od.officeday_ptr_id = base.TEXT
    WHERE od.month = ? AND od.day = ?
  `);
  stmt.bind([month, day]);

  if (stmt.step()) {
    const officeDay = stmt.getAsObject() as OfficeDay;
    db.close();
    return officeDay;
  }

  db.close();
  return null;
}

async function fetchMonthReadings(yearMonth: string): Promise<OfficeDay[]> {
  const db = await loadLocalDatabase('./app/data/dailyoffice.db');

  const [year, month] = yearMonth.split('-').map(Number);

  const stmt = db.prepare(`
    SELECT od.*, base.*
    FROM office_standardofficeday od
    INNER JOIN office_officeday base ON od.officeday_ptr_id = base.TEXT
    WHERE od.month = ?
    ORDER BY od.day
  `);

  stmt.bind([month]);

  const readings: OfficeDay[] = [];
  while (stmt.step()) {
    readings.push(stmt.getAsObject() as OfficeDay);
  }

  db.close();
  return readings;
}

export { getPsalm, getOfficeDay, fetchMonthReadings };
