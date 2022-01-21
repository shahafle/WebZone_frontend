import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';
import { useEffect } from 'react';
import { getWapById, loadWaps, loadDraftWap } from '../../store/wap.action';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export function EditorPage() {

   const params = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      // console.log('EDITOR PAGE LOADED')
      // const { wapId } = params;
      dispatch(loadDraftWap());
      // dispatch(loadWaps());
      // if (wapId) dispatch(getWapById(wapId));
   }, [])

   return <main className='editor-page'>
      <EditorSidebar />
      <EditorBoard />
   </main >
}