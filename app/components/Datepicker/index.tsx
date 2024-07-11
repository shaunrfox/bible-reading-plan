import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getMonth,
  isEqual,
  isFuture,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import Text from "../Text";
import Box from "../Box";
import Button, { IconButton } from "../Button";
import ChevronFilledLeft from "../icons/ChevronFilledLeft";
import ChevronFilledRight from "../icons/ChevronFilledRight";
import Rule from "../Rule";
import { json, type LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { findManyDocuments } from "~/models/document.server";
import Reset from "../icons/Reset";
import theme from "~/utils/theme";

const colStart = ["", "2", "3", "4", "5", "6", "7"];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

// export const loader: LoaderFunction = async () => {
//   const allDocuments = await findManyDocuments();
//   return json({ documents: allDocuments });
// };

export default function Datepicker() {
  const today = startOfToday();
  // const [selectedDay, setSelectedDay] = useState(today);

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  // const setSelectedDayToToday = () => {
  //   setCurrentMonth(format(today, "MMM-yyyy"));
  //   setSelectedDay(today);
  // };
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function thisMonth() {
    setCurrentMonth(format(today, "MMM-yyyy"));
  }

  const weekdayStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
  };

  return (
    <Box
      sx={{
        p: 6,
        backgroundColor: "gray.5",
        width: "100%",
        maxWidth: "300px",
        borderRadius: theme.radii[5],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 4,
          }}
        >
          <Text level={3}>{format(today, "MMM dd, yyyy")}</Text>
          <Button
            variant="hollow"
            onClick={thisMonth}
            title="Go to today"
            sx={{
              alignItems: "center",
              fontSize: theme.fontSizes[2],
              py: 2,
              px: 3,
              opacity: isSameMonth(today, firstDayCurrentMonth) ? 0 : 1,
              pointerEvents: isSameMonth(today, firstDayCurrentMonth)
                ? "none"
                : "auto",
            }}
          >
            {/* <Reset sx={{ transform: "scale(0.7)" }} /> */}
            Today
          </Button>
        </Box>
        <Rule />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            py: 4,
          }}
        >
          <IconButton
            variant="hollow"
            onClick={previousMonth}
            title="Previous Month"
          >
            <ChevronFilledLeft aria-hidden="true" />
          </IconButton>
          <Text level={3}>{format(firstDayCurrentMonth, "MMMM yyyy")}</Text>
          <IconButton variant="hollow" onClick={nextMonth} title="Next Month">
            <ChevronFilledRight aria-hidden="true" />
          </IconButton>
        </Box>
        <Rule />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            width: "100%",
            py: 4,
          }}
        >
          <Box sx={weekdayStyles}>
            <Text level={2}>Sun</Text>
          </Box>
          <Box sx={weekdayStyles}>
            <Text level={2}>Mon</Text>
          </Box>
          <Box sx={weekdayStyles}>
            <Text level={2}>Tue</Text>
          </Box>
          <Box sx={weekdayStyles}>
            <Text level={2}>Wed</Text>
          </Box>
          <Box sx={weekdayStyles}>
            <Text level={2}>Thu</Text>
          </Box>
          <Box sx={weekdayStyles}>
            <Text level={2}>Fri</Text>
          </Box>
          <Box sx={weekdayStyles}>
            <Text level={2}>Sat</Text>
          </Box>
        </Box>
      </Box>

      {/* ===== Start Dates ===== */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
        }}
      >
        {days.map((day, dayIdx) => (
          <Box
            key={day.toString()}
            sx={{
              gridColumnStart: dayIdx === 0 ? colStart[getDay(day)] : undefined,
            }}
          >
            <Button
              as={Link}
              to={"/" + format(day, "yyyy-MM-dd")}
              variant={isToday(day) ? "accent" : "hollow"}
              sx={{
                width: "1.75rem",
                height: "1.75rem",
                px: 2,
                py: 2,
              }}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </Button>
          </Box>
        ))}
      </Box>
      {/* ===== End Dates ===== */}
    </Box>
  );
}
