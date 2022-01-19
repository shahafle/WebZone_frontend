
export function ColorInput({ onChangeStyle }) {
    const colors = ['#FFAEBC', '#B4F8C8', '#A0E7E5', '#FBE7C6', '#A03A', '#cfa7C6']
    return (
        <div>
            {colors.map(color => {
                return <div
                    // onClick={() => onChangeStyle('backgroundColor', color)}
                    style={{ backgroundColor: color }}
                    key={color}
                    className="color-value"
                >
                    <h3>dont like palets?→</h3>
                    <input type="color" onChange={onChangeStyle} />
                </div>
            })}
        </div>
    )
}

