
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PrettoSlider = styled(Slider)({
    color: '#904BCF',
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
        backgroundColor: '#904BCF',
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



export function SectionStyle({ element, onChangeStyle, onUploadImg }) {
    return <div className="flex column style-inputs">
        <label> Set Height
            <Box >
                <Box sx={{ m: 3 }} sx={{ width: 100 }} />
                <PrettoSlider
                    min={0} max={200} onChange={onChangeStyle} name='paddingBlock' value={+element.style['paddingBlock']} />
            </Box>
        </label>
        <label> Side Spacing
            <Box >
                <Box sx={{ m: 3 }} sx={{ width: 100 }} />
                <PrettoSlider

                    min={0} max={150} onChange={onChangeStyle} name='paddingInline' value={+element.style['paddingInline']} />
            </Box>
        </label>
        <label> Upload Background Image
            <input onChange={(ev) => onUploadImg(ev, true)} type="file" />
        </label>
    </div>
}