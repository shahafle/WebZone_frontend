import { FaTrash } from 'react-icons/fa';


export function WapBtn(props) {
   const { cmp, onSetCurrElement, onRemoveElement, style, currElementId } = props

   if (cmp.isPublished) {
      return <a style={style} href={cmp.url}>{cmp.txt}</a>
   }

   return <div>
      <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##' className={cmp.id === currElementId ? 'edit-active' : ''}>{cmp.txt}</a>
      <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
   </div>
}