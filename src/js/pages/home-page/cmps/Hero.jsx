import { Link } from 'react-router-dom';

import heroSvg from '../../../../assets/imgs/home-page/website_builder.svg'

export function Hero() {

    return (
        <section className="hero">
            <div className="hero-content flex column align-center">
                <h1>Build & Design your own website</h1>
                <p>Our platform was designed by top notch developers in order to provide you with the best experience possible.</p>
                <Link to="/templates">
                    <button className="hero-cta">Lets Start</button>
                </Link>
            </div>
        </section>
    )
}


{/* <p>Pick up a premade website template and dive deep in the world of web design and explore the platform.</p> */ }
{/* <img src={heroSvg} alt="Hero Image" /> */ }