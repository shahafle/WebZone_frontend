

export function ImageStyles({ elementStyle, onChangeStyle }) {
   return <div>
      <label >Border radius:
         <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={+elementStyle.borderRadius} />
      </label>
      <label >size:
         <input type="range" min={1} max={200} onChange={onChangeStyle} name='width' value={+elementStyle.width} />
      </label>
   </div>
}