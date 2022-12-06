import React,{useState, useEffect} from "react"

function EditApplication({onUpdateApplication}){
    
    const [formData, setFormData]= useState({
        id: "",
        date:"",
        name:"",
        position:"",
        department:"",
        status:"",
        link:""
    })

    // const { date, name, position, department, status, link } = formData;

    useEffect(() => {
        fetch(`http://localhost:3000/currentApplications`)
          .then((r) => r.json())
          .then((data) => setFormData(data));
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        };
    
        fetch(`http://localhost:3000/currentApplications`, configObj)
          .then((r) => r.json())
          .then((updatedApp) => {
            onUpdateApplication(updatedApp);
          });
      };

    return(
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <h3>Edit Application</h3>
  
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

  
          <button type="submit">Edit Project</button>
        </form>
      </section>
    )

}


// function EditApplication({applications, onChangeForm, onEditApplication}){
    
//     function handleInputChange(event) {
//         onChangeForm(event.target.name, event.target.value);
//     }

//     function handleSubmit(event){
//         event.preventDefault();
//         fetch (`http://localhost:3000/currentApplications/${applications.id}`, {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(applications)
//         })
//         .then((r) => r.json())
//       .then(onEditApplication);
//     }
//     if (!applications) return null;

//     return(
//         <form onSubmit={handleSubmit}>
//             <div className="edit-form">
//             <div className="col-5">
//             <input
//                 type="date"
//                 className="date"
//                 placeholder="Date"
//                 name="date"
//                 value={applications.date}
//                 onChange={handleInputChange}
//                 />
//             </div>
//             <div className="col">
//             <input
//                 type="text"
//                 className="name"
//                 placeholder="Name"
//                 name="name"
//                 value={applications.name}
//                 onChange={handleInputChange}
//                 />
//             </div>
//             <div className="col">
//             <input
//                 type="text"
//                 className="position"
//                 placeholder="Position"
//                 name="position"
//                 value={applications.position}
//                 onChange={handleInputChange}
//                 />
//             </div>
//             <div className="coll">
//             <select
//                 name="department"
//                 value={applications.department}
//                 onChange={handleInputChange}
//                 className="form-control"
//                 >
//             <option value="">Pick a Department</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Sales">Sales</option>
//             <option value="Accounting">Accounting</option>
//             <option value="Admin">Admin</option>
//             <option value="Legal">Legal</option>
//             </select>
//             </div>
//                 <div className="coll">
//                 <select
//                 name="status"
//                 value={applications.status}
//                 onChange={handleInputChange}
//                 className="form-control"
//                 >
//              <option value="">Pick a Status</option>
//             <option value="Unread">Unread</option>
//             <option value="Read">Read</option>
//             <option value="Phone Screening">Phone Screening</option>
//             <option value="First Interview">First Interview</option>
//             <option value="Second Interview">Second Interview</option>
//             <option value="Offer Sent">Offer Sent</option>
//             </select>
//             </div>
//             <div className="col">
//             <input
//                 type="text"
//                 className="collls"
//                 placeholder="Resume Link"
//                 name="link"
//                 value={applications.link}
//                 onChange={handleInputChange}
//                 />
//             </div>

//             </div>
//         </form>
//     )
// }

export default EditApplication