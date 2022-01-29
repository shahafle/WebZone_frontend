import { useState } from 'react';

import { ChromePicker } from 'react-color';
import { IoMdColorFilter } from "react-icons/io";



export function ColorInput({ currColor, onChange }) {

   const [showColorInput, toggleColorInput] = useState(false);

   // currColor = currColor || '#0e0e0e'

   const onToggleColorInput = (ev) => {
      ev.preventDefault();
      toggleColorInput(!showColorInput)
   }

   const popover = {
      position: 'absolute',
      top: '-100px',
      left: '-15px',
      zIndex: 1,
   }
   const screen = {
      position: 'fixed',
      inset: '0px',
   }

   return <div className='color-input-container'>
      <button className='color-input'
         onClick={onToggleColorInput}
         style={{ 'backgroundColor': currColor }}><IoMdColorFilter />
      </button>

      {showColorInput &&
         <div style={popover}>

            <div style={screen} onClick={onToggleColorInput} />

            <ChromePicker onChange={onChange} color={currColor} />
         </div>}
   </div>
}