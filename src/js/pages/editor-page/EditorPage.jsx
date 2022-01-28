import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { socketService } from '../../services/socket.service';
import { utilService } from '../../services/util.service';
import { loadDraftWap, switchElement, joinRoom, updateWapInRoom } from '../../store/wap.action';

import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';

import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { SavePublishBtns } from './cmps/SavePublishBtns';
import { FaMousePointer } from 'react-icons/fa';



export function EditorPage() {

   const dispatch = useDispatch();
   const { wapId } = useParams();

   const [isDragActive, setDragActive] = useState(false);
   const [placeholderProps, setPlaceholderProps] = useState({});

   const [cursors, setCursors] = useState([]);


   useEffect(() => {
      dispatch(loadDraftWap());

      // // Socket initialization on connection :
      // socketService.setup();
      // socketService.off('wap-updated');

      // // User joined via share link :
      // if (wapId) dispatch(joinRoom(wapId));

      // // Every user listens to wap updates :
      // socketService.on('wap-updated', wapId => dispatch(updateWapInRoom(wapId)));

      // window.addEventListener('mousemove', updateMousePos);

      // // Clear socket on disconnection :
      // return () => {
      //    socketService.off('wap-updated');
      //    socketService.off('mouse-moved');
      //    socketService.terminate();
      //    window.removeEventListener('mousemove', updateMousePos);
      // }
   }, [])


   // useEffect(() => {
   //    // On every cursors update resubscribe the user to mouse-moved event :
   //    socketService.off('mouse-moved');

   //    // Update other users' cursors positions :
   //    socketService.on('mouse-moved', newCursor => {
   //       const cursorIdx = cursors.findIndex(cursor => cursor.id === newCursor.id);
   //       if (cursorIdx >= 0) {
   //          // If cursor already exists, update cursors :
   //          // if (cursors[cursorIdx].x === newCursor.x && cursors[cursorIdx].y === newCursor.y) return; // If mouse in same position as last update

   //          setCursors(prevCursors => {
   //             prevCursors[cursorIdx] = newCursor;
   //             return [...prevCursors];
   //          })
   //       } else {
   //          // If cursor didn't exist, add to cursors :
   //          newCursor.color = utilService.getRandomColor();
   //          setCursors(prevCursors => [...prevCursors, newCursor]);
   //       }
   //    })
   // }, [cursors])

   // const updateMousePos = (ev) => {
   //    const pos = { x: ev.clientX, y: ev.clientY };
   //    socketService.emit('mouse-move', pos);
   // }
   // let counterRef = useRef()
   // const updateMousePos = (ev) => {
   //    console.log(counterRef);
   //    if (!counterRef.current) counterRef.current = 0;
   //    counterRef.current++

   //    const pos = { x: ev.clientX, y: ev.clientY };

   //    if (counterRef.current > 10) {
   //       socketService.emit('mouse-move', pos);
   //       counterRef.current = 0;
   //    }
   // }


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
      onDragUpdate={onDragUpdate}>

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

         <SavePublishBtns />
      </main >

      {/* Cursors test : */}
      {/* {cursors.length > 0 &&
         cursors.map(cursor => {
            return <div
               key={cursor}
               style={{
                  position: 'fixed',
                  top: cursor.pos.y,
                  left: cursor.pos.x,
                  zIndex: '9999',
                  color: cursor.color
               }}><FaMousePointer /></div>
         })} */}
   </DragDropContext>

}