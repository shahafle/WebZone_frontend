export function WapImg(props) {
   const { cmp, onSetCurrElement, currElementId, style, isPublished } = props

   if (isPublished) {
      return <span>
         <img style={style}
            className={cmp.id === currElementId ? 'edit-active' : ''}
            src={cmp.url}
            alt="Missing img" />
      </span>
   }


   return <span>
      <img style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         src={cmp.url}
         onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
         onMouseOver={({ target }) => { target.classList.add('element-hover') }}
         onClick={(ev) => onSetCurrElement(ev, cmp)}
         alt="Missing img" />
   </span>
}