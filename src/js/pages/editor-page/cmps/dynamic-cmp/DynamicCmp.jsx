import { wapElService } from '../../../../services/wap-el.service'

export function DynamicCmp(props) {
   const { cmp, onSetCurrElement } = props
   const style = wapElService.getScaleUnits(cmp.style)
   switch (cmp.type) {
      case 'txt':
         return <p style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} >{cmp.txt}</p>
      case 'img':
         return <div>
            <img style={style} src={cmp.url} onClick={(ev) => onSetCurrElement(ev, cmp)} alt="No img" />
         </div>
      case 'btn':
         return <a style={style} onClick={(ev) => onSetCurrElement(ev, cmp)} href='##'>{cmp.txt}</a>
      case 'section':
         return <section onClick={(ev) => onSetCurrElement(ev, cmp)} style={style} >
            {cmp.cmps && cmp.cmps.map(c => <DynamicCmp key={c.id} cmp={c} onSetCurrElement={onSetCurrElement} />)}
         </ section>

      default:
         break;
   }
}