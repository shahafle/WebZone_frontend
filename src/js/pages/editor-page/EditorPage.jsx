import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { socketService } from '../../services/socket.service';
import { loadDraftWap, switchElement, joinRoom, updateWapInRoom } from '../../store/wap.action';

import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';

import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

import { WapBuildingModal } from '../../cmps/WapBuilderModal'


export function EditorPage() {

   const dispatch = useDispatch();
   const { wapId } = useParams();

   const [isDragActive, setDragActive] = useState(false);
   const [placeholderProps, setPlaceholderProps] = useState({});

   useEffect(() => {
      // socketService.setup();

      // socketService.on('wap-updated', wapId => {
      // dispatch(updateWapInRoom(wapId));
      // })

      // socketService.on('mouse-moved', pos => {

      // })

      // if (wapId) {
      // dispatch(joinRoom(wapId));
      // }

      // dispatch(loadDraftWap());
   }, [])


   const getDraggedDom = draggableId => {
      const domQuery = `[data-rbd-drag-handle-draggable-id='${draggableId}']`;
      const draggedDOM = document.querySelector(domQuery);

      return draggedDOM;
   };

   //DRAG START
   const onDragStart = event => {

      if (event.source.droppableId === 'board') {
         setDragActive(true)
      }
      const draggedDOM = getDraggedDom(event.draggableId);

      if (!draggedDOM) {
         return;
      }

      const { clientHeight, clientWidth } = draggedDOM;
      const sourceIndex = event.source.index;
      var clientY =
         parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
         [...draggedDOM.parentNode.children]
            .slice(0, sourceIndex)
            .reduce((total, curr) => {
               const style = curr.currentStyle || window.getComputedStyle(curr);
               const marginBottom = parseFloat(style.marginBottom);
               return total + curr.clientHeight + marginBottom;
            }, 0);

      setPlaceholderProps({
         clientHeight,
         clientWidth,
         clientY,
         clientX: parseFloat(
            window.getComputedStyle(draggedDOM.parentNode).paddingLeft
         )
      });
   };

   //DRAG UPDATE
   const onDragUpdate = event => {
      if (!event.destination) {
         return;
      }

      const draggedDOM = getDraggedDom(event.draggableId);

      if (!draggedDOM) {
         return;
      }

      const { clientHeight, clientWidth } = draggedDOM;
      const destinationIndex = event.destination.index;
      const sourceIndex = event.source.index;

      const childrenArray = [...draggedDOM.parentNode.children];
      const movedItem = childrenArray[sourceIndex];
      childrenArray.splice(sourceIndex, 1);

      const updatedArray = [
         ...childrenArray.slice(0, destinationIndex),
         movedItem,
         ...childrenArray.slice(destinationIndex + 1)
      ];

      var clientY =
         parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
         updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
            const style = curr.currentStyle || window.getComputedStyle(curr);
            const marginBottom = parseFloat(style.marginBottom);
            return total + curr.clientHeight + marginBottom;
         }, 0);

      setPlaceholderProps({
         clientHeight,
         clientWidth,
         clientY,
         clientX: parseFloat(
            window.getComputedStyle(draggedDOM.parentNode).paddingLeft
         )
      });
   };

   //DRAG END
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


   return <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
   >
      <main className={`editor-page ${isDragActive ? 'drag-active' : ''}`}>
         <EditorSidebar />
         <EditorBoard placeholderProps={placeholderProps} />


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