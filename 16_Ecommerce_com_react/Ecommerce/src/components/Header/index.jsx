import React from "react";
import Styles from "./Header.module.css";

function Header() {
  return (
    <header className="navbar navbar-dark bg-dark navbar-expand-xl fixed-top">
      <span className="navbar-brand">DevCurso</span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <nav className="ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link text-white">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link text-white">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
