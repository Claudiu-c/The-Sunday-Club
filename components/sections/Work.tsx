import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

type WorkProps = {
  variant?: "preview" | "page";
};

export default function Work({ variant = "preview" }: WorkProps) {
  const isPage = variant === "page";
  const Heading = isPage ? "h1" : "h2";

  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <div className={styles.inner}>
        <div className={styles.topline}>
          <span>{isPage ? "The Sunday Club / Our work" : "03 / Our work"}</span>
          <span>A closer look, on request</span>
        </div>

        <div className={styles.layout}>
          <figure className={styles.visual}>
            <Reveal className={styles.imageFrame} variant="image">
              <div className={styles.imageWrap}>
                <Image
                  src="/images/portfolio-invitation.webp"
                  alt="A person holding a sign with The Sunday Club logo"
                  fill
                  sizes="(max-width: 760px) 90vw, 35vw"
                  className={styles.image}
                />
              </div>
            </Reveal>

            <figcaption className={styles.caption}>
              <span>A glimpse of The Sunday Club.</span>
              <span aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </figcaption>
          </figure>

          <Reveal className={styles.copy} variant="text" delay={180}>
            <p className={styles.eyebrow}>
              Your invitation to take a closer look
            </p>

            <Heading id="work-title" className={styles.heading}>
              See what
              <br />
              <em>We&apos;re made of.</em>
            </Heading>

            <p className={styles.description}>
              Want to see what that looks like in practice? Selected portfolios
              are available on request.
            </p>

            <p className={styles.detail}>
              Tell us about your brand and what you&apos;re looking to create.
              We&apos;ll help you explore the examples we can share.
            </p>

            {isPage && (
              <p className={styles.privateNote}>
                Some of our work is covered by confidentiality agreements. We
                respect those commitments and share project details only where
                permitted.
              </p>
            )}

            <Link href={isPage ? "/contact" : "/work"} className={styles.cta}>
              {isPage ? "Request our portfolio" : "Discover our work"}
              <span aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </Link>

            <span className={styles.availability}>
              Portfolio available on request
            </span>
          </Reveal>
        </div>

        {isPage && (
          <section
            className={styles.requestSection}
            aria-labelledby="portfolio-request-title"
          >
            <h2 id="portfolio-request-title">
              A little context goes a long way.
            </h2>

            <div className={styles.steps}>
              <div>
                <span className={styles.stepNumber}>01 / YOUR BRAND</span>
                <h3>Tell us your story.</h3>
                <p>
                  Share your brand, industry and what you&apos;re hoping to
                  achieve through our inquiry form.
                </p>
              </div>

              <div>
                <span className={styles.stepNumber}>02 / A CLOSER LOOK</span>
                <h3>Explore the possibilities.</h3>
                <p>
                  We&apos;ll let you know which portfolio examples we can share
                  with you.
                </p>
              </div>

              <div>
                <span className={styles.stepNumber}>03 / WHAT&apos;S NEXT</span>
                <h3>Start a conversation.</h3>
                <p>
                  Together, we can explore the right creative direction and way
                  of working for your brand.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
