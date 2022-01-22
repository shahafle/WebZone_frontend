import { Hero } from './cmps/Hero';
import { Link } from 'react-router-dom'
import { CardList } from './cmps/CardList'


export function HomePage() {
    return (
        <main className="home">
            <Hero />
        </main>
    )
}