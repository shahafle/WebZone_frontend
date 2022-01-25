import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement, updateCurrElementAttr } from '../../../store/editor.action'
import { DynamicCmp } from './dynamic-cmp/DynamicCmp'
import { Droppable } from 'react-beautiful-dnd';
import { Loader } from '../../../../assets/imgs/svg/Loader.jsx'



export function EditorBoard() {

   const dispatch = useDispatch();
   const sectionRef = useRef();

   const [mediaClass, setMediaClass] = useState('');

   const wap = useSelector(state => state.wapModule.wap);
   const currElement = useSelector(state => state.editorModule.currElement);


   useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', getMediaClass);
   }, [])


   const handleResize = () => {
      setMediaClass(getMediaClass())
   }

   const getMediaClass = () => {
      if (!sectionRef.current) return;
      const editorWidth = sectionRef.current.offsetWidth;

      let classStr = ''

      if (editorWidth < 600) classStr += 'media-600 ';
      if (editorWidth < 800) classStr += 'media-800 ';
      if (editorWidth < 1000) classStr += 'media-1000 ';
      if (editorWidth < 1200) classStr += 'media-1200 ';

      return classStr
   }

   const onSetCurrElement = (ev, cmp) => {
      ev.stopPropagation()
      dispatch(setCurrElement(cmp))
   }

   const handleTxtChange = ({ target }) => {
      const attr = {
         attrName: 'txt',
         attrValue: target.innerText
      }
      dispatch(updateCurrElementAttr(currElement, attr))
   }

   if (!wap?.cmps) return <div>Loading...</div>

   return <Droppable droppableId='board'>
      {(provided, snapshot) => {
         if (!wap?.cmps?.length) return <div  {...provided.droppableProps}
            ref={provided.innerRef}
            className='editor-board'><div className="choose-template">
               Pick an element from the sidebar
               {/* <Loader /> */}
            </div>
         </div>

         return <section className='editor-board'
            {...provided.droppableProps}
            ref={provided.innerRef}
         >
            {wap.cmps.map((cmp, i) =>
               <DynamicCmp key={i} idx={i} isPublished={false} onSetCurrElement={onSetCurrElement} cmp={cmp} currElementId={currElement?.id} mediaClass={mediaClass} handleTxtChange={handleTxtChange} />
            )}


            <div ref={sectionRef}></div>
            {provided.placeholder}
         </section>
      }}
   </Droppable >
}