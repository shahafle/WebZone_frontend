import { EditorSidebar } from './cmps/EditorSidebar';
import { EditorBoard } from './cmps/EditorBoard';
import { useEffect } from 'react';
import { getWapById, loadWap } from '../../store/wap.action';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export function EditorPage() {

   const params = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      const { wapId } = params
      if (wapId) dispatch(getWapById(wapId))
      // dispatch(loadWap())
   }, [])

   return <main className='editor-page'>
      <EditorSidebar />
      <EditorBoard />
   </main >
}