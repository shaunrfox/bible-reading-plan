import { Link } from "@remix-run/react";
import Box from "../Box";
import Heading from "~/components/Heading";
import Text from "~/components/Text";
import theme from "~/utils/theme";

interface AppHeaderProps {
  season?: string;
}

export default function AppHeader({ season }: AppHeaderProps) {
  return (
    <Box
      as="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1rem 1.5rem",
        // borderBottom: "1px solid",
        // borderBottomColor: theme.colors.gray[20],
      }}
    >
      <Link to={`/`}>
        <Heading
          as={"h1"}
          level={4}
          sx={{
            m: 0,
            color: "currentcolor",
          }}
        >
          Daily Readings
        </Heading>
      </Link>
      <Text
        level={3}
        // sx={{
        //   textTransform: "uppercase",
        //   letterSpacing: "1px",
        // }}
      >
        {season}
      </Text>
    </Box>
  );
}
