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
      
      if (editorWidth < 600) return 'media-600';
      else if (editorWidth < 800) return 'media-800';
      else if (editorWidth < 1000) return 'media-1000';
      else if (editorWidth < 1200) return 'media-1200';
      else return '';
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


   return <Droppable droppableId='board'>
      {provided => {

         if (!wap?.cmps?.length) return <div  {...provided.droppableProps}
            ref={provided.innerRef}
            className='editor-board'><div className="choose-template">
               Pick an element from the sidebar
               {/* <Loader /> */}
            </div></div>

         return <section className='editor-board'
            {...provided.droppableProps}
            ref={provided.innerRef}
         >
            {wap.cmps.map((cmp, i) =>
               <DynamicCmp key={i} idx={i} onSetCurrElement={onSetCurrElement} cmp={cmp} currElementId={currElement?.id} mediaClass={mediaClass} handleTxtChange={handleTxtChange} />
            )}

            {provided.placeholder}

            <div ref={sectionRef}></div>
         </section>
      }}
   </Droppable >
}