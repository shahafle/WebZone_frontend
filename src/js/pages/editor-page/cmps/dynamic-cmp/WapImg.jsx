export function WapImg(props) {
   const { cmp, onSetCurrElement, onRemoveElement, currElementId, style } = props

   if (cmp.isPublished) {
      return <span>
         <img style={style}
            className={cmp.id === currElementId ? 'edit-active' : ''}
            src={cmp.url}
            alt="No img" />
      </span>
   }


   return <span>
      <img style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         src={cmp.url}
         onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
         onMouseOver={({ target }) => { target.classList.add('element-hover') }}
         onClick={(ev) => onSetCurrElement(ev, cmp)}
         alt="No img" />
      {cmp.id === currElementId && <span className='delete-element-btn' onClick={(ev) => onRemoveElement(ev, cmp)}>X</span>}
   </span>
}