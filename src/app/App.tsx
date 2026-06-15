import { HashRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { LessonsPage } from "./components/LessonsPage";
import { LessonDetailPage } from "./components/LessonDetailPage";

export default function App() {
  return (
    <HashRouter>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/lessons/:id" element={<LessonDetailPage />} />
      </Routes>
    </HashRouter>
  );
}
