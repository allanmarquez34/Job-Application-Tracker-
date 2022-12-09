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

         <h2 className="home-title">Organize your buisness incoming job applications</h2>
          
        {recentApplications.map((applications) => (
        <div className="form-1"key={applications.id}>
          <h3 >Most Recent Application</h3>
        <p>Date: {applications.date} </p>
        
        <p>Name: {applications.name}</p>
        
        <p>Position: {applications.position}</p>
        
        <p>Department: {applications.department}</p>
        
        <p>Status: {applications.status}</p>
        
        {applications.link ? (
                
            <p>
              <a className="resume"target="_blank" rel="noreferrer" href={applications.link}>
                Resume
              </a>
            </p>
            
          ) : null} 
          
          </div>
      ))}         <Link className="home-button" to="/applications">
      View All Applications
    </Link>

    </section>
    )
}


export default Home

