import './footer.css'

export default function Footer(){
    return(
        <section className="footer__wrapper">
            <div className="footer">
                <a className="link__restaurant" href="#">
                    Fyner - Hamburger Allee 23, 30161 Hannover
                </a>
                <div className="infos">
                    <a className="link__info" href="#">Impressum</a>
                    <a className="link__info" href="#">Datenschutz</a>
                    <a className="link__info" href="#">Kontakt</a>
                </div>
            </div>
        </section>
    )

}