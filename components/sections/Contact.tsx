"use client";

import { useState, type SyntheticEvent } from "react";
import styles from "./Contact.module.css";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { ClubStarIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span>06 / YOUR INVITATION</span>
          <span>NOW ACCEPTING NEW MEMBERS</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>
              This could be the start of something
            </p>

            <h1>
              LET&apos;S MAKE
              <br />
              SOMETHING
              <br />
              <em>MATTER.</em>
            </h1>

            <p className={styles.description}>
              Tell us about your brand, your ambitions and what you&apos;re
              looking for. We&apos;ll take it from there.
            </p>

            <div className={styles.invitation} aria-hidden="true">
              <span className={styles.invitationTop}>
                THE SUNDAY CLUB <span>№ 001</span>
              </span>

              <span className={styles.invitationMiddle}>
                Your invitation
                <br />
                starts here.
              </span>

              <span className={styles.invitationBottom}>
                STRATEGY · CONTENT · SOCIAL
                <span>
                  <ClubStarIcon />
                </span>
              </span>
            </div>
          </div>

          <div className={styles.formPanel}>
            <div className={styles.formHeading}>
              <span className={styles.formIndex}>THE APPLICATION / 01</span>
              <h3>Tell us what you&apos;re dreaming up.</h3>
              <p>A few details to help us get to know your brand.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.honeypot}
                type="text"
                name="company_fax"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Your name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="How should we call you?"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-brand">Brand / Company *</label>
                  <input
                    id="contact-brand"
                    name="brand"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your brand name"
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@yourbrand.com"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-website">Website / Instagram</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    placeholder="A link or @handle"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-industry">Industry</label>
                  <input
                    id="contact-industry"
                    name="industry"
                    type="text"
                    placeholder="Beauty, hospitality, lifestyle..."
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-service">
                    What are you interested in? *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a way to work together
                    </option>
                    <option value="The Blueprint">The Blueprint</option>
                    <option value="The Sunday Session">
                      The Sunday Session
                    </option>
                    <option value="The Club Engine">The Club Engine</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-goals">
                  What are you looking to achieve? *
                </label>
                <textarea
                  id="contact-goals"
                  name="goals"
                  rows={3}
                  maxLength={2000}
                  placeholder="Tell us what you want to build, change or grow."
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-budget">Approximate budget</label>
                  <input
                    id="contact-budget"
                    name="budget"
                    type="text"
                    placeholder="A ballpark is perfectly fine"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-timeline">
                    When would you like to start?
                  </label>
                  <input
                    id="contact-timeline"
                    name="timeline"
                    type="text"
                    placeholder="As soon as possible, next month..."
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-notes">
                  Anything else we should know?
                </label>
                <textarea
                  id="contact-notes"
                  name="notes"
                  rows={2}
                  maxLength={2000}
                  placeholder="We're all ears."
                />
              </div>

              <div className={styles.submitArea}>
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending your application..."
                    : "Send your application"}
                  <span aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </button>

                <p
                  className={styles.formMessage}
                  data-status={status}
                  aria-live="polite"
                >
                  {status === "success" &&
                    "You're on the list. We'll be in touch soon."}

                  {status === "error" &&
                    "Something went wrong. Please try again or email us directly."}
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>THE SUNDAY CLUB</span>
          <span>GOOD THINGS HAPPEN WHEN WE CREATE TOGETHER.</span>
        </div>
      </div>
    </section>
  );
}
