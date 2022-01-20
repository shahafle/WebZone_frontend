import { FaTrash } from 'react-icons/fa';
import { DynamicCmp } from './DynamicCmp';
import { Draggable } from 'react-beautiful-dnd';

export function WapDiv(props) {
   const { cmp, onSetCurrElement, onRemoveElement, currElementId, style, idx } = props
   console.log(typeof idx);
   return (<Draggable draggableId={cmp.id} index={idx}>
      {(provided) => {
         return <div  {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={(ev) => onSetCurrElement(ev, cmp)}
            onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
            onMouseOver={({ target }) => { target.classList.add('element-hover') }}
            style={style}
            className={((cmp.id === currElementId) ? 'edit-active ' : '') + (cmp.name || '')}>
            {/* asdsad */}
            {
               cmp.cmps && cmp.cmps.map(c => {
                  const propsCopy = { ...props }
                  delete propsCopy.cmp
                  return <DynamicCmp key={c.id} cmp={c} {...propsCopy} />
               })
            }
            {cmp.id === currElementId && < FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />}

         </ div >
      }}
   </Draggable>)
}