"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { Button } from "@/components/shared/Button";
import { CONTACT, SOCIALS } from "@/lib/data";

const PHONE = "+91 90900 90032";
const PHONE_HREF = "tel:+919090090032";
const WHATSAPP_HREF = "https://wa.me/919090090032";

const FIELD =
  "w-full rounded-lg border border-white/20 bg-white/[0.07] px-3.5 py-3 text-sm text-white outline-none backdrop-blur-md transition-colors placeholder:text-white/40 focus:border-brand focus:bg-white/[0.12]";

const QUICK = [
  {
    icon: Phone,
    label: "CALL US",
    value: PHONE,
    desc: "For a quick question or to speak to someone directly.",
    href: PHONE_HREF,
  },
  {
    icon: Phone,
    label: "WHATSAPP",
    value: PHONE,
    desc: "Send a message when it suits you. We'll take it from there.",
    href: WHATSAPP_HREF,
  },
  {
    icon: MapPin,
    label: "VISIT THE OFFICE",
    value: "Bishrakh · Greater Noida West",
    desc: "",
    href: "#office",
  },
  {
    icon: Clock,
    label: "OFFICE HOURS",
    value: "10 AM - 7 PM",
    desc: "",
    href: "#office",
  },
];

const FAQS = [
  {
    q: "Can I visit before I decide to buy?",
    a: "Yes. The site visit is there to help you understand the home and make an informed decision — not to force one.",
  },
  {
    q: "Can I ask about more than one project?",
    a: "Yes. If you're comparing options, tell us what matters to you and we can help you understand the relevant choices.",
  },
  {
    q: "What should I bring for a site visit?",
    a: "Nothing special. Come with your questions. If you already know your preferred budget, home size or project, sharing that can make the conversation more useful.",
  },
  {
    q: "Can I just ask one question?",
    a: "Absolutely. You don't need to fill out a long form or know exactly what you want before contacting us.",
  },
  {
    q: "What happens after I contact AMBR?",
    a: "Someone from the team will understand what you're looking for and help with the next useful step — a call, information, or a site visit.",
  },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <>
      {/* Hero — parallax + overlay */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink pb-40 pt-[clamp(90px,15vw,180px)] text-white">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Media img={{ src: "/images/ambr46.jpeg", alt: "Ambr Homes community at dusk" }} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        </motion.div>

        <div className="wrap relative">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              LET'S TALK ABOUT THE HOME
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              Tell Us What You're Looking For.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Buying a home deserves more than a callback request. Tell us what you need, ask the question you have, or simply come and see what we've built. We'll help you understand the options without rushing you into a decision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact">
                Book A Site Visit 
              </Button>

              <a
                href={PHONE_HREF}
                className="rounded-lg border border-white/20 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.12]"
              >
                Call AMBR · WhatsApp Us
              </a>

              <span className="basis-full text-sm text-white/60">
                No long form. No pressure. Just a useful conversation.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact band */}
      <section className="relative z-10 -mt-20">
        <div className="wrap mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
            CHOOSE WHAT IS EASIEST FOR YOU
          </p>
        </div>

        <div className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_20px_45px_-22px_rgba(226,1,15,0.35)]"
              >
                <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-brand/5 transition-all duration-500 group-hover:scale-[2.2] group-hover:bg-brand/10" />
                <span className="absolute left-3 top-3 text-[0.7rem] font-semibold tracking-[0.14em] text-muted/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
                  <Icon size="22" strokeWidth={1.8} />
                </span>
                <p className="relative mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-muted">
                  {c.label}
                </p>
                <span className="relative mt-1 block font-medium text-ink">{c.value}</span>
                {c.desc && (
                  <p className="mt-2 text-xs text-muted/70">{c.desc}</p>
                )}
              </a>
            );
          })}
        </div>
      </section>

      {/* Our Office */}
      <section id="office" className="wrap py-[clamp(64px,8vw,120px)]">
        <div className="">
          <Heading
            eyebrow="COME SEE US. TAKE YOUR TIME."
            title="Where We Operate"
            description="Our office is in Bishrakh, Greater Noida West — close to the communities we build and the people who live in them."
          />
        </div>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2">
          {/* Left — office info */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-8">
              <h3 className="text-2xl font-medium text-ink">AMBR Homes Site Office</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                Plot No. 768, Near ACE Divine, Sector 1, Aimnabad, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201318
              </p>

              <div className="mt-7 space-y-4">
                {[
                  { icon: Clock, label: "Hours", value: CONTACT.officeHours, href: "#enquiry" },
                  { icon: Phone, label: "Tel", value: CONTACT.phone, href: CONTACT.phoneHref },
                  { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
                  { icon: MapPin, label: "Nearest landmarks", value: "Opposite Gaur City Mall, Near Parthala crossing", href: "#" },
                ].map((r) => {
                  const Icon = r.icon;
                  return (
                    <a
                      key={r.label}
                      href={r.href}
                      className="group flex items-start gap-4 rounded-xl border border-line/70 p-4 transition-colors hover:border-brand/30"
                    >
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand/10 text-brand">
                        <Icon size="20" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-muted">{r.label}</span>
                        <span className="mt-0.5 block font-medium text-ink group-hover:text-brand">{r.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Here, you can */}
              <div className="mt-auto pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Here, you can</p>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-2">
                  <li>Talk through your requirement</li>
                  <li>Compare available homes</li>
                  <li>Understand plans and specifications</li>
                  <li>Ask about the next steps</li>
                  <li>Arrange a site visit</li>
                </ul>

                <p className="mt-5 text-sm leading-relaxed text-ink-2">
                  The office should be a place where questions get clearer — not where you feel pushed to buy.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — image + overlay */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full overflow-hidden rounded-[1.5rem] ">
              <Media img={{ src: "/images/ambr6.jpeg", alt: "Ambr Homes site office, Bishrakh" }} sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Arriving</p>
                <h3 className="mt-2 text-2xl font-medium text-white">The site office you'll meet</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                  Every project is within a half-hour drive of this desk — so a site visit can usually be arranged the
                  same week you ask for one. Evening visits can be arranged on request.
                </p>
                <div className="mt-5 flex gap-3">
                  <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-dark hover:shadow-[0_12px_30px_-8px_rgba(226,1,15,0.5)]">
                    <Phone size="16" strokeWidth={2} /> Call Now
                  </a>
                  <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-ink">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>



      {/* Enquiry form — dark premium panel */}
      <section className="relative overflow-hidden bg-ink py-[clamp(64px,8vw,120px)]" id="enquiry">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-brand/10 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(1000px_at_50%_0%,black,transparent)]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="wrap relative grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Heading
              light
              eyebrow="KEEP IT HUMAN"
              title="We Only Need Enough To Start The Conversation."
              description="A contact form should not feel like an application form. If you want us to call you, we only need your name and phone number. Everything else can be discussed when we speak."
            />
            <div className="mt-9 space-y-4">
              {[
                { icon: MapPin, label: "Address", value: CONTACT.addressLine1 + " " + CONTACT.addressLine2, href: "#" },
              ].map((r) => {
                const Icon = r.icon;
                return (
                  <a
                    key={r.label}
                    href={r.href}
                    className="group flex items-start gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
                  >
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition-colors group-hover:bg-brand group-hover:ring-brand">
                      <Icon size="20" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-white/50">{r.label}</span>
                      <span className="mt-0.5 block font-medium text-white/85 group-hover:text-white">{r.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Follow us</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white/70 transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      {s.label === "Instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />}
                      {s.label === "Facebook" && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                      {s.label === "YouTube" && <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />}
                      {s.label === "LinkedIn" && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>

            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Thank you — we received your enquiry.</h3>
                <p className="mt-2 text-sm text-white/60">We reply within one working day.</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">Name *</label>
                  <input required className={FIELD} type="text" autoComplete="name" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                      Phone number *
                    </label>
                    <input
                      required
                      className={FIELD}
                      type="tel"
                      autoComplete="tel"
                      placeholder="910000000000"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                      What can we help you with?
                    </label>
                    <input
                      className={FIELD}
                      type="text"
                      placeholder="Tell us what you need"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                    Preferred project / home type
                  </label>
                  <input
                    className={FIELD}
                    type="text"
                    placeholder="Project or home type"
                  />
                </div>



                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">Write a message</label>
                  <textarea
                    className={`${FIELD} min-h-[120px] resize-none`}
                    maxLength={300}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                  <div className="mt-1 text-right text-xs text-white/50">{msg.length}/300</div>
                </div>

                <button
                  type="submit"
                  className="group w-full flex justify-center gap-3 rounded-full bg-brand py-2 px-5 text-base font-medium text-white transition-all duration-[0.45s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-dark hover:shadow-[0_16px_40px_-12px_rgba(226,1,15,0.55)] hover:-translate-y-0.5 focus-visible:outline-none"
                >
                  Talk To AMBR →
                </button>
                <p className="mt-3 text-center text-xs text-white/60">
                  We’ll understand what you need and suggest the most useful next step.
                </p>

              </form>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="wrap relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Heading

                eyebrow="Find Us"
                title="Bishrakh, Greater Noida West"
                description="One corridor, one desk. A site visit can usually be arranged the same week you ask for one."
              />
            </div>
            <a
              href="https://www.google.com/maps/search/Ambr+Homes+Bishrakh+Greater+Noida+West"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-black px-6 py-2 text-sm font-medium  transition-all duration-300 text-ink"
            >
              Open in Google Maps
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" /></svg>
            </a>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.4!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a431f37bd7%3A0x30f20f4f8f8a5c0!2sBishrakh%2C%20Greater%20Noida%20West%2C%20Gautam%20Buddh%20Nagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ambr Homes office location"
              className="w-full"
            />
          </div>
        </div>
      </section>



      {/* Support */}
      <section className="wrap py-24">
        <div className="grid items-end gap-10 rounded-[1.5rem] border border-line bg-white p-8 md:grid-cols-2 md:p-12">
          <div>
            <Heading
              eyebrow="FOR EXISTING AMBR HOMEOWNERS"
              title="Already Living In An AMBR Home?"
              description="If you already live in an AMBR home, you should not have to start from the beginning every time you need help. For maintenance, handover documentation or resident questions, contact us and we’ll connect you with the right team."
            />
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Button href="#enquiry">Get Support</Button>
            <Button href={CONTACT.phoneHref} variant="ghost" className="!bg-grey !border !border-line !text-ink hover:!bg-brand hover:!text-white">
              {CONTACT.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap pb-[clamp(56px,6vw,96px)]">
        <div className="mx-auto max-w-2xl text-center">
          <Heading
            align="center"
            eyebrow="QUESTIONS YOU MAY BE WONDERING"
            title="Before You Call, Here Are A Few Answers."
          />
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-xl border border-line bg-white transition-colors open:border-brand/40 open:shadow-[0_20px_40px_-30px_rgba(226,1,15,0.4)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-ink">
                {f.q}
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full border border-line text-ink transition-transform duration-300 group-open:rotate-45 group-open:border-brand group-open:text-brand">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </summary>
              <p className="border-t border-line/70 px-5 py-4 text-sm leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
