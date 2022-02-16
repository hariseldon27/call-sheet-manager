import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function StaffEditorMaterial() {
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
      fetch(`http://localhost:3006/staff/${id}`)
      .then(r => r.json())
      .then(setStaff)
  },[id])

//   console.log(id)


function handleStaffSubmit (e){
  e.preventDefault();
  fetch(`http://localhost:3006/staff/${id}`, {
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
//   console.log(e.target)
  setStaff((currentStaffState) => ({...currentStaffState, [e.target.name]:e.target.value }))
}

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleStaffSubmit}
    >
      <Box sx={{
          maxWidth: 'md',
          mx: 'auto',
          alignContent: 'center',
          mt: 2
          
      }}>
          <Typography variant="h4" component="h2">Staff Editor</Typography>
            
           

                <TextField id="outlined-basic"
                label="Name" 
                variant="outlined" 
                name="name"
                value={staff.name} 
                onChange={handleStaffChange}
                />

                <TextField
                label="Photo Link" 
                variant="outlined" 
                name="photo"
                value={staff.photo} 
                onChange={handleStaffChange}
                />
                
                <TextField
                label="Department" 
                variant="outlined" 
                name="department"
                value={staff.department} 
                onChange={handleStaffChange}
                />

                <TextField
                label="Phone Num" 
                variant="outlined" 
                name="phone"
                value={staff.phone} 
                onChange={handleStaffChange}
                />


                <TextField
                label="Email" 
                variant="outlined" 
                name="email"
                value={staff.email} 
                onChange={handleStaffChange}
                />

                <TextField
                label="time" 
                variant="outlined" 
                name="calltime"
                value={staff.calltime} 
                onChange={handleStaffChange}
                />
            
                <TextField
                label="Notes..." 
                name="notes"
                value={staff.notes} 
                onChange={handleStaffChange}
                variant="outlined" 
                multiline
                maxRows={4}
                />
                <Box>
                    <Button size="large" color="secondary" type="submit" label="Submit" variant="outlined" >Submit</Button>
                </Box>

           
        </Box>
    </Box>
  )
}

export default StaffEditorMaterial