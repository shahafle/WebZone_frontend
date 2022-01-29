import teaserImg from '../../../../assets/imgs/home-page/pacifico-homepage-hero.png'

export function Teaser() {

    return (
        <section className="teaser">
            <div className="img-container">
                <img src={teaserImg} alt="Img" />
            </div>
        </section>
    )
}