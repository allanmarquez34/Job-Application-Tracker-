import React from "react"

function Application({applications, onApplicationDelete, }){
    const { id, date, name, position , department, status, link } = applications;

    const handleDeleteClick = () => {
        onApplicationDelete(id)
        fetch(`http://localhost:3000/currentApplications/${id}`, {
          method: "DELETE"
        })
      };

      const handleEditClick = () => {
        enterApplicationModeFor(applications);
      };
   
      
    return(
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td>{position}</td>
            <td>{department}</td>
            <td>{status}</td>
            <td>{link}</td>
            <td>
            <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Application
        </button>
        </td>
        <td>
            <button type="button" className="btn btn-primary" onClick={handleDeleteClick}  >
          No longer Intrested
        </button>
        </td>
        </tr>
    )

}

export default Application