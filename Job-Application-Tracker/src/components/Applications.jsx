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
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td>{position}</td>
            <td>{department}</td>
            <td>{status}</td>
            {link ? (
                <td>
                    <p>
                        <a target="_blank" rel="noreferrer" href={link}>
                            Resume
                        </a>
                    </p>
                </td>
            ) : null
            }
            <td>
                <NavLink exact to={`/${id}/edit`}>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>
                        Edit Application
                    </button>
                </NavLink>
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