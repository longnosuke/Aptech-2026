import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-list">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
