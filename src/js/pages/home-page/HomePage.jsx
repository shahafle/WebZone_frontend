import { Hero } from './cmps/Hero';
import { Cards } from './cmps/Cards';
import { Teaser } from './cmps/Teaser';
import { AppFooter } from '../../cmps/AppFooter';


export function HomePage() {
    return (
        <main className="home">
            <Hero />
            <Teaser />
            <Cards />
            <AppFooter />
        </main>
    )
}