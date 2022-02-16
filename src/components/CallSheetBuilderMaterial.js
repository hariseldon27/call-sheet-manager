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


function CallSheetBuilderMaterial() {

    const [staffList, setStaffList] = useState([])
    const staffers = staffList.map((individualStaff) => individualStaff);
    const [checkedValues, setCheckedValues] = useState([]);
    const cvProps = { staffers, checkedValues, setCheckedValues };
    const [eventList, setEventList] = useState([])
    const indivEvent = eventList.map((eachEvent) => eachEvent)
    
    const [callSheetData, setCallSheetData] = useState({
        callSheetStaffIds: [],
        callSheetEventId: [],
        callSheetNotes: "Notes..."
    })
    const { callSheetStaffIds, callSheetEventId, callSheetNotes } = callSheetData
    
    const [selectedStaff, setSelectedStaff] = useState([])
    
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
    //callsheet data
    useEffect(()=> {
        console.log(selectedStaff)
    }, [selectedStaff])

    console.log(selectedStaff)

    
            const staffChecks = []
            const handleChecked = e => {
                const staffId = e.target.id
                if (e.target.checked) {
                    staffChecks.push(staffId)
                }
                else {
                    const removeIndex = staffChecks.indexOf(staffId)
                    if (removeIndex > -1)
                    {
                        staffChecks.splice(removeIndex, 1); 
                    }

                    // return staffChecks.filter(item => item === staffId)
                }
                console.log(staffChecks)
            }
            
                
            function StaffSelector(e) {

                return (
                    <FormGroup>
                        {staffers.map((staff, id) => (
                            <FormControlLabel key={id}
                            control={
                                 <Checkbox id={`${id}`} onChange={handleChecked} />
                            }
                            label={staff.name}
                        />
                        ))}
                    </FormGroup>
                )
            }
    

    return (
        <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Choose Staff</FormLabel>
                <StaffSelector />
            <FormHelperText>Choose Wisely</FormHelperText>
            </FormControl>
            <FormControl >

            </FormControl>
        </Box>
    )
}

export default CallSheetBuilderMaterial