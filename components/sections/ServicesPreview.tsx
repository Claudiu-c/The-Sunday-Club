import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesPreview.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

const services = [
  {
    number: "01",
    slug: "the-blueprint",
    type: "The strategy",
    name: "The Blueprint",
    promise: "Find your point of view.",
    description:
      "Strategy, positioning and a creative direction built around your brand.",
    image: "/images/blueprint-planning.webp",
    imageAlt: "Creative planning with a tablet, laptop and magazines",
  },
  {
    number: "02",
    slug: "the-sunday-session",
    type: "The production",
    name: "The Sunday Session",
    promise: "Make something worth stopping for.",
    description:
      "From concept to shoot, content that looks and feels like your brand.",
    image: "/images/session-production.webp",
    imageAlt: "Behind the scenes at a shared workspace",
  },
  {
    number: "03",
    slug: "the-club-engine",
    type: "The ongoing partnership",
    name: "The Club Engine",
    promise: "Keep the good thing going.",
    description:
      "An ongoing partnership bringing strategy, content and social together.",
    image: "/images/engine-team.webp",
    imageAlt: "A team reviewing creative ideas around a table",
  },
];

export default function ServicesPreview() {
  return (
    <section
      className={styles.section}
      id="services"
      aria-labelledby="services-title"
    >
      <div className={styles.inner}>
        <div className={styles.topline}>
          <span>02 / How to join the club</span>
          <span>Three ways to work together</span>
        </div>

        <div className={styles.headingRow}>
          <h2 id="services-title">
            Three ways <em>in.</em>
          </h2>

          <p>
            A clear direction. A dedicated shoot. An ongoing creative
            partnership. Find your way into the club.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((service) => (
            <article className={styles.offer} key={service.slug}>
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100px, 30vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.copy}>
                <div className={styles.serviceMeta}>
                  <span>{service.number}</span>
                  <span>{service.type}</span>
                </div>

                <h3>{service.name}</h3>

                <p className={styles.promise}>{service.promise}</p>
                <p className={styles.description}>{service.description}</p>

                <Link
                  href={`/services#${service.slug}`}
                  className={styles.link}
                  aria-label={`Explore ${service.name}`}
                >
                  Explore this service
                  <span aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ending}>
          <p>Not sure where to start? Let&apos;s figure it out together.</p>

          <Link href="/contact">
            Find your way in{" "}
            <span aria-hidden="true">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
