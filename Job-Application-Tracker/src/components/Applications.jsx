import React from "react"
import { Link, NavLink } from "react-router-dom";

function Application({applications, onApplicationDelete, onSelectApplication }){
    const { id, date, name, position , department, status, link } = applications;

    const handleDeleteClick = () => {
        onApplicationDelete(id)
        fetch(`http://localhost:3000/currentApplications/${id}`, {
          method: "DELETE"
        })
      };

      function handleClick() {
        onSelectApplication(applications);
      }
      
    return(
        
        <tr className ="table-row">
            <td className="col col-1">{date}</td>
            <td className="col col-2">{name}</td>
            <td className="col col-3">{position}</td>
            <td className="col col-4">{department}</td>
            <td className="col col-5">{status}</td>
            {link ? (
                <td className="col col-6">
                    <p>
                        <a className="resume"target="_blank" rel="noreferrer" href={link}>
                            Resume
                        </a>
                    </p>
                </td>
            ) : null
            }
            <td>
                <NavLink exact to={`/${id}/edit`}>
                    <button type="button" className="button-1" onClick={handleClick}>
                        Edit Application
                    </button>
                </NavLink>
            </td>
            <td>
                <button type="button" className="button-1" onClick={handleDeleteClick}  >
                    No longer Intrested
                </button>
            </td>
        </tr>
        
        
    )

}

export default Application