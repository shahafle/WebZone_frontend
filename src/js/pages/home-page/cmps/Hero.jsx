import { Link } from 'react-router-dom';

import heroSvg from '../../../../assets/imgs/undraw_website_builder.svg'

export function Hero() {

    return (
        <section className="hero flex column justify-center align-center">
            <div className="hero-content flex">
                <div className="hero-text flex column">
                    <h1>Build & Design your own website</h1>
                    <h3>Our platform was designed by top notch developers in order to provide you with the best experience possible.</h3>
                    <p>Pick up a premade website template and dive deep in the world of web design and explore the platform.</p>
                </div>
                <img src={heroSvg} alt="Hero Image" />
            </div>
            <Link to="/templates"><button>Get Started</button></Link>
        </section>
    )
}