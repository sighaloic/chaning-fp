import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Contactez <span className="highlight">Nous</span></h1>
                    <p>Nous sommes à votre écoute pour répondre à toutes vos questions.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.formSection}>
                            <h2>Envoyez-nous un message</h2>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Nom Complet</label>
                                    <input type="text" id="name" placeholder="Votre nom" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="votre@email.com" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Sujet</label>
                                    <select id="subject">
                                        <option>Information Formation</option>
                                        <option>Candidature</option>
                                        <option>Partenariat</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={5} placeholder="Votre message..." required></textarea>
                                </div>
                                <button type="submit" className="btn-primary">Envoyer le message</button>
                            </form>
                        </div>

                        <div className={styles.infoSection}>
                            <div className={styles.infoCard}>
                                <h3>Nos Adresses</h3>
                                <div className={styles.infoItem}>
                                    <strong>📍 Siège (Yaoundé) :</strong>
                                    <p>MRS Mélen, Face CHU, Yaoundé</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>📍 Annexe (Douala) :</strong>
                                    <p>Face Université de Douala, Carrefour Ange Raphaël</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>📞 Téléphone :</strong>
                                    <p>+237 699 92 29 54 / +237 677 66 36 30</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>✉️ Email :</strong>
                                    <p>chaningfp@yahoo.fr</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>💬 WhatsApp :</strong>
                                    <p>+237 699 92 29 54</p>
                                </div>
                            </div>

                            <div className={styles.mapPlaceholder}>
                                <p>Carte de Yaoundé Melen & Douala</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
