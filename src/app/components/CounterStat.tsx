import { useEffect, useRef, useState } from "react";

interface CounterStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

export function CounterStat({ end, suffix = "", prefix = "", label, icon, duration = 1800 }: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 p-8 rounded-3xl text-center"
      style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(108,178,87,0.25)" }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
        style={{ background: "linear-gradient(135deg, #5A9A47, #6CB257)" }}
      >
        {icon}
      </div>
      <div
        className="leading-none"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "3rem", color: "#39622D" }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p style={{ fontFamily: "'Nunito', sans-serif", color: "#4A7E3A", fontWeight: 600, fontSize: "1rem" }}>
        {label}
      </p>
    </div>
  );
}
