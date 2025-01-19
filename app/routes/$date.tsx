import { useState, useEffect } from "react";
import { json, useParams, useLocation } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getDailyReading } from "~/utils/api_local";
import theme, { modes } from "~/utils/theme";
import { useTheme } from "@emotion/react";
import AppHeader from "~/components/AppHeader/index";
import Box from "~/components/Box";
import DateNav from "~/components/DateNav/index";
import Heading from "~/components/Heading";
import Text from "~/components/Text";
import Rule from "~/components/Rule";
import Warning from "~/components/icons/Warning";
import { createDate, format_ } from "~/utils/dateHelpers";

const errorAlertStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "350px",
  padding: theme.space[6],
  backgroundColor: theme.colors.red[5],
  color: theme.colors.red[50],
  borderRadius: theme.radii[4],
  border: `2px solid ${theme.colors.red[10]}`,
  boxShadow: `0 2px 7px 0px ${theme.colors.shadowColor}`,

  header: {
    display: "flex",
    alignItems: "center",
    fontWeight: theme.fontWeights.bold,
    textTransform: "uppercase",
    fontSize: theme.fontSizes[2.5],
    letterSpacing: theme.space[1],
  },

  svg: {
    marginRight: theme.space[3],
    fill: theme.colors.red[50],
  },

  span: {},
};

const ErrorAlert = ({ error }: { error: string }) => {
  return (
    <Box sx={errorAlertStyles}>
      <header>
        <Warning /> Error loading data
      </header>
      <Rule
        sx={{
          margin: "1rem 0",
          backgroundColor: theme.colors.red[10],
          height: "2px",
        }}
      />
      <span>{error}</span>
    </Box>
  );
};

export function ReadingItem({
  label,
  reference,
}: {
  label: string;
  reference: string;
}) {
  const { mode } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: theme.space[6],
      }}
    >
      <Text
        level={2}
        sx={{
          textTransform: "uppercase",
          fontWeight: theme.fontWeights.bold,
          letterSpacing: theme.space[1],
          color: mode === modes.dark ? "mint.50" : "mint.40",
        }}
      >
        {label}
      </Text>
      <Text level={5}>{reference}</Text>
    </Box>
  );
}

export default function DatePage() {
  const { date } = useParams<{ date: string }>();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    try {
      const dateFromURL = createDate(date);
      setCurrentDate(dateFromURL);

      const fetchData = async () => {
        try {
          const formattedDate = format_(dateFromURL, "path");
          const data = await getDailyReading(formattedDate);
          setFetchedData(data);
        } catch (err) {
          console.error("Error fetching data:", err);
          setError("Error loading daily readings and scripture content");
        }
      };

      fetchData();
    } catch (err) {
      setError("Invalid date");
    }
  }, [date, location]);

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AppHeader />
        <DateNav />
        <Box sx={{ marginTop: theme.space[8] }}>
          <ErrorAlert error={error} />
        </Box>
      </Box>
    );
  }

  if (!fetchedData) {
    return <div>Loading...</div>;
  }

  const morningServiceKey = Object.keys(fetchedData.services).find((key) =>
    key.startsWith("Morning Prayer")
  );
  const eveningServiceKey = Object.keys(fetchedData.services).find((key) =>
    key.startsWith("Evening Prayer")
  );

  const morning_scripture = morningServiceKey
    ? fetchedData.services[morningServiceKey].readings
    : [];
  const evening_scripture = eveningServiceKey
    ? fetchedData.services[eveningServiceKey].readings
    : [];

  console.log(currentDate?.toISOString().split("T")[0]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        containerName: "wrapper",
        containerType: "size",
      }}
    >
      <AppHeader season={fetchedData.calendarDate.season.name} />
      <DateNav />

      <Box
        as="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: theme.space[8],
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "300px",
            padding: theme.space[8],
          }}
        >
          <Heading as="h3" level={3}>
            Morning Prayer
          </Heading>
          <Rule sx={{ margin: "1rem 0" }} />
          <ReadingItem
            label="The Psalms"
            reference={morning_scripture[0].full.citation}
          ></ReadingItem>
          <ReadingItem
            label="Reading 1"
            reference={morning_scripture[1].full.citation}
          ></ReadingItem>
          <ReadingItem
            label="Reading 2"
            reference={morning_scripture[2].full.citation}
          ></ReadingItem>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "300px",
            padding: theme.space[8],
          }}
        >
          <Heading as="h3" level={3}>
            Evening Prayer
          </Heading>
          <Rule sx={{ margin: "1rem 0" }} />
          <ReadingItem
            label="The Psalms"
            reference={evening_scripture[0].full.citation}
          ></ReadingItem>
          <ReadingItem
            label="Reading 1"
            reference={evening_scripture[1].full.citation}
          ></ReadingItem>
          <ReadingItem
            label="Reading 2"
            reference={evening_scripture[2].full.citation}
          ></ReadingItem>
        </Box>
      </Box>
    </Box>
  );
}
