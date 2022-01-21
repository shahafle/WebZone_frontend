import { wapService } from '../../../../services/wap.service'
import { Draggable } from 'react-beautiful-dnd';
import { WapBtn } from './WapBtn';
import { WapDiv } from './WapDiv';
import { WapImg } from './WapImg';
import { WapTxt } from './WapTxt';

export function DynamicCmp(props) {
   const { cmp, idx } = props
   const style = wapService.getScaleUnits(cmp.style)

   // const getElement = () => {
   switch (cmp.type) {
      case 'txt': return <WapTxt {...props} style={style} />

      case 'img': return <WapImg  {...props} style={style} />

      case 'btn': return <WapBtn {...props} style={style} />

      case 'container': return <WapDiv  {...props} style={style} />

      default:
         break;
   }
   // }


   // return <Draggable draggableId={cmp.id} index={idx}>
   //    {(provided, snapshot) => {
   //       return <span {...provided.draggableProps}
   //          {...provided.dragHandleProps}
   //          ref={provided.innerRef}>

   //          {getElement()}
   //          {provided.placeholder}
   //       </span>
   //    }}
   // </Draggable>
}

// {cmp.id === currElementId && <span className='delete-element-btn' onClick={(ev) => onRemoveElement(ev, cmp)}>X</span>}