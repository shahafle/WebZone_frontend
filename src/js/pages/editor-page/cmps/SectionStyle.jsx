export function SectionStyle({ element, onChangeStyle, onUploadImg }) {
    return <div>
        <label> set height
            <input type="range" min={0} max={200} onChange={onChangeStyle} name='padding-block' value={element.style['padding-block']} />
        </label>
        <label> side spacing
            <input type="range" min={0} max={150} onChange={onChangeStyle} name='padding-inline' value={element.style['padding-inline']} />
        </label>
        <label> Upload background image
            <input onChange={(ev) => onUploadImg(ev, true)} type="file" />
        </label>
    </div>
}