import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';



export default function FabTitle() {




  

  


  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      right: '1.5%',
      transform: 'translateY(-50%)',
    }}>
      
      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
      
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Orpheus
      </Fab>
      
      {/* <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab> */}
    </Box>
  );
}