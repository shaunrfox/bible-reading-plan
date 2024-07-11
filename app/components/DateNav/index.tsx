import React from "react";
import theme, { modes } from "~/utils/theme";
import { themeHelper, sxPropHelper, StyleProps } from "~/utils/styled";
import { Link, useLocation } from "@remix-run/react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import Box from "../Box";
import Heading from "../Heading";
import Reset from "../icons/Reset";
import { IconButton } from "../Button";
import MyLink from "../MyLink";

type DateNavProps = {
  date: Date;
};

const DateNav: React.FC<DateNavProps> = ({ date, ...props }) => {
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

  const formatTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const location = useLocation();

  const isToday = () => {
    const today = formatTodayDate();
    const currentDate = location.pathname.slice(1); // Remove the leading '/'
    return currentDate === today;
  };

  return (
    <Box
      as="nav"
      className="date-nav"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.space[6],
        p: theme.space[6],
        bg: theme.colors.gray[5],
        // bg: mode === modes.dark ? "gray.5" : "gray.80",
        borderRadius: theme.radii[4],
        marginBottom: theme.space[10],
      }}
    >
      <IconButton
        as={Link}
        variant="hollow"
        to={`/${formatUrlDate(previousDay)}`}
      >
        <ArrowLeft sx={{ fill: "currentcolor" }} />
      </IconButton>
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
      <IconButton as={Link} variant="hollow" to={`/${formatUrlDate(nextDay)}`}>
        <ArrowRight sx={{ fill: "currentcolor" }} />
      </IconButton>
      {!isToday() && (
        <MyLink
          to={`/${formatTodayDate()}`}
          style={{
            position: "absolute",
            bottom: "-30px",
            display: "flex",
            alignItems: "center",
            gap: theme.space[3],
          }}
        >
          <Reset sx={{ fill: "currentcolor" }} />
          Today
        </MyLink>
      )}
    </Box>
  );
};

export default DateNav;
