import React,{useState} from "react"
import { useParams } from "react-router-dom";

function ApplicationDetail(){

    const [application, setApplication]= useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/currentApplications/${id}`)
          .then((r) => r.json())
          .then((application) => {
            setApplication(application);
          });
      }, [id]);

      if(!application) { return <div></div>}

      const { date, name, position, department, status, link} = project;

      return(
        <tr>
             <td>{date}</td>
            <td>{name}</td>
            <td>{position}</td>
            <td>{department}</td>
            <td>{status}</td>
            <td>{link}</td>
        </tr>
      )
}

export default ApplicationDetail 