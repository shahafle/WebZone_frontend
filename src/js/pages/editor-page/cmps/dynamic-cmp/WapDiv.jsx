import { FaTrash } from 'react-icons/fa';
import { DynamicCmp } from './DynamicCmp';

export function WapDiv(props) {
   const { cmp, onSetCurrElement, onRemoveElement, currElementId, style } = props

   return <div onClick={(ev) => onSetCurrElement(ev, cmp)}
      onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
      onMouseOver={({ target }) => { target.classList.add('element-hover') }}
      style={style}
      className={((cmp.id === currElementId) ? 'edit-active ' : '') + (cmp.name || '')}>

      {
         cmp.cmps && cmp.cmps.map(c => {
            const propsCopy = { ...props }
            delete propsCopy.cmp
            return <DynamicCmp key={c.id} cmp={c} {...propsCopy} />
         })
      }
      {/* <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} /> */}

   </ div >
}