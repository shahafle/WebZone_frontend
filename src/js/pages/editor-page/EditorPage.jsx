import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';
import { useEffect } from 'react';
import { loadDraftWap, switchElement } from '../../store/wap.action';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';


export function EditorPage() {

   const dispatch = useDispatch();

   const wap = useSelector(state => state.wapModule.wap);

   const onDragEnd = (res) => {
      const { destination, source } = res;

      if (!destination) return;

      if (destination.droppableId === 'sidebar') return

      if (destination.droppableId === source.droppableId &&
         destination.index === source.index) return;

      dispatch(switchElement(wap, res))
   }

   useEffect(() => {
      dispatch(loadDraftWap());
   }, [])
   

   return <DragDropContext onDragEnd={onDragEnd}>
      <main className='editor-page'>
         <EditorSidebar />
         <EditorBoard />
      </main >
   </DragDropContext>

}