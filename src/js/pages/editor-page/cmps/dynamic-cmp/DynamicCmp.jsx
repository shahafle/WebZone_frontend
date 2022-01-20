import { FaTrash } from 'react-icons/fa';

import { wapService } from '../../../../services/wap.service'

export function DynamicCmp(props) {
   const { cmp, onSetCurrElement, onRemoveElement } = props
   const style = wapService.getScaleUnits(cmp.style)
   switch (cmp.type) {
      case 'txt':
         return <div>
            <p style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} >{cmp.txt}</p>
            <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
         </div>
      case 'img':
         return <div>
            <img style={style} src={cmp.url} onClick={(ev) => onSetCurrElement(ev, cmp)} alt="No img" />
            <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
         </div>
      case 'btn':
         return <div>
            <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##'>{cmp.txt}</a>
            <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
         </div>
      case 'section':
         return <section onClick={(ev) => onSetCurrElement(ev, cmp)} style={style} >
            {cmp.cmps && cmp.cmps.map(c => <DynamicCmp key={c.id} cmp={c} onSetCurrElement={onSetCurrElement} onRemoveElement={onRemoveElement} />)}
            {/* <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} /> */}
         </ section>

      default:
         break;
   }
}