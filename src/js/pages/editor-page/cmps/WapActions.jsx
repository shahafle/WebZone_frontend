import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { saveWap } from '../../../store/wap.action';

import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";




export function WapActions() {

   const dispatch = useDispatch();

   const onSaveWap = () => {
      dispatch(saveWap());
   }

   const onPublishWap = () => {
      console.log()
      // wap.isPublished = true;
      // wap.isTemplate = false;
      // const savedWap = wapService.save(wap);
      // window.open(`/publish/${savedWap._id}`, "_blank")
   }


   return <div className="wap-actions flex column align-center">
      <div className="media-btns flex justify-between align center">
         <FaDesktop size={28} className='muted' />
         <FaTabletAlt size={28} className='muted' />
         <FaMobileAlt size={28} className='muted' />
      </div>
      <hr style={{ width: 140 }} />
      <div className="save-publish-container flex">
         <button className="save-btn" onClick={onSaveWap}><span>Save</span></button>
         {/* <button className="save-btn" onClick={onSaveWap}>Save</button> */}
         <button className="publish-btn" onClick={onPublishWap}><span>Publish</span></button>
      </div>
   </div>
}