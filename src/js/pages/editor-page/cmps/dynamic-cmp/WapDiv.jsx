import { DynamicCmp } from './DynamicCmp';
import { Draggable } from 'react-beautiful-dnd';

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




   return (<Draggable draggableId={cmp.id} index={idx}>
      {(provided) => {
         return <div  {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={(ev) => onSetCurrElement(ev, cmp)}
            onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
            onMouseOver={({ target }) => { target.classList.add('element-hover') }}
            style={style}
            className={`${cmp.id === currElementId ? 'edit-active ' : ''}${cmp.category ? mediaClass : ''} ${cmp.name || ''}`}>
            {/* asdsad */}
            {
               cmp.cmps && cmp.cmps.map(c => {
                  const propsCopy = { ...props }
                  delete propsCopy.cmp
                  return <DynamicCmp key={c.id} cmp={c} {...propsCopy} />
               })
            }
         </ div >
      }}
   </Draggable>)
}