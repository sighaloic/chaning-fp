import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>À Propos de <span className="highlight">CHANING FP</span></h1>
                <p>Une école tournée vers l'excellence et l'avenir professionnel.</p>
            </section>

            <section className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.textBlock}>
                        <h2>Notre Mission</h2>
                        <p>
                            Pionnier de la formation professionnelle au Cameroun depuis 2004, CHANING FP s'est imposé comme
                            la référence dans le secteur de la Santé et de la Pharmacie en Afrique Centrale.
                        </p>
                        <p>
                            Notre mission est de transformer des jeunes passionnés en experts opérationnels. Grâce à nos
                            partenariats avec plus de 277 laboratoires et agences pharmaceutiques, nous garantissons une
                            immersion professionnelle immédiate et un suivi de carrière sur 5 ans.
                        </p>
                    </div>
                    <div className={styles.values}>
                        <h2>Nos Valeurs</h2>
                        <ul>
                            <li><strong>Excellence :</strong> Nous visons les plus hauts standards de qualité dans nos programmes.</li>
                            <li><strong>Innovation :</strong> Nous adaptons nos méthodes aux évolutions technologiques.</li>
                            <li><strong>Proximité :</strong> Un suivi personnalisé pour chaque apprenant.</li>
                            <li><strong>Intégrité :</strong> Une éthique irréprochable dans toutes nos relations.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.team}>
                <h2>Une Équipe Passionnée</h2>
                <p>Nos formateurs sont des professionnels actifs, experts dans leur domaine, dédiés à votre progression.</p>
                <div className={styles.teamGrid}>
                    {/* Team member placeholders */}
                    <div className={styles.member}>
                        <div className={styles.avatarPlaceholder}></div>
                        <h3>Direction Pédagogique</h3>
                        <p>Accompagnement et stratégie de formation.</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.avatarPlaceholder}></div>
                        <h3>Experts Métiers</h3>
                        <p>Formateurs issus du monde de l'entreprise.</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.avatarPlaceholder}></div>
                        <h3>Support Étudiant</h3>
                        <p>À votre service pour tout le processus administratif.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
