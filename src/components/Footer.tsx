import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h3>CHANING <span>FP</span></h3>
                        <p>Le centre de formation professionnelle de référence pour construire votre avenir avec excellence et modernité.</p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}>F</a>
                            <a href="#" className={styles.socialLink}>I</a>
                            <a href="#" className={styles.socialLink}>L</a>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h4>L'école</h4>
                        <ul>
                            <li><Link href="/about">Notre vision</Link></li>
                            <li><Link href="/about">L'équipe</Link></li>
                            <li><Link href="/formations">Nos formations</Link></li>
                            <li><Link href="/contact">Actualités</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Utiles</h4>
                        <ul>
                            <li><Link href="/admissions">Admissions</Link></li>
                            <li><Link href="/admissions">Calendrier</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Contact</h4>
                        <ul className={styles.contactInfo}>
                            <li>
                                <span>📍</span>
                                <span>Adresse de l'école, Ville</span>
                            </li>
                            <li>
                                <span>📞</span>
                                <span>+XXX XX XX XX XX</span>
                            </li>
                            <li>
                                <span>✉️</span>
                                <span>contact@chaningfp.fr</span>
                            </li>
                            <li>
                                <span>💬</span>
                                <span>WhatsApp: +XXX XX XX XX XX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} CHANING FP. Tous droits réservés.</p>
                    <div className={styles.legal}>
                        <Link href="#">Mentions Légales</Link> | <Link href="#">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
