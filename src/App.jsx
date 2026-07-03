import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  profile,
  stats,
  experience,
  projects,
  skills,
  marquee,
  education,
  certifications,
  involvement,
} from "./data";

const SPIRAL_PATH =
  "M50 6 A44 44 0 0 1 50 94 A38 38 0 0 1 50 18 A32 32 0 0 1 50 82 A26 26 0 0 1 50 30 A20 20 0 0 1 50 70 A14 14 0 0 1 50 42 A8 8 0 0 1 50 58";

/* ── Uzumaki spiral (reusable, inherits color via currentColor) ─────────── */
function Spiral({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d={SPIRAL_PATH} stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/* ── Loading screen: the Uzumaki spiral draws + spins, then lifts away ───── */
function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-glow" />
      <motion.svg
        className="loader-spiral"
        viewBox="0 0 100 100"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <motion.path
          d={SPIRAL_PATH}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.15 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </motion.svg>
      <motion.div
        className="loader-jp"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        火の意志
      </motion.div>
      <motion.div
        className="loader-name"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6 }}
      >
        SHARUKESH<span>.</span>
      </motion.div>
    </motion.div>
  );
}

/* ── Floating chakra embers in the background ───────────────────────────── */
function Embers() {
  const bits = useRef(
    Array.from({ length: 14 }, () => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      dur: 9 + Math.random() * 12,
      delay: Math.random() * 12,
    }))
  ).current;
  return (
    <div className="embers" aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Custom cursor: fast dot + trailing ring, scales over interactives ──── */
function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 28 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHover(
        !!(t.closest && t.closest("a, button, .tag, .project, .skill-list span"))
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hover ? 1.7 : 1, opacity: hover ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hover ? 0 : 1 }}
      />
    </>
  );
}

/* ── Reveal on scroll via IntersectionObserver ──────────────────────────── */
function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

/* Small helper for the themed section header */
function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <Spiral className="spin-mark" />
      {children}
    </div>
  );
}

/* ── Navigation ─────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">
        <Spiral className="logo-spiral" />
        Sharukesh
      </a>
      <div className="nav-links">
        <a href="#work">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href={profile.resume} target="_blank" rel="noreferrer">
          Résumé
        </a>
        <a href="#contact" className="nav-cta">
          Get in touch
        </a>
      </div>
    </nav>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  const line = {
    hidden: { y: "110%" },
    show: (i) => ({
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 },
    }),
  };
  const fade = {
    hidden: { opacity: 0, y: 16 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 + i * 0.12 },
    }),
  };
  return (
    <header className="hero" id="top">
      <Spiral className="hero-bg-spiral" />
      <div className="wrap hero-inner">
        <div className="hero-text">
          <motion.div
            className="hero-jp"
            variants={fade}
            custom={0}
            initial="hidden"
            animate="show"
          >
            火の意志 · WILL OF FIRE
          </motion.div>

          <motion.div
            className="hero-kicker"
            variants={fade}
            custom={0.4}
            initial="hidden"
            animate="show"
          >
            Software Shinobi — Full-Stack · ML · AI
          </motion.div>

          <h1 className="hero-name">
            <span className="line">
              <motion.span
                style={{ display: "block" }}
                variants={line}
                custom={0}
                initial="hidden"
                animate="show"
              >
                Sharukesh
              </motion.span>
            </span>
            <span className="line">
              <motion.span
                style={{ display: "block" }}
                variants={line}
                custom={1}
                initial="hidden"
                animate="show"
              >
                K<em>.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero-tagline"
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
          >
            I forge <b>full-stack products</b> and{" "}
            <span className="hl">AI-driven systems</span> — from production
            healthcare workflows to real-time threat detection.
          </motion.p>

          <motion.div
            className="hero-meta"
            variants={fade}
            custom={3}
            initial="hidden"
            animate="show"
          >
            <span>
              <i className="dot" />
              Available for new missions
            </span>
            <span>{profile.location}</span>
            <span>B.E. CSE · CEG Anna University</span>
          </motion.div>
        </div>

        <motion.div
          className="portrait"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <div className="portrait-glow" />
          <div className="chakra-ring" />
          <div className="chakra-ring reverse" />
          <div className="portrait-circle">
            <img src={profile.photo} alt="Sharukesh K" />
          </div>
          <div className="portrait-badge">
            <Spiral />
          </div>
          <div className="portrait-id">
            忍 · <b>Shinobi</b> · Konoha
          </div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        Scroll
        <span />
      </div>
    </header>
  );
}

/* ── Marquee ────────────────────────────────────────────────────────────── */
function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span className="marquee-item" key={i}>
            {m}
            <span className="marquee-star"> 🍥 </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── About ──────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="section wrap" id="about">
      <div className="about-grid">
        <div>
          <Reveal>
            <Eyebrow>01 · Ninja Registry</Eyebrow>
            <p className="about-lead">
              A Computer Science graduate who turns <em>hard problems</em> into
              reliable, well-crafted software.
            </p>
            <p className="about-body">{profile.summary}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">
                  {s.value}
                  <sup>{s.unit}</sup>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Experience ─────────────────────────────────────────────────────────── */
