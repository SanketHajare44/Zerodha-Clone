import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      data-bs-theme="light"
      style={{ backgroundColor: "white" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/" aria-current="page">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha logo"
            style={{ width: "25%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link active" to="/" aria-current="page">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about" aria-current="page">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/products" aria-current="page">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing" aria-current="page">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support" aria-current="page">Support</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;