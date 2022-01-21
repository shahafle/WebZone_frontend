import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement } from '../../../store/editor.action'
import { switchElement } from '../../../store/wap.action'
import { DynamicCmp } from './dynamic-cmp/DynamicCmp'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';



export function EditorBoard() {

   const sectionRef = useRef();

   const getMediaClass = () => {
      if (!sectionRef.current) return;
      const editorWidth = sectionRef.current.offsetWidth;

      if (editorWidth < 600) return 'media-600';
      else if (editorWidth < 800) return 'media-800';
      else if (editorWidth < 1000) return 'media-1000';
      else if (editorWidth < 1200) return 'media-1200';
      else return '';
   }

   const [mediaClass, setMediaClass] = useState('');

   const dispatch = useDispatch();

   const wap = useSelector(state => state.wapModule.wap);
   const currElement = useSelector(state => state.editorModule.currElement);

   useEffect(() => {
      window.addEventListener('resize', () => setMediaClass(getMediaClass()));
      setMediaClass(getMediaClass());

      return () => window.removeEventListener('resize', getMediaClass);
   }, [])

   const onSetCurrElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(setCurrElement(cmp))
   }

   const onDragEnd = (res) => {
      const { destination, source } = res;

      if (!destination) return;

      if (destination.index === source.index) return;

      dispatch(switchElement(wap, res))
   }

   if (!wap.cmps?.length) return <div className='editor-board'>Choose Template from sidebar</div>

   return <DragDropContext onDragEnd={onDragEnd} onDragStart={(res) => { }}>
      <Droppable droppableId='156'>
         {provided => {
            return <section className='editor-board'
               {...provided.droppableProps}
               ref={provided.innerRef}
            >

               {wap.cmps.map((cmp, i) =>
                  <DynamicCmp key={i} idx={i} onSetCurrElement={onSetCurrElement} cmp={cmp} currElementId={currElement?.id} mediaClass={mediaClass} />
               )}

               {provided.placeholder}

               <div ref={sectionRef}></div>
            </section>
         }}
      </Droppable >
   </DragDropContext>
}