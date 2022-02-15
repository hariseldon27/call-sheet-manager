import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'


function StaffEditor() {
  const history = useHistory();

  const [ staff, setStaff ] = useState({
    name: '',
    photo: '',
    department: '',
    phone: '',
    email: '',
    calltime: '',
    notes: ''
  })


const {id} = useParams()
  useEffect(() => {
      fetch(`http://localhost:3000/staff/${id}`)
      .then(r => r.json())
      .then(setStaff)
  },[id])

  console.log(id)


function handleStaffSubmit (e){
  e.preventDefault();
  fetch(`http://localhost:3000/staff/${id}`, {
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(staff)
  })
  .then(r => r.json())
  .then(history.push(`/staff`))
}

function handleStaffChange(e) {
  console.log(e.target)
  setStaff((currentStaffState) => ({...currentStaffState, [e.target.name]:e.target.value }))
}

  return (
    <div>
      <form onSubmit={handleStaffSubmit}>
      <h2>Name:</h2>
    <input 
        type="text"
        name="name"
        placeholder="Name here"
        value={staff.name} 
        onChange={handleStaffChange}/>
     <input 
        type="text"
        name="photo"
        placeholder="photo here"
        value={staff.photo} 
        onChange={handleStaffChange}/>
      
    <input
        type="text"
        name="department"
        placeholder="Department/role here" 
        value={staff.department}
        onChange={handleStaffChange}/>
    <input 
        type="text"
        name="phone"
        placeholder="Phone number here"
        value={staff.phone} 
        onChange={handleStaffChange}/>
    <input 
        type="email"
        name="email"
        placeholder="E-mail here"
        value={staff.email} 
        onChange={handleStaffChange}/>
    <input 
        type="time"
        name="calltime"
        placeholder="Calltime here.." 
        value={staff.calltime}
        onChange={handleStaffChange}/>
    <input
        type="text"
        name="notes"
        placeholder="Notes here.." 
        value={staff.notes}
        onChange={handleStaffChange}/>
   
    <input type="submit" value="Submit" />

    </form> 

    </div>
  )
}

export default StaffEditor