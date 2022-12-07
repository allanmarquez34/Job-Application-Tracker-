import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Application from "./Applications";



const Home = () => {
    const [recentApplications, setRecentApplications] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:3000/currentApplications?_sort=id&_order=desc&_limit=1")
          .then((r) => r.json())
          .then((recentApplications) => {
            setRecentApplications(recentApplications);
          });
      }, []);

    return(
    <section>
        <h3>Most Recent Application</h3>
        {recentApplications.map((applications) => (
        <p key={applications.id}>{applications.name}</p>
      ))}

         <h2>Organize your buisness incoming job applications</h2>
         <Link className="button" to="/applications">
          View All Applications
        </Link>
    </section>
    )
}


export default Home

