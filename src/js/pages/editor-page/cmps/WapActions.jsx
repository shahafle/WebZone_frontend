import { useSelector } from 'react-redux';
import { wapService } from '../../../services/wap.service';


export function WapActions() {

   const wap = useSelector(state => state.wapModule.wal);

   const onSaveWap = () => {
      wapService.save(wap)
   }

   return <div>
      <button onClick={onSaveWap}>Save</button>
   </div>
}