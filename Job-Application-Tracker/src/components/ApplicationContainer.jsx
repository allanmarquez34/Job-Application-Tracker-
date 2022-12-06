import React, {useEffect, useState} from 'react'
import Search from "./Search";
import AddApplicationForm from "./AddApplicationForm";
import ApplicationList from "./ApplicationList";
import EditApplication from "./EditApplication"


function ApplicationContainer(){
    const [applications, setApplications]=useState([])
    const [searchQuery, setSearchQuery]=useState("")
 
    

    
    useEffect(() => {
        fetch("http://localhost:3000/currentApplications")
        .then(r => r.json())
        .then(data => {
            setApplications(data)
            // console.log(data)
        })
    },[])

    

    function handleAddApplication(newApplication){
        setApplications([...applications, newApplication])
    }
    
    const filteredApplication = applications.filter(oneApplication => {
        return oneApplication.position.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const onUpdateApplication = (updatedApp) => {
        const updatedApplication = applications.map((ogApplication) => {
          if (ogApplication.id === updatedApplication.id) {
            return updatedApp;
          } else {
            return ogApplication;
          }
        });
        setProjects(updatedProjects);
      };
 
   

   

    return (
        <div>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ApplicationList applications={filteredApplication}/>
            <AddApplicationForm onAddApplication={handleAddApplication}/>
            <EditApplication onUpdateApplication={onUpdateApplication}/>
        </div>
    )

}


export default ApplicationContainer
