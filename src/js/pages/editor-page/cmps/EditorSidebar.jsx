import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { WapActions } from './WapActions.jsx'

import { IoIosArrowDropupCircle } from 'react-icons/io'

import { AddAccordion } from './AddAccordion';
import { EditAccordion } from './EditAccordion';

export function EditorSidebar() {

   const [activeTab, setActiveTab] = useState('add');
   const [isSidebarOpen, toggleSidebar] = useState(false);

   const currElement = useSelector(state => state.editorModule.currElement);

   useEffect(() => {
      if (!currElement) return;
      onToggleSidebar(true)

      setActiveTab('edit');
   }, [currElement])

   const onToggleSidebar = (val = !isSidebarOpen) => {
      toggleSidebar(val)
   }

   return <div className={`sidebar-background ${!isSidebarOpen ? 'close' : ''}`}>
      <section className="editor-sidebar flex column justify-between">

         <div className='top-container'>
            <div className="tabs flex">
               <div className='tab-background'><div className={`tab add ${activeTab === 'add' ? 'active' : ''}`}
                  onClick={() => setActiveTab('add')}>Add</div></div>
               <div className='tab-background'><div className={`tab edit ${activeTab === 'edit' ? 'active' : ''}`}
                  onClick={() => setActiveTab('edit')}>Edit</div></div>
            </div>

            {activeTab === 'add' && <AddAccordion />}
            {activeTab === 'edit' && <EditAccordion />}

            {/* toggle sidebar btn on mobile */}

            <IoIosArrowDropupCircle className='toggle-sidebar-btn' onClick={() => onToggleSidebar()} />
         </div>

         <WapActions />
      </section>
   </div>
}