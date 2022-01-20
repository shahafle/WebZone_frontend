export function ImageStyles({ element, onChangeStyle, onUploadImg }) {
   return <div className="flex column edit-style-section">
      <label >Border radius:
         <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={+element.style.borderRadius} />
      </label>
      <label >size:
         <input type="range" min={1} max={200} onChange={onChangeStyle} name='width' value={+element.style.width} />
      </label>
      <label> Upload image
         <input onChange={(ev) => onUploadImg(ev, false)} type="file" />
      </label>
   </div>
}