"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "../lib/router-compat";
import { DET, GEN_FAQ } from "../components/courses/CourseData";
import abt1 from "../assets/images/abt1.jpg";
import abt2 from "../assets/images/abt2.jpg";
import abt3 from "../assets/images/abt3.jpg";
import abt4 from "../assets/images/abt4.jpg";
import "./Home.css"
const STATS: [number, string, string, number][] = [
  [1000, "+", "Students Trained", 0],
  [200, "+", "Guided Through Career Prep", 0],
  [10, "+", "Technical Mentors", 0],
  [15, "+", "Job-Oriented IT Courses", 0],
  [4.9, "★", "Rated on Google", 1],
];

const parseHash = () => {
  const h = typeof window !== "undefined" ? window.location.hash || "" : "";

  if (h.startsWith("#/courses/")) {
    return {
      r: "course",
      slug: h.slice(10),
    };
  }

  if (h.startsWith("#/courses")) {
    return {
      r: "courses",
    };
  }

  if (h.startsWith("#/about")) {
    return {
      r: "about",
    };
  }

  return {
    r: "home",
  };
};

function go(e, r, sec = undefined, slug = undefined) {
  if (e && e.preventDefault) e.preventDefault();

  const path =
    r === "about"
      ? "#/about"
      : r === "courses"
        ? "#/courses"
        : r === "course"
          ? "#/courses/" + slug
          : "#";

  try {
    history.pushState(null, "", path);
  } catch (x) {}

  window.dispatchEvent(
    new CustomEvent("nx-route", {
      detail: {
        r,
        sec,
        slug,
      },
    }),
  );

  if (sec) {
    setTimeout(() => {
      const el = document.getElementById(sec);
      el &&
        el.scrollIntoView({
          behavior: "smooth",
        });
    }, 150);
  }
}

function openDemo(e, kind = undefined) {
  if (e && e.preventDefault) e.preventDefault();

  window.dispatchEvent(
    new CustomEvent("nx-open", {
      detail: kind || "demo",
    }),
  );
}

const COURSES = [
  {
    c: "Full Stack",
    i: "🧩",
    t: "MERN Full Stack",
    d: "6 months",
    l: "Beginner",
    m: "Classroom / Online",
    x: "React, Node, MongoDB with live projects.",
  },
  {
    c: "Full Stack",
    i: "☕",
    t: "Java Full Stack",
    d: "6 months",
    l: "Beginner",
    m: "Classroom / Online",
    x: "Java, Spring Boot, React and SQL.",
  },
  {
    c: "Cloud & DevOps",
    i: "☁️",
    t: "AWS with DevOps",
    d: "4 months",
    l: "Intermediate",
    m: "Classroom / Online",
    x: "AWS, Docker, Kubernetes, CI/CD pipelines.",
  },
  {
    c: "Cloud & DevOps",
    i: "🔷",
    t: "Azure Training",
    d: "3 months",
    l: "Beginner",
    m: "Online",
    x: "Azure fundamentals to certification prep.",
  },
  {
    c: "Data & AI",
    i: "🤖",
    t: "Data Science & AI",
    d: "6 months",
    l: "Beginner",
    m: "Classroom / Online",
    x: "Python, ML and real-world AI projects.",
  },
  {
    c: "Data & AI",
    i: "📊",
    t: "Power BI & Tableau",
    d: "2 months",
    l: "Beginner",
    m: "Classroom / Online",
    x: "Dashboards and business analytics.",
  },
  {
    c: "Testing",
    i: "🧪",
    t: "Selenium Testing",
    d: "3 months",
    l: "Beginner",
    m: "Classroom / Online",
    x: "Manual and automation testing skills.",
  },
  {
    c: "Programming",
    i: "🐍",
    t: "Python Programming",
    d: "2 months",
    l: "Beginner",
    m: "Classroom / Online",
    x: "From basics to automation and APIs.",
  },
];

const CATS = ["All", ...new Set(COURSES.map((c) => c.c))];

const REVIEWS = [
  {
    n: "Nalini Lokeshkumar",
    s: 5,
    t: "I had a great learning experience at Nexila Technologies while completing the Full Stack Python course. The trainers explained concepts clearly with practical examples, making it easy to understand both frontend and backend development. The hands-on projects and assignments helped me improve my coding and problem-solving skills. The learning environment was supportive, and the staff were always willing to help whenever I had questions. I am grateful for the knowledge and confidence I gained through this course. I would recommend Nexila Technologies to anyone looking to build a strong foundation in Full Stack Python development.",
  },
  {
    n: "Raziya Begum",
    s: 5,
    t: "I had a very good learning experience at Nexila Technologies. The Data Analytics course is well-organized and easy to understand. The trainers explain every topic clearly with practical examples. The hands-on projects and assignments helped me build confidence. The staff are supportive and always ready to clear doubts. The placement guidance and interview preparation are also helpful. I recommend this institute to anyone who wants to learn Data Analytics.",
  },
  {
    n: "Rithikka Varshini",
    s: 5,
    t: "I sincerely thank the entire team for providing me with this valuable internship opportunity. Throughout the internship, I gained practical knowledge of Cloud Computing and AWS through well-structured hands-on sessions. The learning materials and guidance provided by the mentors made even complex topics easy to understand. I especially enjoyed working on real-time tasks such as creating IAM users, launching EC2 instances, and deploying a Linux web application. These activities improved both my technical knowledge and my confidence in using cloud technologies. Overall, this internship was a great learning experience that helped me strengthen my practical skills and motivated me to explore Cloud Computing further. Thank you to the mentors and the entire team for your continuous support and encouragement.",
  },
];

const FAQ = [
  [
    "Do you provide placement support?",
    "Yes. Structured career assistance includes resume preparation, LinkedIn guidance, mock interviews and interview readiness, and we work with 100+ hiring partners. Results depend on your effort and performance, and our team will guide you throughout.",
  ],
  [
    "Can I attend a free demo class before enrolling?",
    "Yes. You can book a free demo class, experience how our trainers teach and ask your questions before you decide to join.",
  ],
  [
    "Do I need coding knowledge to join?",
    "No. Our beginner-friendly tracks start from the basics, so freshers and non-IT learners can join without prior coding experience.",
  ],
  [
    "How do I choose the right course?",
    "Use the interest matcher on this page or talk to our career counsellor. We look at your education, current skills, interests and target role, and explain course suitability, duration and career paths before you enrol.",
  ],
  [
    "Are online classes available?",
    "Yes. Most courses are offered in both classroom mode at our Tambaram centre and live online mode. Choose whichever suits your schedule and location.",
  ],
  [
    "How big are the batches?",
    "We keep batches small and focused so you can ask questions, get trainer feedback and take an active part in every session.",
  ],
  [
    "Will I work on real projects?",
    "Yes. Selected courses include guided real-time projects and role-relevant assignments so you can apply what you learn. Ask the counsellor which projects are part of your course.",
  ],
  [
    "What are the course fees and duration?",
    "Fees and duration differ from course to course. Our team shares the complete details, including syllabus and duration, before you enrol, so there are no surprises.",
  ],
  [
    "Can working professionals join?",
    "Yes. Working professionals can choose flexible classroom or live online options. Contact us to discuss timings that fit around your job.",
  ],
  [
    "Do you offer internships?",
    "Yes. Our Internship Program lets students work on practical, live-style projects, including AI and ML tracks. Contact us for the current intake and eligibility.",
  ],
  [
    "What is Nexila Hackathon 2026?",
    "It is our tech challenge for college students, with teams of 2 to 4 building projects in AI and programming, and a prize pool of ₹50K. Use the register button on this page to apply.",
  ],
  [
    "Do you offer corporate training for teams?",
    "Yes. We offer corporate training for organisations. Write to info@nexilatechnologies.com or call +91 980 306 1234 to discuss your requirements.",
  ],
];

function useReveal() {
  const r = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const o = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (x) => x.isIntersecting && x.target.classList.add("in"),
        ),
      {
        threshold: 0.12,
      },
    );

    if (r.current) {
      o.observe(r.current);
    }

    return () => o.disconnect();
  }, []);

  return r;
}

function Fade({ children }) {
  const r = useReveal();

  return (
    <div ref={r} className="fade">
      {children}
    </div>
  );
}

function Counter({ to, suffix, dec = 0 }: { to: number; suffix: string; dec?: number }) {
  const [v, setV] = useState(0);
  const r = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;

      o.disconnect();

      const t0 = performance.now();

      const f = (t) => {
        const p = Math.min((t - t0) / 1400, 1);

        setV(to * p);

        if (p < 1) {
          requestAnimationFrame(f);
        }
      };

      requestAnimationFrame(f);
    });

    if (r.current) {
      o.observe(r.current);
    }

    return () => o.disconnect();
  }, [to]);

  return (
    <b ref={r}>
      {dec ? v.toFixed(dec) : Math.round(v).toLocaleString("en-US")}
      {suffix}
    </b>
  );
}

