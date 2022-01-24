import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AddAccordion } from './AddAccordion';
import { EditAccordion } from './EditAccordion';
import { WapActions } from './WapActions.jsx'

export function EditorSidebar() {

   const [activeTab, setActiveTab] = useState('add');

   const currElement = useSelector(state => state.editorModule.currElement);

   useEffect(() => {
      if (!currElement) return;
      setActiveTab('edit');
   }, [currElement])

   return <div className='sidebar-background'>
      <section className="editor-sidebar flex column justify-between">
         
         <div className="top-container">
            <div className="tabs flex">
               <div className='tab-background'><div className={`tab add ${activeTab === 'add' ? 'active' : ''}`}
                  onClick={() => setActiveTab('add')}>Add</div></div>
               <div className='tab-background'><div className={`tab edit ${activeTab === 'edit' ? 'active' : ''}`}
                  onClick={() => setActiveTab('edit')}>Edit</div></div>
            </div>

            {activeTab === 'add' && <AddAccordion />}
            {activeTab === 'edit' && <EditAccordion />}
         </div>

         <WapActions />
      </section>
   </div>
}