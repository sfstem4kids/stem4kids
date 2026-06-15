import { Link } from "react-router";
import { BookOpen, Users, Star, MapPin, ChevronRight, Beaker, Wrench, Music, Leaf } from "lucide-react";
import { CounterStat } from "./CounterStat";

const HERO_IMG = "https://images.unsplash.com/photo-1758685734030-a31d96462eec?w=1400&h=700&fit=crop&auto=format";
const HERO_IMG2 = "https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=800&h=500&fit=crop&auto=format";

const highlights = [
  {
    icon: <Beaker className="w-7 h-7 text-white" />,
    title: "Slime & Viscosity",
    desc: "Explored states of matter by making stretchy slime — learning how polymers flow and stretch.",
    color: "#5A9A47",
    img: "https://images.unsplash.com/photo-1658942933280-af564e967643?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: <Wrench className="w-7 h-7 text-white" />,
    title: "Egg Drop Challenge",
    desc: "Applied the engineering design process to protect a raw egg from a two-story drop.",
    color: "#4A7E3A",
    img: "https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?w=400&h=250&fit=crop&auto=format",
  },
  {
    icon: <Music className="w-7 h-7 text-white" />,
    title: "DIY Instruments",
    desc: "Discovered how sound waves travel and built homemade instruments to experiment with pitch.",
    color: "#39622D",
    img: "https://images.unsplash.com/photo-1613271752699-ede48a285196?w=400&h=250&fit=crop&auto=format",
  },
];

