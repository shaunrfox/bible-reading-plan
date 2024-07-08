import { useState } from "react";
import { Link } from "@remix-run/react";

interface AppHeaderProps {
  season?: string;
}

export default function AppHeader({ season }: AppHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    borderBottom: "1px solid transparent",
    ...(isHovered && { borderBottomColor: "currentColor" }),
    ...(!isHovered && { borderBottomColor: "transparent" }),
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1.5rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link
        to={`/`}
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1
          style={{
            fontSize: "1rem",
            margin: 0,
          }}
        >
          Daily Readings
        </h1>
      </Link>
      <span
        style={{
          fontWeight: 400,
          fontSize: ".8rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {season}
      </span>
    </header>
  );
}