function Head({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div>
      <div className="tag">{tag}</div>
      <h2 className="h2">{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

export function Topbar() {
  return (
    <div className="tb">
      <div className="wrap">
        <div className="l">
          <a href="tel:+919803061234">📞 +91 980 306 1234</a>
          <a href="mailto:info@nexilatechnologies.com">
            <i className="bi bi-envelope-at"></i> info@nexilatechnologies.com
          </a>
        </div>

        <div className="r">
          <i className="bi bi-geo-alt-fill"></i> Tambaram, Chennai
        </div>
      </div>
    </div>
  );
}

export function Header({ route }: { route?: string }) {
  const navigate = useNavigate();
  const [o, setO] = useState(false);

  const L = [
    ["Home", "#"],
    ["About", "/about-us"],
    ["Courses", "/courses"],
    ["Placements", "#placements"],
    ["Internship", "/it-internship-for-students-tambaram-chennai"],
    ["Hackathon", "/nexila-hackathon-2026"],
    // ["Blog", "https://www.nexilatechnologies.com/author/admin_nexila/"],
    ["Blog", "/blogs"],
    ["Contact", "/contact-us"],
  ];
  const click = (e, n, h) => {
    setO(false);

    // Internship and Hackathon:
    // let the original href work exactly as it is
    if (n === "Internship" || n === "Hackathon") {
      return;
    }

    // Blog:
    // let the original external href work
    if (h.startsWith("http") || h.startsWith("https")) {
      return;
    }

    // If already on Home, keep your existing hash behavior
    if (route === "home") {
      return;
    }

    // From Internship / Hackathon → Home page
    if (
      n === "Home" ||
      // n === "About" ||
      // n === "Courses" ||
      n === "Placements"
      // ||
      // n === "Contact"
    ) {
      e.preventDefault();

      if (n === "Home") {
        window.location.href = "/";
      }
      // else if (n === "About") {
      //   window.location.href = "/#/about";
      // }
      // else if (n === "Courses") {
      //   window.location.href = "/#/courses";
      // }
      else if (n === "Placements") {
        window.location.href = "/#placements";
      }
      // else if (n === "Contact") {
      //   window.location.href = "/#contact";
      // }

      return;
    }
  };
  //   const click = (e, n, h) => {
  //   setO(false);

  //   if (n === "Home") {
  //     go(e, "home");
  //   } else if (n === "About") {
  //     go(e, "about");
  //   } else if (n === "Courses") {
  //     go(e, "courses");
  //   } else if (h[0] === "#" && route !== "home" && n !== "Contact") {
  //     go(e, "home", h.slice(1));
  //   }
  // };
  const act = (n) =>
    (n === "Home" && route === "home") ||
    (n === "About" && route === "about") ||
    (n === "Courses" && (route === "courses" || route === "course"));

  return (
    <header>
      <div className="wrap nav">
        <a href="/" className="logo">
          <img
            src="/nextextlogo.jpeg"
            alt="Nexila Technologies"
            width="290px"
          />
        </a>

        <button className="burger" onClick={() => setO(!o)} aria-label="Menu">
          {o ? "✕" : "☰"}
        </button>

        {/* <nav className={"links" + (o ? " open" : "")}>
          {L.map(([n, h]) => (
            <a
              key={n}
              href={h}
              className={act(n) ? "act" : ""}
              target={h[0] === "h" ? "_blank" : undefined}
              rel={h[0] === "h" ? "noopener" : undefined}
              onClick={(e) => click(e, n, h)}
            >
              {n}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              setO(false);
              openDemo(e);
            }}
            className="btn cta"
            style={{ padding: "9px 18px" }}
          >
            Enroll Now!
          </a>
        </nav> */}
        <nav className={"links" + (o ? " open" : "")}>
          {L.map(([n, h]) => (
            <a
              key={n}
              href={h}
              className={act(n) ? "act" : ""}
              target={h[0] === "h" ? "_blank" : undefined}
              rel={h[0] === "h" ? "noopener" : undefined}
              onClick={(e) => click(e, n, h)}
            >
              {n}
            </a>
          ))}

          {/* <a
            href="#contact"
            onClick={(e) => {
              setO(false);
              openDemo(e);
            }}
            className="btn cta"
            style={{ padding: "9px 18px" }}
          >
            Enroll Now!
          </a> */}
          <a
            href={
              typeof window !== "undefined" &&
              window.location.pathname === "/nexila-hackathon-2026"
                ? "#register"
                : "#contact"
            }
            onClick={(e) => {
              setO(false);

              if (window.location.pathname === "/nexila-hackathon-2026") {
                e.preventDefault();
                document.getElementById("register")?.scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                openDemo(e);
              }
            }}
            className="btn cta"
            style={{ padding: "9px 18px" }}
          >
            Enroll Now!
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hgrid">
          <div>
            <div className="tag">
              Software Training Institute · Tambaram, Chennai
            </div>

            <h1 style={{ marginTop: 12 }}>
              Learn. Build. <span>Get Hired.</span>
            </h1>

            <p>
              Job-focused software training with live projects, internships and
              dedicated placement support, taught by working industry mentors.
            </p>

            <div className="row">
              <a href="#contact" onClick={openDemo} className="btn cta">
                Book Free Demo
              </a>

              <a href="#courses" className="btn ghost">
                Explore Courses
              </a>
            </div>
          </div>

          <div className="code">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <i>const</i> career = <i>await</i> nexila.
              <em>train</em>({"{"}
            </div>

            <div>
              &nbsp;skills: [<em>"React"</em>, <em>"Cloud"</em>, <em>"AI"</em>],
            </div>

            <div>
              &nbsp;projects: <em>"live"</em>, mentors: <em>"industry"</em>
            </div>

            <div>{"}"});</div>

            <div style={{ marginTop: 8 }}>
              <i>if</i> (career.ready) <em>getHired</em>();
            </div>
          </div>
        </div>

        <div className="stats">
          {STATS.map(([n, x, l, d]) => (
            <div className="stat" key={l}>
              <Counter to={n} suffix={x} dec={d} />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="sec" id="placements" style={{ paddingBottom: 0 }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="tag">Trusted by 100+ hiring partners</div>

        {/* <div className="partners">
          {[
            "Partner logo",
            "Partner logo",
            "Partner logo",
            "Partner logo",
            "Partner logo",
          ].map((p, i) => (
            <span key={i} className="pill">
              {p}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}

const SLUG = {
  "MERN Full Stack": "mern-full-stack-training",
  "Java Full Stack": "java-full-stack",
  "AWS with DevOps": "aws-certification-training",
  "Azure Training": "azure",
  "Data Science & AI": "data-science",
  "Power BI & Tableau": "power-bi",
  "Selenium Testing": "selenium",
  "Python Programming": "python-for-beginners-what-to-learn-first",
};

function Courses() {
  const [c, setC] = useState("All");

  const list = COURSES.filter((x) => c === "All" || x.c === c);

  return (
    <section className="sec" id="courses">
      <div className="wrap">
        <Head
          tag="Courses"
          title="Pick a career track"
          sub="Beginner-friendly programs that end with projects, interview prep and placement support."
        />

        <div className="tabs">
          {CATS.map((x) => (
            <button
              key={x}
              className={"tab" + (c === x ? " on" : "")}
              onClick={() => setC(x)}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="grid g4">
          {list.map((x) => (
            <div className="card" key={x.t}>
              <div className="ico">{x.i}</div>

              <h3>{x.t}</h3>

              <p>{x.x}</p>

              <div className="meta">
                <span>{x.d}</span>
                <span>{x.l}</span>
                <span>{x.m}</span>
              </div>

              <a href={"/courses/" + SLUG[x.t]} className="lnk">
                View course →
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 32,
          }}
        >
          <a href="/courses" className="btn outl">
            View all courses →
          </a>
        </div>
      </div>
    </section>
  );
}

function Viz({ i }) {
  const [m, setM] = useState(0);

  const d = (k) => ({
    style: {
      animationDelay: k * 0.35 + "s",
    },
  });

  if (i === 0) {
    return (
      <div className="vz rd">
        {["Tools", "Concepts", "Workflows"].map((t, k) => (
          <div className="rn" key={t} style={d(k).style}>
            <b>{k + 1}</b>
            <span>{t}</span>
          </div>
        ))}
      </div>
    );
  }

  if (i === 1) {
    return (
      <div className="vz">
        <div className="term">
          <div style={d(0).style}>
            <em>trainer</em>$ demo --live
          </div>

          <div style={d(1).style}>› explain(concept)</div>

          <div style={d(2).style}>› show(example)</div>

          <div style={d(3).style} className="cur">
            ▍
          </div>
        </div>

        <div className="bub">👨‍🏫 “Let’s try it together.”</div>
      </div>
    );
  }

  if (i === 2) {
    return (
      <div className="vz">
        <div className="col">
          {[
            ["✓", "Exercise completed"],
            ["✓", "Guided activity done"],
            ["▶", "Your turn: practise it"],
          ].map(([c, t], k) => (
            <div className="ck" key={t} style={d(k).style}>
              <b className={k === 2 ? "o" : ""}>{c}</b>
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (i === 3) {
    return (
      <div className="vz">
        <div className="avs">
          {["🧑‍💻", "👩‍💻", "🙋", "👨‍💻", "👩‍💻"].map((a, k) => (
            <div key={k} className={"a2" + (k === 2 ? " hl" : "")}>
              {a}
            </div>
          ))}
        </div>

        <div className="bub">🙋 “Can you explain this again?”</div>

        <div className="bub" style={{ animationDelay: "1.6s" }}>
          👨‍🏫 “Sure, here’s feedback.”
        </div>
      </div>
    );
  }

  if (i === 4) {
    return (
      <div className="vz">
        <div className="kb">
          {([
            ["To do", 1, ""],
            ["In progress", 2, ""],
            ["Done", 2, " dn"],
          ] as [string, number, string][]).map(([h, n, c], k) => (
            <div key={h} className={"kc" + c}>
              <small>{h}</small>

              {Array.from({ length: n }).map((_, j) => (
                <div key={j} className="kd" style={d(k + j).style}></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (i === 5) {
    return (
      <div className="vz">
        <div
          className="col"
          style={{
            maxWidth: "none",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {["Resume", "LinkedIn", "Mock interview", "Interview ready"].map(
            (t, k) => (
              <div className="ck" key={t} style={d(k).style}>
                <b>✓</b>
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (i === 6) {
    return (
      <div
        className="vz"
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="tg">
          {["Classroom", "Live online"].map((t, k) => (
            <button
              key={t}
              className={m === k ? "on" : ""}
              onClick={() => setM(k)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="pill2" key={m} style={{ animationDelay: "0s" }}>
          {m === 0
            ? "📍 Learn in person at our Tambaram centre"
            : "💻 Join live sessions from anywhere"}
        </div>
      </div>
    );
  }

  return (
    <div className="vz fl">
      {["You", "Right course", "Career path"].map((t, k) => (
        <Fragment key={t}>
          {k > 0 && <span className="ar">→</span>}

          <div className="pill2" style={d(k).style}>
            {t}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function Why() {
  const [a, setA] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const t = setTimeout(() => setA((x) => (x + 1) % 8), 5500);

    return () => clearTimeout(t);
  }, [a, pause]);

  const W: [string, string, string, string[]][] = [
    [
      "📚",
      "Industry-Relevant Curriculum",
      "Learn tools, concepts and workflows aligned with the skills used in relevant IT roles.",
      ["Tools", "Concepts", "Workflows"],
    ],
    [
      "👨‍🏫",
      "Experienced Technical Trainers",
      "Learn through instructor-led sessions with practical explanations, demonstrations and guidance.",
      ["Explanations", "Demonstrations", "Guidance"],
    ],
    [
      "🛠️",
      "Hands-On Practical Training",
      "Practise tools and concepts through exercises and guided activities, not just theory.",
      ["Exercises", "Guided activities", "Practice"],
    ],
    [
      "👥",
      "Small-Batch Learning",
      "Ask questions, receive trainer feedback and participate actively with focused batch sizes.",
      ["Ask questions", "Trainer feedback", "Active participation"],
    ],
    [
      "🚀",
      "Guided Real-Time Projects",
      "Apply your learning through practical assignments and role-relevant projects in selected courses.",
      ["Assignments", "Role-relevant projects", "Applied learning"],
    ],
    [
      "💼",
      "Structured Career Assistance",
      "Get support with resume preparation, LinkedIn guidance, mock interviews and interview readiness.",
      ["Resume", "LinkedIn", "Mock interviews"],
    ],
    [
      "🔀",
      "Flexible Learning Options",
      "Choose classroom or live online training based on your schedule, location and learning preference.",
      ["Classroom", "Live online", "Your schedule"],
    ],
    [
      "🧭",
      "Transparent Career Counselling",
      "Understand course suitability, skills covered, duration and career paths before you enrol.",
      ["Course suitability", "Duration", "Career paths"],
    ],
  ];

  const n = W.length;
  const cur = W[a];

  return (
    <section className="sec alt">
      <div className="wrap">
        <Head
          tag="Why Nexila"
          title="Training built around real, job-ready skills"
          sub="Select a point to explore it, or let it play."
        />

        <div className="whyg">
          <div
            className={"wl" + (pause ? " pz" : "")}
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            {W.map((w, i) => (
              <button
                key={w[1]}
                className={"wi" + (i === a ? " on" : "")}
                onClick={() => setA(i)}
              >
                <span className="e">{w[0]}</span>
                {w[1]}
                {i === a && <i key={"p" + a}></i>}
              </button>
            ))}
          </div>

          <div
            className="wp"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            <div className="num">{String(a + 1).padStart(2, "0")}</div>

            <div className="anim" key={a}>
              <div className="big">{cur[0]}</div>

              <h3>{cur[1]}</h3>

              <p>{cur[2]}</p>

              <Viz i={a} />

              <div className="chips">
                {cur[3].map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>

            <div className="wn">
              <button
                onClick={() => setA((a + n - 1) % n)}
                aria-label="Previous"
              >
                ←
              </button>

              <button onClick={() => setA((a + 1) % n)} aria-label="Next">
                →
              </button>

              <small>
                {a + 1} / {n}
              </small>
            </div>
          </div>
        </div>

        <div className="steps">
          {[
            ["Learn", "Master fundamentals with expert-led sessions."],
            ["Practice", "Solve assignments and build projects."],
            ["Intern", "Work on live projects in our internship program."],
            ["Get Placed", "Interview with our hiring partners."],
          ].map(([t, d]) => (
            <div className="step" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PATHS: { i: string; t: string; d: string; s: string[]; c: string[]; img?: string }[] = [
  {
    i: "🌱",
    t: "Freshers",
    d: "Starting your IT journey? Begin with the fundamentals and build confidence one step at a time.",
    s: ["Programming basics", "Core course", "Mini projects", "Interview prep"],
    c: ["Python Programming", "Java Full Stack", "MERN Full Stack"],
  },
  {
    i: "💼",
    t: "Working Professionals",
    d: "Upskill alongside your job with flexible classroom or live online learning focused on your role.",
    s: [
      "Skill-gap discussion",
      "Flexible batch",
      "Hands-on labs",
      "Role-ready projects",
    ],
    c: ["AWS with DevOps", "Data Science & AI", "Azure Training"],
  },
  {
    i: "🎓",
    t: "Graduates",
    d: "Turn your degree into practical, job-ready skills with guided training and project work.",
    s: [
      "Choose a track",
      "Learn the tools",
      "Build projects",
      "Career assistance",
    ],
    c: ["Java Full Stack", "MERN Full Stack", "Data Science & AI"],
  },
  {
    i: "🌐",
    t: "Non-IT Learners",
    d: "Coming from commerce, arts or another stream? Start from the basics, with no prior coding required.",
    s: [
      "Career counselling",
      "Beginner foundation",
      "Guided practice",
      "Portfolio projects",
    ],
    c: ["Selenium Testing", "Power BI & Tableau", "Python Programming"],
  },
  {
    i: "📚",
    t: "Final-Year Students",
    d: "Get ahead before graduation with practical training, internships and hackathons.",
    s: [
      "Pick a skill",
      "Learn with practice",
      "Internship or hackathon",
      "Placement readiness",
    ],
    c: ["Internship Program", "Hackathon 2026", "MERN Full Stack"],
  },
  {
    i: "🚀",
    t: "Career Switchers",
    d: "Moving into IT from another field? Get a clear roadmap, focused skills and support through the change.",
    s: [
      "Goal and skills review",
      "Targeted course",
      "Real-time projects",
      "Resume and interviews",
    ],
    c: ["Selenium Testing", "Power BI & Tableau", "AWS with DevOps"],
  },
];

const LPBG = ["#1d4ed8", "#0f766e", "#7c3aed", "#c2410c", "#0369a1", "#be185d"];

const LPSC = ["🧑‍💻", "👩‍💼", "👨‍🎓", "🧭", "🎓", "🔁"];

function Paths() {
  const [a, setA] = useState(0);

  return (
    <section className="sec" id="paths">
      <div className="wrap">
        <Head
          tag="Learning Paths"
          title="A learning path for every background"
          sub="Whether you are starting out, moving up or changing direction, Nexila helps you choose a course and pace that fit where you are today and where you want to go."
        />

        <div className="lpw">
          {PATHS.map((x, i) => (
            <div
              key={x.t}
              role="button"
              tabIndex={0}
              aria-expanded={i === a}
              className={"lp" + (i === a ? " on" : "")}
              style={{
                "--g": `linear-gradient(150deg,${LPBG[i]},#0B1B3A)`,
                ...(x.img
                  ? {
                      backgroundImage: `url(${x.img})`,
                    }
                  : {}),
              }}
              onClick={() => setA(i)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                (e.preventDefault(), setA(i))
              }
            >
              {!x.img && <div className="sc">{LPSC[i]}</div>}

              <div className="n">0{i + 1}</div>

              <div className="vt">{x.t}</div>

              <div className="dt">
                <h3>{x.t}</h3>

                <p>{x.d}</p>

                <div className="stp">
                  {x.s.map((t, k) => (
                    <Fragment key={t}>
                      {k > 0 && <em>→</em>}
                      <span>{t}</span>
                    </Fragment>
                  ))}
                </div>

                <div className="row2">
                  {x.c.map((c) => (
                    <span className="cc" key={c}>
                      {c}
                    </span>
                  ))}

                  <a
                    href="#contact"
                    onClick={openDemo}
                    className="btn cta"
                    style={{
                      padding: "10px 20px",
                    }}
                  >
                    Get guidance →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const IN = {
  d: ["📊", "Data & numbers"],
  c: ["💻", "Coding & logic"],
  b: ["🎨", "Building what people see"],
  t: ["🔍", "Spotting bugs & details"],
  s: ["☁️", "Servers & automation"],
  a: ["🤖", "AI & new tech"],
  m: ["📱", "Mobile apps"],
};

const MC = [
  {
    i: "🧩",
    t: "Full Stack Development",
    x: "Build complete web applications, front to back.",
    k: ["c", "b"],
  },
  {
    i: "🐍",
    t: "Python Programming",
    x: "Learn to code and automate everyday tasks with Python.",
    k: ["c", "d"],
  },
  {
    i: "📈",
    t: "Data Analytics",
    x: "Turn raw numbers into dashboards and decisions.",
    k: ["d"],
  },
  {
    i: "🧠",
    t: "Data Science",
    x: "Find patterns in data and build predictive models.",
    k: ["d", "a", "c"],
  },
  {
    i: "✨",
    t: "Artificial Intelligence",
    x: "Work with AI tools and build intelligent applications.",
    k: ["a", "c"],
  },
  {
    i: "☁️",
    t: "AWS with DevOps",
    x: "Deploy, run and automate applications on the cloud.",
    k: ["s", "c"],
  },
  {
    i: "🧪",
    t: "Software Testing",
    x: "Keep software reliable with manual and automated testing.",
    k: ["t", "c"],
  },
  {
    i: "📱",
    t: "Mobile App Development",
    x: "Create Android and iOS apps people use every day.",
    k: ["m", "b", "c"],
  },
];

function Match() {
  const [sel, setSel] = useState([]);

  const tog = (k) =>
    setSel((v) => (v.includes(k) ? v.filter((x) => x !== k) : [...v, k]));

  const rows = MC.map((c, idx) => ({
    ...c,
    idx,
    hits: c.k.filter((k) => sel.includes(k)),
  })).sort((a, b) =>
    sel.length ? b.hits.length - a.hits.length || a.idx - b.idx : a.idx - b.idx,
  );

  const best = sel.length && rows[0].hits.length ? rows[0] : null;

  return (
    <section className="sec alt" id="match">
      <div className="wrap">
        <Head
          tag="Not sure which course to choose?"
          title="Pick what you enjoy, we will point you to a course"
          sub="Select the things you like doing. We will highlight the courses that fit your interests and strengths best."
        />

        <div className="chs">
          {Object.entries(IN).map(([k, [e, l]]) => (
            <button
              key={k}
              className={"ch" + (sel.includes(k) ? " on" : "")}
              onClick={() => tog(k)}
            >
              {e} {l}
            </button>
          ))}
        </div>

        <div className="mg">
          {rows.map((r) => {
            const top = best && r.idx === best.idx;
            const hit = r.hits.length > 0;

            return (
              <div
                key={r.t}
                className={
                  "mc" +
                  (top ? " top" : hit ? " hit" : sel.length ? " dim" : "")
                }
              >
                {top && <span className="bd">Best match</span>}

                <div className="ico">{r.i}</div>

                <h3>{r.t}</h3>

                <p>{r.x}</p>

                <div className="mt">
                  {r.hits.map((k) => (
                    <span key={k}>✓ {IN[k][1]}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="sum">
          {best ? (
            <>
              Top pick for you: <b>{best.t}</b> · matches {best.hits.length} of
              your {sel.length} {sel.length > 1 ? "picks" : "pick"}
            </>
          ) : (
            "Choose one or more interests above to see your matches."
          )}
        </div>

        <p className="note">
          The right course depends on your education, current skills, interests
          and the role you are aiming for. Talk to a counsellor before you enrol
          to understand course suitability, duration and career paths.
        </p>

        <div style={{ textAlign: "center" }}>
          <a href="#contact" onClick={openDemo} className="btn outl">
            Talk to a Career Counsellor
          </a>
        </div>
      </div>
    </section>
  );
}

function Hackathon() {
  return (
    <section className="sec" id="hackathon">
      <div className="wrap">
        <div className="hack">
          <div>
            <div className="tag" style={{ color: "#7FB0FF" }}>
              Nexila Hackathon 2026
            </div>

            <h2 style={{ margin: "8px 0 12px" }}>Build. Innovate. Compete.</h2>

            <p>
              Open to college students in teams of 2 to 4. Turn your idea into a
              real project and win.
            </p>

            <a
              href="/nexila-hackathon-2026"
              className="btn cta"
              style={{ marginTop: 8 }}
            >
              Register Now →
            </a>
          </div>

          <div className="prize">
            <span>Prize pool</span>
            <b>₹50K</b>
            <span>AI and programming tracks</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="sec alt" id="reviews">
      <div className="wrap">
        <div className="rev-head">
          <Head tag="Student Reviews" title="What our students say on Google" />

          <span className="live">Live from Google Reviews · preview data</span>
        </div>

        <div className="grid g3">
          {REVIEWS.map((r, i) => (
            <div className="card rev" key={i}>
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
              <div className="star">{"★".repeat(r.s)}</div>

              <p style={{ textAlign: "justify" }}>{r.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [o, setO] = useState(0);
  const half = Math.ceil(FAQ.length / 2);

  const item = (f, i) => (
    <div className="q" key={i}>
      <button onClick={() => setO(o === i ? -1 : i)} aria-expanded={o === i}>
        {f[0]}
        <span>{o === i ? "−" : "+"}</span>
      </button>

      {o === i && <div>{f[1]}</div>}
    </div>
  );

  return (
    <section className="sec">
      <div className="wrap">
        <Head tag="FAQ" title="Common questions" />

        <div className="faq2">
          <div>{FAQ.slice(0, half).map((f, i) => item(f, i))}</div>

          <div>{FAQ.slice(half).map((f, i) => item(f, i + half))}</div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 28,
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

          <a href="#contact" onClick={openDemo} className="btn cta">
            Talk to a Counsellor
          </a>
        </div>
      </div>
    </section>
  );
}

function Lead() {
  const [ok, setOk] = useState(false);

  const [demoLoading, setDemoLoading] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [interestedCourse, setInterestedCourse] = useState("");

  const handleLeadSubmit = async (e) => {
    e.preventDefault();

    if (demoLoading) return;

    let name = demoName.trim();
    const phone = demoPhone.trim();
    const email = demoEmail.trim();
    const interested = interestedCourse.trim();

    // ================================
    // NAME VALIDATION
    // ================================

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      alert("Name should contain only letters and spaces.");
      return;
    }

    // Format every word with first letter capital
    name = name
      .toLowerCase()
      .split(" ")
      .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ""))
      .join(" ");

    // ================================
    // PHONE VALIDATION
    // ================================

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ================================
    // EMAIL VALIDATION
    // ================================

    if (email !== "") {
      const emailRegex =
        /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
    }

    // ================================
    // COURSE VALIDATION
    // ================================

    if (!interested) {
      alert("Please select the interested course.");
      return;
    }

    try {
      setDemoLoading(true);

      // ================================
      // CRM DATA
      // ================================

      const crmData = {
        name: name,
        phone: phone,
        email: email || null,

        domain: interested,

        leadstatus: "New Lead",

        leadsource: "website",

        collegename: null,
        location: null,
        category: null,
        graduate: null,
        joinstatus: null,
        lookingfor: null,
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

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your request.");
      }

      console.log("CRM lead created:", result);

      // ================================
      // SUCCESS
      // ================================

      setOk(true);

      setDemoName("");
      setDemoPhone("");
      setDemoEmail("");
      setInterestedCourse("");
    } catch (error) {
      console.error("Lead submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <section className="sec" id="contact" style={{ paddingTop: 0 }}>
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
              Book your free demo class
            </h2>

            <p>
              Tell us what you want to learn and our team will call you back.
              You can also reach us on +91 980 306 1234.
            </p>
          </div>

          {ok ? (
            <div style={{ alignSelf: "center" }}>
              <h3>Thank you! ✅</h3>

              <p>We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit}>
              {/* NAME */}
              <input
                required
                placeholder="Full name *"
                value={demoName}
                onChange={(e) =>
                  setDemoName(
                    e.target.value
                      .replace(/[^A-Za-z\s]/g, "")
                      .replace(/\s+/g, " ")
                      .split(" ")
                      .map((word) =>
                        word
                          ? word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                          : "",
                      )
                      .join(" "),
                  )
                }
              />

              {/* PHONE */}
              <input
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile number *"
                value={demoPhone}
                onChange={(e) =>
                  setDemoPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
              />

              {/* COURSE */}
              <select
                required
                value={interestedCourse}
                onChange={(e) => setInterestedCourse(e.target.value)}
              >
                <option value="" disabled>
                  Interested course
                </option>

                {COURSES.map((c) => (
                  <option key={c.t} value={c.t}>
                    {c.t}
                  </option>
                ))}
              </select>

              <button className="btn cta" type="submit" disabled={demoLoading}>
                {demoLoading ? "Submitting..." : "Request Callback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const SOC = [
  [
    "X (Twitter)",
    "https://x.com/NexilaTech",
    '<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z"/>',
  ],
  [
    "Facebook",
    "https://www.facebook.com/profile.php?id=61593737175356",
    '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>',
  ],
  [
    "Instagram",
    "https://www.instagram.com/nexila.technologies/",
    '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.3 5.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/>',
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/nexila-technologies-050ab131a/",
    '<path d="M6.5 8.7H3.3V20h3.2V8.7zM4.9 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.7 13.3c0-3-1.6-4.8-4.2-4.8-1.4 0-2.4.8-2.9 1.5V8.7h-3.1V20h3.2v-5.9c0-1.5.7-2.5 2-2.5 1.3 0 1.9.9 1.9 2.5V20h3.1v-6.7z"/>',
  ],
];

export function Footer() {
  const nav = (id) => (e) => go(e, "home", id);

  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <div
              className="logo"
              style={{
                color: "#fff",
                marginBottom: 10,
              }}
            >
              {/* <img
      src="/nexila_n_logo.jpeg"
      alt="Nexila Technologies"
     width="38px"/> */}
              {/* Nexila Technologies */}
            </div>
            <a href="/" className="logo">
              <img src="/logo.png" alt="Nexila Technologies" width="270px" />
            </a>

            <p>
              Software training and placement institute in Tambaram, Chennai.
            </p>

            <div className="soc">
              {SOC.map(([n, u, d]) => (
                <a
                  key={n}
                  href={u}
                  target="_blank"
                  rel="noopener"
                  aria-label={n}
                  title={n}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html: d,
                    }}
                  ></svg>
                </a>
              ))}
            </div>
          </div>

          {/* <div>
            <h3>Company</h3>

            <a href="#/about" onClick={(e) => go(e, "about")}>
              About
            </a>

            <a href="#/courses" onClick={(e) => go(e, "courses")}>
              Courses
            </a>

            <a href="#reviews" onClick={nav("reviews")}>
              Reviews
            </a>

            <a
              href="https://www.nexilatechnologies.com/author/admin_nexila/"
              target="_blank"
              rel="noopener"
            >
              Blog
            </a>
          </div>

          <div>
            <h3>Programs</h3>

            <a
              href="#/courses/mern"
              onClick={(e) => go(e, "course", null, "mern")}
            >
              Full Stack
            </a>

            <a href="/nexila-internship">
  Internship
</a>

<a href="/nexila-hackathon">
  Hackathon 2026
</a>

            <a
              href="https://www.nexilatechnologies.com/corporate-training/"
              target="_blank"
              rel="noopener"
            >
              Corporate Training
            </a>
          </div> */}
          <div>
            <h3>Company</h3>

            <a href="/about-us">About</a>

            <a href="/courses">Courses</a>

            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();

                if (window.location.pathname === "/") {
                  nav("reviews")(e);
                } else {
                  window.location.href = "/#reviews";
                }
              }}
            >
              Reviews
            </a>

            <a href="/blogs">Blog</a>
          </div>

          <div>
            <h3>Programs</h3>

            <a href="/courses/mern-full-stack-training">Full Stack</a>

            <a href="/it-internship-for-students-tambaram-chennai">
              Internship
            </a>

            <a href="/nexila-hackathon-2026">Hackathon 2026</a>

            <a href="/courses">Corporate Training</a>
          </div>
          <div>
            <h3>Get in touch</h3>

            <a href="mailto:info@nexilatechnologies.com">
              info@nexilatechnologies.com
            </a>

            <a href="tel:+919803061234">+91 980 306 1234</a>

            <a href="tel:+919629173443">+91 96 29 173 443</a>
          </div>
        </div>

        <div className="copy">
          © 2026 Nexila Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function DemoPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [kind, setKind] = useState("demo");

  // =====================================================
  // DEMO STATES
  // =====================================================

  const [demoLoading, setDemoLoading] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoEmail, setDemoEmail] = useState("");

  // =====================================================
  // HACKATHON STATES
  // =====================================================

  const [hackLoading, setHackLoading] = useState(false);
  const [hackName, setHackName] = useState("");
  const [hackPhone, setHackPhone] = useState("");
  const [hackEmail, setHackEmail] = useState("");

  const seen = useRef(false);

  // =====================================================
  // POPUP OPEN LOGIC
  // =====================================================

  useEffect(() => {
    try {
      seen.current = sessionStorage.getItem("nx_demo") === "1";
    } catch {}

    const mark = () => {
      seen.current = true;

      try {
        sessionStorage.setItem("nx_demo", "1");
      } catch {}
    };

    const onScroll = () => {
      if (!seen.current && window.scrollY > window.innerHeight * 3) {
        mark();

        setKind("demo");
        setSubmitted(false);
        setOpen(true);
      }
    };

    const onOpen = (e) => {
      mark();

      setKind(e.detail || "demo");
      setSubmitted(false);
      setOpen(true);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("nx-open", onOpen);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("nx-open", onOpen);
    };
  }, []);

  // =====================================================
  // ESCAPE / BODY SCROLL
  // =====================================================

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // =====================================================
  // DEMO SUCCESS → SHOW FORM AGAIN AFTER 5 SECONDS
  // =====================================================

  useEffect(() => {
    if (!submitted || kind !== "demo") {
      return;
    }

    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [submitted, kind]);

  // =====================================================
  // CLOSE
  // =====================================================

  if (!open) return null;

  const hack = kind === "hack";

  // =====================================================
  // LEFT SIDE CONTENT
  // =====================================================

  const points = hack
    ? [
        "Teams of 2 to 4 college students",
        "AI and programming tracks",
        "₹50K prize pool",
      ]
    : [
        "Experience a live class",
        "Ask the trainer your questions",
        "Get course and career guidance",
      ];

  // =====================================================
  // DEMO SUBMISSION
  // =====================================================

  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    if (hack) {
      return;
    }

    if (demoLoading) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    let name = demoName.trim();
    const phone = demoPhone.trim();
    const email = demoEmail.trim();

    const interested = String(formData.get("interestedCourse") || "").trim();

    // =================================================
    // NAME
    // =================================================

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      alert("Name should contain only letters and spaces.");
      return;
    }

    name = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // =================================================
    // PHONE
    // =================================================

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // =================================================
    // EMAIL - OPTIONAL
    // =================================================

    if (email !== "") {
      const emailRegex =
        /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
    }

    // =================================================
    // COURSE
    // =================================================

    if (!interested) {
      alert("Please select the interested course.");
      return;
    }

    // =================================================
    // SEND TO CRM
    // =================================================

    try {
      setDemoLoading(true);

      const crmData = {
        name: name,
        phone: phone,
        email: email || null,

        domain: interested,

        leadstatus: "New Lead",

        leadsource: "website",

        collegename: null,
        location: null,
        category: null,
        graduate: null,
        joinstatus: null,
        lookingfor: null,
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

      console.log("Sending demo lead to CRM:", crmData);

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

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit demo request.");
      }

      console.log("CRM lead created:", result);

      // =================================================
      // SUCCESS
      // =================================================

      setSubmitted(true);

      setDemoName("");
      setDemoPhone("");
      setDemoEmail("");
    } catch (error) {
      console.error("Demo lead submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setDemoLoading(false);
    }
  };

  // =====================================================
  // HACKATHON SUBMISSION
  // =====================================================

  const handleHackathonSubmit = async (e) => {
    e.preventDefault();

    if (!hack) {
      return;
    }

    if (hackLoading) {
      return;
    }

    // =================================================
    // NAME
    // =================================================

    const name = hackName.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      alert("Name should contain only letters and spaces.");
      return;
    }

    // =================================================
    // CONVERT NAME TO UPPERCASE
    // =================================================

    const formattedName = name.replace(/\s+/g, " ").toUpperCase();

    // =================================================
    // PHONE / WHATSAPP
    // =================================================

    const phone = hackPhone.trim();

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    // =================================================
    // EMAIL - REQUIRED
    // =================================================

    const email = hackEmail.trim();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const emailRegex =
      /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // =================================================
    // SEND TO HACKATHON CONTROLLER
    // =================================================

    try {
      setHackLoading(true);

      const hackathonData = {
        name: formattedName,
        email: email,
        mobileNumber: phone,
        whatsappNumber: phone,
      };

      console.log("Sending hackathon interest:", hackathonData);

      const response = await fetch(
        "https://crm.nexilatechnologies.com/api/hackathon-interest",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(hackathonData),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Unable to submit hackathon registration.",
        );
      }

      console.log("Hackathon interest submitted:", result);

      // =================================================
      // SUCCESS
      // =================================================

      setHackName("");
      setHackPhone("");
      setHackEmail("");

      setSubmitted(true);
    } catch (error) {
      console.error("Hackathon submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit your hackathon interest. Please try again.",
      );
    } finally {
      setHackLoading(false);
    }
  };

  // =====================================================
  // POPUP UI
  // =====================================================

  return (
    <div
      className="pop"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        className="pm"
        role="dialog"
        aria-modal="true"
        aria-label={
          hack
            ? "Register for Nexila Hackathon 2026"
            : "Book your free demo class"
        }
      >
        <button
          className="px"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="pl">
          <div className="tag" style={{ color: "#7FB0FF" }}>
            {hack ? "Nexila Hackathon 2026" : "Free demo class"}
          </div>

          <h2>
            {hack ? "Register for the hackathon" : "Book your free demo class"}
          </h2>

          <p>
            {hack
              ? "Build. Innovate. Compete."
              : "See how we teach before you enrol."}
          </p>

          <ul>
            {points.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="pr">
          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "30px 0",
              }}
            >
              <h3 style={{ fontSize: 26 }}>
                {hack ? "You are registered! ✅" : "Thank you! ✅"}
              </h3>

              <p
                style={{
                  color: "#C4D1EE",
                }}
              >
                {hack
                  ? "Our team will contact you with the next steps."
                  : "Our team will call you shortly to confirm your demo slot."}
              </p>

              <button className="btn cta" onClick={() => setOpen(false)}>
                Continue browsing
              </button>
            </div>
          ) : hack ? (
            // =================================================
            // HACKATHON FORM
            // =================================================
            <form onSubmit={handleHackathonSubmit}>
              <input
                required
                placeholder="Team leader name *"
                value={hackName}
                onChange={(e) =>
                  setHackName(
                    e.target.value
                      .replace(/[^A-Za-z\s]/g, "")
                      .replace(/\s+/g, " ")
                      .toUpperCase(),
                  )
                }
              />

              <input
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="WhatsApp number *"
                value={hackPhone}
                onChange={(e) =>
                  setHackPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
              />

              <input
                required
                type="email"
                placeholder="Email *"
                value={hackEmail}
                onChange={(e) => setHackEmail(e.target.value)}
              />

              <button className="btn cta" type="submit" disabled={hackLoading}>
                {hackLoading ? "Registering..." : "Register Now"}
              </button>

              <small>You can also call us on +91 980 306 1234.</small>
            </form>
          ) : (
            // =================================================
            // DEMO FORM
            // =================================================
            <form onSubmit={handleDemoSubmit}>
              <input
                required
                placeholder="Full name *"
                value={demoName}
                onChange={(e) =>
                  setDemoName(
                    e.target.value
                      .replace(/[^A-Za-z\s]/g, "")
                      .replace(/\s+/g, " ")
                      .split(" ")
                      .map((word) =>
                        word
                          ? word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                          : "",
                      )
                      .join(" "),
                  )
                }
              />

              <input
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile number *"
                value={demoPhone}
                onChange={(e) =>
                  setDemoPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
              />

              <input
                type="email"
                placeholder="Email (optional)"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
              />

              <select required defaultValue="" name="interestedCourse">
                <option value="" disabled>
                  Interested course
                </option>

                {COURSES.map((c) => (
                  <option key={c.t} value={c.t}>
                    {c.t}
                  </option>
                ))}
              </select>

              {/* <select required defaultValue="" name="preferredMode">
                <option value="" disabled>
                  Preferred mode
                </option>

                <option>Classroom (Tambaram)</option>

                <option>Live online</option>
              </select> */}

              <button className="btn cta" type="submit" disabled={demoLoading}>
                {demoLoading ? "Submitting..." : "Book My Free Demo"}
              </button>

              <small>
                Free demo is available both offline (Tambaram) and online.{" "}
                <br />
                You can also call us on +91 980 306 1234.
              </small>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const VIDS = [
  {
    e: "🧑‍💻",
    n: "Student name",
    c: "Full Stack Development",
    g: "#1d4ed8",
    yt: "",
  },
  {
    e: "📊",
    n: "Student name",
    c: "Data Analytics",
    g: "#0f766e",
    yt: "",
  },
  {
    e: "☁️",
    n: "Student name",
    c: "AWS with DevOps",
    g: "#7c3aed",
    yt: "",
  },
  {
    e: "🧪",
    n: "Student name",
    c: "Software Testing",
    g: "#c2410c",
    yt: "",
  },
];

function Testi() {
  const [a, setA] = useState(0);
  const [pl, setPl] = useState(false);

  const v = VIDS[a];

  const bg = (x) => ({
    "--g": `linear-gradient(150deg,${x.g},#0B1B3A)`,
  });

  return (
    <section className="sec alt">
      <div className="wrap">
        <Head
          tag="Student stories"
          title="What Our Students Say"
          sub="Watch real testimonials from our successful graduates."
        />

        <div className="tv">
          <div className="tmain" style={bg(v)} key={a}>
            {pl && v.yt ? (
              <iframe
                src={
                  "https://www.youtube-nocookie.com/embed/" +
                  v.yt +
                  "?autoplay=1&rel=0"
                }
                title={"Testimonial: " + v.n}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <Fragment>
                <div className="sc">{v.e}</div>

                <button
                  className="play"
                  onClick={() => setPl(true)}
                  aria-label={"Play testimonial by " + v.n}
                >
                  ▶
                </button>

                <div className="cap">
                  <b>{v.n}</b>
                  <span>{v.c}</span>
                </div>

                {pl && <div className="soon">Video coming soon</div>}
              </Fragment>
            )}
          </div>

          <div className="tl">
            {VIDS.map((x, i) => (
              <button
                key={i}
                className={"tt" + (i === a ? " on" : "")}
                style={bg(x)}
                onClick={() => {
                  setA(i);
                  setPl(false);
                }}
              >
                <span className="th">
                  {x.e}
                  <i>▶ Watch</i>
                </span>

                <span>
                  <b>{x.n}</b>
                  <small>{x.c}</small>
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
          <a
            href="#reviews"
            className="btn outl"
            onClick={(e) => go(e, "home", "reviews")}
          >
            Read our Google reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

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

function About() {
  const aboutImages = [abt1, abt2, abt3, abt4];

  const [aboutImageIndex, setAboutImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <section className="hero">
        <div className="wrap">
          <div className="hgrid">
            <div>
              <div className="bc">
                <a href="#" onClick={(e) => go(e, "home")}>
                  Home
                </a>{" "}
                / About us
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
                <a href="#contact" onClick={openDemo} className="btn cta">
                  Enroll Now!
                </a>

                <a
                  href="#courses"
                  onClick={(e) => go(e, "courses")}
                  className="btn ghost"
                >
                  Explore Courses
                </a>
              </div>
            </div>

            <div className="abv">
              <img
                src={aboutImages[aboutImageIndex]}
                alt="Nexila Technologies training centre"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head
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
                <a href="#contact" onClick={openDemo} className="btn cta">
                  Book a Free Demo
                </a>
              </div>
            </div>

            <div className="mv">
              {[
                [
                  "🎯",
                  "Our mission",
                  "To empower individuals and organisations with the skills and solutions needed to succeed in the digital age.",
                ],
                [
                  "🛠️",
                  "What we do",
                  "Job-focused IT training, internships, hackathons and corporate training, plus software solutions.",
                ],
                [
                  "🤝",
                  "How we teach",
                  "Practical sessions, guided projects, small batches and structured career assistance.",
                ],
              ].map(([i, t, d]) => (
                <Fade key={t}>
                  <div className="card">
                    <div className="ico">{i}</div>

                    <div>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="stats" style={{ marginTop: 0 }}>
            {STATS.map(([n, x, l, d]) => (
              <div className="stat" key={l}>
                <Counter to={n} suffix={x} dec={d} />
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head
            tag="What we teach"
            title="Training across the IT skills that matter"
            sub="From programming and cloud to data, testing and AI, choose the track that fits your goals."
          />

          <div className="grid g5">
            {CATS2.map(([i, t, d]) => (
              <Fade key={t}>
                <div className="card">
                  <div className="ico">{i}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <Testi />

      <section className="sec">
        <div className="wrap">
          <Head
            tag="Beyond the classroom"
            title="Programs that build real experience"
          />

          <div className="grid g3">
            {([
              [
                "🚀",
                "Internship Program",
                "Work on practical, live-style projects, including AI and ML tracks.",
                "Apply now",
                (e) => openDemo(e),
              ],
              [
                "🏆",
                "Nexila Hackathon 2026",
                "A tech challenge for college students. Teams of 2 to 4, AI and programming tracks, ₹50K prize pool.",
                "Register now",
                (e) => openDemo(e, "hack"),
              ],
              [
                "🏢",
                "Corporate Training",
                "Skill-building programs for teams and organisations.",
                "Enquire",
                (e) => openDemo(e),
              ],
            ] as [string, string, string, string, (event: React.MouseEvent<HTMLAnchorElement>) => void][]).map(([i, t, d, b, f]) => (
              <Fade key={t}>
                <div className="card">
                  <div className="ico">{i}</div>

                  <h3>{t}</h3>

                  <p style={{ marginBottom: 14 }}>{d}</p>

                  <a href="#contact" className="lnk" onClick={f}>
                    {b} →
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Head
            tag="Where our learners come from"
            title="Serving learners across Chennai"
            sub="Our centre is in Tambaram, and learners join us from across the city, or online from anywhere."
          />

          <div className="areas" style={{ justifyContent: "center" }}>
            {AREAS.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      <Lead />
    </Fragment>
  );
}

const CCATS = [
  ["Programming Languages", "💻", "#1d4ed8"],
  ["Cloud Computing", "☁️", "#0369a1"],
  ["Software Testing", "🧪", "#c2410c"],
  ["Database Developer", "🗄️", "#0f766e"],
  ["Data Analytics & Science", "📊", "#7c3aed"],
  ["Mobile App Development", "📱", "#be185d"],
  ["Full Stack", "🧩", "#2563EB"],
  ["RPA", "🤖", "#0e7490"],
  ["Web Designing", "🌐", "#b45309"],
  ["Others", "✨", "#4f46e5"],
];

const CBLURB = [
  "The foundation of software development. Learning more than one language boosts your versatility and employability.",
  "On-demand servers, storage, databases and networking: flexible, scalable and central to modern software.",
  "Check software with manual and automated tools to find errors and gaps against the requirements.",
  "Learn to design, build and maintain databases.",
  "Extract insights from data to support decisions, using statistics, programming and domain knowledge.",
  "Build apps for the devices everyone carries, from communication to business services.",
  "Learn the front end, back end and databases to build complete applications.",
  "Use software robots to automate repetitive, rule-based tasks.",
  "Design, build and maintain websites, from layouts to interactive front ends.",
  "Artificial Intelligence, MATLAB, Informatica and .NET training.",
];

const COURSELIST = [
  { cat: 0, slug: "java", name: "Java" },
  { cat: 0, slug: "python", name: "Python" },
  { cat: 1, slug: "aws-certification", name: "AWS Training & Certification" },
  { cat: 1, slug: "aws-devops", name: "AWS with DevOps" },
  { cat: 1, slug: "azure", name: "Azure" },
  { cat: 1, slug: "gcp", name: "Google Cloud Platform (GCP)" },
  { cat: 2, slug: "selenium", name: "Selenium" },
  { cat: 2, slug: "soapui", name: "SoapUI" },
  { cat: 2, slug: "manual-testing", name: "Manual Testing" },
  { cat: 2, slug: "mobile-testing", name: "Mobile Application Testing" },
  { cat: 3, slug: "oracle", name: "Oracle" },
  { cat: 3, slug: "mysql", name: "MySQL" },
  { cat: 3, slug: "mongodb", name: "MongoDB" },
  { cat: 4, slug: "data-analytics", name: "Data Analytics" },
  { cat: 4, slug: "data-science", name: "Data Science" },
  { cat: 4, slug: "tableau", name: "Tableau" },
  { cat: 4, slug: "power-bi", name: "Power BI" },
  { cat: 5, slug: "android", name: "Android" },
  { cat: 5, slug: "ios", name: "iOS" },
  { cat: 6, slug: "mern", name: "MERN Full Stack" },
  { cat: 6, slug: "mean", name: "MEAN Full Stack" },
  { cat: 6, slug: "java-full-stack", name: "Java Full Stack" },
  { cat: 6, slug: "python-full-stack", name: "Python Full Stack" },
  { cat: 7, slug: "uipath", name: "UiPath" },
  { cat: 7, slug: "blue-prism", name: "Blue Prism" },
  { cat: 7, slug: "openspan", name: "OpenSpan" },
  { cat: 7, slug: "automation-anywhere", name: "Automation Anywhere" },
  { cat: 8, slug: "web-development", name: "Web Development" },
  { cat: 8, slug: "angular", name: "Angular JS" },
  { cat: 8, slug: "react", name: "React JS" },
  { cat: 8, slug: "frontend", name: "Front-End Development" },
  { cat: 9, slug: "ai", name: "Artificial Intelligence" },
  { cat: 9, slug: "matlab", name: "MATLAB" },
  { cat: 9, slug: "informatica", name: "Informatica" },
  { cat: 9, slug: "dotnet", name: ".NET" },
];

function Acc({ items }) {
  const [o, setO] = useState(0);

  return (
    <div>
      {items.map((f, i) => (
        <div className="q" key={i}>
          <button
            onClick={() => setO(o === i ? -1 : i)}
            aria-expanded={o === i}
          >
            {f[0]}

            <span style={{ color: "var(--blue)" }}>{o === i ? "−" : "+"}</span>
          </button>

          {o === i && <div>{f[1]}</div>}
        </div>
      ))}
    </div>
  );
}

function CourseCard({ c }) {
  const cc = CCATS[c.cat];

  return (
    <a
      href={"#/courses/" + c.slug}
      onClick={(e) => go(e, "course", null, c.slug)}
      className="cc2"
      style={{
        "--g": "linear-gradient(150deg," + cc[2] + ",#0B1B3A)",
      }}
    >
      <div className="top">
        <span className="bd2">{cc[0]}</span>
        {cc[1]}
      </div>

      <div className="b">
        <h3>{c.name}</h3>

        <div className="meta">
          <span>Classroom + Live online</span>
          <span>Free demo</span>
        </div>

        <span className="lnk">View details →</span>
      </div>
    </a>
  );
}

function CoursesPage() {
  const [cat, setCat] = useState(-1);
  const [q, setQ] = useState("");

  const list = COURSELIST.filter(
    (c) =>
      (cat < 0 || c.cat === cat) &&
      c.name.toLowerCase().includes(q.trim().toLowerCase()),
  );

  return (
    <Fragment>
      <section className="phero">
        <div className="wrap">
          <div className="bc">
            <a href="#" onClick={(e) => go(e, "home")}>
              Home
            </a>{" "}
            / Courses
          </div>

          <h1>
            Our <span style={{ color: "var(--orange)" }}>Courses</span>
          </h1>

          <p>
            Courses for every level, from beginners to advanced learners. Pick a
            track, attend a free demo and start learning.
          </p>

          <div className="srch">
            <span>🔍</span>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses, e.g. Python, AWS, React"
              aria-label="Search courses"
            />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <div className="tabs" style={{ marginTop: 0 }}>
            <button
              className={"tab" + (cat < 0 ? " on" : "")}
              onClick={() => setCat(-1)}
            >
              All ({COURSELIST.length})
            </button>

            {CCATS.map((c, i) => (
              <button
                key={c[0]}
                className={"tab" + (cat === i ? " on" : "")}
                onClick={() => setCat(i)}
              >
                {c[1]} {c[0]}
              </button>
            ))}
          </div>

          {cat >= 0 && (
            <p className="sub" style={{ marginTop: 18 }}>
              {CBLURB[cat]}
            </p>
          )}

          <div className="grid g4">
            {list.map((c) => (
              <CourseCard key={c.slug} c={c} />
            ))}
          </div>

          {!list.length && (
            <p
              style={{
                textAlign: "center",
                color: "var(--muted)",
                marginTop: 40,
              }}
            >
              No courses match your search.{" "}
              <a href="#contact" className="lnk" onClick={openDemo}>
                Ask our counsellor
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="sec alt" style={{ padding: "48px 0" }}>
        <div className="wrap">
          <div className="band">
            <div>
              <h2>Not sure which course to choose?</h2>

              <p>
                Tell us your background and goals. We will suggest a path and
                explain duration and career options.
              </p>
            </div>

            <div className="row">
              <a
                href="#"
                className="btn ghost"
                onClick={(e) => go(e, "home", "match")}
              >
                Try the interest matcher
              </a>

              <a href="#contact" className="btn cta" onClick={openDemo}>
                Talk to a Counsellor
              </a>
            </div>
          </div>
        </div>
      </section>

      <Lead />
    </Fragment>
  );
}

const CHN = [
  "Tambaram",
  "Velachery",
  "T Nagar",
  "Thoraipakkam",
  "Anna Nagar",
  "Porur",
  "Medavakkam",
  "Vadapalani",
  "Guindy",
  "Nungambakkam",
  "Chromepet",
  "Pallavaram",
  "Saidapet",
];

function JourneyTrack() {
  const [run, setRun] = useState(false);
  const [a, setA] = useState(-1);
  const r = useRef<HTMLDivElement | null>(null);

  const S = [
    ["📚", "Learn", "Master fundamentals with expert-led sessions."],
    ["🛠️", "Practice", "Solve assignments and build projects."],
    ["🚀", "Intern", "Work on live projects in our internship program."],
    ["🎯", "Get Placed", "Interview with our hiring partners."],
  ];

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          o.disconnect();
          setRun(true);

          S.forEach((_, k) =>
            setTimeout(() => setA((x) => Math.max(x, k)), 300 + k * 750),
          );
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (r.current) {
      o.observe(r.current);
    }

    return () => o.disconnect();
  }, []);

  return (
    <section className="sec jt-sec">
      <div className="wrap" ref={r}>
        <Head
          tag="Your journey"
          title="Your journey with Nexila"
          sub="Four stages that take you from fundamentals to the interview room."
        />

        <div className={"jt" + (run ? " run" : "")}>
          <i className="fl"></i>

          {S.map(([i, t, d], k) => (
            <button
              key={t}
              className={"js" + (k <= a ? " on" : "")}
              style={{
                animationDelay: 0.2 + k * 0.7 + "s",
              }}
              onClick={() => setA(k)}
            >
              <span className="nd">{i}</span>

              <div>
                <small>Stage {k + 1}</small>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </button>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 44,
          }}
        >
          <a href="#contact" className="btn cta" onClick={openDemo}>
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

function CourseDetail({ slug }) {
  const c = COURSELIST.find((x) => x.slug === slug);

  const [open, setOpen] = useState(0);
  const [tab, setTab] = useState("about");

  useEffect(() => {
    const ids = ["about", "syllabus", "trainer", "faqs"];

    const o = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setTab(e.target.id)),
      {
        rootMargin: "-35% 0px -60% 0px",
      },
    );

    ids.forEach((i) => {
      const el = document.getElementById(i);

      if (el) {
        o.observe(el);
      }
    });

    return () => o.disconnect();
  }, [slug]);

  if (!c) {
    return (
      <section className="sec">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 className="h2">Course not found</h2>

          <a
            href="#/courses"
            className="btn cta"
            onClick={(e) => go(e, "courses")}
          >
            Browse all courses
          </a>
        </div>
      </section>
    );
  }

  const d = DET[slug];
  const cc = CCATS[c.cat];

  const desc = d
    ? d.desc
    : CBLURB[c.cat] +
      " Nexila's " +
      c.name +
      " training is led by experienced trainers, with hands-on practice and guided projects, in classroom or live online mode.";

  const facts = d
    ? d.facts
    : [
        ["Mode", "Classroom + Live online"],
        ["Free demo", "Available"],
        ["Batches", "Small, focused batches"],
        ["Duration", "Shared by our counsellor"],
      ];

  const faqs = d ? d.faqs : GEN_FAQ(c.name);

  const rel = [
    ...COURSELIST.filter((x) => x.cat === c.cat && x.slug !== slug),
    ...COURSELIST.filter(
      (x) =>
        x.cat !== c.cat &&
        ["mern", "python", "aws-devops", "data-science", "selenium"].includes(
          x.slug,
        ),
    ),
  ].slice(0, 4);

  const jump = (id) => {
    setTab(id);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Fragment>
      <section className="hero" style={{ paddingBottom: 48 }}>
        <div className="wrap">
          <div className="hgrid">
            <div>
              <div className="bc">
                <a href="#" onClick={(e) => go(e, "home")}>
                  Home
                </a>{" "}
                /{" "}
                <a href="#/courses" onClick={(e) => go(e, "courses")}>
                  Courses
                </a>{" "}
                / {c.name}
              </div>

              <div className="tag">{cc[0]}</div>

              <h1
                style={{
                  marginTop: 8,
                  fontSize: "clamp(30px,5vw,48px)",
                }}
              >
                {c.name} <span>Training</span>
              </h1>

              <p style={{ fontSize: 17 }}>{desc}</p>

              <div className="row">
                <a href="#contact" className="btn cta" onClick={openDemo}>
                  Enroll Now!
                </a>

                <a href="#contact" className="btn ghost" onClick={openDemo}>
                  Request Syllabus
                </a>
              </div>
            </div>

            <div
              className="abv"
              style={{
                background: "linear-gradient(150deg," + cc[2] + ",#0B1B3A)",
              }}
            >
              {cc[1]}
            </div>
          </div>
        </div>
      </section>

      <div className="tabbar">
        <div className="wrap">
          {[
            ["about", "About Course"],
            ["syllabus", "Syllabus"],
            ["trainer", "Trainer Profile"],
            ["faqs", "FAQs"],
          ].map(([i, l]) => (
            <button
              key={i}
              className={"ct" + (tab === i ? " on" : "")}
              onClick={() => jump(i)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 44 }}>
        <div className="wrap">
          <div className="cdg">
            <div>
              <div className="sx" id="about">
                <h2>About the course</h2>

                <p>{desc}</p>

                {d ? (
                  <>
                    <div className="stk">
                      {d.stack.map(([t, x]) => (
                        <div className="card" key={t}>
                          <h3>{t}</h3>
                          <p>{x}</p>
                        </div>
                      ))}
                    </div>

                    <h3
                      style={{
                        fontSize: 19,
                      }}
                    >
                      What the course covers
                    </h3>

                    <ul className="lst">
                      {d.comps.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h3
                      style={{
                        fontSize: 19,
                      }}
                    >
                      What you will get
                    </h3>

                    <ul className="lst">
                      <li>
                        Trainer-led sessions with practical explanations and
                        demonstrations
                      </li>
                      <li>Hands-on exercises and guided assignments</li>
                      <li>Role-relevant projects in selected courses</li>
                      <li>Resume, LinkedIn and mock interview support</li>
                      <li>Classroom or live online learning</li>
                    </ul>
                  </>
                )}
              </div>

              <div className="sx" id="syllabus">
                <h2>Syllabus</h2>

                {d ? (
                  d.mods.map((m, i) => (
                    <div className="sy" key={m.t}>
                      <button
                        onClick={() => setOpen(open === i ? -1 : i)}
                        aria-expanded={open === i}
                      >
                        <span>
                          <i className="n">{i + 1}</i>
                          {m.t}
                        </span>

                        <span
                          style={{
                            color: "var(--blue)",
                          }}
                        >
                          {open === i ? "−" : "+"}
                        </span>
                      </button>

                      {open === i && (
                        <div className="bd3">
                          {m.g ? (
                            m.g.map(([h, it]) => (
                              <div key={h}>
                                <div className="gh">{h}</div>

                                <div className="tp">
                                  {it.map((t) => (
                                    <span key={t}>{t}</span>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div
                              className="tp"
                              style={{
                                marginTop: 4,
                              }}
                            >
                              {m.i.map((t) => (
                                <span key={t}>{t}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="card">
                    <h3>Detailed {c.name} syllabus</h3>

                    <p
                      style={{
                        margin: "8px 0 16px",
                      }}
                    >
                      Our counsellor will share the module-wise syllabus,
                      duration and schedule for this course.
                    </p>

                    <a href="#contact" className="btn cta" onClick={openDemo}>
                      Request Syllabus
                    </a>
                  </div>
                )}
              </div>

              <div className="sx" id="trainer">
                <h2>Trainer profile</h2>

                <div className="tr">
                  <div className="tph">👨‍🏫</div>

                  <div>
                    <p>
                      Our trainers give you the freedom to explore the subject
                      through real-time examples. They help you complete your
                      projects, prepare you for interview questions and welcome
                      your questions at any time.
                    </p>

                    <ul className="lst">
                      {(d
                        ? d.trainer
                        : [
                            "Experienced technical trainers",
                            "Instructor-led sessions with practical demonstrations",
                            "Help with projects and interview preparation",
                            "Questions welcome at any time",
                          ]
                      ).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="btn cta"
                      onClick={openDemo}
                      style={{
                        marginTop: 18,
                      }}
                    >
                      Let's Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sx" id="faqs">
              <h2>Frequently asked questions</h2>

              <Acc items={faqs} />
            </div>
          </div>

          <aside className="side">
            <div className="snap">
              <h3>Course snapshot</h3>

              {facts.map(([k, v]) => (
                <div className="fr" key={k}>
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))}

              <a
                href="#contact"
                className="btn cta"
                onClick={openDemo}
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 18,
                }}
              >
                Enroll Now!
              </a>

              <a
                href="#contact"
                className="btn outl"
                onClick={openDemo}
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Book a Free Demo
              </a>

              <p
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "var(--muted)",
                  margin: "14px 0 0",
                }}
              >
                Or call{" "}
                <a href="tel:+919803061234" className="lnk">
                  +91 980 306 1234
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <JourneyTrack />

      <section className="sec alt">
        <div className="wrap">
          <Head tag="Trending courses" title="You may also like" />

          <div className="grid g4">
            {rel.map((x) => (
              <CourseCard key={x.slug} c={x} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head
            tag="Available in Chennai"
            title={c.name + " training near you"}
          />

          <div className="areas">
            {CHN.map((a) => (
              <span key={a}>
                {c.name} course in {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Lead />
    </Fragment>
  );
}

function App() {
  const [rt, setRt] = useState(parseHash);

  useEffect(() => {
    const h = () => setRt(parseHash());

    const n = (e) => {
      setRt({
        r: e.detail.r,
        slug: e.detail.slug,
      });

      if (!e.detail.sec) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", h);

    window.addEventListener("popstate", h);

    window.addEventListener("nx-route", n);

    return () => {
      window.removeEventListener("hashchange", h);

      window.removeEventListener("popstate", h);

      window.removeEventListener("nx-route", n);
    };
  }, []);

  useEffect(() => {
    const c = COURSELIST.find((x) => x.slug === rt.slug);

    document.title =
      rt.r === "about"
        ? "About Us | Nexila Technologies"
        : rt.r === "courses"
          ? "Courses in Tambaram, Chennai | Nexila Technologies"
          : rt.r === "course" && c
            ? c.name + " Training in Tambaram, Chennai | Nexila Technologies"
            : "Nexila Technologies | Software Training & Placement in Tambaram";
  }, [rt]);

  return (
    <Fragment>
      <Topbar />

      <Header route={rt.r} />

      {rt.r === "about" ? (
        <About />
      ) : rt.r === "courses" ? (
        <CoursesPage />
      ) : rt.r === "course" ? (
        <CourseDetail slug={rt.slug} key={rt.slug} />
      ) : (
        <Fragment>
          <Hero />
          <Partners />
          <Courses />
          <Why />
          <Paths />
          <Match />
          <Hackathon />
          <Reviews />
          <Faq />
          <Lead />
        </Fragment>
      )}

      <Footer />

      <a
        className="wa"
        href="https://wa.me/919803061234"
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>

      <DemoPopup />
    </Fragment>
  );
}

export default App;
