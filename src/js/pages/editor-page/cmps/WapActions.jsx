import { useSelector } from 'react-redux';
import { wapService } from '../../../services/wap.service';
import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";


export function WapActions() {

   const wap = useSelector(state => state.wapModule.wap);

   const onSaveWap = () => {
      wapService.save(wap);
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
         <button className="save-publish-btn">Publish</button>
      </div>
   </div>
}