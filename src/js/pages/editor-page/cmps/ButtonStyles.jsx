export function ButtonStyles({ style, onChangeStyle }) {
    return <div>
        <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={style.borderRadius} />
        <input type="checkbox" />
        <input type="url" placeholder='url' onChange={onChangeStyle} name='borderRadius' value={style.borderRadius} />
    </div>
}