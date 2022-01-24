
export function InputStyles({ element, onChangeStyle, onUploadImg, onChangeAttr }) {


   return <div className="flex column style-inputs">
      <label>Label
         <input className="url-input" onChange={(ev) => onChangeAttr(ev)} type="text" name='label' value={element.label} />
      </label>
      <label>Placeholder
         <input className="url-input" onChange={(ev) => onChangeAttr(ev)} type="text" name='placeholder' value={element.placeholder} />
      </label>
   </div>

}