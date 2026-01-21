import React, { useState } from "react";
import { menuItems } from "../../data/menu";
import '../Header/Header.scss'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="/">Home</a>
          <a href="/recipes">Recipes</a>
        </div>

        <a href="/" className="logo">HROOOM</a>

        <div className="nav-right">
          <a href="/favourites">Favourites</a>
          <a href="/about-us">About Us</a>
        </div>

        {/* Burger */}
        <button
          className="burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item)=> (
            <a 
              key={item.path}
              href={item.path}
              onClick={()=> setMenuOpen(false)}
            >
            {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
