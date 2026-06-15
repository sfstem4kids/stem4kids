import { useParams, Link } from "react-router";
import { LESSONS } from "./LessonsPage";
import { ArrowLeft, Clock, Users, CheckCircle2, Package, ChevronRight } from "lucide-react";

export function LessonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = LESSONS.find((l) => l.id === id);

  if (!lesson) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center pt-20"
        style={{ background: "#f7faf4", fontFamily: "'Nunito', sans-serif" }}
      >
        <div className="text-5xl mb-4">🔭</div>
        <h2 style={{ color: "#39622D", fontWeight: 800, fontSize: "1.5rem" }}>Lesson not found</h2>
        <Link to="/lessons" className="mt-4 flex items-center gap-1" style={{ color: "#6CB257", fontWeight: 700 }}>
          <ArrowLeft className="w-4 h-4" /> Back to lessons
        </Link>
      </div>
    );
  }

  const others = LESSONS.filter((l) => l.id !== id).slice(0, 3);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#f7faf4", minHeight: "100vh" }} className="pt-20">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={lesson.thumbnail}
          alt={lesson.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, rgba(30,58,20,0.4), rgba(30,58,20,0.85))` }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 max-w-5xl mx-auto">
          <Link
            to="/lessons"
            className="inline-flex items-center gap-1.5 mb-4 w-fit px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", fontWeight: 700, fontSize: "0.85rem" }}
          >
            <ArrowLeft className="w-4 h-4" /> All Lessons
          </Link>
          <div
            className="inline-block px-3 py-1 rounded-full mb-2 w-fit"
            style={{ background: lesson.color, color: "#ffffff", fontSize: "0.8rem", fontWeight: 800 }}
          >
            {lesson.subject}
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {lesson.emoji} {lesson.title}
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "#d4e8c8", fontWeight: 600 }}>
              <Clock className="w-4 h-4" /> {lesson.duration}
            </span>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "#d4e8c8", fontWeight: 600 }}>
              <Users className="w-4 h-4" /> Grades {lesson.grade}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Description */}
          <section>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "1.6rem", fontWeight: 700 }}>
              About This Lesson
            </h2>
            <p className="mt-3" style={{ color: "#4A7E3A", fontSize: "1rem", lineHeight: 1.8 }}>
              {lesson.description}
            </p>
          </section>

          {/* Learning Objectives */}
          <section>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "1.6rem", fontWeight: 700 }}>
              Learning Objectives
            </h2>
            <ul className="mt-4 space-y-2.5">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#6CB257" }} />
                  <span style={{ color: "#1e3a14", fontSize: "0.975rem", lineHeight: 1.6 }}>{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Activity */}
          <section
            className="p-6 rounded-3xl"
            style={{ background: "linear-gradient(135deg, #39622D, #5A9A47)", color: "#ffffff" }}
          >
            <div className="text-3xl mb-3">⚗️</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 700 }}>
              The Activity
            </h2>
            <p className="mt-2" style={{ color: "#d4e8c8", lineHeight: 1.7, fontSize: "0.975rem" }}>
              {lesson.activity}
            </p>
          </section>

          {/* Photo Gallery */}
          <section>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "1.6rem", fontWeight: 700 }}>
              Photos
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#6CB257", fontWeight: 600 }}>
              Add your own lesson photos here!
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {lesson.images.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={src} alt={`${lesson.title} photo ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              {/* Placeholder slot for user to add more photos */}
              <div
                className="rounded-2xl flex flex-col items-center justify-center border-2 border-dashed gap-2"
                style={{ aspectRatio: "4/3", borderColor: "#85BF73", background: "#edf5e7" }}
              >
                <div className="text-3xl">📷</div>
                <p style={{ color: "#6CB257", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>
                  Add a photo
                </p>
              </div>
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {lesson.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm"
                style={{ background: "#d4e8c8", color: "#39622D", fontWeight: 700 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Materials */}
          <div
            className="rounded-3xl p-6"
            style={{ background: "#ffffff", border: "1.5px solid rgba(108,178,87,0.2)", boxShadow: "0 4px 20px rgba(58,98,45,0.07)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5" style={{ color: "#6CB257" }} />
              <h3 style={{ color: "#39622D", fontWeight: 800, fontSize: "1.1rem" }}>Materials Needed</h3>
            </div>
            <ul className="space-y-2">
              {lesson.materials.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sm mt-0.5" style={{ color: "#85BF73" }}>•</span>
                  <span style={{ color: "#4A7E3A", fontSize: "0.9rem" }}>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info */}
          <div
            className="rounded-3xl p-6 space-y-4"
            style={{ background: "linear-gradient(135deg, #39622D, #4A7E3A)", color: "#ffffff" }}
          >
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.1rem" }}>Lesson Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span style={{ color: "#d4e8c8", fontSize: "0.875rem", fontWeight: 600 }}>Duration</span>
                <span style={{ fontWeight: 800, fontSize: "0.875rem" }}>{lesson.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: "#d4e8c8", fontSize: "0.875rem", fontWeight: 600 }}>Grade Level</span>
                <span style={{ fontWeight: 800, fontSize: "0.875rem" }}>{lesson.grade}</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: "#d4e8c8", fontSize: "0.875rem", fontWeight: 600 }}>Subject</span>
                <span style={{ fontWeight: 800, fontSize: "0.875rem" }}>{lesson.subject}</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: "#d4e8c8", fontSize: "0.875rem", fontWeight: 600 }}>Cost</span>
                <span style={{ fontWeight: 800, fontSize: "0.875rem", color: "#85BF73" }}>Always FREE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Lessons */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <h2 style={{ fontFamily: "'Fraunces', serif", color: "#39622D", fontSize: "1.6rem", fontWeight: 700 }}>
          More Lessons
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {others.map((l) => (
            <Link
              key={l.id}
              to={`/lessons/${l.id}`}
              className="rounded-2xl overflow-hidden group block"
              style={{
                background: "#ffffff",
                border: "1.5px solid rgba(108,178,87,0.2)",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(58,98,45,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="h-32 overflow-hidden relative">
                <img
                  src={l.thumbnail}
                  alt={l.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p style={{ color: "#39622D", fontWeight: 800, fontSize: "0.95rem" }}>{l.emoji} {l.title}</p>
                  <p style={{ color: "#6CB257", fontSize: "0.8rem", fontWeight: 600 }}>{l.subject}</p>
                </div>
                <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: "#85BF73" }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
