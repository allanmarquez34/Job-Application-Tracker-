import React from "react";
import Applications from "./Applications"




function ApplicationList({applications, onApplicationDelete, enterApplicationEditModeFor, setSearchQuery, setSelectedDepartment }){
     
    
    const mappedApplication = applications.map(oneApplication => {
        return <Applications 
        key={oneApplication.id} 
        applications={oneApplication}
        onApplicationDelete={onApplicationDelete}
        enterApplicationEditModeFor={enterApplicationEditModeFor} />
    })
    
    function handleChange(event){
        console.log(event.target.value)
        setSearchQuery(event.target.value)
    }

    return(
        <div>
            <h3>Search Position</h3>
            <input type="text" placeholder="Search..." onChange={handleChange} />
            <div>
                <h3>Select Department</h3>
                <button>Engineering</button>
                <button>Marketing</button>
                <button>Sales</button>
                <button>Accounting</button>
                <button>Admin</button>
                <button>Legal</button>
            </div>
        <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header" type="date">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">name</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">position</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">department</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">status</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">resume</h3>
            </th>
          </tr>
          {mappedApplication}
        </tbody>
      </table>
      </div>
    )

   
}
export default ApplicationList 