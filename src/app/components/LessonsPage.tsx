import { useState } from "react";
import { Link } from "react-router";
import { Search, Clock, Users, ChevronRight } from "lucide-react";

export const LESSONS = [
  {
    id: "slime-viscosity",
    title: "Slime & Viscosity",
    subject: "Chemistry",
    grade: "K–5",
    duration: "45 min",
    description: "Discover the science of states of matter and how polymers create non-Newtonian fluids through the ultimate activity: making slime!",
    thumbnail: "https://images.unsplash.com/photo-1658942933280-af564e967643?w=500&h=320&fit=crop&auto=format",
    emoji: "🧪",
    color: "#5A9A47",
    tags: ["Chemistry", "States of Matter", "Hands-On"],
    materials: ["PVA glue", "Borax or contact lens solution", "Water", "Food coloring", "Mixing bowls", "Measuring cups"],
    objectives: [
      "Understand the three states of matter",
      "Learn what viscosity means and how to measure it",
      "Explore non-Newtonian fluids",
      "Create and observe polymer chains",
    ],
    activity: "Make your own slime and test how its viscosity changes with different ratios of glue and activator.",
    images: [
      "https://images.unsplash.com/photo-1758685734030-a31d96462eec?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "egg-drop",
    title: "Egg Drop Challenge",
    subject: "Engineering",
    grade: "3–5",
    duration: "60 min",
    description: "Apply the engineering design process to build a structure that protects a raw egg from a two-story drop. Think, build, test, improve!",
    thumbnail: "https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?w=500&h=320&fit=crop&auto=format",
    emoji: "🥚",
    color: "#4A7E3A",
    tags: ["Engineering", "Design Process", "Physics"],
    materials: ["1 raw egg per team", "Popsicle sticks", "Cotton balls", "Rubber bands", "Plastic bags", "Tape", "Straws"],
    objectives: [
      "Learn the engineering design process (Ask, Imagine, Plan, Create, Improve)",
      "Understand potential and kinetic energy",
      "Practice teamwork and problem solving",
      "Prototype and iterate a design",
    ],
    activity: "Build a protective structure for a raw egg using limited materials, then drop it from a height and see which designs survive!",
    images: [
      "https://images.unsplash.com/photo-1613271752699-ede48a285196?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1758685734201-72662f1a368d?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "sound-waves",
    title: "Sound Waves & Instruments",
    subject: "Physics",
    grade: "2–5",
    duration: "50 min",
    description: "Explore how sound waves travel through air and materials, then build your own instrument and experiment with pitch and volume.",
    thumbnail: "https://images.unsplash.com/photo-1568585262983-9b54814595a9?w=500&h=320&fit=crop&auto=format",
    emoji: "🎵",
    color: "#39622D",
    tags: ["Physics", "Sound", "Music"],
    materials: ["Rubber bands (various sizes)", "Cardboard boxes", "Cups and string", "Rice or small beads", "Plastic wrap", "Rulers"],
    objectives: [
      "Understand what sound waves are",
      "Learn how frequency affects pitch",
      "Explore how vibrations travel through different materials",
      "Design and build a simple instrument",
    ],
    activity: "Build a shoebox guitar or string telephone to observe how tighter strings create higher pitches and sound travels through materials.",
    images: [
      "https://images.unsplash.com/photo-1758685733987-54952cd1c8c6?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1610187390686-4cb77164457d?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "plant-biology",
    title: "Plant Biology & Photosynthesis",
    subject: "Biology",
    grade: "K–4",
    duration: "45 min",
    description: "Discover how plants make their own food using sunlight, water, and air — and grow your own sprout to take home.",
    thumbnail: "https://images.unsplash.com/photo-1622984799015-9adf9e1e4234?w=500&h=320&fit=crop&auto=format",
    emoji: "🌱",
    color: "#6CB257",
    tags: ["Biology", "Plants", "Life Science"],
    materials: ["Bean or sunflower seeds", "Small cups or pots", "Potting soil", "Water", "Plastic wrap", "Markers for labeling"],
    objectives: [
      "Learn the parts of a plant and their functions",
      "Understand what photosynthesis means",
      "Observe germination and early plant growth",
      "Compare plant growth in light vs. dark",
    ],
    activity: "Plant your own seed and set up an experiment to test how light affects plant growth.",
    images: [
      "https://images.unsplash.com/photo-1622984799015-9adf9e1e4234?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1568585262983-9b54814595a9?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "bridges-structures",
    title: "Bridge Building & Forces",
    subject: "Engineering",
    grade: "3–5",
    duration: "55 min",
    description: "Learn about compression and tension forces, then compete to build the strongest bridge using just paper and tape.",
    thumbnail: "https://images.unsplash.com/photo-1613271752699-ede48a285196?w=500&h=320&fit=crop&auto=format",
    emoji: "🌉",
    color: "#5A9A47",
    tags: ["Engineering", "Forces", "Structures"],
    materials: ["20 sheets of copy paper per team", "30cm of tape per team", "Pennies or washers for load testing", "Rulers", "Scissors"],
    objectives: [
      "Learn the difference between compression and tension",
      "Understand why triangles make strong structures",
      "Experience the engineering design cycle",
      "Test and measure structural strength",
    ],
    activity: "Build a paper bridge that spans 30 cm and holds the most pennies possible using only paper and tape.",
    images: [
      "https://images.unsplash.com/photo-1758685734030-a31d96462eec?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "coding-algorithms",
    title: "Introduction to Coding",
    subject: "Computer Science",
    grade: "2–5",
    duration: "50 min",
    description: "Think like a computer! Learn what algorithms are, practice sequencing, and write your first code using block-based programming.",
    thumbnail: "https://images.unsplash.com/photo-1568585262983-9b54814595a9?w=500&h=320&fit=crop&auto=format",
    emoji: "💻",
    color: "#4A7E3A",
    tags: ["Computer Science", "Coding", "Logic"],
    materials: ["Laptops or tablets (one per 2 students)", "Scratch accounts (scratch.mit.edu)", "Paper for flowcharts", "Pencils"],
    objectives: [
      "Understand what an algorithm is",
      "Practice sequencing instructions in the correct order",
      "Learn basic concepts: loops, conditions, events",
      "Create a simple animated project in Scratch",
    ],
    activity: "Build an animated story or simple game in Scratch that uses at least one loop and one conditional.",
    images: [
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1758685733987-54952cd1c8c6?w=600&h=400&fit=crop&auto=format",
    ],
  },
];

const subjects = ["All", "Chemistry", "Engineering", "Physics", "Biology", "Computer Science"];

export function LessonsPage() {
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] = useState("All");

  const filtered = LESSONS.filter((l) => {
    const matchSearch =
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase()) ||
      l.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchSubject = activeSubject === "All" || l.subject === activeSubject;
    return matchSearch && matchSubject;
  });

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#f7faf4", minHeight: "100vh" }} className="pt-20">
      {/* Header */}
      <div
        className="py-16 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #39622D 0%, #5A9A47 100%)" }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "#85BF73", filter: "blur(50px)" }} />
        <h1
          className="relative"
          style={{ fontFamily: "'Fraunces', serif", color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700 }}
        >
          Explore Our Lessons
        </h1>
        <p className="relative mt-3" style={{ color: "#d4e8c8", fontSize: "1.1rem", maxWidth: 500, margin: "0.75rem auto 0" }}>
          Every lesson is designed by students, for students — and always paired with a hands-on activity.
        </p>

        {/* Search */}
        <div
          className="relative mt-8 max-w-md mx-auto"
          style={{ background: "#ffffff", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#6CB257" }} />
          <input
            type="text"
            placeholder="Search lessons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 outline-none"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: "#39622D", fontSize: "1rem" }}
          />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="px-6 py-6 flex gap-2 flex-wrap justify-center max-w-5xl mx-auto">
        {subjects.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSubject(s)}
            className="px-4 py-2 rounded-full transition-all duration-200"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              background: activeSubject === s ? "#39622D" : "#ffffff",
              color: activeSubject === s ? "#ffffff" : "#4A7E3A",
              border: activeSubject === s ? "none" : "1.5px solid rgba(74,126,58,0.3)",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Lesson Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: "#4A7E3A" }}>
            <div className="text-5xl mb-4">🔍</div>
            <p style={{ fontWeight: 700, fontSize: "1.1rem" }}>No lessons found. Try a different search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/lessons/${lesson.id}`}
                className="rounded-3xl overflow-hidden group block"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(108,178,87,0.2)",
                  boxShadow: "0 2px 12px rgba(58,98,45,0.06)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(58,98,45,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(58,98,45,0.06)";
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: `linear-gradient(to top, ${lesson.color}, transparent)` }}
                  />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs"
                    style={{ background: "rgba(255,255,255,0.92)", color: lesson.color, fontWeight: 800 }}
                  >
                    {lesson.subject}
                  </div>
                  <div className="absolute top-3 right-3 text-2xl">{lesson.emoji}</div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 style={{ color: "#1e3a14", fontWeight: 800, fontSize: "1.1rem", lineHeight: 1.3 }}>
                    {lesson.title}
                  </h3>
                  <p
                    className="mt-2 line-clamp-2"
                    style={{ color: "#4A7E3A", fontSize: "0.875rem", lineHeight: 1.5 }}
                  >
                    {lesson.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#6CB257", fontWeight: 700 }}>
                        <Clock className="w-3.5 h-3.5" /> {lesson.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#6CB257", fontWeight: 700 }}>
                        <Users className="w-3.5 h-3.5" /> Grade {lesson.grade}
                      </span>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{ background: lesson.color }}
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
