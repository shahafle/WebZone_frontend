import { useDispatch, useSelector } from 'react-redux'
import { handleStyleChange, setCurrElement } from '../../../store/wapEl.action'

export function EditorBoard() {

   const dispatch = useDispatch()


   const wap = useSelector(state => state.wapElModule.wapEl)

   const onChangeStyle = ({ target }) => {
      const wapEl = {
         sectionId: target.dataset.sectionid,
         elementId: target.dataset.elementid,
         styleName: target.name,
         styleValue: target.value
      }
      dispatch(handleStyleChange(wapEl))
   }

   const onSetCurrElement = (sectionId, cmpId) => {
      dispatch(setCurrElement({ sectionId, cmpId }))
   }

   return <div>
      {wap.sections.map((section, idx) => <section key={idx}>
         {
            section.cmps.map((cmp, i) => {
               if (cmp.type === 'txt') return <p key={i} onClick={() => onSetCurrElement(section.id, cmp.id)} >{cmp.txt}</p>
               else if (cmp.type === 'img') return <img style={cmp.style} key={i} src={cmp.url} alt="iage" />
               else return ''
            })
         }
      </section>)}

      {/* {wap.sections[1].cmps.map((cmp, i) => {
         if (cmp.type === 'txt') return <p key={i}>{cmp.txt}</p>
         else if (cmp.type === 'img') return <img style={{ 'borderRadius': cmp.style.borderRadius + 'px' }} key={i} src={cmp.url} alt="iage" />
         else return ''
         // (cmp.type === 'txt' && <p key={i}>{cmp.txt}</p>)
         // (cmp.type === 'img' && <img key={i} src={cmp.url} alt="iage" />)
      })} */}

      <input type="range" min={4} max={20} onChange={onChangeStyle} data-sectionid={wap.sections[1].id} data-elementid={wap.sections[1].cmps[1].id} name='borderRadius' value={wap.sections[1].cmps[1].style.borderRadius} />
   </div>
}