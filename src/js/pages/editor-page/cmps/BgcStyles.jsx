import { TwitterPicker, CirclePicker } from 'react-color';


// for color picker
const colors = ['#1b1b1b', '#3a3a3a', '#707070', '#a0a0a0', '#d6d6d6', '#ffffff', '#1d375a', '#697689', '#a0d0bb', '#835c94', '#c84a4a', '#f0e1c8']


export function BgcStyles({ element, onChangeStyle, onChangeColor }) {
   return <div className="flex column style-inputs color-picker">
      <CirclePicker colors={colors} width={255} onChange={(ev) => onChangeColor(ev, 'backgroundColor')} triangle={'hide'} />
      {/* <input type="color" style={{ width: 30, height: 30, marginRight: '1px' }} onChange={onChangeStyle} name='color' value={elementStyle.color} /> */}

   </div>
}