import { Routes, Route, Navigate } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import RSVPForm from "./pages/RSVPForm";
import Navbar from "./Navbar";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/osa" element={<RSVPForm />} />
        <Route path="/faq" element={<Questions />} />
        <Route path="/osa/success" element={<SuccessPage />} />
        <Route path="/osa/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