const teamValues = [
  { icon: "🎓", title: "Student-Led", desc: "High schoolers design and deliver every lesson." },
  { icon: "📚", title: "Library-Based", desc: "Free sessions at 3 San Francisco public library branches." },
  { icon: "🔬", title: "Hands-On", desc: "Every lesson is paired with a real experiment or activity." },
  { icon: "💚", title: "Always Free", desc: "No fees, no barriers — STEM for every curious kid." },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #39622D 0%, #4A7E3A 40%, #5A9A47 70%, #6CB257 100%)",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "#85BF73", filter: "blur(60px)" }} />
        <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full opacity-15" style={{ background: "#6CB257", filter: "blur(50px)" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(133,191,115,0.25)", border: "1px solid rgba(133,191,115,0.4)" }}
            >
              <Leaf className="w-4 h-4" style={{ color: "#85BF73" }} />
              <span style={{ color: "#d4e8c8", fontWeight: 700, fontSize: "0.85rem" }}>
                San Francisco · Student-Led · 100% Free
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#ffffff",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              Science is for
              <span style={{ color: "#85BF73", display: "block" }}>every kid.</span>
            </h1>

            <p
              className="mt-6 max-w-md"
              style={{ color: "#d4e8c8", fontSize: "1.15rem", lineHeight: 1.7, fontWeight: 400 }}
            >
              STEM4Kids is a student-led organization where high schoolers bring hands-on science
              lessons to elementary students at San Francisco public libraries — completely free.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/lessons"
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: "#ffffff", color: "#39622D", fontWeight: 800, fontSize: "1rem" }}
              >
                Explore Lessons <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="#mission"
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105"
                style={{
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                Our Mission
              </a>
            </div>
          </div>

          {/* Hero image stack */}
          <div className="relative hidden lg:block">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "4px solid rgba(255,255,255,0.15)" }}
            >
              <img
                src={HERO_IMG}
                alt="Teacher and student doing a science experiment"
                className="w-full h-80 object-cover"
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8 rounded-2xl overflow-hidden shadow-xl"
              style={{ width: 200, height: 140, border: "3px solid rgba(255,255,255,0.2)" }}
            >
              <img src={HERO_IMG2} alt="Students learning STEM" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
              style={{ background: "#85BF73" }}
            >
              🧪
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="#f7faf4" />
          </svg>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-6" style={{ background: "#f7faf4" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "2.4rem", fontWeight: 700 }}>
              Our Impact
            </h2>
            <p style={{ color: "#4A7E3A", marginTop: "0.5rem", fontSize: "1.05rem" }}>
              Real students. Real science. Real results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CounterStat
              end={250}
              suffix="+"
              label="Students Served"
              icon={<Users className="w-7 h-7 text-white" />}
            />
            <CounterStat
              end={25}
              suffix="+"
              label="Lessons Given"
              icon={<BookOpen className="w-7 h-7 text-white" />}
            />
            <CounterStat
              end={100}
              suffix="%"
              label="Free Access"
              icon={<Star className="w-7 h-7 text-white" />}
            />
            <CounterStat
              end={3}
              label="Library Branches"
              icon={<MapPin className="w-7 h-7 text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #f7faf4 0%, #edf5e7 100%)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#d4e8c8", color: "#39622D", fontWeight: 700, fontSize: "0.8rem" }}
            >
              OUR MISSION
            </div>
            <h2
              style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "2.4rem", lineHeight: 1.2, fontWeight: 700 }}
            >
              Making STEM accessible to every student.
            </h2>
            <p className="mt-5" style={{ color: "#4A7E3A", fontSize: "1.05rem", lineHeight: 1.8 }}>
              We believe every child deserves access to quality STEM education — regardless of zip code or income.
              STEM4Kids connects passionate high school students with curious elementary schoolers at San Francisco
              public libraries, creating a community of learners who inspire each other.
            </p>
            <p className="mt-4" style={{ color: "#4A7E3A", fontSize: "1.05rem", lineHeight: 1.8 }}>
              We don't just teach science — we teach kids to ask questions, try things, fail, and try again.
              That's the real STEM mindset.
            </p>
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105"
              style={{ background: "#39622D", color: "#ffffff", fontWeight: 700 }}
            >
              See Our Lessons <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {teamValues.map((v) => (
              <div
                key={v.title}
                className="p-5 rounded-2xl"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(108,178,87,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(58,98,45,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 style={{ color: "#39622D", fontWeight: 800, fontSize: "1rem" }}>{v.title}</h3>
                <p style={{ color: "#4A7E3A", fontSize: "0.88rem", marginTop: "0.25rem", lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Highlights */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#d4e8c8", color: "#39622D", fontWeight: 700, fontSize: "0.8rem" }}
            >
              FEATURED ACTIVITIES
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "2.4rem", fontWeight: 700 }}>
              Science in action
            </h2>
            <p style={{ color: "#4A7E3A", marginTop: "0.5rem", fontSize: "1.05rem" }}>
              Every lesson ends with an activity where students get to actually do the science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl overflow-hidden shadow-md group"
                style={{
                  border: "1.5px solid rgba(108,178,87,0.15)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(58,98,45,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow"
                    style={{ background: h.color }}
                  >
                    {h.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 style={{ color: "#39622D", fontWeight: 800, fontSize: "1.1rem" }}>{h.title}</h3>
                  <p style={{ color: "#4A7E3A", fontSize: "0.9rem", marginTop: "0.4rem", lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
              style={{ background: "linear-gradient(135deg, #39622D, #6CB257)", color: "#ffffff", fontWeight: 800, fontSize: "1.05rem" }}
            >
              View All Lessons <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #39622D, #5A9A47)" }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: "#85BF73", filter: "blur(60px)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🌱</div>
          <h2
            style={{ fontFamily: "'Fraunces', serif", color: "#ffffff", fontSize: "2.2rem", fontWeight: 700 }}
          >
            Curious about science? So are we.
          </h2>
          <p className="mt-4" style={{ color: "#d4e8c8", fontSize: "1.1rem", lineHeight: 1.7 }}>
            Join us at one of our San Francisco library branches and explore the world through experiments.
            No experience needed — just curiosity.
          </p>
          <Link
            to="/lessons"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-xl"
            style={{ background: "#ffffff", color: "#39622D", fontWeight: 800, fontSize: "1.05rem" }}
          >
            Browse Free Lessons <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ background: "#39622D" }}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <img
            src="/logo.png"
            className="w-5 h-5 rounded-md object-cover"
            alt="STEM4Kids Logo"
          />
          <span style={{ fontFamily: "'Fraunces', serif", color: "#ffffff", fontWeight: 700, fontSize: "1.2rem" }}>
            STEM<span style={{ color: "#85BF73" }}>4</span>Kids
          </span>
        </div>
        <p style={{ color: "#85BF73", fontSize: "0.85rem" }}>
          San Francisco, CA · Student-Led · 100% Free
        </p>
      </footer>
    </div>
  );
}
