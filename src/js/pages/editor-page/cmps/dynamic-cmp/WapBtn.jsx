export function WapBtn(props) {
   const { cmp, onSetCurrElement, onDeleteElement, style } = props

   if (cmp.isPublished) {
      return <a style={style} href={cmp.url}>{cmp.txt}</a>
   }

   return <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##'>{cmp.txt}</a>

}