import styles from "./formations.module.css";
import Link from "next/link";

const formations = [
    {
        id: "delegue-medical",
        title: "Délégué Médical",
        category: "Santé",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14.5A2.5 2.5 0 0 1 16.5 17h-9A2.5 2.5 0 0 1 5 14.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9.5z" />
                <path d="M12 7v6M9 10h6" />
            </svg>
        ),
        description: "Le pont stratégique entre laboratoires et médecins."
    },
    {
        id: "auxiliaire-pharmacie",
        title: "Auxiliaire de Pharmacie",
        category: "Pharmacie",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.5 9h15M4.5 15h15M6 3v18M18 3v18" />
            </svg>
        ),
        description: "Expertise en gestion officinale et oncil patient."
    },
    {
        id: "secretaire-medical",
        title: "Secrétaire Médical",
        category: "Santé",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M7 8h10M7 12h10M7 16h6" />
            </svg>
        ),
        description: "Gestion administrative des structures de santé."
    },
    {
        id: "statistiques-appliquees",
        title: "Statistiques Appliquées",
        category: "Analyse",
        duration: "12 mois",
        level: "DQP (MINEFOP)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-2-2-4 4" />
            </svg>
        ),
        description: "Analyse avancée des données de santé."
    }
];

export default function FormationsPage() {
    return (
        <div className={`${styles.container} animate-fade-in`}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.badge}>Catalogue 2024</div>
                    <h1>Nos <span className="highlight">Filières</span> d'Excellence</h1>
                    <p>Des programmes intensifs de 12 mois pour une insertion professionnelle immédiate.</p>
                </div>
            </header>

            <section className={styles.catalog}>
                <div className="container">
                    <div className={styles.grid}>
                        {formations.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <div className={styles.tag}>{item.category}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className={styles.meta}>
                                    <span>⏱ {item.duration}</span>
                                    <span>🎓 {item.level}</span>
                                </div>
                                <Link href="/contact" className={styles.detailsBtn}>
                                    S'inscrire
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.cta} bg-pattern`}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Besoin d'orientation ?</h2>
                        <p>Nos conseillers sont disponibles pour vous guider vers la filière adaptée à votre profil.</p>
                        <Link href="/contact" className="btn-primary">
                            Prendre rendez-vous
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
