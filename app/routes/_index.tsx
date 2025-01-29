import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { format_, getToday } from "~/utils/dateHelpers";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const today = format_(getToday(), "path");
    navigate(`/${today}`, { replace: true });
  }, [navigate]);

  return null;
}
