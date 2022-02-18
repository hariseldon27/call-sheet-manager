import React from 'react'
import Typography from '@mui/material/Typography';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Box from '@mui/material/Box';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Grow from '@mui/material/Grow';


function HeaderMaterial() {
  return (
    <Box sx={{
        textAlign: 'center',
        p: 2,
        backgroundColor: 'secondary.main',
        color: '#fff',
        display: 'flex',
    }}>
        <Typography variant="h4" component="h1" fontFamily='Helvetica Neue'>Call Sheet Manager <ManageAccountsIcon size='large'/></Typography>
      
    </Box>
    
)
}

export default HeaderMaterial