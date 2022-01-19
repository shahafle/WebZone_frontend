export function ButtonStyles({ elementStyle, onChangeStyle }) {
    return <div>
        <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={elementStyle.borderRadius} />
        <input type="range" min={0} max={10} onChange={onChangeStyle} name='border' value={elementStyle.border} />
        <input type="color" onChange={onChangeStyle} name="border" value={elementStyle.border} />
        {/* <input type="url" placeholder='enter url' onChange={onChangeStyle} name='url' /> */}
    </div>
}