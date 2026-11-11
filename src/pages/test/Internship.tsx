"use client";

import React, { useEffect, useState } from "react";
import { Header, Footer, Topbar } from "../Home";
import { InternForm } from "./InternshipPage";
import its1 from "../../assets/images/internship/its1.jpg";
import its2 from "../../assets/images/internship/its2.jpg";
import its5 from "../../assets/images/internship/its5.jpg";
import GroupInternForm from "../../components/internship/GroupInternForm";
import "./Internship.css"

/* ================= INTERNSHIP DATA ================= */

const IFEAT = [
  [
    "🚀",
    "Real-world projects",
    "Work on active projects connected to the real-time tech industry and make a tangible impact.",
  ],
  [
    "🧑‍🏫",
    "Mentorship",
    "Get paired with an experienced software developer who gives guidance, feedback and support throughout.",
  ],
  [
    "🛠️",
    "Skill development",
    "Sharpen your programming, pick up new languages and frameworks, and learn the tools and methods used in industry.",
  ],
  [
    "🤝",
    "Networking opportunities",
    "Engage with professionals across different departments and build connections for your career.",
  ],
  [
    "🎓",
    "Workshops and seminars",
    "Regular learning sessions on Agile methodologies, software testing, UI/UX design, web development, Java, Python, AWS and more.",
  ],
  [
    "📈",
    "Performance reviews",
    "Receive constructive feedback through regular reviews to understand your strengths and where to grow.",
  ],
];

const ISKILLS = [
  "Full Stack Development",
  "MERN Stack",
  "Python / Java Development",
  "Web Application Development",
  "Database Management",
  "API Integration",
];

const IELIG = [
  "Currently enrolled in a college or university, pursuing any degree",
  "A basic understanding of software development concepts and methodologies",
  "Ability to work collaboratively in a team",
  "Strong problem-solving skills and a willingness to learn",
];

const IWHO = [
  "Engineering students (CSE / IT / ECE)",
  "Degree students (BCA / B.Sc Computer Science)",
  "MCA / M.Sc IT students",
  "Freshers looking for practical IT experience",
];

const IBEN = [
  ["📩", "Offer Letter", "Receive an offer letter confirming your internship."],
  [
    "🎓",
    "Internship Certificate",
    "Receive an internship certificate upon successful completion.",
  ],
  [
    "📧",
    "Confirmation Email",
    "Receive a confirmation email with your offer letter.",
  ],
  [
    "🧰",
    "Tools and platforms",
    "Access to company resources, including software tools and platforms.",
  ],
  [
    "📜",
    "Certificate and letter",
    "A certificate of completion and a recommendation letter on successful completion.",
  ],
  [
    "🧑‍💼",
    "Industry mentor",
    "Be paired with a mentor from the software industry.",
  ],
  [
    "💻",
    "Live project support",
    "Hands-on support while you work on a live project.",
  ],
  [
    "✨",
    "Grooming session",
    "A grooming session to help you get ready for the industry.",
  ],
  [
    "📋",
    "Attendance Certificate",
    "Receive an attendance certificate for your internship.",
  ],
  [
    "🏆",
    "Completion Certificate",
    "Receive a completion certificate after successfully completing the programme.",
  ],
];

const IWHY = [
  "Real-time software projects",
  "Full Stack development exposure",
  "Internship completion certificate",
  "Career guidance and support",
  "Industry-oriented training methodology",
  "Located in the heart of Tambaram, Chennai",
];

const IGRAD = [
  "B.E / B.Tech",
  "MSc",
  "BCA",
  "MCA",
  "BBA",
  "BSc",
  "MBA",
  "M.E",
  "BMS",
  "BASc",
  "B.Com",
  "M.Com",
  "Other",
];

const IYEAR = ["1st year", "2nd year", "Pre-final year", "Final year"];

const IDOM = [
  "Web Development",
  "Java / Python",
  "Data Science",
  "Data Analytics",
  "Cloud (AWS)",
  "DevOps",
  "Full Stack Development",
  "Machine Learning & AI",
  "Finance",
  "Other",
];

const INEAR = [
  "Guduvancheri",
  "Medavakkam",
  "Chengalpattu",
  "Kanchipuram",
  "Pallavaram",
  "ECR",
  "Kelambakkam",
  "Villupuram",
  "Tindivanam",
];

