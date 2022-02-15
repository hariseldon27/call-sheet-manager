import React, { useState } from 'react'

function StaffEditor() {

const [ newStaff, setNewStaff ] = useState({
  name: '',
  photo: '',
  department: '',
  phone: '',
  email: '',
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
  .then(data => setNewStaff((currentStaff) => [...currentStaff, data]))
  .reset();
}


function handleStaffChange(e) {
  console.log(e.target)
  setNewStaff((currentStaffState) => ({...currentStaffState, [e.target.name]:e.target.value }))
}


  return (
    <div>
      <form onSubmit={handleStaffSubmit}>
      <h2>Name:</h2>
    <input 
        type="text"
        name="name"
        placeholder="Name here"
        value={newStaff.name} 
        onChange={handleStaffChange}/>
     <input 
        type="Url"
        name="photo"
        placeholder="photo here"
        value={newStaff.photo} 
        onChange={handleStaffChange}/>
      
    <input
        type="text"
        name="department"
        placeholder="Department/role here" 
        value={newStaff.department}
        onChange={handleStaffChange}/>
    <input 
        type="text"
        name="phone"
        placeholder="Phone number here"
        value={newStaff.phone} 
        onChange={handleStaffChange}/>
    <input 
        type="text"
        name="email"
        placeholder="E-mail here"
        value={newStaff.email} 
        onChange={handleStaffChange}/>
    <input 
        type="text"
        name="calltime"
        placeholder="Calltime here.." 
        value={newStaff.calltime}
        onChange={handleStaffChange}/>
    <input
        type="text"
        name="notes"
        placeholder="Notes here.." 
        value={newStaff.notes}
        onChange={handleStaffChange}/>
   
    <input type="submit" value="Submit" />

    </form>

    </div>
  )
}

export default StaffEditor