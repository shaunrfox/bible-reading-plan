import React from "react";
import theme, { modes } from "~/utils/theme";
import { useTheme } from "@emotion/react";
import { Link, useLocation } from "@remix-run/react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import Box from "../Box";
import Heading from "../Heading";
import Reset from "../icons/Reset";
import { IconButton } from "../Button";
import MyLink from "../MyLink";
import {
  formatDateToISOString,
  formatDateForDisplay,
} from "~/utils/dateHelpers";

type DateNavProps = {
  date: string; // ISO date string
};

const DateNav: React.FC<DateNavProps> = ({ date }) => {
  const displayDate = formatDateForDisplay(date);

  const getPreviousDay = (isoDate: string) => {
    const date = new Date(isoDate);
    date.setDate(date.getDate() - 1);
    return formatDateToISOString(date);
  };

  const getNextDay = (isoDate: string) => {
    const date = new Date(isoDate);
    date.setDate(date.getDate() + 1);
    return formatDateToISOString(date);
  };

  const previousDay = getPreviousDay(date);
  const nextDay = getNextDay(date);

  const location = useLocation();

  const isToday = () => {
    const today = formatDateToISOString(new Date());
    const currentDate = location.pathname.slice(1); // Remove the leading '/'
    return currentDate === today;
  };

  const { mode } = useTheme();

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
        bg: mode === modes.dark ? "gray.90" : "gray.5",
        borderRadius: theme.radii[4],
        marginBottom: theme.space[10],
      }}
    >
      <IconButton as={Link} variant="hollow" to={`/${previousDay}`}>
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
        {displayDate}
      </Heading>
      <IconButton as={Link} variant="hollow" to={`/${nextDay}`}>
        <ArrowRight sx={{ fill: "currentcolor" }} />
      </IconButton>
      {!isToday() && (
        <MyLink
          to={`/${formatDateToISOString(new Date())}`}
          sx={{
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
