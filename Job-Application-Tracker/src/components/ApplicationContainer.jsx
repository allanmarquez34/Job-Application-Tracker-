import React, {useEffect, useState} from 'react'
import { Switch, Route } from "react-router-dom";
import AddApplicationForm from "./AddApplicationForm";
import ApplicationList from "./ApplicationList";
// import Home from "./Home"



function ApplicationContainer(){
    const [applications, setApplications]=useState([])
    const [searchQuery, setSearchQuery]=useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("");
  
 
    

    
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
        <>
        <Switch>
            <Route path="/applications">
            <ApplicationList applications={filteredApplication}
             onApplicationDelete={onApplicationDelete}
              setSelectedDepartment={setSelectedDepartment}
               setSearchQuery={setSearchQuery}
               />
            </Route>
            <Route path="/application/new">
            <AddApplicationForm onAddApplication={handleAddApplication}/>
            </Route>
        </Switch>
        </>
    )

}


export default ApplicationContainer
