


export function CardPreview({ card, i }) {
    if (!card) return 'no card'
    return (<li className={` feature-card flex align-center ${i === 1 ? 'reverse' : ''} `}>
        <img src={card.src} alt="card" />
        <p>{card.txt}</p>
    </li>

    )
}