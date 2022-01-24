export function WapBtn(props) {
      const { cmp, onSetCurrElement, handleTxtChange, style, currElementId, isPublished } = props

      if (isPublished) {
            return <span>
                  <a style={style}
                        href={cmp.url}
                        className={cmp.className || ''}>
                        {cmp.txt}</a>
            </span>
      }

      return <span>
            <a style={style}
                  onClick={(ev) => onSetCurrElement(ev, cmp)}
                  href='##'
                  className={`${cmp.id === currElementId ? 'edit-active' : ''} ${cmp.className || ''}`}
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  onBlur={handleTxtChange}
                  spellCheck="false">

                  {cmp.txt}</a>
      </span>
}