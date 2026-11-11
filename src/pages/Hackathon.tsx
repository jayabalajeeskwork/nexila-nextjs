"use client";

import React, { useEffect, useState } from "react";

/* ================= HACKATHON DATA ================= */
import { Header, Footer, Topbar } from "./Home";
const HK = {
  close: "2026-10-13",
  r1: "2026-10-19",
  r2: "2026-11-07",
  fin: "2026-12-31",
};

const eod = (d) => new Date(d + "T23:59:59+05:30").getTime();

const sod = (d) => new Date(d + "T00:00:00+05:30").getTime();

const HST = [
  [
    "$ register --team",
    "Registration",
    "Form your team of 2 - 4 and lock in your spot.",
    "October 13",
    HK.close,
  ],
  [
    "$ run round1 --filter-idea",
    "Round 1 · Idea Filtering",
    "Submit your concept online. Best ideas move forward.",
    "October 19",
    HK.r1,
  ],
  [
    "$ run round2 --semifinal",
    "Round 2 · Semi-Finals",
    "Show your build online and earn your seat in the finals.",
    "November 07",
    HK.r2,
  ],
  [
    "$ deploy --finals --live",
    "Grand Finale",
    "Offline. In person. Present to the judges and take the win.",
    "December",
    HK.fin,
  ],
];

const HWHY = [
  [
    "🚀",
    "Build real projects",
    "Turn your technical ideas into functional and practical solutions.",
  ],
  [
    "💡",
    "Showcase your innovation",
    "Present your creativity, problem-solving ability and technical knowledge.",
  ],
  [
    "👥",
    "Team collaboration",
    "Work with 2 to 4 team members and experience real-world development collaboration.",
  ],
  [
    "🤖",
    "Explore AI and programming",
    "Apply artificial intelligence and programming technologies to create innovative solutions.",
  ],
  [
    "🏆",
    "Compete and win",
    "Compete with talented college students for a share of the ₹50,000 prize pool.",
  ],
  [
    "🎯",
    "Gain practical experience",
    "Go beyond classroom learning by building and presenting a working solution.",
  ],
];

const HFAQ = [
  [
    "What is Nexila Hackathon 2026?",
    "It is a technology hackathon organised by Nexila Technologies for college students to build and showcase innovative solutions based on AI and programming.",
  ],
  [
    "Who can participate?",
    "The hackathon is open to college students who meet the eligibility requirements. You can register as a team of 2 to 4 members.",
  ],
  [
    "What is the theme?",
    "The primary theme is AI & Programming Languages. Participants can build solutions using suitable technologies and programming languages.",
  ],
  [
    "Is there a fixed problem statement?",
    "No. You choose your own idea and build your own solution, subject to the hackathon rules and evaluation guidelines.",
  ],
  [
    "What is the team size?",
    "Each team must have a minimum of 2 and a maximum of 4 members.",
  ],
  [
    "Is the hackathon online or offline?",
    "It follows an online rounds to offline Grand Finale format. Rounds 1 and 2 are online, and the finals are held in person.",
  ],
  [
    "What is the prize money?",
    "The total prize pool is ₹50,000, with ₹25,000 for 1st place, ₹15,000 for 2nd and ₹10,000 for 3rd, plus a Performer Award and certificates.",
  ],
  [
    "When is the registration deadline?",
    "The registration deadline is September 27, 2026, subject to the availability of team slots.",
  ],
  [
    "Can students from different colleges form a team?",
    "Please refer to the official hackathon rules about inter-college teams, or contact our team to confirm.",
  ],
  [
    "What technologies can we use?",
    "You can use appropriate programming languages, frameworks and AI technologies relevant to your solution, subject to the official rules.",
  ],
];

import hackathonAbout1 from "../assets/images/Hackathon-About-image.png";
import hackathonAbout2 from "../assets/images/nexhack-about2.webp";

const HPH = [
  {
    img: hackathonAbout1,
    e: "🏆",
    l: "Hackathon photo 1",
  },
  {
    img: hackathonAbout2,
    e: "👩‍💻",
    l: "Hackathon photo 2",
  },
];

const HJ = ["Team locked in", "Best ideas advance", "Top builds qualify"];

