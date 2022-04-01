import { Routes, Route } from "react-router-dom";
import Home from "./main-components/Home";
import LessonsCatalog from "./main-components/LessonsCatalog";
import Lesson from "./main-components/Lesson";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lessons" element={<LessonsCatalog />} />
        <Route path="/:lessonTitle/:lessonId" element={<Lesson />} />
      </Routes>
    </main>
  );
};

export default Main;
