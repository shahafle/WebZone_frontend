import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createJpegFromElement } from '../../../services/cloudinary.service';

import { WapBuildingLoader } from '../../../cmps/WapBuildingLoader';
import { UserModal } from '../../../cmps/UserModal';

import { saveWap } from '../../../store/wap.action';
import { setUserMsg } from '../../../store/user.action';
import { shouldShowLogin, shouldShowUserModal } from '../../../store/system.action';

export function SavePublishBtns() {

   const dispatch = useDispatch();

   const [shouldShowLoader, setShouldShowLoader] = useState(false);
   const [userModalProps, setUserModalProps] = useState({});

   const { wap } = useSelector(state => state.wapModule);
   const { user } = useSelector(state => state.userModule);
   const { isUserModalShown } = useSelector(state => state.systemModule);



   const onSaveWap = () => {
      if (!user) {
         dispatch(setUserMsg({ type: 'error', txt: 'You have to be logged in order to save.', timer: 7000 }));
         dispatch(shouldShowLogin(true));
         return;
      }

      if (wap._id) {
         handleWapExists();
      } else {
         handleNameWebsite();
      }
      
      dispatch(shouldShowUserModal(true));
   }

   const handleWapExists = () => {
      setUserModalProps({
         mainTxt: 'Save',
         subTxt: 'Would you like to overwrite existing website or save as new ?',
         type: 'confirm',
         btnTxt_1: 'Overwrite',
         handleCb_1: save,
         btnTxt_2: 'New',
         handleCb_2: handleNameWebsite,
         btnTxtCancel: 'Cancel',
         handleCbCancel: () => dispatch(shouldShowUserModal(false))
      })
   }

   const handleNameWebsite = () => {
      setUserModalProps({
         mainTxt: 'Save',
         subTxt: 'Choose a name for you website',
         type: 'form',
         btnSubmitTxt: 'Confirm',
         handleSubmitCb: saveNew,
         inputType_1: 'text',
         inputName_1: 'websiteName',
         inputPlaceholder_1: 'Enter your text here',
         handleCbCancel: () => dispatch(shouldShowUserModal(false))
      })
   }

   const saveNew = (ev, inputsValues) => {
      ev.preventDefault();
      const { websiteName } = inputsValues;

      if (!websiteName) return;

      wap.name = websiteName;
      if (wap._id) delete wap._id;

      save();
   }

   const save = async () => {
      dispatch(shouldShowUserModal(false));
      setShouldShowLoader(true);
      const editorBoard = document.querySelector('.editor-board');
      wap.thumbnail = await createJpegFromElement(editorBoard, editorBoard.clientWidth, (editorBoard.clientWidth * 0.7));
      dispatch(saveWap());
      setShouldShowLoader(false);
      dispatch(setUserMsg({ type: 'success', txt: 'Saved!', timer: 5000 }));
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
      {shouldShowLoader && <WapBuildingLoader />}

      {isUserModalShown && <UserModal {...userModalProps} />}

   </div>
}