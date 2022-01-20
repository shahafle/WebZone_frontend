import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement } from '../../../store/editor.action'
import { removeElement } from '../../../store/wap.action'
import { DynamicCmp } from './dynamic-cmp/DynamicCmp'

export function EditorBoard() {

   const dispatch = useDispatch()

   const wap = useSelector(state => state.wapModule.wap)

   const onSetCurrElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(setCurrElement(cmp))
   }

   const onRemoveElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(removeElement(wap, cmp))
   }

   return <section className='editor-board'>
      {wap.cmps.map((cmp, i) => <DynamicCmp key={i} onRemoveElement={onRemoveElement} onSetCurrElement={onSetCurrElement} cmp={cmp} />
      )}
   </section>
}