import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    number: "01",
    slug: "the-blueprint",
    type: "The strategy",
    name: "The Blueprint",
    promise: "Find your point of view.",
    description:
      "For brands that need a clear direction before creating more content. Build a strategic foundation around what makes your brand different.",
    image: "/images/blueprint-planning.webp",
    imageAlt: "Creative planning with a tablet, laptop and magazines",
    price: "€600",
    priceNote: "One-time strategic collaboration.",
    details: [
      {
        label: "What you receive",
        value: "A data-informed strategy and strategic conclusions.",
      },
      {
        label: "How we work",
        value: "A one-time collaboration.",
      },
      {
        label: "Content production",
        value: "Not included.",
      },
      {
        label: "Account management",
        value: "Not included.",
      },
    ],
    takeaway: "You receive the strategic conclusions to guide your next steps.",
  },
  {
    number: "02",
    slug: "the-sunday-session",
    type: "The production",
    name: "The Sunday Session",
    promise: "Make something worth stopping the scroll for.",
    description:
      "For brands ready to turn a creative direction into content. Strategy and production come together in a dedicated project.",
    image: "/images/session-production.webp",
    imageAlt: "Behind the scenes at a shared workspace",
    price: "€1,150",
    priceNote: "External production costs are additional.",
    details: [
      {
        label: "What you receive",
        value: "A data-informed strategy and content assets.",
      },
      {
        label: "How we work",
        value: "A project-based collaboration.",
      },
      {
        label: "Content production",
        value: "Included.",
      },
      {
        label: "Account management",
        value: "Not included.",
      },
    ],
    takeaway:
      "You receive the strategic conclusions and the content created for your project.",
  },
  {
    number: "03",
    slug: "the-club-engine",
    type: "The ongoing partnership",
    name: "The Club Engine",
    promise: "Keep the good thing going.",
    description:
      "For brands looking for an ongoing creative partner. Strategy, content and social work together, with each cycle informed by what we learn.",
    image: "/images/engine-team.webp",
    imageAlt: "A team reviewing creative ideas around a table",
    price: "€2,250",
    priceNote: "Minimum 6-month partnership.",
    details: [
      {
        label: "What you receive",
        value: "Strategy and content within an ongoing performance system.",
      },
      {
        label: "How we work",
        value: "Monthly collaboration with connected strategic cycles.",
      },
      {
        label: "Content production",
        value: "Included.",
      },
      {
        label: "Account management",
        value: "Day-to-day management included.",
      },
    ],
    takeaway:
      "Your results inform the next cycle, building a growing library of data and insights around your brand.",
  },
];

const comparison = [
  {
    label: "Data-informed strategy",
    values: ["Included", "Included", "Included"],
  },
  {
    label: "Content production",
    values: ["Not included", "Included", "Included"],
  },
  {
    label: "Day-to-day account management",
    values: ["Not included", "Not included", "Included"],
  },
  {
    label: "Collaboration",
    values: ["One-time", "Per project", "Monthly"],
  },
  {
    label: "Connected strategic cycles",
    values: ["No", "No", "Yes"],
  },
  {
    label: "Results inform the next cycle",
    values: ["No", "No", "Yes"],
  },
];

export default function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.topline}>
          <span>The Sunday Club / Services</span>
          <span>Find your way in</span>
        </div>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>How to join the club</p>

          <h1 id="services-title">
            Three ways to build
            <br />
            something <em>worth following.</em>
          </h1>

          <p className={styles.introCopy}>
            Start with a direction, bring it to life through content, or build
            an ongoing creative partnership. There&apos;s a way in for every
            stage of your brand.
          </p>

          <nav className={styles.serviceNav} aria-label="Explore our services">
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`}>
                <span>{service.number}</span>
                {service.name}
                <span aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.list}>
          {services.map((service) => (
            <article
              className={styles.offer}
              id={service.slug}
              key={service.slug}
              aria-labelledby={`${service.slug}-title`}
            >
              <Reveal className={styles.copy} variant="text">
                <p className={styles.serviceMeta}>
                  <span>{service.number}</span>
                  {service.type}
                </p>

                <h2 id={`${service.slug}-title`}>{service.name}</h2>
                <p className={styles.promise}>{service.promise}</p>

                <p className={styles.description}>{service.description}</p>

                <dl className={styles.details}>
                  {service.details.map((detail) => (
                    <div key={detail.label}>
                      <dt>{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className={styles.takeaway}>{service.takeaway}</p>

                <div className={styles.booking}>
                  <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <p className={styles.price}>{service.price}</p>
                    <p className={styles.priceNote}>{service.priceNote}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={styles.cta}
                    aria-label={`Enquire about ${service.name}`}
                  >
                    Let&apos;s talk
                    <span aria-hidden="true">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                </div>
              </Reveal>

              <figure className={styles.visual}>
                <Reveal
                  className={styles.imageWrap}
                  variant="image"
                  delay={160}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 900px) 90vw, 40vw"
                    className={styles.image}
                  />
                </Reveal>

                <figcaption>
                  <span>THE SUNDAY CLUB</span>
                  <span>
                    {service.number} / {service.type}
                  </span>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

        <section
          className={styles.comparison}
          aria-labelledby="comparison-title"
        >
          <Reveal className={styles.comparisonHeading} variant="text">
            <p className={styles.eyebrow}>A closer look</p>

            <h2 id="comparison-title">
              Which way is <em>yours?</em>
            </h2>

            <p>See how the three ways of working compare.</p>
          </Reveal>

          <p className={styles.tableHint}>
            <span aria-hidden="true">↔</span>
            Swipe to compare all three services
          </p>

          <div
            className={styles.tableWrap}
            role="region"
            aria-label="Service comparison — scroll horizontally if needed"
            tabIndex={0}
          >
            <table className={styles.table}>
              <caption className={styles.srOnly}>
                Comparison of The Sunday Club services
              </caption>

              <thead>
                <tr>
                  <th scope="col">What matters to you</th>

                  {services.map((service) => (
                    <th scope="col" key={service.slug}>
                      {service.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>

                    {row.values.map((value, index) => {
                      const included = value === "Included" || value === "Yes";
                      const excluded =
                        value === "Not included" || value === "No";

                      return (
                        <td key={services[index].slug}>
                          {included || excluded ? (
                            <span
                              className={`${styles.featureStatus} ${
                                included ? styles.included : styles.excluded
                              }`}
                            >
                              <span
                                className={styles.statusIcon}
                                aria-hidden="true"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  focusable="false"
                                >
                                  <path
                                    d={included ? "M5 12l4 4L19 6" : "M5 12h14"}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>

                              {value}
                            </span>
                          ) : (
                            <span className={styles.collaborationType}>
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className={styles.ending}>
          <div>
            <p className={styles.eyebrow}>Your next chapter</p>
            <h2>Not sure where to start?</h2>
            <p>
              Tell us about your brand. We&apos;ll help you find the right way
              in.
            </p>
          </div>

          <Link href="/contact" className={styles.cta}>
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
