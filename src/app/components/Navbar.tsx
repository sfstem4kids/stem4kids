import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Leaf, Menu, X } from "lucide-react";

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setVisible(true);
      } else if (currentY > lastScrollY + 8) {
        setVisible(false);
        setMobileOpen(false);
      } else if (currentY < lastScrollY - 8) {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/lessons", label: "Lessons" },
  ];

  return (
    <nav
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s ease, opacity 0.35s ease",
        opacity: visible ? 1 : 0,
        background: "rgba(57, 98, 45, 0.96)",
        backdropFilter: "blur(12px)",
      }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "#6CB257" }}
          >
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span
            className="font-extrabold tracking-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "#ffffff", fontSize: "1.4rem" }}
          >
            STEM<span style={{ color: "#85BF73" }}>4</span>Kids
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to || (l.to === "/lessons" && location.pathname.startsWith("/lessons"));
            return (
              <Link
                key={l.to}
                to={l.to}
                className="px-5 py-2 rounded-full transition-all duration-200"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  color: active ? "#39622D" : "#e8f4e0",
                  background: active ? "#85BF73" : "transparent",
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(133,191,115,0.2)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#ffffff" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t px-6 pb-4 flex flex-col gap-2" style={{ borderColor: "rgba(133,191,115,0.3)" }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                color: "#e8f4e0",
                background: location.pathname === l.to ? "rgba(133,191,115,0.25)" : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
