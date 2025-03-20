import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div>
          <Link to="/" className="px-4 hover:text-blue-300">Home</Link>
          <Link to="/about" className="px-4 hover:text-blue-300">About</Link>
          <Link to="/projects" className="px-4 hover:text-blue-300">Projects</Link>
          <Link to="/contact" className="px-4 hover:text-blue-300">Contact</Link>
        </div>
      </nav>
      <div className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
