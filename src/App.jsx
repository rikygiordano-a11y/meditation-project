import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="nav">
        <div className="logo">🧘 Meditation</div>
        <nav className="links">
          <Link to="/">Timer</Link>
          <Link to="/about">Info</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}