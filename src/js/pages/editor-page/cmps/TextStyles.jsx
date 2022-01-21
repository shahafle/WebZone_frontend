import { FaAlignLeft } from 'react-icons/fa';
import { FaAlignCenter } from 'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa';


export function TextStyles({ elementStyle, onChangeStyle }) {
   console.log('elementStyle:', elementStyle)
   return <div className="flex column style-inputs">
      <div>
         Align :
         <div className="flex">
            <button className="flex" onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'start' } })} style={{ color: elementStyle.textAlign === 'start' ? '#904bcf' : 'inherit' }}><FaAlignLeft /></button>
            <button className="flex" onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'center' } })} style={{ color: elementStyle.textAlign === 'center' ? '#904bcf' : 'inherit' }}><FaAlignCenter /></button>
            <button className="flex" onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'end' } })} style={{ color: elementStyle.textAlign === 'end' ? '#904bcf' : 'inherit' }}><FaAlignRight /></button>
         </div>
      </div>
      <div>
         Decoration :
         <div>
            <button onClick={() => onChangeStyle({ target: { name: 'fontWeight', value: (elementStyle.fontWeight === '400') ? '700' : '400' } })} style={{ fontWeight: 700, color: elementStyle.fontWeight === '700' ? '#904bcf' : 'inherit' }}>B</button>
            <button onClick={() => onChangeStyle({ target: { name: 'fontStyle', value: (elementStyle.fontStyle === 'italic') ? 'normal' : 'italic' } })} style={{ fontStyle: 'italic', color: elementStyle.fontStyle === 'italic' ? '#904bcf' : 'inherit' }}>I</button>
            <button onClick={() => onChangeStyle({ target: { name: 'textDecoration', value: (elementStyle.textDecoration === 'underline') ? 'none' : 'underline' } })} style={{ textDecoration: 'underline', color: elementStyle.textDecoration === 'underline' ? '#904bcf' : 'inherit' }}>U</button>
         </div>
      </div>
      <label>Font Size :
         <input type="range" min={0} max={100} onChange={onChangeStyle} name='fontSize' value={+elementStyle.fontSize} />
      </label>
      <label>Letter Spacing :
         <input type="range" min={0} max={50} onChange={onChangeStyle} name='letterSpacing' value={+elementStyle.letterSpacing} />
      </label>
      <label>Font Color :
         <input type="color" onChange={onChangeStyle} name='color' value={elementStyle.color} />
      </label>
      {/* <label>Line height:
         <input type="range" min={0} max={50} onChange={onChangeStyle} name='lineHeight' value={+elementStyle.lineHeight} />
      </label> */}
      <label>Text Shadow :
         <select name="textShadow" onChange={onChangeStyle} value={elementStyle.textShadow}>
            <option value="none">none</option>
            <option value="1px 1px 3px black">Light</option>
            <option value="5px 5px 3px black">Medium</option>
            <option value="10px 10px 5px black">Strong</option>
         </select>
      </label>
      <label>Font Family :
         <select name="fontFamily" onChange={onChangeStyle} value={elementStyle.fontFamily}>
            <option disabled>- Sans Serif -</option>
            <option value="montserrat">Montserrat</option>
            <option value="nunitosans">Nunito Sans</option>
            <option value="poppins">Poppins</option>
            <option value="quicksand">Quicksand</option>
            <option value="raleway">Raleway</option>
            <option disabled>- Serif -</option>
            <option value="bitter">Bitter </option>
            <option value="ptserif">PT Serif</option>
            <option value="unna">Unna</option>
            <option disabled>- Handwriting -</option>
            <option value="kalam">Kalam</option>
            <option value="mali">Mali</option>
            <option value="cursive">Cursive</option>
         </select>
      </label>
   </div>
}