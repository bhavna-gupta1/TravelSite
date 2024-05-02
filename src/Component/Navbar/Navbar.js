import React from "react";
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Define the route for the home page
  const homeRoute = "/home";

  // Check if the current location matches the home page route
  const isHomePage = location.pathname === homeRoute;

  return (
    <>
      <div className="First_pg">
        <nav className="Navbar">
          <div className="head_menu">
            <h1 className="Nav_head">Trippy</h1>
            <ul className="Nav_menu">
              <li><Link to="/home"><i className="fa-solid fa-house"></i>Home</Link></li>
              <li><Link to="/about"><i className="fa-light fa-address-card"></i>About</Link></li>
              <li><Link to="/services"><i className="fa-duotone fa-taxi"></i>Services</Link></li>
              <li><Link to="/contact"><i className="fa-duotone fa-taxi"></i>Contact</Link></li>
              <li><Link to="/contact"><i className="fa-duotone fa-taxi"></i>Sign up</Link></li>
            </ul>
          </div>
        </nav>
        {isHomePage && ( // Render the image only if it's the home page
          <div className="bg_img">
            <img src="https://thumbs.dreamstime.com/b/ready-summer-vacation-travel-background-d-rendering-114574299.jpg" alt="Travel Background" />
            <div className="text-container">
              <h1>Your Journey Your Story</h1>
              <p>Choose Your Destination</p>
              <button>Travel Plan</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
