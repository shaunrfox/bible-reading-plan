import React from "react";
import { Link, useParams } from "@remix-run/react";

type DateNavProps = {
  date: Date;
};

const DateNav: React.FC<DateNavProps> = ({ date }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const getPreviousDay = (date: Date) => {
    const prevDate = new Date(date);
    prevDate.setDate(date.getDate() - 1);
    return prevDate;
  };

  const getNextDay = (date: Date) => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    return nextDate;
  };

  const previousDay = getPreviousDay(date);
  const nextDay = getNextDay(date);

  const formatUrlDate = (date: Date) => {
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
      <Link to={`/${formatUrlDate(previousDay)}`}>&larr;</Link>
      <h2>{formatDate(date)}</h2>
      <Link to={`/${formatUrlDate(nextDay)}`}>&rarr;</Link>
    </nav>
  );
};

export default DateNav;
