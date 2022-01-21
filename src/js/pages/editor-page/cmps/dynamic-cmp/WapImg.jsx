export function WapImg(props) {
   const { cmp, onSetCurrElement, currElementId, style } = props

   if (cmp.isPublished) {
      return <span>
         <img style={style}
            className={cmp.id === currElementId ? 'edit-active' : ''}
            src={cmp.url}
            alt="Image" />
      </span>
   }


   return <span>
      <img style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         src={cmp.url}
         onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
         onMouseOver={({ target }) => { target.classList.add('element-hover') }}
         onClick={(ev) => onSetCurrElement(ev, cmp)}
         alt="Image" />
   </span>
}