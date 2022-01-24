
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const color1 = '#1d375a';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
    }
})

const PrettoSlider = styled(Slider)({
    color: color1,
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: color1,
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});



export function ButtonStyles({ element, onChangeStyle, onChangeAttr }) {
    return <div className="flex column style-inputs">
        <label>Border Radius
            {/* <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={element.style.borderRadius} /> */}
            <Box >
                <Box sx={{ m: 3 }} sx={{ width: 100 }} />
                <PrettoSlider
                    onChange={onChangeStyle} name='borderRadius' value={+element.style.borderRadius} min={0} max={100}
                />
            </Box>
        </label>
        <label>Link to
            {/* <ThemeProvider theme={theme}>
                <Box>
                    <TextField type="url" sx={{ backgroundColor: '#ffffff' }} color='primary' onChange={onChangeAttr} name='url' value={element.url} />
                </Box>
            </ThemeProvider> */}
            <input className="url-input" type="url" onChange={onChangeAttr} name='url' value={element.url} />
        </label>
        {/* <label>border:
            <input type="range" min={0} max={10} onChange={onChangeStyle} name='border' value={elementStyle.border} />
        </label> */}
        {/* <input type="color" onChange={onChangeStyle} name="border" value={elementStyle.border} /> */}
    </div>
}