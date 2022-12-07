import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const initialState = {
  date: "",
  name: "",
  position: "",
  department: "",
  status: "",
  link: "",
};

const EditApplication = ({ onUpdateApplication }) => {
  const [formData, setFormData] = useState(initialState);

  const { date, name, position, department, status, link  } = formData;

  const { id } = useParams();
  const history = useHistory()
  console.log('id', id)


  useEffect(() => {
    fetch(`http://localhost:3000/currentApplications/${id}`)
      .then((r) => r.json())
      .then((data) => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    };

    fetch(`http://localhost:3000/currentApplications/${id}`, configObj)
      .then((r) => r.json())
      .then((updatedApplication) => {
        onUpdateApplication(updatedApplication);
        history.push("/applications")
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Project</h3>

      <label htmlFor="name">Date</label>
      <input
        type="text"
        id="date"
        name="date"
        value={date}
        onChange={handleChange}
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        name="position"
        value={position}
        onChange={handleChange}
      />

      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="deparment"
        value={department}
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
        value={status}
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
        value={link}
        onChange={handleChange}
      />

      <button type="submit">Update Application</button>
    </form>
  );
};

export default EditApplication;