import Link from "next/link";
import styles from "./Footer.module.css";

const links = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Our Approach", href: "/approach" },
  { label: "The People", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p>THE SUNDAY CLUB / CREATIVE SOCIAL MEDIA AGENCY</p>

          <a href="#" className={styles.backToTop}>
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className={styles.main}>
          <p>Creating brands people want to be part of.</p>

          <Link href="/contact" className={styles.cta}>
            Join the club <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.wordmark}>THE SUNDAY CLUB</div>

        <div className={styles.bottom}>
          <a href="mailto:hello@thesundayclub.info">hello@thesundayclub.info</a>

          <nav className={styles.socials} aria-label="Social media">
            <a
              href="https://www.instagram.com/thesundayclub_agency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Sunday Club on Instagram (opens in a new tab)"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.tiktok.com/@thesundayclub.ro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Sunday Club on TikTok (opens in a new tab)"
            >
              TikTok <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <span>© {new Date().getFullYear()} THE SUNDAY CLUB</span>
        </div>
      </div>
    </footer>
  );
}
