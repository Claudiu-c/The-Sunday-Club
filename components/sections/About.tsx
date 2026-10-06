import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

type AboutProps = {
  variant?: "preview" | "page";
};

export default function About({ variant = "preview" }: AboutProps) {
  const isPage = variant === "page";
  const Heading = isPage ? "h1" : "h2";

  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span>
            {isPage ? "The Sunday Club / The people" : "05 / The people"}
          </span>
          <span>Founder-led. Creatively driven.</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.story}>
            <p className={styles.eyebrow}>A little about us</p>

            <Heading id="about-title" className={styles.heading}>
              Meet the minds
              <br />
              behind <em>the club.</em>
            </Heading>

            <p className={styles.lead}>
              The Sunday Club was founded by Maria and Andreea for brands that
              want to do more than simply show up online.
            </p>

            <p className={styles.body}>
              We bring strategy, creative direction and content together to
              build brands with personality and a presence people actually want
              to follow.
            </p>

            <Link className={styles.link} href={isPage ? "/contact" : "/about"}>
              {isPage ? "Come say hello" : "Meet the people"}
              <span aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>

          <figure className={styles.founders}>
            <div className={styles.photoWrap}>
              <Image
                src="/images/founders-together.webp"
                alt="The Sunday Club founders sitting together on a sofa"
                fill
                unoptimized
                sizes="(max-width: 760px) 90vw, 43vw"
                className={styles.photo}
              />

              <span className={styles.photoLabel}>
                THE PEOPLE BEHIND THE CLUB
              </span>
            </div>

            <figcaption className={styles.caption}>
              <span>Maria &amp; Andreea</span>
              <span>Co-founders</span>
            </figcaption>
          </figure>
        </div>

        {isPage && (
          <>
            <section className={styles.origin} aria-labelledby="origin-title">
              <div>
                <p className={styles.eyebrow}>Why we built the club</p>

                <h2 id="origin-title">
                  A presence with
                  <br />
                  <em>personality.</em>
                </h2>
              </div>

              <div className={styles.originCopy}>
                <p>
                  We created The Sunday Club for brands that want more than an
                  online presence. Brands with something to say, a point of view
                  to share and a community to build.
                </p>

                <p>
                  Our role is to bring those things together through strategy,
                  creative direction and content people want to follow.
                </p>

                <p className={styles.philosophy}>
                  Creating brands people want to be part of.
                </p>
              </div>
            </section>

            <section className={styles.film} aria-labelledby="film-title">
              <div className={styles.filmCopy}>
                <p className={styles.eyebrow}>Inside our world</p>

                <h2 id="film-title">
                  Unmistakably
                  <br />
                  <em>The Sunday Club.</em>
                </h2>

                <p>A closer look at the visual identity behind the club.</p>
              </div>

              <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster="/images/sunday-logo-poster.webp"
                aria-label="The Sunday Club visual identity film"
              >
                <source src="/videos/sunday-logo.mp4" type="video/mp4" />
                Your browser does not support embedded video.
                <a href="/videos/sunday-logo.mp4">Watch the identity film.</a>
              </video>
            </section>
          </>
        )}
      </div>
    </section>
  );
}
