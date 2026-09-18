import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top of the page whenever the route changes,
// so navigating to a new page (e.g. Privacy Policy) doesn't
// keep the previous page's scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return null;
}
