import React from "react"
import {  useParams, useHistory } from "react-router-dom";


function EditAppication({applications, onChangeForm, onEditApplication}){
    const history = useHistory()
    const {id} = useParams()
   
    

    function handleChange(event) {
        onChangeForm(event.target.name, event.target.value);
      }

    function handleSubmit(event) {
    event.preventDefault();
    fetch(` http://localhost:3000/currentApplications/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(applications),
    },)
        .then((r) => r.json())
        .then(onEditApplication);
        history.push("/applications")
    }

      if (!applications) return null;

      return(
        <section>
            <form onSubmit={handleSubmit} className="form" autoComplete="off">
            <h3>Edit Project</h3>

            <label htmlFor="name">Date</label>
            <input
                type="text"
                id="date"
                name="date"
                value={applications.date}
                onChange={handleChange}
            />

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={applications.name}
                onChange={handleChange}
            />

            <label htmlFor="position">Position</label>
            <input
                type="text"
                id="position"
                name="position"
                value={applications.position}
                onChange={handleChange}
            />

            <label htmlFor="department">Department</label>
            <select
                name="department"
                id="deparment"
                value={applications.department}
                onChange={handleChange}
            >
            <option value="">Pick a Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Admin">Admin</option>
                    <option value="Legal">Legal</option>
            </select>


            <label htmlFor="status">Status</label>
            <select
                name="status"
                id="status"
                value={applications.status}
                onChange={handleChange}
            >
            <option value="">Pick a Status</option>
                    <option value="Unread">Unread</option>
                    <option value="Read">Read</option>
                    <option value="Phone Screening">Phone Screening</option>
                    <option value="First Interview">First Interview</option>
                    <option value="Second Interview">Second Interview</option>
                    <option value="Offer Sent">Offer Sent</option>
                </select>

            <label htmlFor="link">Resume</label>
            <input
                type="link"
                id="link"
                name="link"
                value={applications.link}
                onChange={handleChange}
            />

            <button type="submit" className="button-1">Update Application</button>
            </form>
    </section>
      )
    
}

export default EditAppication