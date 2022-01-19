import { useDispatch, useSelector } from 'react-redux'
import { setCurrElement } from '../../../store/editor.action'
import { wapElService } from '../../../services/wap-el.service'

export function EditorBoard() {

   const dispatch = useDispatch()

   const wap = useSelector(state => state.wapElModule.wapEl)

   const onSetCurrElement = (cmp) => {
      dispatch(setCurrElement(cmp))
   }

   return <div>
      <h1>asddasd</h1>
      {wap.cmps.map((comp, idx) => <section key={idx}>
         {
            comp.cmps.map((cmp, i) => {
               const style = wapElService.getScaleUnits(cmp.style)
               if (cmp.type === 'txt') return <p key={i} style={style} onClick={() => onSetCurrElement(cmp)} >{cmp.txt}</p>
               else if (cmp.type === 'img') return <img style={style} key={i} src={cmp.url} alt="iage" onClick={() => onSetCurrElement(cmp.id)} />
               else return ''
            })
         }
      </section>)}
   </div>
}