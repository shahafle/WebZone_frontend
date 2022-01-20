export function TextStyles({ elementStyle, onChangeStyle }) {
   return <div className="flex column edit-style-section">
      <div>
         Align:
         <div>
            <button onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'start' } })}>left</button>
            <button onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'center' } })}>center</button>
            <button onClick={() => onChangeStyle({ target: { name: 'textAlign', value: 'end' } })}>right</button>
         </div>
      </div>
      <div>
         Decoration:
         <div>
            <button onClick={() => onChangeStyle({ target: { name: 'fontWeight', value: (elementStyle.fontWeight === '400') ? '800' : '400' } })}>B</button>
            <button onClick={() => onChangeStyle({ target: { name: 'fontStyle', value: (elementStyle.fontStyle === 'Italic') ? 'normal' : 'Italic' } })}>I</button>
            <button onClick={() => onChangeStyle({ target: { name: 'textDecoration', value: (elementStyle.textDecoration === 'underline') ? 'none' : 'underline' } })}>U</button>
         </div>
      </div>
      <label>Font size:
         <input type="range" min={0} max={100} onChange={onChangeStyle} name='fontSize' value={+elementStyle.fontSize} />
      </label>
      <label>Font color:
         <input type="color" onChange={onChangeStyle} name='color' value={elementStyle.color} />
      </label>
      <label>Letter spacing:
         <input type="range" min={0} max={50} onChange={onChangeStyle} name='letterSpacing' value={+elementStyle.letterSpacing} />
      </label>
      {/* <label>Line height:
         <input type="range" min={0} max={50} onChange={onChangeStyle} name='lineHeight' value={+elementStyle.lineHeight} />
      </label> */}
      <label>Text shadow:
         <select name="textShadow" onChange={onChangeStyle} value={elementStyle.textShadow}>
            <option value="none">none</option>
            <option value="1px 1px 3px black">Light</option>
            <option value="5px 5px 3px black">Medium</option>
            <option value="10px 10px 5px black">Strong</option>
         </select>
      </label>
      <label>Font family:
         <select name="fontFamily" onChange={onChangeStyle} value={elementStyle.fontFamily}>
            <option value="unna">Unna</option>
            <option value="bitter">Bitter </option>
            <option value="kalam">Kalam</option>
         </select>
      </label>


   </div>
}