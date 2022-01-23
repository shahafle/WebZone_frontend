import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';
import { useEffect, useState } from 'react';
import { loadDraftWap, switchElement } from '../../store/wap.action';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';


export function EditorPage() {

   const dispatch = useDispatch();

   const [isDragActive, setDragActive] = useState(false)


   const onDragEnd = (res) => {
      const { destination, source } = res;
      if (!destination) return;

      if (destination.droppableId === 'sidebar') return setDragActive(false)


      if (destination.droppableId === source.droppableId &&
         destination.index === source.index) return setDragActive(false);

      if (source.droppableId === 'sidebar' &&
         destination.droppableId === 'garbage') return setDragActive(false)

      dispatch(switchElement(res))
      setDragActive(false)
   }

   const onDragStart = (res) => {
      if (res.source.droppableId === 'board') {
         setDragActive(true)
      }
   }

   useEffect(() => {
      dispatch(loadDraftWap());
   }, [])


   return <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}>

      <main className={`editor-page ${isDragActive ? 'drag-active' : ''}`}>
         <EditorSidebar />
         <EditorBoard />


         <Droppable droppableId='garbage'>
            {provided => {
               return <div className='garbage'
                  {...provided.droppableProps}
                  ref={provided.innerRef}>&times;</div>
            }}
         </Droppable>
      </main >
   </DragDropContext>

}