import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, } from 'react-router-dom'

import { saveWap } from '../../../store/wap.action';

import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";




export function WapActions() {

   const dispatch = useDispatch();
   const wap = useSelector(state => state.wapModule.wap)

   const onSaveWap = () => {
      dispatch(saveWap());
   }

   const onPublish = () => {
      dispatch(saveWap(openPublish));
   }


   const openPublish = (wapId) => {
      window.open(`/publish/${wapId}`, "_blank")
   }



   return <div className="wap-actions flex column align-center">
      <div className="media-btns flex justify-between align center">
         <FaDesktop size={28} />
         <FaTabletAlt size={28} />
         <FaMobileAlt size={28} />
      </div>
      <hr style={{ width: 140 }} />
      <div className="save-publish-container flex">
         <button className="save-publish-btn" onClick={onSaveWap}>Save</button>
         <button onClick={onPublish} className="save-publish-btn">Publish</button>
      </div>
   </div>
}