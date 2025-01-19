import { useLoaderData, json, Params } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { fetchMonthReadings } from "~/utils/api";
import AppHeader from "~/components/AppHeader/index";
import Box from "~/components/Box";
// import Calendar from "~/components/Calendar";
import Datepicker from "~/components/Datepicker";
import MyLink from "~/components/MyLink";
import { createDate, format_, getToday } from "~/utils/dateHelpers";

// function to loop through data and get the dates
function getDates(data) {
  const dates = [];
  for (const day in data) {
    const date = data[day].date;
    dates.push(date);
  }
  return dates;
}

export const loader: LoaderFunction = async ({
  params,
}: {
  params: Params;
}) => {
  try {
    const dateString = params.date;
    let date;
    if (dateString) {
      date = createDate(dateString);
      if (isNaN(date.getTime())) {
        throw new Response("Invalid date", { status: 400 });
      }
    } else {
      date = new Date(); // Use local time
    }

    date = format_(date, "path"); // Use our consistent formatter
    const year_month = date.slice(0, 7);

    const fetchedData = await fetchMonthReadings(year_month);

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

export default function Index() {
  const today = format_(getToday(), "short");
  const data = useLoaderData();

  // const dates = getDates(data.fetchedData);

  // console.log(JSON.stringify(data, null, 2));

  return (
    <Box>
      {/* <AppHeader season={data.season} /> */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
        }}
      >
        <Box sx={{ p: 5 }}>
          <MyLink to={`/${today}`}>Today</MyLink>
        </Box>
        {/* <Calendar data={dates} /> */}
        <Datepicker />
        {/* <Text>{dates}</Text> */}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </section>
    </Box>
  );
}

// export default function Index() {
//   return null;
// }
