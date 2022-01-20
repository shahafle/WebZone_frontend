import { FaTrash } from 'react-icons/fa';

export function WapTxt(props) {
   const { cmp, onSetCurrElement, onRemoveElement, currElementId, style } = props
   return <span>
      <p style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         onClick={(ev) => onSetCurrElement(ev, cmp)}
         onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
         onMouseOver={({ target }) => { target.classList.add('element-hover') }}>
         {cmp.txt}
      </p>
      <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
   </span>

}