import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar(){

    return(
        <header className="navigation">
        <h1 className="branding">
          <Link to="/" className ="title">
            Job Application Tracker
          </Link>
        </h1>
        <nav>
          <NavLink className="button" exact to="/applications">
            All Applications
          </NavLink>
          <NavLink className="button" exact to="/application/add">
            Add Application
          </NavLink>
        </nav>
      </header>

    )
}

export default NavBar