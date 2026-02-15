"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/about" },
        { name: "Formations", path: "/formations" },
        { name: "Admissions", path: "/admissions" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    CHANING <span className={styles.logoSpan}>FP</span>
                </Link>

                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={`${styles.link} ${pathname === link.path ? styles.active : ""}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/admissions" className={styles.cta}>
                            S'inscrire
                        </Link>
                    </li>
                </ul>

                <button className={styles.mobileToggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
