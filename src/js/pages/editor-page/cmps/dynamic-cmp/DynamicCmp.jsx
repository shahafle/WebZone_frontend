import { FaTrash } from 'react-icons/fa';

import { wapService } from '../../../../services/wap.service'
import { WapBtn } from './WapBtn';

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
         return <WapBtn {...props} style={style} />
      case 'section':
         return <div onClick={(ev) => onSetCurrElement(ev, cmp)} style={style} className={cmp.name || ''} >
            {cmp.cmps && cmp.cmps.map(c => <DynamicCmp key={c.id} cmp={c} onSetCurrElement={onSetCurrElement} onRemoveElement={onRemoveElement} />)}
            {/* <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} /> */}
         </ div>

      default:
         break;
   }
}