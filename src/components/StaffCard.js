import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function StaffCard( ) {

  const [ staffMember, setStaffMember ] = useState(null)
 
  const { name, phone, email, department} = {...staffMember}

 const {id} = useParams()
  useEffect(() => {
      fetch(`http://localhost:3000/staff/${id}`)
      .then(r => r.json())
      .then(setStaffMember)
  },[id])


  return (
    <div>
      StaffCard
      {/* {staffMember} */}
      <h2> {name}</h2>
      <p> {phone}</p>
      <p> {email}</p>
      <p> {department}</p>
    
      </div>
  )
}

export default StaffCard