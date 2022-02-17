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

        console.log(eventInEditor)
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
        console.log("after add eventcards is: " + eventCallSheetCards)
        setEventInEditor(() => e.target.value)

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
        const eventToGo = e.target.id
        console.log("handEventRemove thinks eventToGo is: " + eventToGo)
        // const correctedId = 1 + parseInt(eventToGo, 10)
        // console.log("handEventRemove thinks correctedId is: " + correctedId)

        const updatedItems = eventToAdd.filter(item => item !== eventToGo );
        setEventInEditor(updatedItems)


        const updatedEventCards = eventCallSheetCards.filter(item => item.id !==  eventToGo )
        // console.log("handleEventRemove thinks updatedEventCards prior to state Type is: " + typeof updatedEventCards)
        setEventCallSheetCards([updatedEventCards])
        
        
        // console.log("in handleRemove after remove updated eventcards is: " + updatedEventCards)
    }
    // console.log("eventToAdd are:" + eventToAdd)
      
    function staffCardGetter(staffId) {
        const cardId = 1 + parseInt(staffId, 10)
        // console.log(cardId)
        fetch(`http://localhost:3006/staff/${cardId}`)
        .then((r)=> r.json())
        .then((cards) => setStaffCallSheetCards([...staffCallSheetCards, cards]))
    }
    function eventCardGetter(eventId) {
        // const cardId = 1 + parseInt(eventId, 10)
        // console.log("eventCardGetter says eventId is: " + eventId)
        // console.log("eventCardGetter says cardId is: " + cardId)
        fetch(`http://localhost:3006/events/${eventId}`)
        .then((r)=> r.json())
        .then((card) => setEventCallSheetCards([card]))
    }

    // const selectVals = () => {
    //     if (eventCallSheetCards.length <= 0) {
    //         return 1
    //     }
    //     else {
    //         return eventCallSheetCards
    //     }
    // }
    
    // console.log("staffCallSheetCards are: " + staffCallSheetCards)
    // console.log(formData)

//these are the table builder functions
    function renderRow(staffId, arryToUse) {
        const correctedId = 1 + parseInt(staffId, 10)
        const rows = arryToUse.filter((row) => row.id === correctedId)
            return rows.map((entry, index) => <TableRow key={index}>{renderCells(entry, staffId)}</TableRow>)
    }
    function renderEventRowHead(eventId, arryToUse) {
        // const correctedId = 1 + parseInt(staffId, 10)
        const rows = arryToUse.filter((row) => row.id === eventId)
            return rows.map((entry, index) => <TableBody key={uuid()}><TableRow key={index}>{renderCells(entry, eventId)}</TableRow></TableBody>)
    }

    function renderCells(rowObject, staffId) {
        // const entries = Object.entries(rowObject)
        const { name, photo, department, phone, email, calltime, notes, id } = rowObject
        return (
            <>
            <TableCell><Typography component="p" variant="h6">{name}</Typography></TableCell>
            <TableCell><Typography variant="body2">{email}</Typography></TableCell>
            <TableCell><Typography variant="body2" textAlign="center">{phone}</Typography></TableCell>
            <TableCell><Typography variant="body2">{department}</Typography></TableCell>
            <TableCell><Typography variant="body2">{notes}</Typography></TableCell>
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
                        
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Department</TableCell>
                                    <TableCell>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                        
                            {renderRow(staffId, staffCallSheetCards)}
                        </Table>
                    </Box>
            </TableContainer>
            )
        })
        //render our call sheet event info
    const renderCallSheetEvent = eventToAdd.map((eventId) => {
        // console.log("renderCallSheetEvents thinks eventId is: " + eventId)
        return (
            <TableContainer key={uuid()}>
                    <Box 
                    sx={{
                        backgroundColor: 'primary.light',
                        color: 'black',
                        display: 'flex',
                        width: 'auto',
                    }}
                    key={uuid()}>
                            <Button 
                                key={uuid()} 
                                variant="filled" 
                                color="secondary" 
                                size="large" 
                                id={eventId}
                                onClick={handleEventRemove}
                                
                                >Remove
                                </Button>
                        <Table>
                            {renderEventRowHead(eventId, eventCallSheetCards)}
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
            width: "75%",
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
                                                placeholder="Choose"
                                                labelId="event-selector-label"
                                                id="event-selector"
                                                label="event-selector"
                                                onChange={handleEventClick}
                                                value={eventInEditor}
                                                displayEmpty
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                      return <em>Select Event</em>;
                                                    }
                                                    return selected
                                                  }}
                                                >
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
                <Typography variant="h4" component="h3">Event In Call Sheet</Typography>
                <Box sx={{
                    backgroundColor: 'primary.light',
                    minHeight: '50px',
                    height: 'auto',
                    width: '100%',
                }}>
                    {renderCallSheetEvent}
                </Box>
                </Box>
                <Box sx={{
                    backgroundColor: 'secondary.main',
                    height: '50',
                    width: '100'
                }}>
                    <Typography variant="h4" component="h3" >Staff In Call Sheet</Typography>
                    <Box sx={{
                        backgroundColor: 'primary.light',
                        minHeight: '50px',
                        height: 'auto',
                        width: '100%',
                    }}>
                        {renderCallSheetStaff}
                        </Box>
                </Box>                
                    <Box sx={{
                        width: '100%',
                        backgroundColor: 'secondary'
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