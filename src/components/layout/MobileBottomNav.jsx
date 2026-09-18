import { useEffect, useState } from "react";
import { House, MapPin, Phone, Zap } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { label: "Home", id: "home", Icon: House },
  { label: "Services", id: "services", Icon: Zap },
  { label: "Track", id: "track", Icon: MapPin },
  { label: "Contact", id: "query", Icon: Phone },
];

export default function MobileBottomNav() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [hash, pathname]);

  const goToSection = (id) => {
    setActiveId(id);
    if (id === "about") {
      navigate("/about");
      return;
    }
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate({ pathname: "/", hash: `#${id}` });
  };

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 grid h-[76px] grid-cols-4 border-t border-slate-200 bg-white px-0 pb-[max(0.25rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-4px_16px_rgba(8,41,79,0.1)] md:hidden"
    >
      {items.map(({ label, id, Icon }) => {
        const active = id === "about" ? pathname === "/about" : pathname === "/" && activeId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => goToSection(id)}
            aria-current={active ? "page" : undefined}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 text-[10px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-500 ${
              active ? "text-brand-600" : "text-slate-500 active:bg-slate-50"
            }`}
          >
            <span className={`transition-transform duration-200 ${active ? "scale-125" : "scale-100"}`}>
              <Icon size={19} strokeWidth={active ? 2.6 : 2} aria-hidden="true" />
            </span>
            <span className="truncate">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
