import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar(){

    return(
        <header className="navigation">
        <h1 className="branding">
          <Link to="/">
            <span className="logo"></span>
            Job Application Tracker
          </Link>
        </h1>
        <nav>
          <NavLink className="button" exact to="/applications">
            All Applications
          </NavLink>
          <NavLink className="button" to="/application/new">
            Add Application 
          </NavLink>
          <button >dark mode</button>
        </nav>
      </header>

    )
}

export default NavBar