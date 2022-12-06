import React from "react";

function NavBar(){

    return(
        <header>
        <nav>
          <h1 className="branding">
            <span className="logo"></span>
            Application Tracker
          </h1>
          <div className="navigation">
            <a className="button" >
              View Applications 
            </a>
            <a className="button" >
               Add Application
            </a>
            <button>Dark Mode</button>
          </div>
        </nav>
      </header>
    )
}

export default NavBar