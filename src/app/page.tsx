import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Pionnier de la <span className={styles.highlight}>Formation Médicale</span> depuis 2004
          </h1>
          <p className={styles.subtitle}>
            CHANING FP : L'excellence en Santé et Pharmacie.
            Plus de 20 ans d'expertise pour lancer votre carrière de Délégué Médical ou Auxiliaire de Pharmacie.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/formations" className="btn-primary">
              Voir nos programmes
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Nous trouver (Yaoundé / Douala)
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>20+</span>
          <span className={styles.statLabel}>Ans d'Excellence</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>277+</span>
          <span className={styles.statLabel}>Entreprises Partenaires</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>1000+</span>
          <span className={styles.statLabel}>Professionnels Formés</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>DQP</span>
          <span className={styles.statLabel}>Diplôme MINEFOP</span>
        </div>
      </section>

      {/* Localisation Highlights */}
      <section className={styles.locations}>
        <h2 className={styles.sectionTitle}>Nos Centres de Formation</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Siège (Yaoundé)</h3>
            <p><strong>Melen :</strong> Face au CHU (Centre Hospitalier et Universitaire). Un cadre historique au cœur de la capitale.</p>
          </div>
          <div className={styles.card}>
            <h3>Annexe (Douala)</h3>
            <p><strong>Ange Raphaël :</strong> Face à l'Université de Douala. Idéalement situé pour nos étudiants du Littoral.</p>
          </div>
        </div>
      </section>

      {/* Featured Formations */}
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Nos Spécialités</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Délégué Médical</h3>
            <p>Le pont entre les laboratoires pharmaceutiques et les professionnels de santé.</p>
          </div>
          <div className={styles.card}>
            <h3>Auxiliaire de Pharmacie</h3>
            <p>Maîtrisez la gestion officinale et le conseil client en pharmacie.</p>
          </div>
          <div className={styles.card}>
            <h3>Secrétaire Médical</h3>
            <p>L'expertise administrative au service du parcours de soin.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
