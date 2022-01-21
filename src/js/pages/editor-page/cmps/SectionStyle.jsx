export function SectionStyle({ element, onChangeStyle, onUploadImg }) {
    return <div className="flex column style-inputs">
        <label> Set Height
            <input type="range" min={0} max={200} onChange={onChangeStyle} name='paddingBlock' value={element.style['paddingBlock']} />
        </label>
        <label> Side Spacing
            <input type="range" min={0} max={150} onChange={onChangeStyle} name='paddingInline' value={element.style['paddingInline']} />
        </label>
        <label> Upload Background Image
            <input onChange={(ev) => onUploadImg(ev, true)} type="file" />
        </label>
    </div>
}