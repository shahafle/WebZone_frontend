import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, } from 'react-router-dom'

import { createJpegFromElement } from '../../../services/cloudinary.service';

import { saveWap, createRoom } from '../../../store/wap.action';

import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import { setBoardSize } from '../../../store/editor.action';




export function WapActions() {

   const dispatch = useDispatch();
   const wap = useSelector(state => state.wapModule.wap)

   const onSaveWap = async () => {
      const editorBoard = document.querySelector('.editor-board')
      wap.thumbnail = await createJpegFromElement(editorBoard, editorBoard.clientWidth, (editorBoard.clientWidth * 0.7))
      dispatch(saveWap());
   }

   const onPublish = () => {
      dispatch(saveWap(openPublish));
   }

   const openPublish = (wapId) => {
      window.open(`/publish/${wapId}`, "_blank");
   }

   const onWorkTogether = () => {
      dispatch(createRoom());
   }

   const onSetBoardSize = (boardSize) => {
      dispatch(setBoardSize(boardSize))
   }


   return <div className="wap-actions flex column align-center">
      <div className="media-btns flex justify-between align center">
         <FaDesktop size={28} className='muted' onClick={() => onSetBoardSize('desktop')} />
         <FaTabletAlt size={28} className='muted' onClick={() => onSetBoardSize('tablet')} />
         <FaMobileAlt size={28} className='muted' onClick={() => onSetBoardSize('mobile')} />
      </div>
      <hr style={{ width: 140 }} />

      <Link to="" onClick={onWorkTogether} className='work-together-btn'>Work with Teammates</Link>

      <div className="save-publish-container flex">
         <button className="save-btn" onClick={onSaveWap}><span>Save</span></button>
         <button className="publish-btn" onClick={onPublish}><span>Publish</span></button>
      </div>
   </div>
}