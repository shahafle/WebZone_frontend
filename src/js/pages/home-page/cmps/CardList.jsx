import { CardPreview } from './CardPreview'
import { useState } from 'react'


export function CardList() {
    const [cards, setCards] = useState([{
        src: 'https://media.istockphoto.com/photos/dessert-of-belgian-waffle-and-fresh-berries-isolated-on-white-picture-id1271274110?k=20&m=1271274110&s=612x612&w=0&h=iM2MZ3oNyu7T-8zXrGNpdhpxjdglnsojQUNr_qc5eMg=',
        txt: 'we use full responsive web design'
    },
    {
        src: 'https://media.istockphoto.com/photos/waffles-picture-id156798125?k=20&m=156798125&s=612x612&w=0&h=zIdDqgrA8hK8ekDmFqSMpMxOukh-56z6NMH8VGPguUg=',
        txt: 'dont waste your time! we have drag n drop'
    },
    {
        src: 'https://media.istockphoto.com/photos/stack-of-belgian-waffles-picture-id183830904?k=20&m=183830904&s=612x612&w=0&h=yflxPjUh36Ki9SE3C079OYhRl-B46YWIk2Lq71VdKHM=',
        txt: 'i just called to say i love you and i mean it from the buttom of my heart'
    }
    ])

    if (!cards) return 'no cards'

    return (
        <ul>
            {cards.map((card, i) => {
                return <CardPreview key={card.src} card={card} i={i} />
            })}
        </ul>
    )
}