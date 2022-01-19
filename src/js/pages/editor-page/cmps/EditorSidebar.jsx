import { AddAccordion } from './AddAccordion';
import { EditAccordion } from './EditAccordion';

export function EditorSidebar() {

   // currently working on add-accordion, later we might have a store that holds the current sidebar state (Add/Edit)

   return <section className="editor-sidebar">
      {<AddAccordion />}
      {/* {<EditAccordion />} */}
   </section>
}