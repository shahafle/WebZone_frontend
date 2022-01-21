export function WapImg(props) {
   const { cmp, onSetCurrElement, currElementId, style } = props

   if (cmp.isPublished) {
      return <img style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         src={cmp.url}
         alt="No img" />
   }


   return <img style={style}
      className={cmp.id === currElementId ? 'edit-active' : ''}
      src={cmp.url}
      onMouseOver={({ target }) => { target.classList.add('element-hover') }}
      onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
      onClick={(ev) => onSetCurrElement(ev, cmp)}
      alt="Image" />
}