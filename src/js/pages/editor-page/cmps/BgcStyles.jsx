import { TwitterPicker, CirclePicker } from 'react-color';


// for color picker
const colors = ['#697689', '#1b1b1b', '#ffffff', '#1d375a',]


export function BgcStyles({ element, onChangeStyle, onChangeColor }) {
   return <div className="flex column style-inputs">


      <label>Font Color
         <CirclePicker colors={colors} width={170} onChange={(ev) => onChangeColor(ev, 'backgroundColor')} triangle={'hide'} />
         {/* <input type="color" style={{ width: 30, height: 30, marginRight: '1px' }} onChange={onChangeStyle} name='color' value={elementStyle.color} /> */}
      </label>
   </div>
}