import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-in`}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Depuis 2004</div>
          <h1 className={styles.title}>
            Pionnier de la <span className={styles.highlight}>Formation Médicale</span> au Cameroun
          </h1>
          <p className={styles.subtitle}>
            CHANING FP : L'excellence en Santé et Pharmacie.
            Débloquez votre avenir avec nos programmes certifiés par le MINEFOP.
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

      {/* Stats Section with Slide Up Effect */}
      <section className={`${styles.stats} animate-slide-up`}>
        {[
          { number: "20+", label: "Ans d'Excellence" },
          { number: "277+", label: "Laboratoires Partenaires" },
          { number: "1000+", label: "Diplômés Actifs" },
          { number: "DQP", label: "Certification État" }
        ].map((stat, idx) => (
          <div key={idx} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Localisation Highlights */}
      <section className={`${styles.locations} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nos Centres de Formation</h2>
          <p className={styles.sectionSubtitle}>Des environnements d'apprentissage modernes au cœur des pôles médicaux.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.locationCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/images/pharmacy.png"
                alt="Laboratoire Pharmacie"
                width={600}
                height={300}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Siège (Yaoundé)</h3>
              <p><strong>Melen :</strong> Face au CHU. Un cadre historique au cœur de la capitale, idéal pour l'immersion médicale.</p>
              <Link href="/contact" className={styles.cardLink}>Voir sur la carte →</Link>
            </div>
          </div>
          <div className={styles.locationCard}>
            <div className={styles.cardImagePlaceholder}>
              <span>Douala - Ange Raphaël</span>
            </div>
            <div className={styles.cardContent}>
              <h3>Annexe (Douala)</h3>
              <p><strong>Ange Raphaël :</strong> Face à l'UdeD. Idéalement situé pour nos étudiants du Littoral et des régions environnantes.</p>
              <Link href="/contact" className={styles.cardLink}>Voir sur la carte →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Formations with Pattern Background */}
      <section className={`${styles.featured} bg-pattern`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nos Spécialités</h2>
            <p className={styles.sectionSubtitle}>Des formations de 12 mois conçues pour l'insertion directe.</p>
          </div>
          <div className={styles.grid}>
            {[
              { title: "Délégué Médical", desc: "Le lien stratégique entre laboratoires et praticiens." },
              { title: "Auxiliaire de Pharmacie", desc: "Expertise en gestion officinale et conseil patient." },
              { title: "Secrétaire Médical", desc: "Gestion administrative avancée des établissements de santé." }
            ].map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.iconContainer}>
                  <div className={styles.dot}></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href="/formations" className={styles.cardLink}>Savoir plus</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
