import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { FaUpload } from "react-icons/fa";

const color1 = '#1d375a';

const PrettoSlider = styled(Slider)({
    color: color1,
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 18,
        width: 18,
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
        width: 28,
        height: 28,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: color1,
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -80%) rotate(-45deg) scale(1)',
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
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    min={0} max={200} onChange={onChangeStyle} name='paddingBlock' value={+element.style['paddingBlock']} />
            </Box>
        </label>
        <label> Side Spacing
            <Box >
                <Box sx={{ m: 3 }} sx={{ width: 100 }} />
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    min={0} max={150} onChange={onChangeStyle} name='paddingInline' value={+element.style['paddingInline']} />
            </Box>
        </label>
        <label>Image link
            <input className="url-input" onChange={onChangeStyle} type="url" name='backgroundImage' />
        </label>
        <label className="upload-img-label flex" >
            Upload Image
            <input onChange={(ev) => onUploadImg(ev, true)} type="file" />
            <div className='upload-img-btn' ><FaUpload /></div>
        </label>
    </div>
}

