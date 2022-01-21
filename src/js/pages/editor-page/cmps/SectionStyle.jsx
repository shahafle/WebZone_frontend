export function SectionStyle({ element, onChangeStyle, onUploadImg }) {
    return <div>
        <label> set height
            <input type="range" min={0} max={200} onChange={onChangeStyle} name='paddingBlock' value={element.style['paddingBlock']} />
        </label>
        <label> side spacing
            <input type="range" min={0} max={150} onChange={onChangeStyle} name='paddingInline' value={element.style['paddingInline']} />
        </label>
        <label> Upload background image
            <input onChange={(ev) => onUploadImg(ev, true)} type="file" />
        </label>
    </div>
}