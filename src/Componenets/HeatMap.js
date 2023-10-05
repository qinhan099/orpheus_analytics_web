import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react'

const HeatMap = () => {


    const theme = createTheme({
        breakpoints:{
            values: {
                xs:0,
                sm:600,
                md:960,
                lg:1800,
            }
        }
    });


  return (
    <ThemeProvider theme={ theme }>
        <Container sx={{
            position: 'relative',
            maxWidth: '100vw',
            height: '300vh',
            color: 'white',
            background: 'linear-gradient(90deg, rgba(41,70,66,1) 24%, rgba(35,37,42,1) 72%)',
            padding: '1px', //here I added 1px to padding to avoid it.
            border: '0', // I can also add dotted 3px transparent to also do the same magic.

            /**When two adjacent elements have margins, the larger margin value will "win," and the 
             * smaller margin will collapse or disappear. This happens vertically, both at the top 
             * and bottom of elements. */

        }}>
            <Container sx={{
                maxWidth: '80vw',
                position:'absolute',
                marginRight: '15%',
                marginLeft: '15%',
                alignContent: 'center',
                border: '3px dotted black'
            }}>
                <h1>This is a Heating Map</h1>
                <p1>Top trading volumes are going to be rendered here</p1>
            </Container>

        </Container>

    </ThemeProvider>
  )
}

export default HeatMap
