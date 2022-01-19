export function SectionStyle({ elementStyle, onChangeStyle }) {
    return <div>
        <label> set height
            <input type="range" min={0} max={1400} onChange={onChangeStyle} name='height' value={elementStyle.height} />
        </label>
        <label> side spacing
            <input type="range" min={0} max={250} onChange={onChangeStyle} name='padding' value={elementStyle.padding} />
        </label>
    </div>
}