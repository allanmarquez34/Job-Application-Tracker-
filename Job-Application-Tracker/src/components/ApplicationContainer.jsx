// import React, {useEffect, useState} from 'react'
// import { Switch, Route } from "react-router-dom";
// import AddApplicationForm from "./AddApplicationForm";
// import ApplicationList from "./ApplicationList";
// import EditApplication from './EditApplication';




// function ApplicationContainer(){
    // const [applications, setApplications]=useState([])
    // const [searchQuery, setSearchQuery]=useState("")
    // const [selectedDepartment, setSelectedDepartment] = useState("");
    // const [applciationId, setApplicationId] = useState(null);
  
 
    

    
    // useEffect(() => {
    //     fetch("http://localhost:3000/currentApplications")
    //     .then(r => r.json())
    //     .then(data => {
    //         setApplications(data)
    //         // console.log(data)
    //     })
    // },[])



    // function handleAddApplication(newApplication){
    //     setApplications([...applications, newApplication])
    // }
    
    // const filteredApplication = applications.filter(oneApplication => {
    //     return oneApplication.position.toLowerCase().includes(searchQuery.toLowerCase())
    // })

    // const onApplicationDelete = (applicationId) => {
    //     setApplications(applications => applications.filter(a => a.id !== applicationId))
    //   };

    //   const onUpdateApplication = (updatedApplication) => {
    //     setApplications(applications => applications.map(originalApplication => {
    //       if (originalApplication.id === updatedApplication.id) {
    //         return updatedApplication;
    //       } else {
    //         return originalApplication;
    //       }
    //     }))
    //   };

    //   const enterApplicationEditModeFor = (applicationId) => {
    //     setApplicationId(applicationId);
    //   };


    // return (
    //     <div>
    //     <Switch> 
            
{/* <EditApplication onUpdateApplication={onUpdateApplication}/>   */}

        {/* <Route path = "/applications">
            <ApplicationList applications={filteredApplication}
            onApplicationDelete={onApplicationDelete}
            setSelectedDepartment={setSelectedDepartment}
            setSearchQuery={setSearchQuery}
            enterApplicationEditModeFor={enterApplicationEditModeFor}
            />
        </Route> */}

        {/* <Route path = "/application/add">
            <AddApplicationForm 
            onAddApplication={handleAddApplication}
            />
        </Route> */}
{/* 
        </Switch>

        </div> */}
//     )

// }


// export default ApplicationContainer
