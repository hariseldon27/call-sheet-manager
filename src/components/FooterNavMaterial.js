import * as React from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import FestivalIcon from '@mui/icons-material/Festival';
import PersonIcon from '@mui/icons-material/Person';

function FooterNavMaterial() {
  const [value, setValue] = React.useState(0);

  return (
    
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{mt: '20px'}}
      >
        <BottomNavigationAction component={RouterLink} to={'/'} label="Home" icon={<PhoneAndroidIcon />} />
        <BottomNavigationAction component={RouterLink} to={'/staff'} label="Staff" icon={<PersonIcon />} />
        <BottomNavigationAction component={RouterLink} to={'/events'} label="Events" icon={<FestivalIcon />} />
        <BottomNavigationAction component={RouterLink} to={'/callsheets'} label="Call Sheets" icon={<SnippetFolderIcon />} />
      </BottomNavigation>
 
  );
}

export default FooterNavMaterial