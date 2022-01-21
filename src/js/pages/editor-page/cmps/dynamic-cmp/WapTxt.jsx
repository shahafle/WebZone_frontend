export function WapTxt(props) {
   const { cmp, onSetCurrElement, currElementId, style } = props

   if (cmp.isPublished) {
      return <p style={style}
         className={cmp.id === currElementId ? 'edit-active' : ''}>
         {cmp.txt}
      </p>
   }

   return <p style={style}
      className={cmp.id === currElementId ? 'edit-active' : ''}
      onClick={(ev) => onSetCurrElement(ev, cmp)}
      onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
      onMouseOver={({ target }) => { target.classList.add('element-hover') }}>
      {cmp.txt}
   </p>
}