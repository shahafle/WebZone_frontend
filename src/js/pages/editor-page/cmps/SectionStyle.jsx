export function SectionStyle({ element, onChangeStyle, onUploadImg }) {
    return <div>
        <label> set height
            <input type="range" min={0} max={1400} onChange={onChangeStyle} name='height' value={element.style.height} />
        </label>
        <label> side spacing
            <input type="range" min={0} max={250} onChange={onChangeStyle} name='padding' value={element.style.padding} />
        </label>
        <label> Upload background image
            <input onChange={(ev) => onUploadImg(ev, true)} type="file" />
        </label>
    </div>
}