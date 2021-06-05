import React from "react";
import "./Navbar.css";

function Header() {
  return (
    <nav
      style={{ background: "transparent", fontFamily: "Roboto, sans-serif" }}
      class="navbar navbar-expand-lg navbar-dark container"
    >
      <div class="container-fluid">
        <a
          style={{ fontSize: "30px", fontWeight: "500", letterSpacing: "2px" }}
          class="navbar-brand"
          href="#"
        >
          POWER <span style={{ color: "yellow", marginLeft: "3px" }}>X</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link white_bold ms-4 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white_bold ms-4 active" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link white_bold ms-4 active"
                aria-current="page"
                href="#"
              >
                Our Classes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white_bold ms-4 active" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link white_bold ms-4 active"
                aria-current="page"
                href="#"
              >
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link white_bold ms-4 active" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link white_bold ms-4 active"
                aria-current="page"
                href="#"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
