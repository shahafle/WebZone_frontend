export function WapBtn(props) {
   const { cmp, onSetCurrElement, onRemoveElement, style, currElementId } = props

   if (cmp.isPublished) {
      return <span><a style={style} href={cmp.url}>{cmp.txt}</a></span>
   }

   return <span>
      <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##' className={cmp.id === currElementId ? 'edit-active' : ''}>{cmp.txt}</a>
      {cmp.id === currElementId && <span className='delete-element-btn' onClick={(ev) => onRemoveElement(ev, cmp)}>X</span>}
   </span>
}