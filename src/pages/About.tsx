"use client";

import React, { useEffect, useState } from "react";
import { Header, Footer, Topbar } from "./Home";
import { DemoPopup } from "../components/courses/CourseData";
import aboutstudentsimg2 from "../assets/images/about/aboutstudentsimg2.jpeg";
import "./About.css"
/* =========================
   DATA
========================= */

const STATS: [number, string, string][] = [
  [1000, "+", "Students Trained"],
  [200, "+", "Guided Through Career Prep"],
  [10, "+", "Technical Mentors"],
  [15, "+", "Job-Oriented IT Courses"],
  [4.9, "★", "Rated on Google"],
];

const CATS2 = [
  ["💻", "Programming", "Java, Python"],
  ["☁️", "Cloud Computing", "AWS, Azure, GCP"],
  ["🧪", "Software Testing", "Selenium, SoapUI"],
  ["🗄️", "Databases", "Oracle, MySQL, MongoDB"],
  ["📊", "Data & Analytics", "Data Science, Power BI, Tableau"],
  ["📱", "Mobile Apps", "Android, iOS"],
  ["🧩", "Full Stack", "MERN, MEAN"],
  ["🤖", "RPA", "UiPath, Blue Prism"],
  ["🌐", "Web Design", "React, Angular, Front-End"],
  ["✨", "AI & More", "AI, MATLAB, Informatica, .NET"],
];

const AREAS = [
  "Tambaram",
  "Chromepet",
  "Pallavaram",
  "Velachery",
  "Guindy",
  "Adyar",
  "T. Nagar",
  "Anna Nagar",
  "OMR",
  "Sholinganallur",
  "Porur",
  "Medavakkam",
  "Madipakkam",
  "Nanganallur",
  "Perungudi",
  "Siruseri",
];

// Videos
const rw1 = "/assets/images/about/rw1.mp4";
const rw2 = "/assets/images/about/rw2.mp4";
const rw3 = "/assets/images/about/rw5.mp4";
const rw4 = "/assets/images/about/rw4.mp4";

// Images
const rt1 = "/assets/images/about/rt1.jpeg";
const rt2 = "/assets/images/about/rt2.jpeg";
const rt5 = "/assets/images/about/rt5.jpeg";
const rt4 = "/assets/images/about/rt4.jpeg";
const VIDS = [
  {
    video: rw1,
    e: rt1,
    n: "Aswin Jino",
    c: "Data Science",
  },
  {
    video: rw2,
    e: rt2,
    n: "Shalini",
    c: "AI ML",
  },
  {
    video: rw3,
    e: rt5,
    n: "Subiksha",
    c: "Full Stack Web Development",
  },
  {
    video: rw4,
    e: rt4,
    n: "Akilarasi sundar",
    c: "Data Analytics",
  },
];

/* =========================
   SMALL COMPONENTS
========================= */

