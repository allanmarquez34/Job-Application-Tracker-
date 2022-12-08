import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom";

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

         <h2>Organize your buisness incoming job applications</h2>
          <Link className="button" to="/applications">
            View All Applications
          </Link>

          <h2>Most Recent Application</h2>
        {recentApplications.map((applications) => (
        <div key={applications.id}>
        <h3>Date</h3>
        {applications.date}
        <h3>Name</h3>
        {applications.name}
        <h3>position</h3>
        {applications.position}
        <h3>Department</h3>
        {applications.department}
        <h3>Status</h3>
        {applications.status}
        {applications.link ? (
                
            <p>
              <a target="_blank" rel="noreferrer" href={applications.link}>
                Resume
              </a>
            </p>
            
          ) : null} </div>
      ))}
    </section>
    )
}


export default Home

