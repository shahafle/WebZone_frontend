import { TwitterPicker, CirclePicker } from 'react-color';
import { ColorInput } from '../../../cmps/ColorInput';


// for color picker
const colors = ['#ffffff00', '#1b1b1b', '#3a3a3a', '#707070', '#a0a0a0', '#d6d6d6', '#ffffff', '#1d375a', '#697689', '#a0d0bb', '#835c94', '#c84a4a', '#f0e1c8', 'transparent']


export function BgcStyles({ element, onChangeStyle, onChangeColor }) {
   return <div className="flex column style-inputs color-picker align-start">
      <ColorInput currColor={element.style.backgroundColor} onChange={(ev) => onChangeColor(ev, 'backgroundColor')} />
      <CirclePicker colors={colors} width={255} onChange={(ev) => onChangeColor(ev, 'backgroundColor')} triangle={'hide'} />
   </div>
}