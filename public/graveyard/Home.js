import React from 'react'
import StaffContainer from './StaffContainer'

import { Link } from 'react-router-dom'
function Home() {



  return (
    <div>
      <nav>nav</nav>

        <h1>Home</h1>
       <Link to={'/staff'}>Staff </Link>
       <br></br>
       <Link to={'/events'}>Events </Link>
       <br></br>
       <Link to={'/callsheets'}> Call Sheet</Link>
        


        <ul> viewer
          <li>placeholder viewer</li>
          <li>placeholder viewer</li>
          <li>placeholder viewer</li>
        </ul>
        {/* <StaffContainer />  */}
    </div>
  )
}

export default Home