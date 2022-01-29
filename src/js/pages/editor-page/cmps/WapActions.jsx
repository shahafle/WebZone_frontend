import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import { setUserMsg } from '../../../store/user.action';
import { createRoom } from '../../../store/wap.action';
import { setBoardSize } from '../../../store/editor.action';

import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { SavePublishBtns } from './SavePublishBtns';


export function WapActions() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { wapId } = useParams();

   const onWorkTogether = () => {
      // If user is already in a room but wants to copy a link again
      if (wapId) {
         navigator.clipboard.writeText(`localhost:3000/editor/${wapId}`); // DONT FORGET TO CHANGE LOCALHOST ON BUILD
         dispatch(setUserMsg({ type: 'success', txt: 'Invitation copied to clipboard !', timer: 7000 }));
         return
      }

      dispatch(createRoom(redirect));
      dispatch(setUserMsg({ type: 'success', txt: 'Invitation copied to clipboard !', timer: 7000 }));
   }

   const onSetBoardSize = (boardSize) => {
      dispatch(setBoardSize(boardSize))
   }

   const redirect = (wapId) => {
      navigate(`/editor/${wapId}`);
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