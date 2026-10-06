import Image from "next/image";
import Link from "next/link";
import styles from "./Positioning.module.css";
import {
  ArrowUpRightIcon,
  ClubStarIcon,
  ArrowDownIcon,
} from "@/components/ui/Icons";

type PositioningProps = {
  variant?: "preview" | "page";
  showApproachLink?: boolean;
};

const principles = [
  {
    number: "01",
    title: "Start with a point of view.",
    description:
      "Before deciding what to post, we define what your brand stands for, who it speaks to and what makes it worth following.",
  },
  {
    number: "02",
    title: "Make it unmistakably yours.",
    description:
      "Creative direction connects your visuals, your voice and your stories. Each piece of content should feel part of the same brand.",
  },
  {
    number: "03",
    title: "Give people a reason to stay.",
    description:
      "We create with your audience in mind. For ongoing partnerships, performance helps shape what comes next.",
  },
];

export default function Positioning({
  variant = "preview",
  showApproachLink = true,
}: PositioningProps) {
  const isPage = variant === "page";
  const Heading = isPage ? "h1" : "h2";

  return (
    <section
      className={`${styles.section} ${isPage ? styles.page : ""}`}
      id="positioning"
      aria-labelledby="positioning-title"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <span>
            {isPage
              ? "The Sunday Club / Our approach"
              : "01 / Our point of view"}
          </span>
          <span>Beyond the content calendar</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              <span aria-hidden="true">
                <ClubStarIcon />
              </span>
              The Sunday Club perspective
            </p>

            <Heading id="positioning-title" className={styles.heading}>
              Make them feel
              <br />
              <em>something.</em>
            </Heading>

            <p className={styles.statement}>
              Posting keeps you present.
              <br />
              Building a brand makes you remembered.
            </p>

            <p className={styles.detail}>
              We bring strategy, creative direction and content together to give
              people a reason to follow your brand and keep coming back.
            </p>

            {isPage && (
              <p className={`${styles.detail} ${styles.pageDetail}`}>
                A content calendar gives you a schedule. A clear point of view
                gives every post a purpose. We start with your brand, then build
                the ideas, visuals and stories around it.
              </p>
            )}

            {!isPage && showApproachLink && (
              <Link href="/approach" className={styles.link}>
                Discover our approach
                <span aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </Link>
            )}

            {isPage && (
              <a href="#process" className={styles.link}>
                See how we work
                <span aria-hidden="true">
                  <ArrowDownIcon width={16} height={16} />
                </span>
              </a>
            )}
          </div>

          <figure className={styles.visual}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/approach-behind-scenes.webp"
                alt="The team arranging props behind the scenes"
                fill
                sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1300px) 36vw, 460px"
                className={styles.image}
                loading={isPage ? "eager" : "lazy"}
              />

              <span className={styles.imageIndex} aria-hidden="true">
                THE THINKING / THE MAKING
              </span>
            </div>

            <figcaption className={styles.caption}>
              <span>Good content starts before the camera.</span>
              <span aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </figcaption>
          </figure>
        </div>

        {isPage && (
          <div className={styles.principles}>
            {principles.map((principle) => (
              <article className={styles.principle} key={principle.number}>
                <span className={styles.principleNumber}>
                  {principle.number} / THE APPROACH
                </span>

                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
