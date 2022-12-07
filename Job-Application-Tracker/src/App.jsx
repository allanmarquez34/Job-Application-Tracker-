import React,{useState, useEffect} from "react";
// import ApplicationContainer from "./components/ApplicationContainer";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AddApplicationForm from "./components/AddApplicationForm";
import ApplicationList from "./components/ApplicationList";
import EditApplication from "./components/EditApplication";
import { BrowserRouter, Switch, Route } from "react-router-dom"



function App(){
    const [applications, setApplications]=useState([])
    const [searchQuery, setSearchQuery]=useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [applicationId, setApplicationId] = useState(null);


    function handleAddApplication(newApplication){
        setApplications([...applications, newApplication])
    }

    const filteredApplication = applications.filter(oneApplication => {
        return oneApplication.position.toLowerCase().includes(searchQuery.toLowerCase())
    })


    const onUpdateApplication = (updatedApplication) => {
        setApplications(applications => applications.map(originalApplication => {
          if (originalApplication.id === updatedApplication.id) {
            return updatedApplication;
          } else {
            return originalApplication;
          }
        }))
        setApplicationId(updatedApplication);
      };

      const enterApplicationEditModeFor = (applicationId) => {
        setApplicationId(applicationId);
      };

    const onApplicationDelete = (applicationId) => {
        setApplications(applications => applications.filter(a => a.id !== applicationId))
      };

      const completeEditing = () => {
        setApplicationId(null);
      };




    useEffect(() => {
        fetch("http://localhost:3000/currentApplications")
        .then(r => r.json())
        .then(data => {
            setApplications(data)
            // console.log(data)
        })
    },[])

return(

     <div>
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
                applications={filteredApplication}
                onApplicationDelete={onApplicationDelete}
                setSelectedDepartment={setSelectedDepartment}
                setSearchQuery={setSearchQuery}
                enterApplicationEditModeFor={enterApplicationEditModeFor}
                />
            </Route>

            <Route>
                <EditApplication
                completeEditing={completeEditing}
                onUpdateApplication={onUpdateApplication} 
                />
            </Route>
            

        </Switch>
     
     </BrowserRouter>

    </div>
    )
};


export default App



{/* <Switch> */}
            
{/* <EditApplication onUpdateApplication={onUpdateApplication}/>  */}

{/* <Route path = "/applications">
<ApplicationList applications={filteredApplication}
 onApplicationDelete={onApplicationDelete}
  setSelectedDepartment={setSelectedDepartment}
   setSearchQuery={setSearchQuery} */}
//    enterApplicationEditModeFor={enterApplicationEditModeFor}
//    />
{/* </Route> */}

{/* <Route path="/add/applications">
    <AddApplicationForm onAddApplication={handleAddApplication}/>
</Route> */}

{/* </Switch> */}