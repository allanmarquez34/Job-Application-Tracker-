import React from "react"

function Application({applications,enterApplicationEditModeFor}){

    const handleEditClick = () => {
        enterApplicationEditModeFor(applications.id);
      };
   
      
    return(
        <tr>
            <td>{applications.date}</td>
            <td>{applications.name}</td>
            <td>{applications.position}</td>
            <td>{applications.department}</td>
            <td>{applications.status}</td>
            <td>{applications.link}</td>
            <td>
            <button type="button" className="btn btn-primary" onClick={handleEditClick} >
          Edit Application
        </button>
        </td>
        </tr>
    )

}

export default Application