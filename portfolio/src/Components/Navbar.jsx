import React from "react";
import git from "../image/git.png";
import { Link } from "react-router-dom";
import "./home.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg n">
        <div className="container-fluid">
        <Link
                to="/"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Portfolio
              </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
            <Link
                to="/"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                About Me
              </Link>

              <Link
                to="/education"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Education
              </Link>
              <Link
                to="/skills"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="nav-link nvbtn"
                style={{ color: "lightskyblue" }}
              >
               Contact
              </Link>
              <Link
                to="https://github.com/blessykbabu"
                className="nav-link"
                style={{ color: "lightskyblue" }}
              >
              <img src={git} height={50}/>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </>
  )
}