import { json, useLoaderData, Link } from "@remix-run/react";
import { fetchDailyReadings } from "~/utils/api";
import { fetchScripture } from "~/utils/nltApi";
import { formatReference } from "~/utils/formatReference";
import AppHeader from "~/components/AppHeader";
import DateNav from "~/components/DateNav";

export const loader = async ({ params }) => {
  try {
    // const currentDate = new Date().toISOString().split("T")[0];
    // const date = params.date || new Date().toISOString().split("T")[0];
    const dateString = params.date;
    let date;
    if (dateString) {
      date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Response("Invalid date", { status: 400 });
      }
    } else {
      date = new Date();
    }

    console.log(`Loading daily readings for date: ${date}`);
    const fetchedData = await fetchDailyReadings(date);

    return json({
      fetchedData,
      // date,
      // currentDate,
      date: date.toISOString(),
    });
  } catch (error) {
    console.error("Error in loader:", error);
    return json(
      { error: "Error loading daily readings and scripture content" },
      { status: 500 }
    );
  }
};

export default function DailyReadingsDate() {
  const { date } = useLoaderData<{ date: string }>();
  // const { currentDate } = useLoaderData<{ currentDate: string }>();

  const data = useLoaderData();
  if (data.error) {
    return <div>Error loading data: {data.error}</div>;
  }

  // const fetchFormattedScripture = async (reading) => {
  //   const formattedReference = formatReference(reading.full.citation);
  //   // return await fetchScripture(formattedReference);
  //   return await formattedReference;
  // };

  // const morningPrayer = data.services["Morning Prayer"].readings;
  // const eveningPrayer = data.services["Evening Prayer"].readings;

  // const morningPsalms = await fetchFormattedScripture(morningPrayer[0]);
  // const morningReading1 = await fetchFormattedScripture(morningPrayer[1]);
  // const morningReading2 = await fetchFormattedScripture(morningPrayer[2]);

  // const eveningPsalms = await fetchFormattedScripture(eveningPrayer[0]);
  // const eveningReading1 = await fetchFormattedScripture(eveningPrayer[1]);
  // const eveningReading2 = await fetchFormattedScripture(eveningPrayer[2]);

  // const { previousDate, nextDate } = getAdjacentDates(data.date);

  // const cal = data.fetchedData.calendarDate;
  // const date = cal.date; // "2024-06-25"
  // const weekday = cal.date_description.weekday; // "Wednesday"
  // const month_name = cal.date_description.month_name; // "June"
  // const day = cal.date_description.day; // "25"
  // const year = cal.date_description.year; // "2024"
  // const date_formatted = `${weekday}, ${month_name} ${day}, ${year}`;
  // const season = cal.season.name; // "Season After Pentecost"

  const morning_scripture =
    data.fetchedData.services["Morning Prayer"].readings;
  const evening_scripture =
    data.fetchedData.services["Evening Prayer"].readings;

  return (
    <div>
      <AppHeader season={data.fetchedData.calendarDate.season.name} />
      {/* <DateNav date={date}></DateNav> */}
      <DateNav date={new Date(date)} />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
        }}
      >
        <h2>Morning Prayer</h2>
        <div>
          <h3>The Psalms</h3>
          <p>{morning_scripture[0].full.citation}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: data.morningPsalms }} /> */}
        </div>
        <div>
          <h3>Reading 1</h3>
          <p>{morning_scripture[1].full.citation}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: data.morningReading1 }} /> */}
        </div>
        <div>
          <h3>Reading 2</h3>
          <p>{morning_scripture[2].full.citation}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: data.morningReading2 }} /> */}
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
        }}
      >
        <h2>Evening Prayer</h2>
        <div>
          <h3>The Psalms</h3>
          <p>{evening_scripture[0].full.citation}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: data.eveningPsalms }} /> */}
        </div>
        <div>
          <h3>Reading 1</h3>
          <p>{evening_scripture[1].full.citation}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: data.eveningReading1 }} /> */}
        </div>
        <div>
          <h3>Reading 2</h3>
          <p>{evening_scripture[2].full.citation}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: data.eveningReading2 }} /> */}
        </div>
      </section>
    </div>
  );
}

// function getAdjacentDates(date) {
//   const currentDate = new Date(date);
//   const previousDate = new Date(currentDate);
//   const nextDate = new Date(currentDate);
//   previousDate.setDate(currentDate.getDate() - 1);
//   nextDate.setDate(currentDate.getDate() + 1);

//   const formatDate = (d) => d.toISOString().split("T")[0];
//   return {
//     previousDate: formatDate(previousDate),
//     nextDate: formatDate(nextDate),
//   };
// }
