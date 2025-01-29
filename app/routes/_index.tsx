import { redirect, LoaderFunction } from "@remix-run/node";
import { format_, getToday } from "~/utils/dateHelpers";

export const loader: LoaderFunction = async () => {
  try {
    const today = format_(getToday(), "path");
    return redirect(`/${today}`);
  } catch (error) {
    console.error("Error in loader:", error);
    throw new Response("Error loading daily readings and scripture content", {
      status: 500,
    });
  }
};

export default function Index() {
  return null;
}
