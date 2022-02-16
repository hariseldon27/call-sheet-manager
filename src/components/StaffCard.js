import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StaffEditor from './StaffEditor'

function StaffCard( ) {

  const [ staffMemberRender, setStaffMemberRender ] = useState(null)
  // console.log(staffMember)
  const { name, phone, email, department, photo, notes} = {...staffMemberRender}
 



  const {id} = useParams()
  useEffect(() => {
      fetch(`http://localhost:3000/staff/${id}`)
      .then(r => r.json())
      .then(setStaffMemberRender)
  },[id])




  return (
    <div>
      StaffCard
      
      <StaffEditor />
      <h2> {name}</h2>
      <p> {phone}</p>
      <p>{photo}</p>
      <p> {email}</p>
      <p> {department}</p> 
      <p>{notes}</p>
      <Link to={`/staff/${id}/editor`}>
        <button >Edit Staff</button>
      </Link>
      </div>
  )
}

export default StaffCard