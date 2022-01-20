import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement } from '../../../store/editor.action'
import { removeElement } from '../../../store/wap.action'
import { DynamicCmp } from './dynamic-cmp/DynamicCmp'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';

export function EditorBoard() {

   const dispatch = useDispatch()

   const wap = useSelector(state => state.wapModule.wap)
   const currElement = useSelector(state => state.editorModule.currElement)

   const onSetCurrElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(setCurrElement(cmp))
   }

   const onRemoveElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(removeElement(wap, cmp))
   }

   const onDragEnd = (result) => {
   }


   return <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='156'>
         {provided => {
            return <section className='editor-board'
               ref={provided.innerRef}
               {...provided.droppableProps}>

               {wap.cmps.map((cmp, i) =>
                  <DynamicCmp key={i} idx={i} onRemoveElement={onRemoveElement} onSetCurrElement={onSetCurrElement} cmp={cmp} currElementId={currElement?.id} />
               )}

               {provided.placeholder}
            </section>

         }}
      </Droppable >
   </DragDropContext>
}