const IFAQ = [
  [
    "What is the Nexila Internship Program?",
    "It is a software development internship for college students, designed to give hands-on experience in the tech industry. You apply classroom knowledge to real-world projects, build new skills and work with experienced professionals.",
  ],
  [
    "Who can apply for the internship?",
    "Students currently enrolled in a college or university, from 1st year to final year. Any graduate can apply, including engineering, BCA, B.Sc, MCA, M.Sc IT and other degree students, as well as freshers wanting practical IT experience.",
  ],
  [
    "Which degrees can I apply with?",
    "Any graduate can apply. The application form lists B.E / B.Tech, MSc, BCA, MCA, BBA, BSc, MBA, M.E, BMS, BASc, B.Com, M.Com and Other.",
  ],
  [
    "Which year of study can apply?",
    "The form accepts 1st year, 2nd year, pre-final year and final year students.",
  ],
  [
    "Do I need prior coding experience?",
    "You need a basic understanding of software development concepts and methodologies, along with strong problem-solving skills and a willingness to learn.",
  ],
  ["How long is the internship?", "The internship runs for 2 to 8 weeks."],
  [
    "When can I start?",
    "Start dates are flexible, and you can choose weekdays or weekends. Our team will confirm the available batches when you apply.",
  ],
  [
    "Which domains can I choose from?",
    "Web Development, Java / Python, Data Science, Data Analytics, Cloud (AWS), DevOps, Full Stack Development, Machine Learning & AI and Finance. You can also pick Other and tell us what you are interested in.",
  ],
  [
    "Will I work on real projects?",
    "Yes. Interns work on live, real-time projects and receive live project support from the team.",
  ],
  [
    "Will I get a mentor?",
    "Yes. Each intern is paired with a mentor who is an experienced software developer and provides guidance, feedback and support.",
  ],
  [
    "What skills will I develop?",
    "Hands-on skills in areas such as Full Stack Development, the MERN stack, Python / Java development, web application development, database management and API integration.",
  ],
  [
    "Are there workshops or learning sessions?",
    "Yes. Regular sessions cover topics like Agile methodologies, software testing, UI/UX design, web development, Java, Python, AWS and more.",
  ],
  [
    "Will I receive a certificate?",
    "Yes. On successful completion of the program you receive a certificate of completion and a recommendation letter.",
  ],
  [
    "What is the grooming session?",
    "It is part of the program benefits and helps you get ready for the professional environment. Our team shares the details when you join.",
  ],
  [
    "Do I get access to tools and platforms?",
    "Yes. Interns get access to company resources, including software tools and platforms.",
  ],
  [
    "How is my progress evaluated?",
    "Interns receive constructive feedback through regular performance reviews, which help you understand your strengths and the areas where you can grow.",
  ],
  [
    "Will I work in a team?",
    "Yes. Collaboration is a key part of the program, so you will work with other interns and mentors in a team environment.",
  ],
  [
    "Is career guidance available?",
    "Yes. The program includes career guidance and support, along with industry-oriented training, to help you move towards a career in the IT industry.",
  ],
  [
    "Where is the internship held?",
    "Nexila Technologies is in West Tambaram, Chennai - 600045. Please contact our team to confirm the mode and batch details for your chosen domain.",
  ],
  [
    "Can I join from areas outside Tambaram?",
    "Yes. Students come from nearby areas such as Guduvancheri, Medavakkam, Chengalpattu, Kanchipuram, Pallavaram, ECR, Kelambakkam, Villupuram and Tindivanam, among others.",
  ],
  [
    "How do I apply?",
    "Fill in the Apply for Internship form on this page with your name, contact number, college, degree, year of study and preferred domain. Our team will contact you.",
  ],
  [
    "Is there a fee or stipend?",
    "Please contact our team on +91 980 306 1234 or info@nexilatechnologies.com for the latest details on fees and other terms.",
  ],
  [
    "Can I fit the internship around my college schedule?",
    "Start dates are flexible and available on weekdays and weekends, so talk to our team about a schedule that works with your college timetable.",
  ],
];

const IPH = [
  {
    img: its1,
    e: "📷",
    l: "Internship photo 1",
  },
  {
    img: its2,
    e: "👩‍💻",
    l: "Internship photo 2",
  },
  {
    img: its5,
    e: "🧑‍💻",
    l: "Internship photo 3",
  },
];

const IWHY2 = [
  [
    "Real-time software projects",
    "Build on live, real-time projects instead of only classroom exercises.",
  ],
  [
    "Full Stack development exposure",
    "Work across the front end, back end and database.",
  ],
  [
    "Internship completion certificate",
    "Receive a certificate of completion, along with a recommendation letter.",
  ],
  [
    "Career guidance and support",
    "Get guidance to plan your move into the IT industry.",
  ],
  [
    "Industry-oriented training",
    "A practical approach that focuses on implementation rather than just theory.",
  ],
  ["Located in the heart of Tambaram", "West Tambaram, Chennai - 600045."],
];

