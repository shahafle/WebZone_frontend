import { FaTrash } from 'react-icons/fa';

import { wapService } from '../../../../services/wap.service'
import { WapBtn } from './WapBtn';

export function DynamicCmp(props) {

   const { cmp, onSetCurrElement, onRemoveElement, currElementId } = props
   const style = wapService.getScaleUnits(cmp.style)
   switch (cmp.type) {
      case 'txt':
         return <p style={style}
            className={cmp.id === currElementId ? 'edit-active' : ''}
            onClick={(ev) => onSetCurrElement(ev, cmp)}
            onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
            onMouseOver={({ target }) => { target.classList.add('element-hover') }}>
            {cmp.txt}
            <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
         </p>



      case 'img':
         return <div>
            <img style={style}
               className={cmp.id === currElementId ? 'edit-active' : ''}
               src={cmp.url}
               onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
               onMouseOver={({ target }) => { target.classList.add('element-hover') }}
               onClick={(ev) => onSetCurrElement(ev, cmp)} alt="No img" />
            <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} />
         </div>


      case 'btn':
         return <WapBtn {...props} style={style} />


      case 'section':
         return <div onClick={(ev) => onSetCurrElement(ev, cmp)}
            onMouseOut={(ev) => { ev.target.classList.remove('element-hover') }}
            onMouseOver={({ target }) => { target.classList.add('element-hover') }}
            style={style}
            className={((cmp.id === currElementId) ? 'edit-active ' : '') + (cmp.name || '')}>

            {
               cmp.cmps && cmp.cmps.map(c => {
                  const propsCopy = { ...props }
                  delete propsCopy.cmp
                  return <DynamicCmp key={c.id} cmp={c} {...propsCopy} />
               })
            }
            {/* <FaTrash onClick={(ev) => onRemoveElement(ev, cmp)} /> */}

         </ div >

      default:
         break;
   }
}