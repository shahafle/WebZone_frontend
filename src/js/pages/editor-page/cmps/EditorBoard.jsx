import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement } from '../../../store/editor.action'
import { DynamicCmp } from './dynamic-cmp/DynamicCmp'

export function EditorBoard() {

   const dispatch = useDispatch()

   const wap = useSelector(state => state.wapElModule.wapEl)

   const onSetCurrElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(setCurrElement(cmp))
   }

   return <div>
      {wap.cmps.map((cmp, i) => <DynamicCmp key={i} onSetCurrElement={onSetCurrElement} cmp={cmp} />
         // const style = wapElService.getScaleUnits(cmp.style)
         // if (cmp.type === 'txt') return <p key={i} style={style} onClick={() => onSetCurrElement(cmp)} >{cmp.txt}</p>
         // else if (cmp.type === 'img') return <img style={style} key={i} src={cmp.url} alt="iage" onClick={() => onSetCurrElement(cmp)} />
         // else return ''
      )}
   </div>
}