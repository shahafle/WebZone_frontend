export function ButtonStyles({ element, onChangeStyle, onChangeAttr }) {
    return <div className="flex column style-inputs">
        <label>Border Radius:
            <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={element.style.borderRadius} />
        </label>
        <label>Link to:
            <input type="url" onChange={onChangeAttr} name='url' value={element.url} />
        </label>
        {/* <label>border:
            <input type="range" min={0} max={10} onChange={onChangeStyle} name='border' value={elementStyle.border} />
        </label> */}
        {/* <input type="color" onChange={onChangeStyle} name="border" value={elementStyle.border} /> */}
    </div>
}