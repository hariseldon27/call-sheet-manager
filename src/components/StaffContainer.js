import React, { useState, useEffect } from 'react'
import StaffCard from './StaffCard'
import StaffEditor from './StaffEditor'



function StaffContainer() {
  
  const [staffList, setStaffList ] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/staff')
  .then(r => r.json())
  .then(setStaffList)
}, [])

const staffCardRender = staffList.map((staffPerson) => {
  return <StaffCard key={staffPerson.id} staffPerson={staffPerson} />
}
)

  return (
    <div>
    StaffContainer
         {staffCardRender}
        <StaffEditor />
        <button>New Form Here</button>
    </div>
  )
}

export default StaffContainer