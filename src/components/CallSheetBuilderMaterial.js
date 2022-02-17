import React, { useEffect, useState } from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbTwoToneIcon from '@mui/icons-material/DoNotDisturbTwoTone';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import uuid from 'react-uuid'



function CallSheetBuilderMaterial() {

    const [staffList, setStaffList] = useState([])
    const staffers = staffList.map((individualStaff) => individualStaff);
    const [eventList, setEventList] = useState([])
    const eachEvent = eventList.map((eachEvent) => eachEvent)

    const [staffToAdd, setStaffToAdd] = useState([])
    const [staffCallSheetCards, setStaffCallSheetCards] = useState([])
    const [callSheetInEditor, setCallSheetInEditor] = useState()

            //staff fetch
            useEffect(()=> {
                fetch('http://localhost:3006/staff')
                .then(r => r.json())
                .then(setStaffList)
            }, [])
            //events fetch
            useEffect(()=> {
                fetch('http://localhost:3006/events')
                .then(r => r.json())
                .then(setEventList)
            }, [])

  
    function handleStaffClick(e) {
        e.preventDefault()
        if (staffToAdd.find(ele => ele === e.target.id) ) {
            return null
        } else {
            setStaffToAdd([...staffToAdd, e.target.id])
        }
        staffCardGetter(e.target.id)
    }

    function handleCreateNewCallSheet(e){
        e.preventDefault()   
    }

    function handleStaffRemove(e) {
        e.preventDefault()
        const staffToGo = e.target.id
        console.log(staffToGo)
        const updatedItems = staffToAdd.filter(item => item !== staffToGo);
        setStaffToAdd(updatedItems)
        }
      
    function staffCardGetter(staffId) {
        const cardId = 1 + parseInt(staffId, 10)
        console.log(cardId)
        fetch(`http://localhost:3006/staff/${cardId}`)
        .then((r)=> r.json())
        .then(setStaffCallSheetCards)
    }
    
    // const staffCardBuilder = staffCallSheetCards.map((card) => console.log(card))
    

    // console.log(staffCallSheetCards)

    const renderCallSheetStaff = staffToAdd.map((staffId) => {
            return (
            <Box key={uuid()}>
                <Button 
                      key={staffId} 
                      variant="outlined" 
                      color="secondary" 
                      size="large" 
                      id={staffId}
                      onClick={handleStaffRemove}
                      >{staffId}</Button>
                <Box 
                sx={{
                    width: 100,
                    height: 'auto',
                    backgroundColor: 'secondary.light',
                }}
                key={uuid()}>
                    
                    { 
                    for (let i=0; i < staffCallSheetCards.length; i++ ) {
                    staffCallSheetCards[i].name
                    }
                    }
                </Box>
            </Box>
            )
        })
                    
        



  

    return (
        <Box sx={{ display: 'flex', mx:'auto'}}>
            <Box>
                <Stack>
                  {staffers.map((staff, id) => (
                      <Button 
                      key={id} 
                      variant="outlined" 
                      color="secondary" 
                      size="large" 
                      id={id}
                      onClick={handleStaffClick}
                      >{staff.name}</Button>
                  ))}     
                  </Stack>
            </Box>
            <Box sx={{
                width: 200,
                height: 200,
                backgroundColor: 'secondary.main',

            }}>
                <Box sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'primary.main',
                    mx: 'auto',
                    display: 'flex',
                    alignContent: 'center',
                    textAlign: 'center'                    

                }}>
                Hi There
                </Box>

            </Box>
            
        <Box>
        {renderCallSheetStaff}
        </Box>
        </Box>
    )
}

export default CallSheetBuilderMaterial