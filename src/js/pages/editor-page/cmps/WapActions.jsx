import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { createJpegFromElement } from '../../../services/cloudinary.service';

import { setUserMsg } from '../../../store/user.action';
import { saveWap, createRoom } from '../../../store/wap.action';
import { setBoardSize } from '../../../store/editor.action';

import { WapBuildingModal } from '../../../cmps/WapBuilderModal'

import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { SavePublishBtns } from './ShareSaveBtns';


export function WapActions() {

   const dispatch = useDispatch();

   const onWorkTogether = () => {
      // dispatch(createRoom());
      dispatch(setUserMsg({ type: 'success', txt: 'Invitation copied to clipboard !' }));

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