function Experience() {
  return (
    <section className="section wrap" id="work">
      <Reveal>
        <Eyebrow>02 · Mission History</Eyebrow>
        <h2 className="section-title">Where I&apos;ve worked</h2>
      </Reveal>
      <div style={{ marginTop: 50 }}>
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 80}>
            <article className="exp-item">
              <div className="exp-side">
                <div className="exp-period">{e.period}</div>
                <div className="exp-loc">{e.location}</div>
              </div>
              <div>
                <h3 className="exp-role">{e.role}</h3>
                <span className="exp-company">{e.company}</span>
                <ul className="exp-points">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="tags">
                  {e.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Projects ───────────────────────────────────────────────────────────── */
function Projects() {
  return (
    <section className="section wrap" id="projects">
      <Reveal>
        <Eyebrow>03 · Signature Jutsu</Eyebrow>
        <h2 className="section-title">Things I&apos;ve built</h2>
      </Reveal>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 90}
            className={i === 0 ? "featured" : ""}
          >
            <a
              className="project"
              href={p.link}
              target={p.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <div className="project-top">
                <span className="project-index">{p.index}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Skills (chakra natures) ────────────────────────────────────────────── */
function Skills() {
  return (
    <section className="section wrap" id="skills">
      <Reveal>
        <Eyebrow>04 · Chakra Nature</Eyebrow>
        <h2 className="section-title">Skills &amp; technologies</h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="skills-grid" style={{ marginTop: 48 }}>
          {skills.map((col) => (
            <div className="skill-col" key={col.group}>
              <span className="skill-kanji">{col.kanji}</span>
              <div className="skill-element">{col.element}</div>
              <div className="skill-group">{col.group}</div>
              <div className="skill-list">
                {col.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ── Education / Certifications / Involvement ───────────────────────────── */
function Details() {
  return (
    <section className="section wrap" id="education">
      <Reveal>
        <Eyebrow>05 · Origin</Eyebrow>
        <h2 className="section-title">Education &amp; more</h2>
      </Reveal>
      <div className="detail-grid" style={{ marginTop: 50 }}>
        <Reveal>
          <div className="detail-block">
            <div className="detail-h">Education</div>
            {education.map((ed) => (
              <div className="edu-item" key={ed.school}>
                <div className="edu-school">{ed.school}</div>
                <div className="edu-detail">{ed.detail}</div>
                <div className="edu-meta">{ed.meta}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="detail-block">
            <div className="detail-h">Certifications</div>
            {certifications.map((c, i) => (
              <div className="cert-item" key={c}>
                <b>0{i + 1}</b>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <div className="involve">
            <div className="involve-h">Leadership</div>
            <div className="involve-title">{involvement.title}</div>
            <div className="involve-detail">{involvement.detail}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Contact ────────────────────────────────────────────────────────────── */
function Contact() {
  const year = new Date().getFullYear();
  return (
    <section className="contact wrap" id="contact">
      <Reveal>
        <div className="contact-lead">
          <Spiral className="spin-mark" />
          06 · Summon Me
        </div>
        <div className="contact-big">
          <a href={`mailto:${profile.email}`}>
            Say <em>hello</em> ↗
          </a>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="contact-row">
          <div className="contact-socials">
            <a href={`mailto:${profile.email}`}>
              <span className="num">01</span> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span className="num">02</span> {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span className="num">03</span> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="num">04</span> LinkedIn
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              <span className="num">05</span> Résumé ↓
            </a>
          </div>
          <div className="contact-note">
            © {year} Sharukesh K · Built with React · <b>Dattebayo!</b> 🍥
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Cursor />
      <Embers />
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Details />
        <Contact />
      </main>
    </>
  );
}
