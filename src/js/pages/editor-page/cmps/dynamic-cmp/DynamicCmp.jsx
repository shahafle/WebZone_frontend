import { wapService } from '../../../../services/wap.service'
import { WapBtn } from './WapBtn';
import { WapDiv } from './WapDiv';
import { WapImg } from './WapImg';
import { WapTxt } from './WapTxt';

export function DynamicCmp(props) {
   const { cmp } = props
   const style = wapService.getScaleUnits(cmp.style)

   switch (cmp.type) {
      case 'txt': return <WapTxt {...props} style={style} />

      case 'img': return <WapImg  {...props} style={style} />

      case 'btn': return <WapBtn {...props} style={style} />

      case 'container': return <WapDiv  {...props} style={style} />

      default:
         break;
   }

}

// {cmp.id === currElementId && <span className='delete-element-btn' onClick={(ev) => onRemoveElement(ev, cmp)}>X</span>}