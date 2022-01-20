import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement } from '../../../store/editor.action'
import { DynamicCmp } from './dynamic-cmp/DynamicCmp'

export function EditorBoard() {

   const dispatch = useDispatch()

   const wap = useSelector(state => state.wapModule.wap)

   const onSetCurrElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(setCurrElement(cmp))
   }

   const onDeleteElement = (cmp) => {
      console.log('hi');
      console.log(cmp);
   }

   return <div>
      {wap.cmps.map((cmp, i) => <DynamicCmp key={i} onDeleteElement={onDeleteElement} onSetCurrElement={onSetCurrElement} cmp={cmp} />
      )}
   </div>
}