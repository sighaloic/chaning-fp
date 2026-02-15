import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h3>CHANING <span>FP</span></h3>
                        <p>Pionnier de la formation professionnelle médicale et pharmaceutique au Cameroun depuis 2004.</p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/profile.php?id=100057020157321" className={styles.socialLink} target="_blank" rel="noopener noreferrer">F</a>
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
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Utiles</h4>
                        <ul>
                            <li><Link href="/admissions">Admissions</Link></li>
                            <li><Link href="/admissions">Calendrier</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Contact</h4>
                        <ul className={styles.contactInfo}>
                            <li>
                                <span>📍</span>
                                <span>Melen, Face CHU, Yaoundé</span>
                            </li>
                            <li>
                                <span>📍</span>
                                <span>Ange Raphaël, Face Univ, Douala</span>
                            </li>
                            <li>
                                <span>📞</span>
                                <span>+237 699 92 29 54</span>
                            </li>
                            <li>
                                <span>✉️</span>
                                <span>chaningfp@yahoo.fr</span>
                            </li>
                            <li>
                                <span>💬</span>
                                <span>WhatsApp: +237 699 92 29 54</span>
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
