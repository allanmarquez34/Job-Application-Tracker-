import React from "react"

function Filter({onDepartmentChange}){


    return(
    <select onChange={onDepartmentChange}>
        <option value="">Pick a Department</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Accounting">Accounting</option>
        <option value="Admin">Admin</option>
        <option value="Legal">Legal</option>
  </select>


    )
}

export default Filter