function SectionHead({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div>
      <div className="tag">{tag}</div>

      <h2 className="h2">{title}</h2>

      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

function Fade({ children }) {
  return <div className="fade in">{children}</div>;
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const current = start + (value - start) * progress;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const display = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <b>
      {display}
      {suffix}
    </b>
  );
}

/* =========================
   TESTIMONIALS
========================= */

function Testimonials() {
  const [active, setActive] = useState(0);

  const current = VIDS[active];

  return (
    <section className="sec alt">
      <div className="wrap">
        <SectionHead
          tag="Student stories"
          title="What Our Students Say"
          sub="Watch real testimonials from our successful graduates."
        />

        <div className="tv">
          <div
            className="tmain"
            style={{
              "--g": "linear-gradient(150deg,#1d4ed8,#0B1B3A)",
            }}
          >
            <video
              key={current.video}
              className="testimonial-video"
              src={current.video}
              controls
              playsInline
            />

            <div className="cap">
              <b>{current.n}</b>
              <span>{current.c}</span>
            </div>
          </div>

          <div className="tl">
            {VIDS.map((item, index) => (
              <button
                key={index}
                className={`tt ${active === index ? "on" : ""}`}
                onClick={() => setActive(index)}
                style={{
                  "--g": "linear-gradient(150deg,#1d4ed8,#0B1B3A)",
                }}
              >
                <span className="th">
                  <img
                    src={item.e}
                    alt={item.n}
                    className="testimonial-thumbnail"
                  />

                  <i>▶ Watch</i>
                </span>

                <span>
                  <b>{item.n}</b>
                  <small>{item.c}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 28,
          }}
        >
          <a href="/#reviews" className="btn outl">
            Read our Google reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================
   ABOUT PAGE
========================= */

export default function About() {
  return (
    <>
      <Topbar />
      <Header />

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="wrap">
          <div className="hgrid">
            <div>
              <div className="bc">
                <a href="/">Home</a> / About us
              </div>

              <h1 style={{ marginTop: 4 }}>
                About <span>Nexila</span> Technologies
              </h1>

              <p>
                A software training and development company in Tambaram,
                Chennai, helping learners and organisations build the skills for
                a fast-moving digital world.
              </p>

              <div className="row">
                <a href="#contact" className="btn cta">
                  Enroll Now!
                </a>

                <a href="/#courses" className="btn ghost">
                  Explore Courses
                </a>
              </div>
            </div>

            <div className="abv">
              <img
                src={aboutstudentsimg2}
                alt="Nexila Technologies"
                className="about-nexila-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}

      <section className="sec">
        <div className="wrap">
          <SectionHead
            tag="Who we are"
            title="Where learning meets real-world skills"
          />

          <div className="abg">
            <div>
              <p>
                Nexila Technologies is a software training and development
                company based in Tambaram, Chennai. We help students, graduates
                and working professionals build the skills the IT industry looks
                for, and we support organisations through training and software
                solutions.
              </p>

              <p>
                Our aim is simple: bridge the gap between learning and practical
                application. That is why our classes lean on hands-on practice,
                guided projects and trainers who explain concepts clearly, so
                you can keep pace with a rapidly changing technology landscape.
              </p>

              <p>
                Whether you want to upskill, move ahead in your career or start
                one, we are here to support you at every step, from choosing the
                right course to getting interview-ready.
              </p>

              <div className="row">
                <a href="#contact" className="btn cta">
                  Book a Free Demo
                </a>
              </div>
            </div>

            <div className="mv">
              <Fade>
                <div className="card">
                  <div className="ico">🎯</div>

                  <div>
                    <h3>Our mission</h3>

                    <p>
                      To empower individuals and organisations with the skills
                      and solutions needed to succeed in the digital age.
                    </p>
                  </div>
                </div>
              </Fade>

              <Fade>
                <div className="card">
                  <div className="ico">🛠️</div>

                  <div>
                    <h3>What we do</h3>

                    <p>
                      Job-focused IT training, internships, hackathons and
                      corporate training, plus software solutions.
                    </p>
                  </div>
                </div>
              </Fade>

              <Fade>
                <div className="card">
                  <div className="ico">🤝</div>

                  <div>
                    <h3>How we teach</h3>

                    <p>
                      Practical sessions, guided projects, small batches and
                      structured career assistance.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="sec alt">
        <div className="wrap">
          <div className="stats" style={{ marginTop: 0 }}>
            {STATS.map(([number, suffix, label]) => (
              <div className="stat" key={label}>
                <Counter value={number} suffix={suffix} />

                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE TEACH ================= */}

      <section className="sec">
        <div className="wrap">
          <SectionHead
            tag="What we teach"
            title="Training across the IT skills that matter"
            sub="From programming and cloud to data, testing and AI, choose the track that fits your goals."
          />

          <div className="grid g5">
            {CATS2.map(([icon, title, description]) => (
              <Fade key={title}>
                <div className="card">
                  <div className="ico">{icon}</div>

                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <Testimonials />

      {/* ================= PROGRAMS ================= */}

      <section className="sec">
        <div className="wrap">
          <SectionHead
            tag="Beyond the classroom"
            title="Programs that build real experience"
          />

          <div className="grid g3">
            <Fade>
              <div className="card">
                <div className="ico">🚀</div>

                <h3>Internship Program</h3>

                <p style={{ marginBottom: 14 }}>
                  Work on practical, live-style projects, including AI and ML
                  tracks.
                </p>

                <a
                  href="/it-internship-for-students-tambaram-chennai"
                  className="lnk"
                >
                  Apply now →
                </a>
              </div>
            </Fade>

            <Fade>
              <div className="card">
                <div className="ico">🏆</div>

                <h3>Nexila Hackathon 2026</h3>

                <p style={{ marginBottom: 14 }}>
                  A tech challenge for college students. Teams of 2 to 4, AI and
                  programming tracks, ₹50K prize pool.
                </p>

                <a href="/nexila-hackathon-2026" className="lnk">
                  Register now →
                </a>
              </div>
            </Fade>

            <Fade>
              <div className="card">
                <div className="ico">🏢</div>

                <h3>Corporate Training</h3>

                <p style={{ marginBottom: 14 }}>
                  Skill-building programs for teams and organisations.
                </p>

                <a href="#contact" className="lnk">
                  Enquire →
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}

      <section className="sec alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <SectionHead
            tag="Where our learners come from"
            title="Serving learners across Chennai"
            sub="Our centre is in Tambaram, and learners join us from across the city, or online from anywhere."
          />

          <div
            className="areas"
            style={{
              justifyContent: "center",
            }}
          >
            {AREAS.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}

      <section className="sec" id="contact">
        <div className="wrap">
          <div className="lead">
            <div>
              <div className="tag">Start your journey</div>

              <h2>Ready to build your IT career?</h2>

              <p>
                Talk to our team about courses, internships, hackathons or
                corporate training.
              </p>
            </div>

            <div className="row">
              <a href="tel:+919803061234" className="btn cta">
                Call Now
              </a>

              <a
                href="https://wa.me/919803061234"
                target="_blank"
                rel="noopener"
                className="btn ghost"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <a
        className="wa"
        href="https://wa.me/919803061234"
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>
      <DemoPopup />
      <Footer />
    </>
  );
}
