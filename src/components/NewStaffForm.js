import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewStaffForm() {
    const history = useHistory();

    const [ newStaff, setNewStaff ] = useState({
        name: '',
        photo: '',
        department: '',
        phone: '',
        email: '',
        calltime: '',
        notes: ''
      })

      function handleStaffAddSubmit (e){
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
        .then(history.push('/staff'))
      }
      
      
      function handleStaffAddChange(e) {
        console.log(e.target)
        setNewStaff((currentStaffState) => ({...currentStaffState, [e.target.name]:e.target.value }))
      }
      

  return (
    <div>
      <form onSubmit={handleStaffAddSubmit}>
      <h2>Name:</h2>
    <input 
        type="text"
        name="name"
        placeholder="Name here"
        value={newStaff.name} 
        onChange={handleStaffAddChange}/>
     <input 
        type="text"
        name="photo"
        placeholder="photo here"
        value={newStaff.photo} 
        onChange={handleStaffAddChange}/>
      
    <input
        type="text"
        name="department"
        placeholder="Department/role here" 
        value={newStaff.department}
        onChange={handleStaffAddChange}/>
    <input 
        type="text"
        name="phone"
        placeholder="Phone number here"
        value={newStaff.phone} 
        onChange={handleStaffAddChange}/>
    <input 
        type="email"
        name="email"
        placeholder="E-mail here"
        value={newStaff.email} 
        onChange={handleStaffAddChange}/>
    <input 
        type="time"
        name="calltime"
        placeholder="Calltime here.." 
        value={newStaff.calltime}
        onChange={handleStaffAddChange}/>
    <input
        type="text"
        name="notes"
        placeholder="Notes here.." 
        value={newStaff.notes}
        onChange={handleStaffAddChange}/>
   
    <input type="submit" value="Submit" />

    </form>

    </div>
  )
}

export default NewStaffForm