import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/components/Home";
import NotFound from "../pages/NotFound/components/NotFound";

export default function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
