import styles from "./admissions.module.css";
import Link from "next/link";

export default function AdmissionsPage() {
    const steps = [
        {
            number: "01",
            title: "Candidature en ligne",
            description: "Remplissez notre formulaire de candidature et déposez votre CV ainsi que vos derniers bulletins de notes."
        },
        {
            number: "02",
            title: "Entretien Individuel",
            description: "Rencontrez nos chargés d'admission pour discuter de votre projet professionnel et de votre motivation."
        },
        {
            number: "03",
            title: "Tests de Sélection",
            description: "Selon la formation choisie, des tests de positionnement (culture G, logique, anglais) peuvent être requis."
        },
        {
            number: "04",
            title: "Inscription Finale",
            description: "Une fois admis, finalisez votre dossier avec les pièces administratives et trouvez votre entreprise d'accueil."
        }
    ];

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Rejoindre <span className="highlight">CHANING FP</span></h1>
                    <p>Un processus d'admission simple et transparent pour lancer votre avenir.</p>
                </div>
            </section>

            <section className={styles.process}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Les Étapes de votre Inscription</h2>
                    <div className={styles.stepsGrid}>
                        {steps.map((step) => (
                            <div key={step.number} className={styles.stepCard}>
                                <span className={styles.stepNumber}>{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.info}>
                <div className="container">
                    <div className={styles.infoGrid}>
                        <div className={styles.infoBlock}>
                            <h2>Structure de la Formation</h2>
                            <p>Nos programmes DQP s'étendent sur 12 mois : <strong>7 mois de cours théoriques</strong> intensifs en présentiel suivis de <strong>16 semaines de stage pratique</strong> en entreprise (laboratoires, pharmacies, cliniques).</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h2>Diplôme & Certification</h2>
                            <p>À l'issue de votre parcours, vous obtenez le <strong>DQP (Diplôme de Qualification Professionnelle)</strong> délivré par le MINEFOP (Ministère de l'Emploi et de la Formation Professionnelle), reconnu par l'État et les employeurs.</p>
                        </div>
                    </div>
                    <div className={styles.finalCta}>
                        <Link href="/contact" className="btn-primary">
                            Postuler maintenant
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
