import { FaTrash } from 'react-icons/fa';

import { wapService } from '../../../../services/wap.service'
import { WapBtn } from './WapBtn';

export function DynamicCmp(props) {
   const { cmp, onSetCurrElement, onDeleteElement } = props
   const style = wapService.getScaleUnits(cmp.style)
   switch (cmp.type) {
      case 'txt':
         return <div>
            <p style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} >{cmp.txt}</p>
            <FaTrash onClick={() => onDeleteElement(cmp)} />
         </div>
      case 'img':
         return <div>
            <img style={style} src={cmp.url} onClick={(ev) => onSetCurrElement(ev, cmp)} alt="No img" />
         </div>
      case 'btn':
         return <WapBtn {...props} style={style} />
      case 'section':
         return <section onClick={(ev) => onSetCurrElement(ev, cmp)} style={style} >
            {cmp.cmps && cmp.cmps.map(c => <DynamicCmp key={c.id} cmp={c} onSetCurrElement={onSetCurrElement} onDeleteElement={onDeleteElement} />)}
         </ section>

      default:
         break;
   }
}