const TIERS: [string, string, number, number, string][] = [
  ["🥇", "1st place", 25000, 50, "#FBBF24"],
  ["🥈", "2nd place", 15000, 30, "#CBD5E1"],
  ["🥉", "3rd place", 10000, 20, "#D97706"],
];

/* ================= HELPERS ================= */

/*
  IMPORTANT:
  If these helpers already exist in Home.jsx,
  use the EXACT implementations from Home.jsx
  if you want 100% identical behavior/style.
*/

function Counter({ to }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);

      setValue(Math.floor(progress * to));

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [to]);

  return <span>{value.toLocaleString("en-US")}</span>;
}

function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const labels = [
    "Registration closes in",
    "Round 1 starts in",
    "Round 2 starts in",
    "Grand Finale starts in",
  ];

  const i = HST.findIndex((s) => eod(s[4]) > now);

  if (i < 0) {
    return (
      <div className="cdn">
        Nexila Hackathon 2026 has concluded. Thank you for taking part!
      </div>
    );
  }

  const d = Math.max(0, (i === 0 ? eod(HST[0][4]) : sod(HST[i][4])) - now);

  const values = [
    ["Days", Math.floor(d / 864e5)],
    ["Hours", Math.floor(d / 36e5) % 24],
    ["Mins", Math.floor(d / 6e4) % 60],
    ["Secs", Math.floor(d / 1e3) % 60],
  ];

  return (
    <div>
      <div className="cdl">{d > 0 ? labels[i] : "Happening today"}</div>

      <div className="cd">
        {values.map(([label, number]) => (
          <div key={label}>
            <b>{String(number).padStart(2, "0")}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoSlider({ items, ms = 5000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((x) => (x + 1) % items.length);
    }, ms);

    return () => clearInterval(timer);
  }, [items.length, ms]);

  return (
    <div className="hack-photo-slider">
      {items.map((item, i) => (
        <div
          key={i}
          className={`hack-photo-slide ${
            i === active ? "hack-photo-active" : ""
          }`}
        >
          {item.img ? (
            <img src={item.img} alt={item.l} className="hack-photo-image" />
          ) : (
            <div className="hack-photo-placeholder">
              <span>{item.e}</span>
              {item.l}
            </div>
          )}
        </div>
      ))}

      <div className="hack-photo-dots">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === active ? "hack-dot-active" : ""}
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Crumb({ page }) {
  return (
    <div className="bc">
      <a href="/">Home</a> / {page}
    </div>
  );
}

/*
  Use your EXACT Head component from Home.jsx here
  if its styling differs.
*/
function Head({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div>
      <div className="tag">{tag}</div>

      <h2 className="h2">{title}</h2>

      {sub && <p>{sub}</p>}
    </div>
  );
}

/*
  Use your EXACT Fade component from Home.jsx
  if you already have one.
*/
function Fade({ children }) {
  return <>{children}</>;
}

/*
  Use your EXACT FaqCols component from Home.jsx
  if you already have one.
*/
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

function Consult() {
  const [ok, setOk] = useState(false);

  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [interested, setInterested] = useState("");
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoMessage, setDemoMessage] = useState("");
  const handleConsultationSubmit = async (e) => {
    e.preventDefault();

    setDemoMessage("");

    const name = demoName.trim();
    const phone = demoPhone.trim();
    const email = demoEmail.trim().toLowerCase();

    // ================================
    // NAME VALIDATION
    // ================================

    if (!name) {
      setDemoMessage("Please enter your full name.");
      return;
    }

    // ================================
    // MOBILE VALIDATION
    // ================================

    if (!/^\d{10}$/.test(phone)) {
      setDemoMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    // ================================
    // EMAIL VALIDATION
    // Optional
    // ================================

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setDemoMessage("Please enter a valid email address.");
      return;
    }

    // ================================
    // INTEREST VALIDATION
    // ================================

    if (!interested) {
      setDemoMessage("Please select what you would like to discuss.");
      return;
    }

    setDemoLoading(true);

    try {
      // ================================
      // CRM DATA
      // ================================

      const crmData = {
        name: name,
        phone: phone,
        email: email || null,

        domain: null,

        leadstatus: "New Lead",
        leadsource: "website",

        collegename: null,
        location: null,
        category: null,
        graduate: null,
        joinstatus: null,
        lookingfor: interested,
        internshipduration: null,

        notes: null,
        remark: null,
        domainreason: null,
        dropreason: null,

        followdate: null,
        demodate: null,
        dateofjoin: null,

        fees: null,
        feetype: null,
        feepaid: null,
        pendingfee: null,

        noofday: null,
        assignfrom: null,
        assignto: null,
      };

      console.log("Sending lead to CRM:", crmData);

      // ================================
      // SEND TO CRM
      // ================================

      const response = await fetch(
        "https://crm.nexilatechnologies.com/api/leads/create-public",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(crmData),
        },
      );

      const result = await response.json();

      // ================================
      // BACKEND ERROR
      // ================================

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your request.");
      }

      console.log("CRM lead created:", result);

      // ================================
      // SUCCESS
      // ================================

      setDemoMessage(
        result?.message || "Thank you! Our team will contact you shortly.",
      );

      setOk(true);

      // Clear form
      setDemoName("");
      setDemoPhone("");
      setDemoEmail("");
      setInterested("");

      // ================================
      // RETURN TO FORM AFTER 6 SECONDS
      // ================================

      setTimeout(() => {
        setOk(false);
        setDemoMessage("");
      }, 6000);
    } catch (error) {
      console.error("Lead submission error:", error);

      setDemoMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setDemoLoading(false);
    }
  };
  return (
    <section className="sec alt" id="contact">
      <div className="wrap">
        <div className="lead">
          <div>
            <div className="tag" style={{ color: "#7FB0FF" }}>
              Free consultation
            </div>

            <h2
              style={{
                margin: "8px 0 12px",
                fontSize: 34,
              }}
            >
              Talk to us before you decide
            </h2>

            <p>
              Have a question about the hackathon, an internship or a course?
              Book a free consultation and our team will guide you. You can also
              call us on +91 980 306 1234.
            </p>

            <ul className="ck2">
              <li style={{ color: "#C4D1EE" }}>
                Course suitability and career paths
              </li>

              <li style={{ color: "#C4D1EE" }}>
                Internship and hackathon guidance
              </li>

              <li style={{ color: "#C4D1EE" }}>
                Clear answers before you enrol
              </li>
            </ul>
          </div>

          {ok ? (
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  marginBottom: 8,
                }}
              >
                🎉
              </div>

              <h3
                style={{
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Thank you! ✅
              </h3>

              <p>
                Our team will contact you shortly to schedule your free
                consultation.
              </p>

              <p
                style={{
                  fontSize: 13,
                  opacity: 0.7,
                  marginTop: 12,
                }}
              >
                This form will be available again shortly...
              </p>
            </div>
          ) : (
            <form onSubmit={handleConsultationSubmit}>
              {/* NAME */}

              <input
                required
                type="text"
                placeholder="Full name"
                value={demoName}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z\s]/g, "")
                    .replace(/\s+/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

                  setDemoName(value);
                }}
              />

              {/* MOBILE */}

              <input
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile number"
                value={demoPhone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                  setDemoPhone(value);
                }}
              />

              {/* EMAIL */}

              <input
                type="email"
                placeholder="Email (optional)"
                value={demoEmail}
                onChange={(e) => {
                  setDemoEmail(e.target.value);
                }}
              />

              {/* INTEREST */}

              <select
                required
                value={interested}
                onChange={(e) => {
                  setInterested(e.target.value);
                }}
              >
                <option value="" disabled>
                  What would you like to discuss?
                </option>

                <option value="Nexila Hackathon 2026">
                  Nexila Hackathon 2026
                </option>

                <option value="Internship Program">Internship Program</option>

                <option value="Courses and training">
                  Courses and training
                </option>

                <option value="Corporate training">Corporate training</option>

                <option value="Something else">Something else</option>
              </select>

              {/* ERROR / RESPONSE MESSAGE */}

              {demoMessage && (
                <div
                  style={{
                    marginTop: 10,
                    padding: "10px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                >
                  {demoMessage}
                </div>
              )}

              {/* SUBMIT */}

              <button
                className="btn cta"
                type="submit"
                disabled={demoLoading}
                style={{
                  opacity: demoLoading ? 0.7 : 1,
                  cursor: demoLoading ? "not-allowed" : "pointer",
                }}
              >
                {demoLoading ? "Submitting..." : "Request Free Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ================= HACKATHON PAGE ================= */

function HackathonPage() {
  const HACKATHON_INTEREST_API =
    // "http://localhost:5000/api/hackathon-interest/end";
  "https://crm.nexilatechnologies.com/api/hackathon-interest/end";
  const [ok, setOk] = useState(false);

  const now = Date.now();

  const open = now < eod(HK.close);

  const cur = HST.findIndex((s) => eod(s[4]) > now);

  const doneN = HST.filter((s) => eod(s[4]) < now).length;

  const pct = Math.min(
    100,
    Math.round(((doneN + (cur >= 0 ? 0.5 : 0)) / HST.length) * 100),
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      <Topbar />
      <Header />
      {/* ================= HERO ================= */}

      <section className="hero" style={{ paddingBottom: 64 }}>
        <div className="wrap">
          <div className="hgrid">
            <div>
              <Crumb page="Hackathon 2026" />

              <div className="eyb">// NEXILA TECHNOLOGIES PRESENTS</div>

              <h1
                style={{
                  fontSize: "clamp(34px,6vw,58px)",
                }}
              >
                Nexila Hackathon <span>2026</span>
              </h1>

              <h2
                style={{
                  fontSize: "clamp(20px,3vw,28px)",
                  margin: "10px 0 4px",
                }}
              >
                Build. Innovate. Compete.
              </h2>

              <div
                style={{
                  color: "var(--blue)",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                Where Code Meets Competition
              </div>

              <p style={{ margin: "0 0 20px" }}>
                A technology hackathon designed exclusively for college students
                who want to turn their ideas into real, working solutions, with
                a focus on Artificial Intelligence and programming languages.
              </p>

              <div className="pills">
                <span>🖥️ Online rounds + Offline finals</span>

                <span>👥 Team of 2 – 4 members</span>

                <span>🎓 College students only</span>
              </div>

              <div className="row">
                <a href="#register" className="btn cta">
                  Register Your Team
                </a>

                <a href="#h-pipeline" className="btn ghost">
                  See the Rounds
                </a>
              </div>

              <p
                style={{
                  fontSize: 14,
                  margin: "16px 0 0",
                }}
              >
                {open
                  ? "Limited team slots available. Register early to secure your spot. Registration closes September 27, first-come, first-served."
                  : "Team registration closed on September 27. Leave your details and our team will get in touch."}
              </p>
            </div>

            <div className="hcard">
              <Countdown />

              <div className="fl">
                <div>
                  <span>Eligibility</span>
                  <b>College students only</b>
                </div>

                <div>
                  <span>Team size</span>
                  <b>2 – 4 members</b>
                </div>

                <div>
                  <span>Format</span>
                  <b>Online → Offline finals</b>
                </div>

                <div>
                  <span>Theme</span>
                  <b>AI & Programming</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="sec">
        <div className="wrap">
          <div className="abg" style={{ alignItems: "center" }}>
            <div>
              <Head
                tag="About the hackathon"
                title="About Nexila Hackathon 2026"
              />

              <p style={{ marginTop: 16 }}>
                Nexila Hackathon 2026 is a student-focused technology
                competition organised by Nexila Technologies to encourage
                innovation, problem-solving and practical software development.
              </p>

              <p>
                Unlike competitions with predefined problem statements, you have
                the freedom to choose your own idea and build your own solution.
                Whether you are into AI, programming, software development,
                automation or emerging technologies, this is your chance to turn
                a concept into a working project.
              </p>

              <p>
                You will work with your team, build your solution and present it
                across the stages of the competition.
              </p>
            </div>

            <PhotoSlider items={HPH} />
          </div>
        </div>
      </section>

      {/* ================= PRIZE ================= */}

      <section className="sec prz">
        <div className="wrap">
          <div className="prg">
            <div>
              <div className="tag" style={{ color: "#FBBF24" }}>
                Prize pool
              </div>

              <h2
                className="h2"
                style={{
                  color: "#fff",
                  fontSize: "clamp(34px,5vw,54px)",
                }}
              >
                ₹<Counter to={50000} /> up for grabs
              </h2>

              <p
                style={{
                  color: "#C4D1EE",
                  maxWidth: 440,
                }}
              >
                Plus recognition that goes beyond the top three.
              </p>

              <div className="split">
                {TIERS.map(([m, l, v, p, c]) => (
                  <i
                    key={l}
                    style={{
                      width: p + "%",
                      background: c,
                    }}
                  />
                ))}
              </div>

              <div className="lg">
                {TIERS.map(([m, l, v, p, c]) => (
                  <span key={l}>
                    <u style={{ background: c }} />
                    {String(l).split(" ")[0]} · {p}%
                  </span>
                ))}
              </div>

              <div className="perks">
                <div>
                  <b>⭐ Performer Award</b>
                  <span>
                    Recognising standout effort beyond the podium, plus a
                    certificate.
                  </span>
                </div>

                <div>
                  <b>📜 Certificate for everyone</b>
                  <span>
                    Every participant who competes receives an official
                    certificate.
                  </span>
                </div>
              </div>
            </div>

            <div className="tiers">
              {TIERS.map(([m, l, v, p, c]) => (
                <div className="tr" key={l}>
                  <span className="md">{m}</span>

                  <div>
                    <b>{l}</b>

                    <div className="bar">
                      <i
                        style={{
                          "--w": p + "%",
                          background: c,
                        }}
                      />
                    </div>
                  </div>

                  <strong>₹{v.toLocaleString("en-US")}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHALLENGE ================= */}

      <section className="sec">
        <div className="wrap">
          <div className="abg" style={{ alignItems: "center" }}>
            <div>
              <Head tag="The challenge" title="AI & Programming Languages" />

              <p style={{ marginTop: 16 }}>
                Build something intelligent. Whether it is a sharp AI-powered
                tool, clever language tooling or a coding experiment nobody has
                tried yet, if it runs and solves a real problem, it belongs on
                this stage. There are no fixed problem statements: bring your
                own idea and defend it.
              </p>
            </div>

            <div className="cb">
              <div>
                <i>// team.js</i>
              </div>

              <div>
                <i>const</i> team = {"{"}
              </div>

              <div>
                &nbsp;&nbsp;size: <em>"2–4 members"</em>,
              </div>

              <div>
                &nbsp;&nbsp;eligibility: <em>"college students"</em>,
              </div>

              <div>
                &nbsp;&nbsp;theme: <em>"AI & programming"</em>,
              </div>

              <div>
                &nbsp;&nbsp;format: [<em>"online"</em>,{" "}
                <em>"offline finals"</em>]
              </div>

              <div>{"};"}</div>

              <div>&nbsp;</div>

              <div>
                <i>function</i> compete(idea) {"{"}
              </div>

              <div>
                &nbsp;&nbsp;<i>return</i> idea.build().pitch().win();
              </div>

              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY PARTICIPATE ================= */}

      <section className="sec alt" id="register">
        <div className="wrap">
          <div
            className="abg"
            style={{
              alignItems: "start",
              gridTemplateColumns: "1.25fr 1fr",
            }}
          >
            <div>
              <Head
                tag="Why participate"
                title="Why should you take part in Nexila Hackathon 2026?"
              />

              <div className="grid g2">
                {HWHY.map(([icon, title, description]) => (
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

            <div className="hf">
              <h3>Register your interest</h3>

              <p>Leave your details and our team will get in touch with you.</p>

              {ok ? (
                <div
                  style={{
                    padding: "22px 0",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 42,
                      marginBottom: 8,
                    }}
                  >
                    🎉
                  </div>

                  <h3 style={{ fontSize: 24, marginBottom: 8 }}>
                    You're on the list!
                  </h3>

                  <p>
                    Thank you for registering your interest. Our team will get
                    in touch with you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    setMessage("");
                    setMessageType("");

                    const name = form.name.trim();
                    const email = form.email.trim().toLowerCase();
                    const mobile = form.mobile.trim();

                    // -----------------------------
                    // NAME VALIDATION
                    // -----------------------------

                    if (name.length < 2) {
                      setMessage("Please enter a valid name.");
                      setMessageType("error");
                      return;
                    }

                    // -----------------------------
                    // EMAIL VALIDATION
                    // -----------------------------

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (!emailRegex.test(email)) {
                      setMessage("Please enter a valid email address.");
                      setMessageType("error");
                      return;
                    }

                    // -----------------------------
                    // MOBILE VALIDATION
                    // -----------------------------

                    if (mobile.length !== 10) {
                      setMessage(
                        "Please enter a valid 10 digit mobile number.",
                      );
                      setMessageType("error");
                      return;
                    }

                    setSubmitting(true);

                    try {
                      const response = await fetch(HACKATHON_INTEREST_API, {
                        method: "POST",

                        headers: {
                          "Content-Type": "application/json",
                        },

                        body: JSON.stringify({
                          name: name,
                          email: email,
                          mobileNumber: mobile,
                        }),
                      });

                      const result = await response.json();

                      if (!response.ok) {
                        throw new Error(
                          result.message || "Unable to register your interest.",
                        );
                      }

                      // -----------------------------
                      // SUCCESS
                      // -----------------------------

                      setMessage(
                        result.message || "Interest registered successfully.",
                      );

                      setMessageType("success");

                      setOk(true);

                      setForm({
                        name: "",
                        email: "",
                        mobile: "",
                      });
                      // Show success message for 6 seconds
                      setTimeout(() => {
                        setOk(false);
                        setMessage("");
                        setMessageType("");
                      }, 6000);
                    } catch (error) {
                      console.error("Hackathon interest error:", error);

                      setMessage(
                        error.message ||
                          "Something went wrong. Please try again.",
                      );

                      setMessageType("error");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  {/* NAME */}
                  <input
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/[^a-zA-Z\s]/g, "")
                        .toUpperCase();

                      setForm({
                        ...form,
                        name: value,
                      });
                    }}
                  />

                  {/* EMAIL */}
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        email: e.target.value,
                      });
                    }}
                  />

                  {/* MOBILE */}
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                      setForm({
                        ...form,
                        mobile: value,
                      });
                    }}
                  />

                  {/* MESSAGE */}
                  {message && (
                    <div
                      className={`nxh-form-message ${messageType}`}
                      style={{
                        marginTop: 12,
                        padding: "10px 14px",
                        borderRadius: 8,
                      }}
                    >
                      {message}
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    className="btn cta"
                    type="submit"
                    disabled={submitting}
                    style={{
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {submitting ? "Submitting..." : "Submit →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PIPELINE ================= */}

      <section className="sec csec" id="h-pipeline">
        <div className="wrap">
          <Head
            tag="The build pipeline"
            title="Four stages. One winner."
            sub="Follow the process from registration to the Grand Finale. Every stage moves your team closer to the stage."
          />

          <div className="vt2" style={{ "--p": pct + "%" }}>
            {HST.map(([cmd, title, description, date, end], i) => {
              const done = eod(end) < now;

              return (
                <React.Fragment key={title}>
                  <div
                    className={
                      "ti " +
                      (i % 2 ? "r" : "l") +
                      (i === cur ? " cur" : "") +
                      (done ? " done" : "")
                    }
                  >
                    <span className="nd2">{done ? "✓" : i + 1}</span>

                    <div className="tc">
                      <span className="cmd">{cmd}</span>

                      <h3>{title}</h3>

                      <p>{description}</p>

                      <div>
                        <span
                          className={
                            "st " + (done ? "done" : i === cur ? "next" : "up")
                          }
                        >
                          {done
                            ? i === 0
                              ? "Closed"
                              : "Completed"
                            : i === cur
                              ? "Next up"
                              : "Upcoming"}
                        </span>

                        <span className="dt2">{date}</span>
                      </div>
                    </div>
                  </div>

                  {i < HST.length - 1 && (
                    <div className="tj">
                      <span>↓ {HJ[i]}</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="sec alt">
        <div className="wrap">
          <Head tag="FAQ" title="Frequently asked questions" />

          <FaqCols items={HFAQ} />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="lead" style={{ alignItems: "center" }}>
            <div>
              <h2
                style={{
                  fontSize: 34,
                  marginBottom: 10,
                }}
              >
                Ready to build?
              </h2>

              <p style={{ margin: 0 }}>
                Rounds 1 and 2 happen online, so all you need to start is a team
                and an idea.
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <a href="#register" className="btn cta">
                Register Your Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 76 }} />
      <a
        className="wa"
        href="https://wa.me/919803061234"
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>
      {/* ================= CONSULTATION ================= */}

      <Consult />
      <Footer />
    </>
  );
}

/* ================= EXPORT ================= */

export default HackathonPage;
