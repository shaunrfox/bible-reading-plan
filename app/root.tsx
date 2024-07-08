import React, { useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
// import "./style/style.css";
// import "./style/nlt-style.css";
import { ThemeProvider, Global } from "@emotion/react";
import { css } from "@styled-system/css";
import theme, { modes } from "./utils/theme";
import globalStyles from "./utils/globalStyles";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mode] = useState(modes.light);

  return (
    <ThemeProvider theme={{ ...theme, mode }}>
      <Global styles={css(globalStyles(mode))} />
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}
