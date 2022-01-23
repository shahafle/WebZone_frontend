import teaserImg from '../../../../assets/imgs/home-page/pacifico-homepage-hero.jpg'

export function Teaser() {

    return (
        <section className="teaser">
            <div className="img-container">
                <img src={teaserImg} alt="Image" />
            </div>
        </section>
    )
}