import { Hero } from './cmps/Hero';

import { Link } from 'react-router-dom'
import { CardList } from './cmps/CardList'

export function HomePage() {
    return (
        <main className="home">
            {<Hero />}

        </main>
    )
}



{/* <section className="top-fold flex column align-center"> */ }
{/* <p>Your Dreams are  <span>Always</span>  possible, this time with ease.</p> */ }
{/* <div> */ }
{/* <img className="hero" src="https://media.istockphoto.com/photos/three-multiethnic-construction-workers-chatting-picture-id1332558192?s=612x612" alt="hero" /> */ }
{/* </div> */ }
{/* <Link to="/editor">Get Started!</Link> */ }
{/* <img className="editor-img" src="https://media.istockphoto.com/photos/pelican-swoop-picture-id493835012?b=1&k=20&m=493835012&s=170667a&w=0&h=5W9__AUKKBzag8rNQPtPnfjCuS-CqEYwW9lclQkU0ww=" alt="editor-img" /> */ }
{/* <CardList /> */ }
{/* </section> */ }