// import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

export async function loader() {
  const today = new Date().toISOString().split('T')[0];
  console.log('Redirecting to today:', today);
  // return redirect(`/daily-readings/${today}`);
  return (
    <div>
      <h1>Daily Readings</h1>
      <ul>
        <li>
          <Link to={`/daily-readings/${today}`}>Today</Link>
        </li>
      </ul>
    </div>
  );
}

export default function Index() {
  return null;
}