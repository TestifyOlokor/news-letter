import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompletedModal from "./components/Modal";
import "./App.css";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="complete-modal" element={<CompletedModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
