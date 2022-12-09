import React from "react";
import { NavLink} from "react-router-dom";

function NavBar(){

    return(
        <header className="navigation">
         <nav>
          <NavLink to="/" className ="title">
            Job Application Tracker
          </NavLink>
          <NavLink className="button-all-applications" exact to="/applications">
            All Applications
          </NavLink>
          <NavLink className="button-add-applications" exact to="/application/add">
            Add Application
          </NavLink>
        </nav>
      </header>

    )
}

export default NavBar