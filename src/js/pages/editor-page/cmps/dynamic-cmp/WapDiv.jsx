import { DynamicCmp } from './DynamicCmp';

export function WapDiv(props) {
   const { cmp, onSetCurrElement, currElementId, style, idx, mediaClass } = props

   if (cmp.isPublished) {
      return <div
         style={style}
         className={`${mediaClass} ${cmp.name || ''}`}>
         {
            cmp.cmps && cmp.cmps.map(c => {
               const propsCopy = { ...props }
               delete propsCopy.cmp
               return <DynamicCmp key={c.id} cmp={c} {...propsCopy} />
            })
         }
      </ div >
   }




   return <div
      onClick={(ev) => onSetCurrElement(ev, cmp)}
      onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
      onMouseOver={({ target }) => { target.classList.add('element-hover') }}
      style={style}
      className={`${cmp.id === currElementId ? 'edit-active ' : ''}${cmp.category ? mediaClass : ''} ${cmp.name || ''}`}
   >
      {
         cmp.cmps && cmp.cmps.map(c => {
            const propsCopy = { ...props }
            delete propsCopy.cmp
            return <DynamicCmp key={c.id} cmp={c} {...propsCopy} />
         })
      }
   </ div >
}