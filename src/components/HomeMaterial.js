import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper'
import FolderIcon from '@mui/icons-material/Folder';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors' 


function HomeMaterial() {

    const buttons = [
        <Button component={RouterLink} to={'/staff'} key="staff">Staff</Button>,
        <Button component={RouterLink} to={'/events'} key="events">Events</Button>,
        <Button component={RouterLink} to={'/callsheets'} key="callsheets">Call Sheets</Button>,
      ];


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
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                    size="large"
                    
                >
                    {buttons}
                </ButtonGroup>
            </Box>
            
             <Paper sx={{width: 500, mx: 'auto'}}>
                <Box sx={{ 
                    flexGrow: 1,
                    alignContent: 'center',
                    display: 'grid',
                    mx: 'auto'
                    }}>
                    <List>
                        <Typography component="h2" variant="h4">Recent Call Sheets</Typography>
                        <Divider />
                        <ListItem>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Whitehouse Photo Op" secondary="22 Apr 2022"/>
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Instagram Product Shoot" secondary="15 Mar 2022"/>
                        </ListItem>
                        <ListItem component={RouterLink} to={'/callsheets'}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Event: Awesome Photo Thing" secondary="Jan 20 2022"/>
                        </ListItem>
                    
                    </List>
                </Box>
            </Paper>
            
        </Stack>
    </Box>  )
}

export default HomeMaterial