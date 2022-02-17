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





function CallSheetBuilderMaterial() {

    const [staffList, setStaffList] = useState([])
    const staffers = staffList.map((individualStaff) => individualStaff);
    const [eventList, setEventList] = useState([])
    const eachEvent = eventList.map((eachEvent) => eachEvent)

    const [staffToAdd, setStaffToAdd] = useState([])
    const [staffCallSheetCards, setStaffCallSheetCards] = useState([])
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
    function handleEditChange(e){
        setFormData((updated) => ({...updated, [e.target.name]: e.target.value}))
      } 

    function handleStaffRemove(e) {
        e.preventDefault()
        const staffToGo = e.target.id
        console.log(staffToGo)
        const updatedItems = staffToAdd.filter(item => item !== staffToGo);
        setStaffToAdd(updatedItems)
        const correctedId = 1 + parseInt(staffToGo, 10)
        const updatedStaffCards = staffCallSheetCards.filter(item => item.id !== ( correctedId ))
        setStaffCallSheetCards(updatedStaffCards)
        }
      
    function staffCardGetter(staffId) {
        const cardId = 1 + parseInt(staffId, 10)
        // console.log(cardId)
        fetch(`http://localhost:3006/staff/${cardId}`)
        .then((r)=> r.json())
        .then((cards) => setStaffCallSheetCards([...staffCallSheetCards, cards]))
    }
    
    // console.log(staffCallSheetCards)
    console.log(formData)

//these are the table builder functions
    function renderRow(staffId, arryToUse) {
        const correctedId = 1 + parseInt(staffId, 10)
        const rows = arryToUse.filter((row) => row.id === correctedId)
            return rows.map((entry, index) => <TableRow key={index}>{renderCells(entry, staffId)}</TableRow>)
    }

    function renderCells(rowObject, staffId) {
        const entries = Object.values(rowObject)
        

        // return entries.map((cells) => (
        //     cellChecker(cells, staffId)
        //     ))
        }
//fenceposts - divert our rowobject above and have it build fixed table rows

        function cellChecker(cellData, staffId) {
            if (
                typeof cellData === 'object' &&
                !Array.isArray(cellData) &&
                cellData !== null 
            ) {
                const cellObject = Object.values(cellData)
                return cellObject.map((obj) => <TableRow key={obj.id}>{cellChecker(obj)}</TableRow>)
            } else {
                return <TableCell key={cellData.id}>{cellData}</TableCell>
            }
        }


        
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
                                key={staffId} 
                                variant="oulined" 
                                color="primary.main" 
                                size="large" 
                                id={staffId}
                                onClick={handleStaffRemove}
                                ><DeleteIcon />
                                </Button>
                        <Table>
                            <TableRow>
                            
                            {renderRow(staffId, staffCallSheetCards)}
                            </TableRow>
                        </Table>
                    </Box>
            </TableContainer>
            )
        })

        function createData(name, phone, department, email, calltime, notes ) {
            return { name, phone, department, email, calltime, notes  };
          }

        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
          ];
          
  

    return (

        <Box sx={{
            maxWidth: 'md',
            mx:'auto',
        }}>
            <Box sx={{ 
                mx:'auto',
                py: 5,
                display: 'inline-flex'
                }}>

                <Box sx={{
                    display: 'flex'
                 }}>
                    {/* left side this holds the staff buttons to add to the sheet */}
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
                </Box>
                <Box sx={{
                    display:'flex'
                }}> 
                    {/* right sidehave this hold the event list */}

                </Box>
            {/* close the top container */}
            </Box>
            <Box>
                <Box>
                    {/* {renderCallSheetStaff} */}

                    <TableContainer>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Department</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">calltime</TableCell>
                                <TableCell align="right">notes</TableCell>
                                <TableCell align="right">pic</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell>

                                </TableCell>
                                <TableCell align="right">
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://i.pinimg.com/originals/a9/e5/06/a9e506364ae6b6892e6a126a2f021206.gif"
                                        sx={{ width: 50, height: 50 }}
                                    />
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </TableContainer>


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