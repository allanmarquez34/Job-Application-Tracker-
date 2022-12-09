import React from "react";
import Applications from "./Applications"



function ApplicationList({applications,
     onApplicationDelete,
     onSelectApplication,
     setSearchQuery,
     onDepartmentChange,
    }){
     
    
    const mappedApplication = applications.map(oneApplication => {
        return <Applications 
        key={oneApplication.id} 
        applications={oneApplication}
        onApplicationDelete={onApplicationDelete}
        onSelectApplication={onSelectApplication}
        />

    })
    
    function handleChange(event){
        console.log(event.target.value)
        setSearchQuery(event.target.value)
    }

    return(
        <div >
        <h2 className="all-applications-title">All Applications</h2> 
         <h3 className="search-title">Search Position</h3>
            <input  className="search-bar" type="text" placeholder="Search..." onChange={handleChange}/>
            
            <select className="select-bar"onChange={onDepartmentChange}>
                <option value="All">Pick a Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Accounting">Accounting</option>
                <option value="Admin">Admin</option>
                <option value="Legal">Legal</option>
            </select>
          <div className="container"> 
         <table className="responsive-table">
             <tbody>
                 <tr className="table-header">
                    <th> 
                    <h3 className="col col-1" type="date">Date</h3>
                    </th>
                    <th>
                    <h3 className="col col-2">Name</h3>
                    </th>
                    <th>
                    <h3 className="col col-3">Position</h3>
                    </th>
                    <th>
                    <h3 className="col col-4">Department</h3>
                    </th>
                    <th>
                    <h3 className="col col-5">Status</h3>
                    </th>
                    <th>
                    <h3 className="col col-6">Resume</h3>
                    </th>
                    <th>
                    <h3 className="col col-7">Edit</h3>
                    </th>
                    <th>
                    <h3 className="col col-8">Delete</h3>
                    </th>
                 </tr>
                 {mappedApplication}
                </tbody>
            </table>
            </div> 
        </div>
    )

   
}
export default ApplicationList 