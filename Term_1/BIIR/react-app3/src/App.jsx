import "./App.css";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="center">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <button className="counter" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default App;
