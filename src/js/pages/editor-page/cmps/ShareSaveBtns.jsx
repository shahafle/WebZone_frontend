import { useSelector, useDispatch } from 'react-redux';

import { createJpegFromElement } from '../../../services/cloudinary.service';

import { saveWap } from '../../../store/wap.action';

export function SavePublishBtns() {

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

   return <div className="save-publish-container flex">
      <button className="save-btn" onClick={onSaveWap}><span>Save</span></button>
      <button className="publish-btn" onClick={onPublish}><span>Publish</span></button>
   </div>
}