/* ================= HELPER COMPONENTS ================= */

function Crumb({ page }) {
  return (
    <div className="bc">
      <a href="/">Home</a> / {page}
    </div>
  );
}

function PhotoSlider({ items, ms = 10000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((x) => (x + 1) % items.length);
    }, ms);

    return () => clearInterval(timer);
  }, [items.length, ms]);

  return (
    <div className="internship-photo-slider">
      <div className="internship-photo-track">
        {items.map((item, i) => (
          <div
            key={i}
            className={`internship-photo-slide ${i === active ? "active" : ""}`}
          >
            {item.img ? (
              <img
                src={item.img}
                alt={item.l}
                className="internship-photo-image"
              />
            ) : (
              <div className="internship-photo-placeholder">
                <span>{item.e}</span>
                {item.l}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="internship-photo-dots">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Head({ tag, title, sub, className }: { tag: string; title: string; sub?: string; className?: string }) {
  return (
    <div className={className}>
      <div className="tag">{tag}</div>

      <h2 className="h2">{title}</h2>

      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

function Fade({ children }) {
  return <>{children}</>;
}

function FaqCols({ items }) {
  return (
    <div className="grid g2">
      {items.map(([question, answer]) => (
        <div className="card" key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  );
}

/* ================= REVIEWS ================= */

/*
  IMPORTANT:
  If REVIEWS already exists in Home.jsx, import/export it
  instead of creating another copy.

  Example:
  import { REVIEWS } from "../data/siteData";
*/

const REVIEWS = [];

function GReviews() {
  return (
    <div>
      <div className="rev-head">
        <Head tag="Student reviews" title="What students say on Google" />

        <span className="live">Live from Google Reviews · preview data</span>
      </div>

      <div className="rvl">
        {REVIEWS.map((r, i) => (
          <div className="card rev" key={i}>
            <div className="star">{"★".repeat(r.s)}</div>

            <p>{r.t}</p>

            <div className="who">
              <div className="av">{r.n[0]}</div>

              <div>
                <b>{r.n}</b>

                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: 12,
                  }}
                >
                  Google review
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= INTERNSHIP FORM ================= */

/* ================= INTERNSHIP PAGE ================= */

function InternshipPage() {
  const GT = [
    ["📅", "Batch Availability", "Flexible, on weekdays or weekends"],
    ["🎓", "Open to", "College students, 1st year to final year"],
    ["📚", "Eligible Graduates", "Any Graduate"],
    [
      "💻",
      "Program format",
      "Live project with a mentor from the software industry",
    ],
  ];
  const [internshipType, setInternshipType] = useState("individual");
  return (
    <>
      <Topbar />
      {/* ================= HEADER ================= */}

      <Header />

      {/* ================= HERO ================= */}

      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <div className="hgrid">
            <div>
              <Crumb page="Internship Program" />

              <div className="tag">
                Software Development Internship · Tambaram, Chennai
              </div>

              <h1
                style={{
                  marginTop: 8,
                  fontSize: "clamp(30px,5vw,50px)",
                }}
              >
                IT Internship for <span>Students</span> in Chennai
              </h1>

              <p>
                Real-time software training, live projects and career guidance
                for college students, guided by mentors from the software
                industry.
              </p>

              <div className="row">
                <a href="#apply" className="btn cta">
                  Apply for Internship
                </a>

                <a href="#i-faqs" className="btn ghost">
                  Read FAQs
                </a>
              </div>
            </div>

            <PhotoSlider items={IPH} ms={5000} />
          </div>
        </div>
      </section>

      {/* ================= WHY NEXILA ================= */}

      <section className="sec alt">
        <div className="wrap">
          <div className="abg" style={{ alignItems: "start" }}>
            <div>
              <Head
                tag="Why Nexila"
                title="Why choose Nexila Technologies for an internship in Tambaram?"
                sub="Our internship bridges academic learning and real-time IT industry requirements, with live projects, practical exposure and mentoring from experienced professionals."
              />

              <div className="mv" style={{ marginTop: 26 }}>
                {IWHY2.map(([title, description]) => (
                  <Fade key={title}>
                    <div className="card">
                      <div className="ico">✓</div>

                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>

            {/* ================= GLANCE ================= */}

            <div className="gx">
              <span className="tag" style={{ color: "#7FB0FF" }}>
                Internship at a glance
              </span>

              <div className="gxd">
                <span>Duration</span>

                <div>
                  <b>2 – 8</b> weeks
                </div>

                <div className="wk">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((w) => (
                    <i key={w} className={w <= 2 ? "m" : "f"} />
                  ))}
                </div>

                <small>Minimum 2 weeks, up to 8 weeks</small>
              </div>

              <div className="gxg">
                {GT.map(([icon, key, value]) => (
                  <div key={key}>
                    <span className="gi">{icon}</span>

                    <small>{key}</small>

                    <b>{value}</b>
                  </div>
                ))}
              </div>

              <div className="gxo">
                <span className="gi">📜</span>

                <div>
                  <small>On completion</small>

                  <b>Certificate of completion and recommendation letter</b>
                </div>
              </div>

              <div className="gxc">
                <small>Domains</small>

                <div className="chipset">
                  {IDOM.map((domain) => (
                    <i key={domain}>{domain}</i>
                  ))}
                </div>
              </div>

              <a href="#apply" className="btn cta">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAM OVERVIEW ================= */}

      <section className="sec">
        <div className="wrap">
          <div className="sl full-width-content">
            <div className="main-content">
              {/* PROGRAM OVERVIEW */}

              <div className="blk">
                <Head
                  tag="Program overview"
                  title="A stepping stone into the IT industry"
                  sub="This internship gives college students hands-on experience in the tech industry. You apply classroom knowledge to real-world projects, build new skills and work alongside seasoned professionals, whether you want to improve your coding, understand the software development life cycle or learn about current industry trends."
                  className="full-width-content"
                />

                <div className="grid g3">
                  {IFEAT.map(([icon, title, description]) => (
                    <Fade key={title}>
                      <div className="card">
                        <div className="ico">{icon}</div>

                        <h3>{title}</h3>

                        <p>{description}</p>
                      </div>
                    </Fade>
                  ))}
                </div>

                <div style={{ marginTop: 30 }}>
                  <div className="tag">What you will practise</div>

                  <div className="areas">
                    {ISKILLS.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ELIGIBILITY */}

              <div className="blk">
                <Head tag="Eligibility" title="Who can apply?" />

                <div className="grid g2">
                  <div className="card">
                    <h3
                      style={{
                        marginBottom: 6,
                      }}
                    >
                      Eligibility criteria
                    </h3>

                    <ul className="ck2">
                      {IELIG.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card">
                    <h3
                      style={{
                        marginBottom: 6,
                      }}
                    >
                      Open to
                    </h3>

                    <ul className="ck2">
                      {IWHO.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                      }}
                    >
                      <b>2 to 8 weeks</b>, with flexible batches on weekdays or
                      weekends.
                    </p>
                  </div>
                </div>
              </div>

              {/* INTERNSHIP DETAILS */}

              <div className="blk">
                <Head
                  tag="Internship details"
                  title="Duration, mode & schedule"
                  sub="Plan your internship with flexible learning schedules, convenient timings and weekly batches."
                />

                <div className="grid g2">
                  {/* Duration & Mode */}
                  <div className="card">
                    <h3>Duration</h3>
                    <ul className="ck2">
                      <li>15 Days</li>
                      <li>30 Days</li>
                      <li>60 Days</li>
                      <li>90 Days</li>
                    </ul>

                    <h3>Mode</h3>
                    <p>Offline / Online</p>

                    <h3>Batch Starts</h3>
                    <p>Every Wednesday</p>
                  </div>

                  {/* Classes & Timing */}
                  <div className="card">
                    <h3>Classes</h3>
                    <ul className="ck2">
                      <li>Weekdays (Monday–Friday): 1 hour per day</li>
                      <li>Weekend (Saturday): 3 hours</li>
                    </ul>

                    <h3>Timing</h3>
                    <ul className="ck2">
                      <li>Weekdays: 9:30 AM–7:30 PM (choose a 1-hour slot)</li>
                      <li>Saturday: 9:30 AM–12:30 PM</li>
                      <li>Saturday: 12:30 PM–3:30 PM</li>
                      <li>Saturday: 3:30 PM–6:30 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* BENEFITS */}

              <div className="blk">
                <Head tag="Benefits" title="What you get from the program" />

                <div className="grid g3">
                  {IBEN.map(([icon, title, description]) => (
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

              {/* REVIEWS */}

              {/* <div className="blk">
                <GReviews />
              </div> */}
            </div>

            {/* ================= SIDEBAR FORM ================= */}

            {/* <aside className="sf">
              <div className="sfc">
                <div className="tag" style={{ color: "#7FB0FF" }}>
                  Apply for internship
                </div>

                <h3>Start your software internship</h3>

                <InternForm />
              </div>
            </aside> */}
          </div>
        </div>
      </section>

      {/* ================= APPLY ================= */}

      <section className="sec alt" id="apply">
        <div className="wrap">
          <div className="lead" id="contact">
            {/* Internship Heading */}
            <div>
              <div className="tag" style={{ color: "#7FB0FF" }}>
                Apply for internship
              </div>

              <h2 style={{ margin: "8px 0 12px", fontSize: 34 }}>
                {internshipType === "individual"
                  ? "Start your software internship"
                  : "Start your group internship"}
              </h2>

              <p>
                {internshipType === "individual"
                  ? "Apply individually for your software internship. Our team will contact you with the next steps."
                  : "Groups can range from a minimum of 6 to a maximum of 15 members. By applying as a group, every member will receive a ₹200 discount compared to the individual internship registration fee. Once you submit, our team will contact you with the next steps."}{" "}
                You can also call us on{" "}
                <a href="tel:+919803061234">+91 980 306 1234</a>.
              </p>

              {/* Internship Type Selection */}
              <div className="internship-options">
                <label
                  className={
                    internshipType === "individual"
                      ? "internship-option active"
                      : "internship-option"
                  }
                >
                  <input
                    type="radio"
                    name="internshipType"
                    value="individual"
                    checked={internshipType === "individual"}
                    onChange={() => setInternshipType("individual")}
                  />
                  <span>Individual Internship</span>
                </label>

                <label
                  className={
                    internshipType === "group"
                      ? "internship-option active"
                      : "internship-option"
                  }
                >
                  <input
                    type="radio"
                    name="internshipType"
                    value="group"
                    checked={internshipType === "group"}
                    onChange={() => setInternshipType("group")}
                  />
                  <span>Group Internship</span>
                  <small>
                    Offers only applicable for minimum 6 to 15 members group
                  </small>
                </label>
              </div>

              {/* Internship Details: Two Columns */}
              {/* Internship Details */}
              {internshipType === "group" && (
                <div className="internship-details">
                  <div className="internship-info-grid">
                    {/* Left Column */}
                    <div className="internship-info-column">
                      <h3>Group Internship</h3>
                      <ul className="ck2">
                        <li>Minimum 6 to 15 members per group</li>
                        <li>Collaborative learning with your team</li>
                        <li>Live classes with mentor support</li>
                        <li>Attendance report, Offer Letter and Certificate</li>
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div className="internship-info-column">
                      <h3>Mode</h3>
                      <p>Contact our team for group internship options.</p>

                      <h3>Batch Starts</h3>
                      <p>Every Wednesday</p>

                      <h3>Contact</h3>
                      <p>
                        <a href="tel:+919803061234">+91 980 306 1234</a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Application Form */}
            <div className="internship-form-container">
              {internshipType === "individual" ? (
                <InternForm />
              ) : (
                <GroupInternForm internshipType="group" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}

      <section className="sec">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Head
            tag="Our location"
            title="Software Development Internship near Tambaram, Chennai"
            sub="Looking for an IT internship that gives real-world experience? Visit us in West Tambaram."
          />

          <p
            style={{
              margin: "20px 0 6px",
            }}
          >
            <b>📍 Nexila Technologies</b>
            <br />

            <span
              style={{
                color: "var(--muted)",
              }}
            >
              West Tambaram, Chennai - 600045, Tamil Nadu, India
            </span>
          </p>

          <div
            className="row"
            style={{
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <a
              className="btn cta"
              href="https://maps.app.goo.gl/XGk8e9hpmrD6n3tR8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Google Maps
            </a>

            <a
              className="btn outl"
              href="https://share.google/YXbXZivGjBjjmfGsZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              View us on Google
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="sec alt csec" id="i-faqs">
        <div className="wrap">
          <Head
            tag="FAQs"
            title="Internship questions, answered"
            sub="Everything students ask before applying."
          />

          <FaqCols items={IFAQ} />

          <div
            style={{
              textAlign: "center",
              marginTop: 30,
            }}
          >
            <p
              style={{
                color: "var(--muted)",
                margin: "0 0 14px",
              }}
            >
              Still have questions? Our team is happy to help.
            </p>

            <a href="#internship-options" className="btn cta">
              Apply for Internship
            </a>
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
      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
}

export default InternshipPage;
