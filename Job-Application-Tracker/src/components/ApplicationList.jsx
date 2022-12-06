import React from "react";
import Applications from "./Applications"




function ApplicationList({applications, enterApplicationEditModeFor}){
    
    
    const mappedApplication = applications.map(oneApplication => {
        return <Applications key={oneApplication.id} 
        applications={oneApplication} 
        enterApplicationEditModeFor={enterApplicationEditModeFor}  />
    })
console.log(enterApplicationEditModeFor)

    return(
        <div>
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