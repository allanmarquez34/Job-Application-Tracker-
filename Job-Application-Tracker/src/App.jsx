import React,{useState, useEffect} from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AddApplicationForm from "./components/AddApplicationForm";
import ApplicationList from "./components/ApplicationList";
import EditApplication from "./components/EditApplication";
import { BrowserRouter, Switch, Route } from "react-router-dom"



function App(){
    const [applications, setApplications]=useState([])
    const [searchQuery, setSearchQuery]=useState("")

    const [selectedApplication, setSelectedApplication] = useState(null)
    
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

    const filteredApplication = applications.filter(oneApplication => {
        return oneApplication.position.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const onApplicationDelete = (applicationId) => {
        setApplications(applications => applications.filter(a => a.id !== applicationId))
      };


    useEffect(() => {
        fetch("http://localhost:3000/currentApplications")
        .then(r => r.json())
        .then(data => {
            setApplications(data)
  
        })
    },[])

return(

     <div>
     <BrowserRouter>

        <NavBar />
        <EditApplication
            applications={selectedApplication}
            onChangeForm={handleChangeForm}
            onEditApplication={handleEditApplication}
                />



        <Switch>
            <Route exact path ="/">
                <Home />
            </Route>

            <Route path= "/application/add">
                <AddApplicationForm onAddApplication={handleAddApplication}/> 
            </Route>

            <Route path = "/applications">
                <ApplicationList 
                applications={filteredApplication}
                onApplicationDelete={onApplicationDelete}
                onSelectApplication={setSelectedApplication}
                setSearchQuery={setSearchQuery}

                
                />
            </Route>

        <Route exact path="applications/:id/edit">

        </Route>
        

   
            
        </Switch>
     </BrowserRouter>

    </div>
    )
};


export default App
