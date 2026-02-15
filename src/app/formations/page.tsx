import styles from "./formations.module.css";
import Link from "next/link";

const formations = [
    {
        id: "delegue-medical",
        title: "Délégué Médical",
        category: "Santé",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        description: "Devenez l'expert qui assure la promotion des médicaments et des dispositifs médicaux auprès des praticiens."
    },
    {
        id: "auxiliaire-pharmacie",
        title: "Auxiliaire de Pharmacie",
        category: "Pharmacie",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        description: "Apprenez à seconder le pharmacien dans la préparation, la délivrance et la gestion des stocks de l'officine."
    },
    {
        id: "secretaire-medical",
        title: "Secrétaire Médical",
        category: "Santé",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        description: "Maîtrisez l'accueil, la gestion des dossiers patients et l'organisation des cabinets médicaux et cliniques."
    },
    {
        id: "statistiques-appliquees",
        title: "Statistiques Appliquées",
        category: "Analyse",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        description: "Spécialisez-vous dans le traitement des données de santé et les études épidémiologiques."
    }
];

export default function FormationsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className="container">
                    <h1>Nos <span className="highlight">Formations</span></h1>
                    <p>Trouvez le parcours qui correspond à vos ambitions.</p>
                </div>
            </header>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.filterSection}>
                        {/* Simple filtering tabs placeholder */}
                        <div className={styles.tabs}>
                            <button className={styles.tabActive}>Tous</button>
                            <button className={styles.tab}>Commerce</button>
                            <button className={styles.tab}>Gestion</button>
                            <button className={styles.tab}>Digital</button>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {formations.map((f) => (
                            <div key={f.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.category}>{f.category}</span>
                                    <span className={styles.level}>{f.level}</span>
                                </div>
                                <h3>{f.title}</h3>
                                <p>{f.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.duration}>Durée : {f.duration}</span>
                                    <Link href={`/formations/${f.id}`} className={styles.detailsBtn}>
                                        Voir détails →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <h2>Besoin d'aide pour choisir ?</h2>
                    <p>Nos conseillers d'orientation sont là pour vous accompagner dans votre projet.</p>
                    <Link href="/contact" className="btn-primary">
                        Prendre rendez-vous
                    </Link>
                </div>
            </section>
        </div>
    );
}
