import React, { useState } from 'react'

function StaffEditor() {

const [ newStaff, setNewStaff ] = useState({
  name: '',
  department: '',
  contact: '',
  calltime: '',
  notes: ''
})

function handleStaffSubmit (e){
  e.preventDefault();
  fetch('http://localhost:3000/staff', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStaff)
  })
  .then(r => r.json())
  .then(data => console.log(data))
}


function handleStaffChange(e) {
  console.log(e.target)

}


  return (
    <div>
      <form onSubmit={handleStaffSubmit}>
      <h2>Name:</h2>
    <input 
        type="text"
        name="name"
        placeholder="Name here"/>
    <input
        type="text"
        name="department"
        placeholder="Department/role here" />
    <input 
        type="text"
        name="contact"
        placeholder="Contact here" />
    <input 
        type="text"
        name="calltime"
        placeholder="Calltime here.." />
    <input
        type="text"
        name="notes"
        placeholder="Notes here.." />
   
    <input type="submit" value="Submit" />

    </form>

    </div>
  )
}

export default StaffEditor