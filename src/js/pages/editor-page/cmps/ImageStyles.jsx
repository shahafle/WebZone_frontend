export function ImageStyles({ element, onChangeStyle, onUploadImg }) {
   return <div className="flex column style-inputs">
      <label >Border Radius:
         <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={+element.style.borderRadius} />
      </label>
      <label >Size:
         <input type="range" min={1} max={200} onChange={onChangeStyle} name='width' value={+element.style.width} />
      </label>
      <label> Upload Image
         <input onChange={(ev) => onUploadImg(ev, false)} type="file" />
      </label>
   </div>
}