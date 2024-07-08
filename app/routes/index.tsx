import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Bible Reading Plan App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/daily-readings">Daily Readings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
