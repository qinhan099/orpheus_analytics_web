import React from "react";
import { Box } from "@mui/material";



export default function DashTitle(){




    return (
        <Box sx={{
            position: 'relative',
            top: '0%',
            left: '0%',
            height: '5vh',
            padding: '0px',
            textAlign: 'justify',
            boarder: '4px solid white',
            background: 'linear-gradient(90deg, rgba(41,70,66,1) 24%, rgba(35,37,42,1) 72%)',
            fontWeight: 'bold'
        }}>
            Trending Tokens on Market
        </Box>
    )
}