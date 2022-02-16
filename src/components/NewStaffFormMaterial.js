import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewStaffFormMaterial() {
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
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleStaffAddSubmit}
    >
      <Box sx={{
          maxWidth: 'md',
          mx: 'auto',
          alignContent: 'center',
          mt: 2
          
      }}>
          <Typography variant="h4" component="h2">New Staff Creator</Typography>
            
           

                <TextField id="outlined-basic"
                label="Name" 
                variant="outlined" 
                name="name"
                value={newStaff.name} 
                onChange={handleStaffAddChange}
                />

                <TextField
                label="Photo Link" 
                variant="outlined" 
                name="photo"
                value={newStaff.photo} 
                onChange={handleStaffAddChange}
                />
                
                <TextField
                label="Department" 
                variant="outlined" 
                name="department"
                value={newStaff.department} 
                onChange={handleStaffAddChange}
                />

                <TextField
                label="Phone Num" 
                variant="outlined" 
                name="phone"
                value={newStaff.phone} 
                onChange={handleStaffAddChange}
                />


                <TextField
                label="Email" 
                variant="outlined" 
                name="email"
                value={newStaff.email} 
                onChange={handleStaffAddChange}
                />

                <TextField
                label="time" 
                variant="outlined" 
                name="calltime"
                value={newStaff.calltime} 
                onChange={handleStaffAddChange}
                />
            
                <TextField
                label="Notes..." 
                name="notes"
                value={newStaff.notes} 
                onChange={handleStaffAddChange}
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

export default NewStaffFormMaterial