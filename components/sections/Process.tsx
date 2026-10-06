import Link from "next/link";
import styles from "./Process.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

const steps = [
  {
    number: "01",
    title: "We meet.",
    summary: "Your brand, your goals, our starting point.",
    detail:
      "A conversation about your brand, your goals and what needs to change.",
  },
  {
    number: "02",
    title: "We strategize.",
    summary: "Research, strategy and creative direction.",
    detail:
      "Research, positioning and a creative direction with a point of view.",
  },
  {
    number: "03",
    title: "We create.",
    summary: "Ideas become content worth remembering.",
    detail: "Concepts, production, photography, filming and editing.",
  },
  {
    number: "04",
    title: "We launch.",
    summary: "Ready for the world, with a plan.",
    detail: "Content ready to meet the world, with a plan behind every piece.",
  },
  {
    number: "05",
    title: "We learn.",
    summary: "For ongoing partnerships, results guide us.",
    detail: "For ongoing partnerships, performance shapes what we create next.",
  },
];

type ProcessProps = {
  detailed?: boolean;
};

export default function Process({ detailed = false }: ProcessProps) {
  return (
    <section
      className={`${styles.section} ${detailed ? styles.detailed : ""}`}
      id="process"
      aria-labelledby="process-title"
    >
      <div className={styles.inner}>
        <div className={styles.topline}>
          <span>{detailed ? "Our process" : "04 / How we work"}</span>
          <span>Thoughtful from the first hello</span>
        </div>

        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>Behind the scenes</p>

            <h2 id="process-title">
              A little method
              <br />
              to the <em>magic.</em>
            </h2>
          </div>

          <p className={styles.introCopy}>
            A clear process, room for good ideas, and a shared direction from
            the start.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li className={styles.step} key={step.number}>
              <span className={styles.number} aria-hidden="true">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{detailed ? step.detail : step.summary}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.footnote}>
          <span>Good ideas need somewhere to begin.</span>

          <Link href={detailed ? "/contact" : "/approach"}>
            {detailed ? "Start with a hello" : "Explore our approach"}
            <span aria-hidden="true">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
