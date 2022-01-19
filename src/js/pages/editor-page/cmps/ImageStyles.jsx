

export function ImageStyles({ style, onChangeStyle }) {
    return <div>
       <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={+style.borderRadius} />
       <input type="range" min={1} max={200} onChange={onChangeStyle} name='width' value={+style.width} />
    </div>
 }