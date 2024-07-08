import { json, useLoaderData } from '@remix-run/react';
import { fetchDailyReadings } from '~/utils/api';
import { fetchScripture } from '~/utils/nltApi';
import { formatReference } from '~/utils/formatReference';

export let loader = async ({ params }) => {
  try {
    let date = params.date || new Date().toISOString().split('T')[0];
    console.log(`Loading daily readings for date: ${date}`);
    let fetchedData = await fetchDailyReadings(date);

    const fetchFormattedScripture = async (reading) => {
      const formattedReference = formatReference(reading.full.citation);
      return await fetchScripture(formattedReference);
    };

    const morningPrayer = fetchedData.services['Morning Prayer'].readings;
    const eveningPrayer = fetchedData.services['Evening Prayer'].readings;

    const morningPsalms = await fetchFormattedScripture(morningPrayer[1]);
    const morningReading1 = await fetchFormattedScripture(morningPrayer[2]);
    const morningReading2 = await fetchFormattedScripture(morningPrayer[3]);

    const eveningPsalms = await fetchFormattedScripture(eveningPrayer[1]);
    const eveningReading1 = await fetchFormattedScripture(eveningPrayer[2]);
    const eveningReading2 = await fetchFormattedScripture(eveningPrayer[3]);

    return json({
      fetchedData,
      morningPsalms,
      morningReading1,
      morningReading2,
      eveningPsalms,
      eveningReading1,
      eveningReading2,
      date,
    });
  } catch (error) {
    console.error('Error in loader:', error);
    return json({ error: 'Error loading daily readings and scripture content' }, { status: 500 });
  }
};

export default function DailyReadingsDate() {
  let data = useLoaderData();

  if (data.error) {
    return <div>Error loading data: {data.error}</div>;
  }

  const { previousDate, nextDate } = getAdjacentDates(data.date);

  const cal = data.fetchedData.calendarDate;
  const date = cal.date; // "2024-06-25"
  const weekday = cal.date_description.weekday; // "Wednesday"
  const month_name = cal.date_description.month_name; // "June"
  const day = cal.date_description.day; // "25"
  const year = cal.date_description.year; // "2024"
  const date_formatted = `${weekday}, ${month_name} ${day}, ${year}`;
  const season = cal.season.name; // "Season After Pentecost"

  // Morning Prayer
  const morning_scripture = data.fetchedData.services['Morning Prayer'].readings;
  const morning_psalms_ref = morning_scripture[1].full.citation; // "Psalms 132,  133"
  const morning_psalms_text = data.morningPsalms;
  const morning_reading_1_ref = morning_scripture[2].full.citation; // "Judges 7"
  const morning_reading_1_text = data.morningReading1;
  const morning_reading_2_ref = morning_scripture[3].full.citation; // "I Thessalonians 4:1-12"
  const morning_reading_2_text = data.morningReading2;
  
  // Evening Prayer
  const evening_scripture = data.fetchedData.services['Evening Prayer'].readings;
  const evening_psalms_ref = evening_scripture[1].full.citation; // "Psalms 134,  135"
  const evening_psalms_text = data.eveningPsalms; 
  const evening_reading_1_ref = evening_scripture[2].full.citation; // "Daniel 4"
  const evening_reading_1_text = data.eveningReading1;
  const evening_reading_2_ref = evening_scripture[3].full.citation; // "Acts 20:17-38"
  const evening_reading_2_text = data.eveningReading2;  

  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1.5rem',
        borderBottom: '1px solid #ccc',
      }}>
        <h1 style={{
          fontSize: '1rem',
          margin: 0,
        }}>Daily Readings</h1>
        <p>{date_formatted} | {date} | {season}</p>
      </header>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
      }}>
        <Link to={`/daily-readings/${previousDate}`}>&larr; Previous Day</Link>
        <Link to={`/daily-readings/${nextDate}`}>Next Day &rarr;</Link>
      </nav>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
      }}>
        <h2>Morning Prayer</h2>
        <div>
          <h3>The Psalms</h3>
          <p>{morning_psalms_ref}</p>
          <div dangerouslySetInnerHTML={{ __html: morning_psalms_text }} />
        </div>
        <div>
          <h3>Reading 1</h3>
          <p>{morning_reading_1_ref}</p>
          <div dangerouslySetInnerHTML={{ __html: morning_reading_1_text }} />
        </div>
        <div>
          <h3>Reading 2</h3>
          <p>{morning_reading_2_ref}</p>
          <div dangerouslySetInnerHTML={{ __html: morning_reading_2_text }} />
        </div>
      </section>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
      }}>
        <h2>Evening Prayer</h2>
        <div>
          <h3>The Psalms</h3>
          <p>{evening_psalms_ref}</p>
          <div dangerouslySetInnerHTML={{ __html: evening_psalms_text }} />
        </div>
        <div>
          <h3>Reading 1</h3>
          <p>{evening_reading_1_ref}</p>
          <div dangerouslySetInnerHTML={{ __html: evening_reading_1_text }} />
        </div>
        <div>
          <h3>Reading 2</h3>
          <p>{evening_reading_2_ref}</p>
          <div dangerouslySetInnerHTML={{ __html: evening_reading_2_text }} />
        </div>
      </section>
    </div>
  );
}

function getAdjacentDates(date) {
  const currentDate = new Date(date);
  const previousDate = new Date(currentDate);
  const nextDate = new Date(currentDate);
  previousDate.setDate(currentDate.getDate() - 1);
  nextDate.setDate(currentDate.getDate() + 1);

  const formatDate = (d) => d.toISOString().split('T')[0];
  return {
    previousDate: formatDate(previousDate),
    nextDate: formatDate(nextDate),
  };
}