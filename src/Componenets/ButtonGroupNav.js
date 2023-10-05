import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors'
import { Link } from 'react-router-dom';

const ButtonGroupNav = () => {

    const ColorButton = styled(Button)(({ theme }) => ({

        color: theme.palette.getContrastText(purple[500]),
        border: 'none',
        backgroundColor: 'transparent',
        '&:hover':{
          backgroundColor: 'rgba(0, 0, 0, 0.35)', 
          /// 因为之前&:hover里面的backgroundColor = transparent, 所以这就是为什么自动hovering effect没出现。///
        }
      }));

  return (
        <Stack direction='row' spacing={2} sx={{
          position: 'absolute',
          top: '40%',
          left: '10%',
        }}>
          <Link to="/">
            <ColorButton size='large'>Dashboard</ColorButton>
          </Link>
          <Link to='/heatmap'>
            <ColorButton size='large'>Volume HeatMap</ColorButton>
          </Link>
          <Link to='/nlp'>
            <ColorButton size='large'>NLP Trends</ColorButton>
          </Link>
        </Stack>
  )
}

export default ButtonGroupNav
