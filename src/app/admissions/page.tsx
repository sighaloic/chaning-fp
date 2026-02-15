import styles from "./admissions.module.css";
import Link from "next/link";

export default function AdmissionsPage() {
    const steps = [
        {
            number: "01",
            title: "Candidature en ligne",
            icon: "📑",
            description: "Dépôts des dossiers (Yaoundé ou Douala) ou via notre portail numérique."
        },
        {
            number: "02",
            title: "Entretien Individuel",
            icon: "🤝",
            description: "Discussion sur votre projet professionnel et motivation avec nos experts."
        },
        {
            number: "03",
            title: "Tests de Niveau",
            icon: "✍️",
            description: "Évaluation des aptitudes de base selon la filière choisie (Santé ou Analyse)."
        },
        {
            number: "04",
            title: "Inscription & Stage",
            icon: "🎓",
            description: "Finalisation du dossier et planification de l'immersion en milieu professionnel."
        }
    ];

    return (
        <div className={`${styles.container} animate-fade-in`}>
            <header className={styles.hero}>
                <div className="container">
                    <div className={styles.badge}>Inscriptions Ouvertes</div>
                    <h1>Rejoindre <span className="highlight">CHANING FP</span></h1>
                    <p>Un parcours structuré pour transformer votre vocation en expertise médicale.</p>
                </div>
            </header>

            <section className={styles.process}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Processus d'Admission</h2>
                    <div className={styles.stepsGrid}>
                        {steps.map((step) => (
                            <div key={step.number} className={styles.stepCard}>
                                <div className={styles.stepHeader}>
                                    <span className={styles.stepIcon}>{step.icon}</span>
                                    <span className={styles.stepNumber}>{step.number}</span>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.info} bg-pattern`}>
                <div className="container">
                    <div className={styles.infoGrid}>
                        <div className={styles.infoBlock}>
                            <div className={styles.marker}>DQP</div>
                            <h2>Structure du Programme</h2>
                            <p>
                                Nos formations durent **12 mois** :
                                - **7 mois** de cours intensifs (Théorie & Travaux Dirigés).
                                - **16 semaines** de stage pratique garanti en laboratoire ou pharmacie.
                            </p>
                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.marker}>MINEFOP</div>
                            <h2>Diplôme & Certification</h2>
                            <p>
                                Le **Diplôme de Qualification Professionnelle (DQP)** est délivré par le **MINEFOP**.
                                Il est reconnu par l'État et constitue le sésame pour l'emploi direct au Cameroun.
                            </p>
                        </div>
                    </div>
                    <div className={styles.finalCta}>
                        <div className={styles.ctaCard}>
                            <h3>Prêt à commencer ?</h3>
                            <p>Inscrivez-vous pour la prochaine session et assurez votre place.</p>
                            <Link href="/contact" className="btn-primary">
                                Déposer ma candidature
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
