

export function Screen({children, cb}) {

    return (
        <div className="screen" onClick={cb}>
            {children}
        </div>
    )
}