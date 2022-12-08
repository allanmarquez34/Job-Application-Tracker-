import React,{useState, useEffect} from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AddApplicationForm from "./components/AddApplicationForm";
import ApplicationList from "./components/ApplicationList";
import EditApplication from "./components/EditApplication";
import { BrowserRouter, Switch, Route, useParams} from "react-router-dom"



function App(){
    const [applications, setApplications]=useState([])
    const [searchQuery, setSearchQuery]=useState("")
    const [selectedApplication, setSelectedApplication] = useState(null)
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    
    function handleChangeForm(name, value) {
        setSelectedApplication({
          ...selectedApplication,
          [name]: value,
        });
      }

      function handleEditApplication(updatedApplication) {
        const updatedApplications = applications.map((oneApplication) =>
          oneApplication.id === updatedApplication.id ? updatedApplication : oneApplication
        );
        setSelectedApplication(updatedApplication);
        setApplications(updatedApplications);
      }

    function handleAddApplication(newApplication){
        setApplications([...applications, newApplication])
    }

    const onApplicationDelete = (applicationId) => {
        setApplications(applications => applications.filter(a => a.id !== applicationId))
      };

      const itemsToDisplay = applications
  
      .filter(
        (application) => selectedDepartment === "All" || application.department === selectedDepartment
      )
      
      .filter((application) => application.position.toLowerCase().includes(searchQuery.toLowerCase()));
      

      function handleDepartmentChange(e){
        setSelectedDepartment(e.target.value)
     }

    useEffect(() => {
        fetch("http://localhost:3000/currentApplications")
        .then(r => r.json())
        .then(data => {
            setApplications(data)
  
        })
    },[])

return(

     <div className= "background">
     <BrowserRouter>

        <NavBar />
        

        <Switch>
            <Route exact path ="/">
                <Home />
            </Route>

            <Route path= "/application/add">
                <AddApplicationForm onAddApplication={handleAddApplication}/> 
            </Route>

            <Route path = "/applications">
                <ApplicationList 
                applications={itemsToDisplay}
                onApplicationDelete={onApplicationDelete}
                onSelectApplication={setSelectedApplication}
                setSearchQuery={setSearchQuery}
                onDepartmentChange={handleDepartmentChange}/>
                
                
            </Route>

            <Route path="/:id/edit">
                <EditApplication
                    applications={selectedApplication}
                    onChangeForm={handleChangeForm}
                    onEditApplication={handleEditApplication}
                        />


            </Route>
        
                
   
            
        </Switch>
     </BrowserRouter>

    </div>
    )
};


export default App
