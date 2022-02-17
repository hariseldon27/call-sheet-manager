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
import uuid from 'react-uuid'
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





function CallSheetBuilderMaterial() {

    const [staffList, setStaffList] = useState([])
    const staffers = staffList.map((individualStaff) => individualStaff);
    const [eventList, setEventList] = useState([])
    const eachEvent = eventList.map((eachEvent) => eachEvent)

    const [staffToAdd, setStaffToAdd] = useState([])
    const [eventToAdd, setEventToAdd] = useState([])
    const [staffCallSheetCards, setStaffCallSheetCards] = useState([])
    const [eventCallSheetCards, setEventCallSheetCards] = useState([])
    const [eventInEditor, setEventInEditor] = useState([])
    const [callSheetInEditor, setCallSheetInEditor] = useState()
    const [formData, setFormData] = useState({
        name: '',
        notes: '',
        })

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
    function handleEventClick(e) {
        e.preventDefault()
        console.log("handlEventClick thinks e target value is " + e.target.value)
        if (eventToAdd.find(ele => ele === e.target.value) ) {
            return null
        } else {
            setEventToAdd([e.target.value])
        }
        eventCardGetter(e.target.value)
    }

    function handleEditChange(e){
        setFormData((updated) => ({...updated, [e.target.name]: e.target.value}))
      } 

    function handleStaffRemove(e) {
        e.preventDefault()
        const staffToGo = e.target.id
        // console.log(staffToGo)
        const updatedItems = staffToAdd.filter(item => item !== staffToGo);
        setStaffToAdd(updatedItems)
        const correctedId = 1 + parseInt(staffToGo, 10)
        const updatedStaffCards = staffCallSheetCards.filter(item => item.id !== ( correctedId ))
        setStaffCallSheetCards(updatedStaffCards)
        }
    function handleEventRemove(e) {
        e.preventDefault()
        const eventToGo = e.target.value
        const correctedId = 1 + parseInt(eventToGo, 10)
        const updatedItems = eventToAdd.filter(item => item !== correctedId);
        setEventToAdd(updatedItems)
        const updatedEventCards = eventCallSheetCards.filter(item => item.id !== ( eventToGo ))
        setEventCallSheetCards(updatedEventCards)
        }
        console.log("eventcallsheetcards are:" + eventCallSheetCards)
      
    function staffCardGetter(staffId) {
        const cardId = 1 + parseInt(staffId, 10)
        // console.log(cardId)
        fetch(`http://localhost:3006/staff/${cardId}`)
        .then((r)=> r.json())
        .then((cards) => setStaffCallSheetCards([...staffCallSheetCards, cards]))
    }
    function eventCardGetter(eventId) {
        const cardId = 1 + parseInt(eventId, 10)
        console.log("eventCardGetter says eventId is: " + cardId)
        fetch(`http://localhost:3006/events/${cardId}`)
        .then((r)=> r.json())
        .then((cards) => setEventCallSheetCards((cards) => cards))
    }

    // const selectVals = () => {
    //     if (eventCallSheetCards.length <= 0) {
    //         return 1
    //     }
    //     else {
    //         return eventCallSheetCards
    //     }
    // }
    
    console.log("staffCallSheetCards are: " + staffCallSheetCards)
    // console.log(formData)

//these are the table builder functions
    function renderRow(staffId, arryToUse) {
        const correctedId = 1 + parseInt(staffId, 10)
        const rows = arryToUse.filter((row) => row.id === correctedId)
            return rows.map((entry, index) => <TableRow key={index}>{renderCells(entry, staffId)}</TableRow>)
    }

    function renderCells(rowObject, staffId) {
        // const entries = Object.entries(rowObject)
        const { name, photo, department, phone, email, calltime, notes, id } = rowObject
        return (
            <>
            <TableCell>{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{email}</TableCell>
            </>
        )
        // return entries.map((cells) => (
        //     cellChecker(cells, staffId)
        //     ))
        }
//fenceposts - divert our rowobject above and have it build fixed table rows



// fenceposts - this cellCheckerfunction isn't needed currently because we are using set rows
        // function cellChecker(cellData, staffId) {
        //     if (
        //         typeof cellData === 'object' &&
        //         !Array.isArray(cellData) &&
        //         cellData !== null 
        //     ) {
        //         const cellObject = Object.values(cellData)
        //         return cellObject.map((obj) => <TableRow key={obj.id}>{cellChecker(obj)}</TableRow>)
        //     } else {
        //         return <TableCell key={cellData.id}>{cellData}</TableCell>
        //     }
        // }


        //render our call sheet staff buttons
    const renderCallSheetStaff = staffToAdd.map((staffId) => {
        return (
            <TableContainer>
                    <Box 
                    sx={{
                        backgroundColor: 'primary.light',
                        color: 'black',
                        display: 'flex'
                    }}
                    key={uuid()}>
                            <Button 
                                key={uuid()} 
                                variant="filled" 
                                color="primary.main" 
                                size="large" 
                                id={staffId}
                                onClick={handleStaffRemove}
                                >Remove
                                </Button>
                                
                        <Table>
                            {renderRow(staffId, staffCallSheetCards)}
                        </Table>
                    </Box>
            </TableContainer>
            )
        })
        //render our call sheet event info
    const renderCallSheetEvent = eventToAdd.map((staffId) => {
        return (
            <TableContainer key={uuid()}>
                    <Box 
                    sx={{
                        backgroundColor: 'primary.light',
                        color: 'black',
                        display: 'flex'
                    }}
                    key={uuid()}>
                            <Button 
                                key={uuid()} 
                                variant="filled" 
                                color="primary.main" 
                                size="large" 
                                id={staffId}
                                onClick={handleEventRemove}
                                >Remove
                                </Button>
                        <Table>
                            {renderRow(staffId, eventCallSheetCards)}
                        </Table>
                    </Box>
            </TableContainer>
            )
        })

        // function createData(name, phone, department, email, calltime, notes ) {
        //     return { name, phone, department, email, calltime, notes  };
        //   }

        // const rows = [
        //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        //   ];
          
  

    return (

        <Box sx={{

            mx:'auto',
        }}>
            <Box sx={{ 
                mx:'auto',
                py: 5,
                display: 'flex',
                }}>

                <Container sx={{ 
                            display: 'grid',
                            p: 1,
                            m: 1,
                            width: 'md'
                            }} 
                            spacing={2}
                            >
                                {/* left side this holds the staff buttons to add to the sheet */}
                                {staffers.map((staff, id) => (
                                    <Grid item key={uuid()}>
                                        <Button 
                                        key={id} 
                                        variant="outlined" 
                                        color="secondary" 
                                        size="large" 
                                        id={id}
                                        onClick={handleStaffClick}
                                        >{staff.name}</Button>
                                    </Grid>
                                ))}     

                </Container>

                <Container sx={{ 
                            display: 'grid',
                            p: 1,
                            m: 1,
                            width: 'md'
                            }} 
                            >
                                {/* right sidehave this hold the event list */}
                                    <Grid item>
                                        <InputLabel id="event-selector-label">Choose your event</InputLabel>
                                            <Select
                                                labelId="event-selector-label"
                                                id="event-selector"
                                                label="event-selector"
                                                onChange={handleEventClick}
                                                value={eventInEditor}
                                                >
                                                    <MenuItem value=""><em>Choose Event...</em></MenuItem>
                                            {eachEvent.map((selection) => (
                                                
                                                <MenuItem key={selection.id} value={selection.id}>{selection.name}</MenuItem>
                                                ))}
                                            </Select>
                                    </Grid>


                </Container>

            {/* close the top container */}
            </Box>
            <Box>
                <Box>
                    {renderCallSheetEvent}
                </Box>
                <Box>
                    {renderCallSheetStaff}
                </Box>                
                    <Box sx={{
                        width: '100%',
                        backgroundColor: 'primary'
                    }}>
                        <TextField
                            label="Call Sheet Name" 
                            variant="outlined" 
                            name="name"
                            value={formData.name} 
                            onChange={handleEditChange}
                            />
                        <TextField
                            label="Event Notes...Parking, wardrobe, etc" 
                            variant="outlined" 
                            name="notes"
                            multiline
                            value={formData.notes} 
                            onChange={handleEditChange}
                            />
                    </Box>
            </Box>
        </Box>
        
    )
}

export default CallSheetBuilderMaterial