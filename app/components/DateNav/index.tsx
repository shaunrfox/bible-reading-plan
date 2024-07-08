import React from "react";
import { Link } from "@remix-run/react";
import ArrowLeft from "../icons/ArrowLeft";

type DateNavProps = {
  date: Date;
};

const DateNav: React.FC<DateNavProps> = ({ date }) => {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short", // Mon
      month: "short", // Jul
      day: "2-digit", // 08
      year: "numeric", // 2024
      timeZone: "UTC",
    };

    const dateParts = new Intl.DateTimeFormat("en-US", options).formatToParts(
      date
    );

    const formattedDate =
      `${dateParts.find((part) => part.type === "weekday")?.value} | ` +
      `${dateParts.find((part) => part.type === "month")?.value} ` +
      `${dateParts.find((part) => part.type === "day")?.value}, ` +
      `${dateParts.find((part) => part.type === "year")?.value}`;

    return formattedDate;
  };

  const getPreviousDay = (date: Date) => {
    const prevDate = new Date(date);
    prevDate.setUTCDate(date.getUTCDate() - 1);
    return prevDate;
  };

  const getNextDay = (date: Date) => {
    const nextDate = new Date(date);
    nextDate.setUTCDate(date.getUTCDate() + 1);
    return nextDate;
  };

  const previousDay = getPreviousDay(date);
  const nextDay = getNextDay(date);

  const formatUrlDate = (date: Date | string) => {
    if (typeof date === "string") {
      return date;
    }
    return date.toISOString().split("T")[0];
  };

  return (
    <nav
      className="date-nav"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Link to={`/${formatUrlDate(previousDay)}`}>
        <ArrowLeft />
      </Link>
      <h2
        style={{
          fontSize: "1.25rem",
          fontFamily: "monospace",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {formatDate(date)}
      </h2>
      <Link to={`/${formatUrlDate(nextDay)}`}>&rarr;</Link>
    </nav>
  );
};

export default DateNav;
