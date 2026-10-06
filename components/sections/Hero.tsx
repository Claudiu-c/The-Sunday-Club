import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { ClubStarIcon } from "@/components/ui/Icons";

const tickerItems = Array.from({ length: 4 }, (_, index) => (
  <span key={index}>
    STRATEGY{" "}
    <b>
      <ClubStarIcon />
    </b>{" "}
    CONTENT{" "}
    <b>
      <ClubStarIcon />
    </b>{" "}
    SOCIAL{" "}
    <b>
      <ClubStarIcon />
    </b>{" "}
    CREATIVE DIRECTION{" "}
    <b>
      <ClubStarIcon />
    </b>
  </span>
));

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.meta}>
        <span>THE SUNDAY CLUB / STRATEGY · CONTENT · SOCIAL</span>
        <span>CREATIVE SOCIAL MEDIA AGENCY</span>
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark} aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Welcome to the club
          </p>

          <h1>
            <span className={styles.line}>Creating</span>
            <span className={styles.line}>brands people</span>
            <span className={styles.line}>want to be</span>
            <span className={`${styles.line} ${styles.finalLine}`}>
              <em>part of.</em>
            </span>
          </h1>

          <p className={styles.description}>
            Strategy. Content. Social.
            <br />
            Built to make your brand impossible to scroll past.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="/contact">
              Join the club{" "}
              <span aria-hidden="true">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 18 18 6M6 6h12v12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </Link>

            <Link className={styles.secondaryCta} href="/work">
              Request portfolio{" "}
              <span aria-hidden="true">
                <span aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 18 18 6M6 6h12v12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>

        <svg
          className={styles.scribble}
          viewBox="0 0 480 160"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 116 C 80 28, 139 177, 207 89 S 350 4, 462 67" />
        </svg>

        <div className={styles.visual}>
          <div className={styles.visualMain}>
            <Image
              src="/images/hero-main-hq.webp"
              alt="The Sunday Club sign held up in the sunshine"
              fill
              sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1800px) 40vw, 720px"
              quality={85}
              loading="eager"
              fetchPriority="high"
            />

            <span className={styles.mainLabel}>
              THE ART OF
              <br />
              BEING SEEN.
            </span>

            <span className={styles.mainIndex}>01 / THE CLUB</span>
          </div>

          <div className={styles.visualSide}>
            <Image
              src="/images/hero-detail.webp"
              alt="A branded Sunday Club coffee cup"
              fill
              sizes="(max-width: 760px) 40vw, 22vw"
            />
            <span>A LITTLE SUNDAY ENERGY.</span>
          </div>

          <div className={styles.visualSeal} aria-hidden="true">
            <Image
              src="/images/seal-emerald.svg"
              width={799}
              height={763}
              alt=""
            />
          </div>

          <span className={styles.visualNote} aria-hidden="true">
            A CREATIVE DEPARTMENT FOR BRANDS GOING PLACES.
          </span>
        </div>

        <a className={styles.scrollCue} href="#positioning">
          <span className={styles.scrollArrow} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              focusable="false"
            >
              <path
                d="M8 2v11m-4-4 4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          SCROLL TO EXPLORE
        </a>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {tickerItems}
          {tickerItems}
        </div>
      </div>
    </section>
  );
}
