import { useState, useEffect } from "react";
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
  format_,
  createDate,
  areDatesEqual,
  getToday,
  parseURL,
  getPreviousDate,
  getNextDate,
} from "~/utils/dateHelpers";

// type DateNavProps = {
//   date: string; // ISO date string
// };

export function DateNav() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const location = useLocation();
  const today = getToday();

  useEffect(() => {
    const urlDate = parseURL();
    console.log("DateNav effect:", { urlDate });

    if (urlDate) {
      const date = createDate(urlDate);
      console.log("DateNav created date:", { urlDate, date });
      setCurrentDate(date);
    } else {
      console.error("Date from URL is null");
    }
  }, [location]);

  let displayDate;
  let previousDate;
  let nextDate;

  if (currentDate) {
    displayDate = format_(currentDate, "short");
    previousDate = format_(getPreviousDate(currentDate), "path");
    nextDate = format_(getNextDate(currentDate), "path");
    console.log("DateNav render:", {
      currentDate,
      displayDate,
      previousDate,
      nextDate,
    });
  }

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
      <IconButton as={Link} variant="hollow" to={`/${previousDate}`}>
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
      <IconButton as={Link} variant="hollow" to={`/${nextDate}`}>
        <ArrowRight sx={{ fill: "currentcolor" }} />
      </IconButton>
      {currentDate && !areDatesEqual(currentDate, today) && (
        <MyLink
          to={`/${format_(getToday(), "path")}`}
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
}

export default DateNav;
