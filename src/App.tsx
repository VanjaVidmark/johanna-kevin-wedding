import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import RSVPForm from "./pages/RSVPForm";
import FloatingMenu from "./FloatingMenu";

export default function App() {
  return (
    <>
      <FloatingMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/osa" element={<RSVPForm />} />
        <Route path="/faq" element={<Questions />} />
      </Routes>
    </>
  );
}
