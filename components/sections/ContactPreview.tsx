import Image from "next/image";
import Link from "next/link";
import styles from "./ContactPreview.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

export default function ContactPreview() {
  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-preview-title"
    >
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span>06 / Your invitation</span>
          <span>Good things start with a conversation</span>
        </div>

        <div className={styles.layout}>
          <Reveal className={styles.copy} variant="text">
            <p className={styles.eyebrow}>
              This could be the start of something
            </p>

            <h2 id="contact-preview-title">
              Let&apos;s make
              <br />
              your brand
              <br />
              <em>worth following.</em>
            </h2>

            <p className={styles.description}>
              Your brand, your ambitions, our next conversation. Tell us what
              you&apos;re dreaming up.
            </p>
          </Reveal>

          <Reveal className={styles.invitation} direction="right" delay={180}>
            <div className={styles.invitationTop}>
              <span>The Sunday Club</span>

              <Image
                src="/images/seal-emerald.svg"
                alt=""
                aria-hidden="true"
                width={70}
                height={67}
              />
            </div>

            <p className={styles.invitationTitle}>
              Your next chapter
              <br />
              starts here.
            </p>

            <Link href="/contact" className={styles.cta}>
              Join the club
              <span aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </Link>

            <a href="mailto:hello@thesundayclub.info" className={styles.email}>
              hello@thesundayclub.info
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
