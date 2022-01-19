export function TextStyles({ style, onChangeStyle }) {
   return <div>
      <input type="range" min={0} max={100} onChange={onChangeStyle} name='borderRadius' value={style.borderRadius} />
   </div>
}