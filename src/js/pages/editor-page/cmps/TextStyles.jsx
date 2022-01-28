import * as React from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import { FaAlignCenter } from 'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa';
import { MdOutlineColorLens } from 'react-icons/md';

import { TwitterPicker, CirclePicker } from 'react-color';


import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorInput } from '../../../cmps/ColorInput';

const color1 = '#1d375a';

// for color picker
const colors = ['#ffffff00', '#1b1b1b', '#3a3a3a', '#707070', '#a0a0a0', '#d6d6d6', '#ffffff', '#1d375a', '#697689', '#a0d0bb', '#835c94', '#c84a4a', '#f0e1c8']

// for selects
const theme = createTheme({
   palette: {
      primary: {
         // main: color1,
         main: '#eeeeee'
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




export function TextStyles({ elementStyle, onChangeStyle, onChangeColor }) {
   return <div className="flex column style-inputs">
      <div>
         Align
         <div className="flex btns-container align">
            <button onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'start' } })} className={elementStyle.textAlign === 'start' ? 'active' : 'muted'} ><FaAlignLeft /></button>
            <button onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'center' } })} className={elementStyle.textAlign === 'center' ? 'active' : 'muted'}><FaAlignCenter /></button>
            <button onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'end' } })} className={elementStyle.textAlign === 'end' ? 'active' : 'muted'}><FaAlignRight /></button>
         </div>
      </div>
      <div>
         Decoration
         <div className='flex btns-container decorations'>
            <button onClick={() => onChangeStyle({ target: { name: 'fontWeight', value: (elementStyle.fontWeight === '400') ? '700' : '400' } })} className={elementStyle.fontWeight === '700' ? 'active' : 'muted'}>B</button>
            <button onClick={() => onChangeStyle({ target: { name: 'fontStyle', value: (elementStyle.fontStyle === 'italic') ? 'normal' : 'italic' } })} className={elementStyle.fontStyle === 'italic' ? 'active' : 'muted'}>I</button>
            <button onClick={() => onChangeStyle({ target: { name: 'textDecoration', value: (elementStyle.textDecoration === 'underline') ? 'none' : 'underline' } })} className={elementStyle.textDecoration === 'underline' ? 'active' : 'muted'}>U</button>
         </div>
      </div>
      <label>Font Size
         <Box >
            <Box sx={{ m: 3 }} sx={{ width: 100 }} />
            <PrettoSlider
               valueLabelDisplay="auto"
               aria-label="pretto slider"
               min={0} max={100} onChange={onChangeStyle} name='fontSize' value={+elementStyle.fontSize} />
         </Box>
      </label>
      <label>Letter Spacing
         <Box >
            <Box sx={{ m: 3 }} sx={{ width: 100 }} />
            <PrettoSlider
               valueLabelDisplay="auto"
               aria-label="pretto slider"
               min={0} max={50} onChange={onChangeStyle} name='letterSpacing' value={+elementStyle.letterSpacing} />
         </Box>
      </label>

      <label>Text Shadow
         <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 120 }}>
               <FormControl color='primary' focused={false} fullWidth>
                  <Select
                     name="textShadow" onChange={onChangeStyle} value={elementStyle.textShadow}>
                     <MenuItem value="none">none</MenuItem>
                     <MenuItem value="1px 1px 3px #000000">Light</MenuItem>
                     <MenuItem value="5px 5px 3px #000000">Medium</MenuItem>
                     <MenuItem value="10px 10px 5px #000000">Strong</MenuItem>
                  </Select>
               </FormControl>
            </Box>
         </ThemeProvider>

      </label>
      <label>Font Family
         <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 120 }}>
               <FormControl color='primary' focused={false} fullWidth>
                  <Select
                     name="fontFamily" onChange={onChangeStyle} value={elementStyle.fontFamily}>
                     <MenuItem sx={{ fontFamily: 'montserrat' }} value="montserrat">Montserrat</MenuItem>
                     <MenuItem sx={{ fontFamily: 'nunitosans' }} value="nunitosans">Nunito Sans</MenuItem>
                     <MenuItem sx={{ fontFamily: 'poppins' }} value="poppins">Poppins</MenuItem>
                     <MenuItem sx={{ fontFamily: 'quicksand' }} value="quicksand">Quicksand</MenuItem>
                     <MenuItem sx={{ fontFamily: 'raleway' }} value="raleway">Raleway</MenuItem>
                     <MenuItem sx={{ fontFamily: 'bitter' }} value="bitter">Bitter </MenuItem>
                     <MenuItem sx={{ fontFamily: 'ptserif' }} value="ptserif">PT Serif</MenuItem>
                     <MenuItem sx={{ fontFamily: 'unna' }} value="unna">Unna</MenuItem>
                     <MenuItem sx={{ fontFamily: 'kalam' }} value="kalam">Kalam</MenuItem>
                     <MenuItem sx={{ fontFamily: 'mali' }} value="mali">Mali</MenuItem>
                     <MenuItem sx={{ fontFamily: 'cursive' }} value="cursive">Cursive</MenuItem>
                  </Select>
               </FormControl>
            </Box>
         </ThemeProvider>
      </label>
      <label className='color-picker'>Color
         <ColorInput currColor={elementStyle.color} onChange={(ev) => onChangeColor(ev, 'color')} />
         <CirclePicker colors={colors} width={'100%'} onChange={(ev) => onChangeColor(ev, 'color')} triangle={'hide'} />
      </label>
      {/* <input type="color" style={{ width: 30, height: 30, marginRight: '1px' }} onChange={onChangeStyle} name='color' value={elementStyle.color} /> */}
   </div>
}