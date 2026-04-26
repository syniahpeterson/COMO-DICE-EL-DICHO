import "./Navbar.css";
import logo from "../../assets/images/CDED-logo.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        {/* LOGO */}
        <div className="navbar__logo">
          <img src={logo} alt="COMO DICE EL DICHO logo" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="navbar__links">
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">SPECIALS</a>
          <a href="#">GALLERY</a>
          <a href="#">ABOUT US</a>
          <a href="#">CATERING</a>
          <a href="#">REVIEWS</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* CTA BUTTON */}
        <button className="navbar__cta">
          <FaPhoneAlt /> (919) 496-4347
        </button>

        {/* HAMBURGER */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          className="mobile-menu__close"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <a href="#" onClick={() => setMenuOpen(false)}>
          HOME
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          MENU
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          SPECIALS
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          GALLERY
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          ABOUT US
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          CATERING
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          REVIEWS
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          CONTACT
        </a>

        <button className="mobile-menu__cta">
          <FaPhoneAlt /> (919) 496-4347
        </button>
      </div>
    </>
  );
}
