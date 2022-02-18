import React, { useEffect, useState } from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import uuid from 'react-uuid'
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';





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
        const updatedItems = eventToAdd.filter(item => item !== eventToGo );
        setEventInEditor(updatedItems)
        const updatedEventCards = eventCallSheetCards.filter(item => item.id !==  eventToGo )
        setEventCallSheetCards([updatedEventCards])        
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
        fetch(`http://localhost:3006/events/${eventId}`)
        .then((r)=> r.json())
        .then((card) => setEventCallSheetCards([card]))
    }

    function handleAddText(e) {

    }

//these are the table builder functions
    function renderRow(staffId, arryToUse) {
        const correctedId = 1 + parseInt(staffId, 10)
        const rows = arryToUse.filter((row) => row.id === correctedId)
            return rows.map((entry, index) => 
            
            <TableRow key={uuid()}>
                        <TableCell 
                        key={uuid()} 
                        color="primary.main" 
                        id={staffId}
                        name="deleteButton"
                        onClick={handleStaffRemove}
                        position="absolute"
                        cursor="pointer"
                        >
                        Remove
                        </TableCell>
                {renderCells(entry, staffId)}
            </TableRow>)
    }
    function renderEventRowHead(eventId, arryToUse) {
        const rows = arryToUse.filter((row) => row.id === eventId)
            return rows.map((entry, index) => <TableRow key={entry.id}>{renderCells(entry, eventId)}</TableRow>)
    }

    function renderCells(rowObject, staffId) {
        const { name, photo, department, phone, email, calltime, notes, id } = rowObject
        return (
            <>
            <TableCell key={name}><Typography component="p" variant="h6"><Avatar alt="{name}" src={photo} /></Typography></TableCell>
            <TableCell key={name}><Typography component="p" variant="h6">{name}</Typography></TableCell>
            <TableCell key={email}><Typography variant="body2">{email}</Typography></TableCell>
            <TableCell key={phone}><Typography variant="body2" textAlign="center">{phone}</Typography></TableCell>
            <TableCell key={department}><Typography variant="body2">{department}</Typography></TableCell>
            <TableCell key={notes}><Typography variant="body2">{notes}</Typography></TableCell>
            </>
        )
        }
//fenceposts - divert our rowobject above and have it build fixed table rows

        //render our call sheet staff buttons

    const renderCallSheetStaff = staffToAdd.map((staffId) => {
        return (
                <>        
                    {renderRow(staffId, staffCallSheetCards)} 
                </>
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
                        <Table sx={{ minWidth: 'md' }} size="small">
                            <TableBody>
                                {renderEventRowHead(eventId, eventCallSheetCards)}
                            </TableBody>
                        </Table>
                    </Box>
            </TableContainer>
            )
        })

        const nameToRender = () => {
            if (eventCallSheetCards.length === 0) {
                return 'select'
            } else{
                return eventCallSheetCards[0].name
            }
        }
        const eventIdToRender = () => {
            if (eventCallSheetCards.length <= 0) {
                return ''
            } else{
                return eventCallSheetCards[0].id
            }
        }


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
                            spacing={4}
                            >
                            <Typography variant="h4">Choose Staffers</Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, }}>
                                    {/* left side this holds the staff buttons to add to the sheet */}
                                    {staffers.map((staff, id) => (
                                        
                                            <Button
                                            item 
                                            key={id} 
                                            variant="outlined" 
                                            color="secondary" 
                                            size="large" 
                                            id={id}
                                            onClick={handleStaffClick}
                                            >{staff.name}</Button>
                                        
                                    ))}     
                            </Box>
                </Container>

                <Container sx={{ 
                            display: 'grid',
                            p: 1,
                            m: 1,
                            width: 'md'
                            }} 
                            >
                                <Typography variant="h4">Choose Event</Typography>
                                {/* right sidehave this hold the event list */}
                                    <Grid item>
                                        <InputLabel id="event-selector-label">Choose Event</InputLabel>
                                            <Select
                                                placeholder="Choose"
                                                labelId="event-selector-label"
                                                id={eventInEditor.id}
                                                label="event-selector"
                                                onChange={handleEventClick}
                                                value={eventIdToRender()}
                                                displayEmpty

                                                >
                                                {eachEvent.map((selection) => (
                                                    <MenuItem key={selection.id} value={selection.id}>{selection.name}</MenuItem>
                                                ))}
                                            </Select>
                                    </Grid>
                </Container>

            {/* close the top container */}
            </Box>

            <Box sx={{ display: 'grid'}} >
                
            </Box> 
            <Box>
                <Box>
                <Typography variant="h4" component="h3">Event In Call Sheet</Typography>
                <Box sx={{
                    backgroundColor: 'primary.light',
                    minHeight: '50px',
                    height: 'auto',
                    width: '100%',
                    my: 4,
                }}>
                    {renderCallSheetEvent}
                </Box>
                </Box>
                <Box sx={{
                    backgroundColor: 'primary',
                    height: '50',
                    width: '100',
                    my: 4,
                }}>
                    <Typography variant="h4" component="h3" >Staff In Call Sheet</Typography>
                    <Box sx={{
                        backgroundColor: 'primary.light',
                        minHeight: '50px',
                        height: 'auto',
                        width: '100%',
                        my: 4,
                    }}>
                        <TableContainer>
                        <Table sx={{ minWidth: 'md' }} size="small">
                        
                            <TableHead>
                                <TableRow key={uuid()}>
                                    <TableCell key="tableDel"> </TableCell>
                                    <TableCell key="tablePicture"> </TableCell>
                                    <TableCell key="tableName">Name</TableCell>
                                    <TableCell key="tableEmail">Email</TableCell>
                                    <TableCell key="tablePhone">Phone</TableCell>
                                    <TableCell key="tableDeptartment">Department</TableCell>
                                    <TableCell key="tableNotes">Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody key={uuid()}>
                            {renderCallSheetStaff}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Box>
                </Box>                   
            </Box>
        </Box>
        
    )
}

export default CallSheetBuilderMaterial