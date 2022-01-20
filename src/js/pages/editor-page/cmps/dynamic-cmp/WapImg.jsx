import { FaTrash } from 'react-icons/fa';

export function WapImg(props) {
   const { cmp, onSetCurrElement, onRemoveElement, currElementId, style } = props

   return <span>
      <img style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         src={cmp.url}
         onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
         onMouseOver={({ target }) => { target.classList.add('element-hover') }}
         onClick={(ev) => onSetCurrElement(ev, cmp)} alt="No img" />
      {cmp.id === currElementId && < FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />}
   </span>
}