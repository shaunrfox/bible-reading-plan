import { Link } from "@remix-run/react";
import Box from "../Box";
import Heading from "~/components/Heading";
import Text from "~/components/Text";
import theme from "~/utils/theme";
import MyLink from "../MyLink";
import { localizedDate, getTodayUTC } from "~/utils/dateHelpers";

interface AppHeaderProps {
  season?: string;
}

export default function AppHeader({ season }: AppHeaderProps) {
  const today = getTodayUTC();

  return (
    <Box
      as="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1rem 1.5rem",
        "@container wrapper (width < 500px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <MyLink to={`/`}>
          <Heading
            as={"h1"}
            level={[5, 5, 4, 4, 4]}
            sx={{
              display: "inline-block",
              width: "fit-content",
              m: 0,
              color: "currentcolor",
              "@container wrapper (width < 640px)": {
                textAlign: "center",
              },
            }}
          >
            Daily Readings
          </Heading>
        </MyLink>
        <Text level={2.5} sx={{ color: "gray.30" }}>
          {localizedDate(today, "long")}
        </Text>
      </Box>
      <Text
        level={3}
        sx={{
          "@container wrapper (width < 640px)": {
            textAlign: "center",
          },
        }}
      >
        {season}
      </Text>
    </Box>
  );
}
