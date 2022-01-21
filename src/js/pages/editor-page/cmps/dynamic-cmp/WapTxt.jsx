export function WapTxt(props) {
   const { cmp, onSetCurrElement, currElementId, style } = props

   if (cmp.isPublished) {
      return <span>
         <p style={style}
            className={cmp.id === currElementId ? 'edit-active' : ''}>
            {cmp.txt}
         </p>
      </span>
   }

   return <span>
      <p style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}
         onClick={(ev) => onSetCurrElement(ev, cmp)}
         onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
         onMouseOver={({ target }) => { target.classList.add('element-hover') }}>
         {cmp.txt}
      </p>
   </span>
}