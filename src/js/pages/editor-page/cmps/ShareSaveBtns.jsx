import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WapBuildingModal } from '../../../cmps/WapBuilderModal';

import { createJpegFromElement } from '../../../services/cloudinary.service';

import { saveWap } from '../../../store/wap.action';

export function SavePublishBtns() {

   const dispatch = useDispatch();
   const wap = useSelector(state => state.wapModule.wap)
   const [shouldShowModal, setShouldShowModal] = useState(false)

   const onSaveWap = async () => {
      setShouldShowModal(true)
      const editorBoard = document.querySelector('.editor-board')
      wap.thumbnail = await createJpegFromElement(editorBoard, editorBoard.clientWidth, (editorBoard.clientWidth * 0.7))
      dispatch(saveWap());///close modal cb
      setShouldShowModal(false)
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
      {shouldShowModal && <WapBuildingModal />}
   </div>
}