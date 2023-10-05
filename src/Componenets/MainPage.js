import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';
// import NavBar from './NavBar';
import Dashboard from './Dashboard';

const MainPage = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1800, // the reason why Container has blankspaces are solved,
                  // its beacause 'Container' Component has ** Default MAXWidth ***.
                  // provide a themeProvider with breakpoints if you want RESPONSIVE PAGE Design.
      },
    },
  });
    
  return (
    <ThemeProvider theme={ theme }>
        <Container sx={{
          maxWidth: 'none',
          height: "350vh",
          // width: "100vh", ** problem solved, as using viewport Height is not available for WIDTH!!!
          // Please remember to use Viewport Height -- Benefits of using Viewport Height: 
          // Responsive Design(Unless changing the shape of the component)
          // Device Independencies, Can adjust to any design and dependencies.
          background: 'linear-gradient(90deg, rgba(41,70,66,1) 24%, rgba(35,37,42,1) 72%)',
          border: '3px transparent',
          padding: '1px',
          margin: '0',
          fontSize: 'calc(10px + 2vmin)',
          color: 'rgb(255, 255, 255)',
        }}>


          <Dashboard></Dashboard>
          









        </Container>
    </ThemeProvider>
  )
}

export default MainPage
