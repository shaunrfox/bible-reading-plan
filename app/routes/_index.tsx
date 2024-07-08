// import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { fetchDailyReadings } from "~/utils/api";
import AppHeader from "~/components/AppHeader/index";

export const loader = async () => {
  const today = new Date().toISOString().split("T")[0];
  const fetchedData = await fetchDailyReadings(today);

  return json({
    date: today,
    season: fetchedData.calendarDate.season.name,
  });
};

export default function Index() {
  const today = new Date().toISOString().split("T")[0];
  const data = useLoaderData();

  return (
    <div>
      <AppHeader date={data.date} season={data.season} />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
        }}
      >
        <ul>
          <li>
            <Link to={`/${today}`}>Today</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

// export default function Index() {
//   return null;
// }
