import { useState } from 'react';

import { ChromePicker } from 'react-color';
import { IoMdColorFilter } from "react-icons/io";



export function ColorInput({ currColor, onChange }) {

   const [showColorInput, toggleColorInput] = useState(false);

   // currColor = currColor || '#0e0e0e'

   const onToggleColorInput = () => {
      console.log('hi');
      toggleColorInput(!showColorInput)
   }

   const popover = {
      position: 'absolute',
      zIndex: '500000',
      top: '-100px',
      left: '-15px'
   }
   const screen = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
   }

   return <div className='color-input-container'>
      <button className='color-input' onClick={onToggleColorInput}
         style={{ 'backgroundColor': currColor }}><IoMdColorFilter /></button>

      {showColorInput && <div style={popover} className={showColorInput ? '' : 'popover-close'}>
         <div style={screen} onClick={onToggleColorInput} className='color-input-screen' />
         <ChromePicker disableAlpha={true}
            onChange={onChange} color={currColor} />
      </div>}
   </div>
}