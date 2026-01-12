import React from "react";
import { useState } from "react"; 
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
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/recipes" onClick={() => setMenuOpen(false)}>Recipes</a>
          <a href="/favourites" onClick={() => setMenuOpen(false)}>Favourites</a>
          <a href="/about-us" onClick={() => setMenuOpen(false)}>About Us</a>
        </div>
      </nav>
    </header>
  );
}
