import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { format_, getToday } from "~/utils/dateHelpers";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const today = format_(getToday(), "path");
    const currentPath = window.location.pathname;
    const basename = "/bible-reading-plan";

    // Only redirect if we're actually on the index route (considering basename)
    if (
      currentPath === basename ||
      currentPath === `${basename}/` ||
      currentPath === "/"
    ) {
      navigate(`/${today}`, { replace: true });
    }
  }, [navigate]);

  return null;
}
