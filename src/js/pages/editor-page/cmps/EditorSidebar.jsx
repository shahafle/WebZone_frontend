import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AddAccordion } from './AddAccordion';
import { EditAccordion } from './EditAccordion';

export function EditorSidebar() {

   const [activeTab, setActiveTab] = useState('add');

   const currElement = useSelector(state => state.editorModule.currElement);

   useEffect(() => {
      setActiveTab('edit');
   }, [currElement])

   return <section className="editor-sidebar">
      <div className="tabs flex">
         <div className={`tab add ${activeTab === 'add' ? 'active' : ''}`}
            style={{ borderBottomRightRadius: `${activeTab === 'add' ? 0 : '1rem'}` }}
            onClick={() => setActiveTab('add')}>Add</div>
         <div className={`tab edit ${activeTab === 'edit' ? 'active' : ''}`}
            style={{ borderBottomLeftRadius: `${activeTab === 'edit' ? 0 : '1rem'}` }}
            onClick={() => setActiveTab('edit')}>Edit</div>
      </div>
      {activeTab === 'add' && <AddAccordion />}
      {activeTab === 'edit' && <EditAccordion />}
   </section>
}