import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StaffEditor from './StaffEditor'

function StaffCard( ) {

  const [ staffMember, setStaffMember ] = useState(null)
  const { name, phone, email, department} = {...staffMember}
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
      .then(setStaffMember)
  },[id])

  function addStaff(staffPerson) {
    console.log("in app" , staffPerson)
    setStaff([...staff, staffPerson])
  }
 


  return (
    <div>
      StaffCard
      
      <StaffEditor addStaff={addStaff} staff={staff} setStaff={setStaff}/>
      <h2> {name}</h2>
      <p> {phone}</p>
      <p> {email}</p>
      <p> {department}</p>
      <button>Edit Staff</button>
      </div>
  )
}

export default StaffCard