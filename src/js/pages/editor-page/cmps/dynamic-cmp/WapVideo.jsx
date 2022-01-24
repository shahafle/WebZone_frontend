export function WapVideo(props) {
   const { cmp, onSetCurrElement, handleTxtChange, style, currElementId, isPublished } = props

   if (isPublished) {
      return <iframe title="published" width="400" height="300"
         className={`${cmp.id === currElementId ? 'edit-active' : ''} ${cmp.className || ''}`}
         src={cmp.url}>
      </iframe>
   }

   return <iframe title="edisst" width={cmp.width || '400'} height={cmp.height || '300'}
      onClick={(ev) => onSetCurrElement(ev, cmp)}
      className={`${cmp.id === currElementId ? 'edit-active' : ''} ${cmp.className || ''}`}
      src={cmp.url}>s
   </iframe>

}