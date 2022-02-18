import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Stack from '@mui/material/Stack';



function HomeMaterial() {


  return (
    <Box sx={{
        py: 6
    }}>
        
        <Stack >
           <Box sx={{
               display: 'grid',
               width: 300,
               mx: 'auto',
               mb: 5,
           }}>
               {/* home buttons here */}
        <Button 
            component={RouterLink} 
            to={'/staff'} 
            key="staff"
            variant="contained"
            padding= '50px'
            m = '50px' >
                Staff
        </Button>
        <br></br>
        <Button 
            
            component={RouterLink} 
            to={'/events'} 
            key="events"
            variant="contained">
                Events
        </Button>
        <br></br>
        <Button 

            component={RouterLink} 
            to={'/callsheets/editor'} 
            key="callsheets"
            variant="contained">
                New Call Sheet
        </Button>
            </Box>
               
        </Stack>
    </Box>  
    
    
    )
}

export default HomeMaterial