import React,{useState} from 'react'
import {  useHistory } from "react-router-dom";

function AddApplicationForm({onAddApplication}){
    
    const [formData, setFormData]= useState({
        date:"",
        name:"",
        position:"",
        department:"",
        status:"",
        link:""
    })

    const history = useHistory()

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    function handleSubmit(){
        const newApplication = {
            date: formData.date,
            name:formData.name,
            position: formData.position,
            department: formData.department,
            status: formData.status,
            link: formData.link
        }

        fetch("http://localhost:3000/currentApplications",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newApplication),
        })
        .then((r) => r.json())
        .then(onAddApplication)
        history.push(`/applications`)
    }


    return(
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <h3>Add New Application</h3>
  
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
          />
  
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />

          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            onChange={handleChange}
            value={formData.position}
          />
  
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={handleChange}
            value={formData.department}
          >
            <option value="">Pick a Department</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Accounting">Accounting</option>
            <option value="Admin">Admin</option>
            <option value="Legal">Legal</option>
          </select> 
  
          <label htmlFor="department">Department</label>
          <select
            name="status"
            placeholder="Status"
            onChange={handleChange}
            value={formData.status}
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
            type="text"
            id="link"
            name="link"
            placeholder="Resume Link"
            onChange={handleChange}
            value={formData.link}
            />

  
          <button type="submit">Add Project</button>
        </form>
      </section>
    )

}

export default AddApplicationForm

