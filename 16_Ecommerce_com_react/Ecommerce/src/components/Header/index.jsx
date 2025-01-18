import "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="navbar fixed-top bg-dark navbar-expand-xl" >
      <div className=" navbar-dark container-fluid justify-content-around  p-3">
        <span className="navbar-brand p-3">DevCurso</span>
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
                <Link className="nav-link p-3"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3" to="/sobre">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3" to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
