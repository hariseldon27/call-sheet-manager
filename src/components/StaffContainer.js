import React, { useState, useEffect } from 'react'
import StaffCard from './StaffCard'
import { Link } from 'react-router-dom'




function StaffContainer() {
  
  const [staffList, setStaffList ] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/staff')
  .then(r => r.json())
  .then(setStaffList)
}, [])

const staffCardRender = staffList.map((staffPerson) => {
  return <StaffCard key={staffPerson.id} staffPerson={staffPerson} />
})

  return (
    <div>
      StaffContainer
    <Link to='/staff/newStaffForm'>
        <button>New Form Here</button>
      </Link>
    
         {staffCardRender}
  
    </div>
  )
}

export default StaffContainer