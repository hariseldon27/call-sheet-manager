import React from 'react'
import { useParams } from 'react-router-dom'

function StaffCard( {staffPerson }) {
 const { id , name, phone, email, department} = staffPerson
  const params = useParams()

  console.log(params)


  return (
    <div>
      StaffCard
      <h2> {name}</h2>
      <p> {phone}</p>
      <p> {email}</p>
      <p> {department}</p>
    
      </div>
  )
}

export default StaffCard