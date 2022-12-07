import React, {useEffect, useState} from 'react'
import AddApplicationForm from "./AddApplicationForm";
import ApplicationList from "./ApplicationList";



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

    const onApplicationDelete = (applicationId) => {
        setApplications(applications => applications.filter(a => a.id !== applicationId))
      };

     

   

   

    return (
        <div>
            
            <ApplicationList applications={filteredApplication} onApplicationDelete={onApplicationDelete} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <AddApplicationForm onAddApplication={handleAddApplication}/>
        </div>
    )

}


export default ApplicationContainer
