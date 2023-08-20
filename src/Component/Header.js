import "./Header.css";

export default function Header() {
  return (
    <div className="navbar">
      <a href="#cha" className="navbar-logo">
        Creme Bakery
      </a>
      <ul className="navbar-links">
        <li>
          <a href="cha" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="cha" className="navbar-link">
            About
          </a>
        </li>
        <li>
          <a href="cha" className="navbar-link">
            Services
          </a>
        </li>
        <li>
          <a href="cha" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
