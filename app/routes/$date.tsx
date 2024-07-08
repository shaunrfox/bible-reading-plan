import { json, useLoaderData, Params } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { fetchDailyReadings } from "~/utils/api";
// import { fetchScripture } from "~/utils/nltApi";
// import { formatReference } from "~/utils/formatReference";
import AppHeader from "~/components/AppHeader/index";
import DateNav from "~/components/DateNav/index";

export const loader: LoaderFunction = async ({
  params,
}: {
  params: Params;
}) => {
  try {
    const dateString = params.date;
    let date;
    if (dateString) {
      date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Response("Invalid date", { status: 400 });
      }
    } else {
      date = new Date(new Date().toISOString().split("T")[0]);
    }

    date = date.toISOString().split("T")[0];

    const fetchedData = await fetchDailyReadings(date);

    return json({
      fetchedData,
      date: date,
    });
  } catch (error) {
    console.error("Error in loader:", error);
    return json(
      { error: "Error loading daily readings and scripture content" },
      { status: 500 }
    );
  }
};

export default function DatePage() {
  const { date } = useLoaderData<{ date: string }>();

  const data = useLoaderData();
  if (data.error) {
    return <div>Error loading data: {data.error}</div>;
  }

  const morning_scripture =
    data.fetchedData.services["Morning Prayer"].readings;
  const evening_scripture =
    data.fetchedData.services["Evening Prayer"].readings;

  console.log(new Date(date));

  return (
    <div>
      <AppHeader season={data.fetchedData.calendarDate.season.name} />
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
        </div>
        <div>
          <h3>Reading 1</h3>
          <p>{morning_scripture[1].full.citation}</p>
        </div>
        <div>
          <h3>Reading 2</h3>
          <p>{morning_scripture[2].full.citation}</p>
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
        </div>
        <div>
          <h3>Reading 1</h3>
          <p>{evening_scripture[1].full.citation}</p>
        </div>
        <div>
          <h3>Reading 2</h3>
          <p>{evening_scripture[2].full.citation}</p>
        </div>
      </section>
    </div>
  );
}
