import React from "react";
import { Link } from "@remix-run/react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import Box from "../Box";
import Heading from "../Heading";
import theme from "~/utils/theme";

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
    <Box
      as="nav"
      className="date-nav"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.space[6],
        p: theme.space[6],
        bg: theme.colors.gray[5],
        borderRadius: theme.radii[4],
        marginBottom: theme.space[10],
      }}
    >
      <Link
        to={`/${formatUrlDate(previousDay)}`}
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: theme.radii[3],
        }}
      >
        <ArrowLeft sx={{ fill: "currentcolor" }} />
      </Link>
      <Heading
        as={"h2"}
        level={4}
        font="mono"
        sx={{
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {formatDate(date)}
      </Heading>
      <Link
        to={`/${formatUrlDate(nextDay)}`}
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: theme.radii[3],
        }}
      >
        <ArrowRight sx={{ fill: "currentcolor" }} />
      </Link>
    </Box>
  );
};

export default DateNav;
