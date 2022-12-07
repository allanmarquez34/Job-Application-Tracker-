import React from "react"
import { Link } from "react-router-dom";

function Application({applications, onApplicationDelete, enterApplicationEditModeFor}){
    const { id, date, name, position , department, status, link } = applications;

    const handleDeleteClick = () => {
        onApplicationDelete(id)
        fetch(`http://localhost:3000/currentApplications/${id}`, {
          method: "DELETE"
        })
      };

      const handleEditClick = () => {
        enterApplicationEditModeFor(id);
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
            <Link to={`applications/${id}/edit`} > 
            <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Application
        </button>
        </Link>
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