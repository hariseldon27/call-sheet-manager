import React, { useState, useEffect } from 'react'
import StaffCard from './StaffCard'




function StaffContainer() {
  const [ staff, setStaff ] = useState()
  const [staffList, setStaffList ] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/staff')
  .then(r => r.json())
  .then(setStaffList)
}, [])

const staffCardRender = staffList.map((staffPerson) => {
  return <StaffCard key={staffPerson.id} staffPerson={staffPerson} />
})


function handleStaffClick () {
  console.log('clicked')
  
 }

//  function addStaff(staffPerson) {
//    console.log("in app" , staffPerson)
//    setStaff([...staff, staffPerson])
//  }

  return (
    <div>
    StaffContainer
         {staffCardRender}
        
        <button onClick={handleStaffClick}>New Form Here</button>
    </div>
  )
}

export default StaffContainer