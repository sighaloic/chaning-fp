import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className={`${styles.container} animate-fade-in`}>
            <header className={styles.hero}>
                <div className="container">
                    <div className={styles.badge}>Fondée en 2004</div>
                    <h1>Pionnier de l'Excellence <span className="highlight">Médicale</span></h1>
                    <p>Une école visionnaire dédiée à la formation des leaders de la santé au Cameroun.</p>
                </div>
            </header>

            <section className={`${styles.content} bg-pattern`}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <div className={styles.iconBox}>📖</div>
                            <h2>Notre Mission</h2>
                            <p>
                                Depuis plus de 20 ans, CHANING FP s'est imposé comme
                                la référence incontournable dans le secteur de la Santé et de la Pharmacie.
                                Basés à **Yaoundé (Melen)** et **Douala (Ange Raphaël)**, nous formons les experts de demain.
                            </p>
                            <p>
                                Grâce à nos partenariats avec plus de 277 laboratoires, nous garantissons une
                                immersion professionnelle immédiate. Notre pédagogie est axée sur le résultat :
                                **votre insertion professionnelle.**
                            </p>
                        </div>
                        <div className={styles.values}>
                            <h2>Nos Valeurs Fondamentales</h2>
                            <div className={styles.valueGrid}>
                                {[
                                    { title: "Excellence", desc: "Standards de qualité supérieurs." },
                                    { title: "Éthique", desc: "Intégrité médicale et humaine." },
                                    { title: "Innovation", desc: "Méthodes pédagogiques modernes." },
                                    { title: "Succès", desc: "Insertion professionnelle garantie." }
                                ].map((v, i) => (
                                    <div key={i} className={styles.valueItem}>
                                        <h3>{v.title}</h3>
                                        <p>{v.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.team}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Une Équipe d'Experts</h2>
                        <p>Nos formateurs sont des professionnels actifs du milieu médical et pharmaceutique.</p>
                    </div>
                    <div className={styles.teamGrid}>
                        {[
                            { role: "Direction Académique", desc: "Stratégie pédagogique et excellence." },
                            { role: "Praticiens Hospitaliers", desc: "Enseignements cliniques et pratiques." },
                            { role: "Pharmaciens & Biologistes", desc: "Expertise officinale et laboratoire." }
                        ].map((m, i) => (
                            <div key={i} className={styles.member}>
                                <div className={styles.avatarPlaceholder}>💊</div>
                                <h3>{m.role}</h3>
                                <p>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
