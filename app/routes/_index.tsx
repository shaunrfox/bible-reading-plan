import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { format_, getToday } from "~/utils/dateHelpers";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const today = format_(getToday(), "path");
    const currentPath = window.location.pathname;
    const basename = "/bible-reading-plan";

    // Strip the basename from the current path
    const pathWithoutBase = currentPath.replace(basename, "");
    const cleanPath = pathWithoutBase.replace(/^\/+|\/+$/g, "");

    // Only redirect if we're at the root (no additional path segments)
    if (!cleanPath) {
      navigate(`/${today}`, { replace: true });
    }
  }, [navigate]);

  return null;
}
