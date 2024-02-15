import React from "react";
import { Box, createTheme, ThemeProvider} from "@mui/material";
import { StyledLogo } from "./styled_Components";
import FabTitle from "./FabTitle";
import ButtonGroupNav from "./ButtonGroupNav";
import mainLogo from './Logo.png';


export default function NavBar() {
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
            <Box sx={{
                maxWidth: '100vw',
                position: 'relative',
                display: 'flex',
                margin: '0px',
                height: '15vh',
                background: 'linear-gradient(90deg, rgba(41,70,66,1) 24%, rgba(35,37,42,1) 72%)',
                opacity: '1',
                padding: '0px',
                zIndex: 1,
            }}>
                <StyledLogo src= {mainLogo} alt='MyLogo'></StyledLogo>
                <ButtonGroupNav></ButtonGroupNav>
                <FabTitle></FabTitle>
            </Box>
        </ThemeProvider>
    )
}