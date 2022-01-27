import { useDispatch } from 'react-redux';
import { Link, } from 'react-router-dom'

import { createRoom } from '../../../store/wap.action';

import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { setBoardSize } from '../../../store/editor.action';
import { SavePublishBtns } from './ShareSaveBtns';


export function WapActions() {

   const dispatch = useDispatch();

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

      <button onClick={onWorkTogether} className='work-together-btn'>Work with Teammates <IoIosPeople /></button>

      <SavePublishBtns />
   </div>
}