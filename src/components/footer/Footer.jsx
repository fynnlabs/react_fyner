import './style.css'

export default function Footer(){
    const address = 'Fyner - Hamburger Allee 23, 30161 Hannover';
    const impressum = 'Impressum';
    const datenschutz = 'Datenschutz';
    const kontakt = 'Kontakt';

    return(
        <section className="footer__wrapper">
            <div className="footer">
                <a className="link__restaurant" href="/">
                    {address}
                </a>
                <div className="infos">
                    <a className="link__info" href="/">{impressum}</a>
                    <a className="link__info" href="/">{datenschutz}</a>
                    <a className="link__info" href="/">{kontakt}</a>
                </div>
            </div>
        </section>
    )

}