import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Games1 from "./components/Games1";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import RedeemCode from "./components/RedeemCode";
import Upi from "./components/Upi";
import About from "./components/About";
import Terms from "./components/Terms";

function App() {
  // 🧠 Load saved score from localStorage on first render
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("score");
    return saved ? parseInt(saved) : 0;
  });

  // 💾 Save score to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <Router>
      {/* 🧭 Pass score to Header */}
      <Header score={score} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🎮 Pass both score and setScore to Game */}
        <Route path="/game" element={<Games1 score={score} setScore={setScore} />} />

        {/* 🎁 FIXED: also pass setScore to RedeemCode */}
        <Route path="/redeemCode" element={<RedeemCode score={score} setScore={setScore} />} />
        <Route path="/upi" element={<Upi score={score} setScore={setScore} />} />
        <Route path="/about" element={<About />} />
        <Route path="/tm" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
