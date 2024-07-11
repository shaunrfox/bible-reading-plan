import { json, useLoaderData, Params } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { fetchDailyReadings } from "~/utils/api";
import theme, { modes } from "~/utils/theme";
import { useTheme } from "@emotion/react";
import AppHeader from "~/components/AppHeader/index";
import Box from "~/components/Box";
import DateNav from "~/components/DateNav/index";
import Heading from "~/components/Heading";
import Text from "~/components/Text";
import Rule from "~/components/Rule";

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

export const loader: LoaderFunction = async ({
  params,
}: {
  params: Params;
}) => {
  try {
    const dateString = params.date;
    let date;
    if (dateString) {
      date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Response("Invalid date", { status: 400 });
      }
    } else {
      date = new Date(new Date().toISOString().split("T")[0]);
    }

    date = date.toISOString().split("T")[0];

    const fetchedData = await fetchDailyReadings(date);

    return json({
      fetchedData,
      date: date,
    });
  } catch (error) {
    console.error("Error in loader:", error);
    return json(
      { error: "Error loading daily readings and scripture content" },
      { status: 500 }
    );
  }
};

export default function DatePage() {
  const { date } = useLoaderData<{ date: string }>();

  const data = useLoaderData();
  if (data.error) {
    return <div>Error loading data: {data.error}</div>;
  }

  const morning_scripture =
    data.fetchedData.services["Morning Prayer"].readings;
  const evening_scripture =
    data.fetchedData.services["Evening Prayer"].readings;

  console.log(new Date(date));

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
      <AppHeader season={data.fetchedData.calendarDate.season.name} />
      <DateNav date={new Date(date)} />
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
