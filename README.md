import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Home.css";

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
    n: "Nandhini Ravi",
    s: 5,
    t: "I'm really happy that I chose this institute for my Data Analytics training. The course was designed in a practical way, making it easy to understand even complex concepts. The trainer were knowledgeable, patient, and always willing to help. The hands-on projects, real-time examples, and continuous support helped me improve my skills and confidence. It was a valuable learning experience, and I would definitely recommend this institute to anyone interested in building a career in Data Analytics. Thank you to the entire team for your guidance and support!",
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

function openDemo(e, kind = "demo") {
  e?.preventDefault();
  window.dispatchEvent(new CustomEvent("nx-open", { detail: kind }));
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("in"),
        ),
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Fade({ children }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="fade">
      {children}
    </div>
  );
}

function Counter({ to, suffix, dec = 0 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1400, 1);
        setValue(to * progress);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return (
    <b ref={ref}>
      {dec ? value.toFixed(dec) : Math.round(value).toLocaleString("en-US")}
      {suffix}
    </b>
  );
}

function Head({ tag, title, sub }) {
  return (
    <div>
      <div className="tag">{tag}</div>
      <h2 className="h2">{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

function Topbar() {
  return (
    <div className="tb">
      <div className="wrap">
        <div className="l">
          <a href="tel:+919803061234">📞 +91 980 306 1234</a>
          <a href="mailto:info@nexilatechnologies.com">
            <i className="bi bi-envelope-at"></i>info@nexilatechnologies.com
          </a>
        </div>
        <div className="r">
          <i className="bi bi-geo-alt"></i> Tambaram, Chennai
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#"],
    ["About", "https://www.nexilatechnologies.com/about-us/"],
    ["Courses", "#courses"],
    ["Placements", "#placements"],
    ["Internship", "#contact"],
    ["Hackathon 2026", "#hackathon"],
    ["Blog", "https://www.nexilatechnologies.com/author/admin_nexila/"],
    ["Contact", "#contact"],
  ];

  return (
    <header>
      <div className="wrap nav">
        <a href="#" className="logo">
          Nexila<b> </b>Technologies
        </a>
        <button
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`links${open ? " open" : ""}`}>
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              setOpen(false);
              openDemo(e);
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
              <i>const</i> career = <i>await</i> nexila.<em>train</em>({"{"}
            </div>
            <div>
              &nbsp;&nbsp;skills: [<em>"React"</em>, <em>"Cloud"</em>,{" "}
              <em>"AI"</em>],
            </div>
            <div>
              &nbsp;&nbsp;projects: <em>"live"</em>, mentors:{" "}
              <em>"industry"</em>
            </div>
            <div>{"}"});</div>
            <div style={{ marginTop: 8 }}>
              <i>if</i> (career.ready) <em>getHired</em>();
            </div>
          </div>
        </div>
        <div className="stats">
          {[
            [1000, "+", "Students Trained", 0],
            [200, "+", "Guided Through Career Prep", 0],
            [10, "+", "Technical Mentors", 0],
            [15, "+", "Job-Oriented IT Courses", 0],
            [4.9, "★", "Rated on Google", 1],
          ].map(([n, suffix, label, dec]) => (
            <div className="stat" key={label}>
              <Counter to={n} suffix={suffix} dec={dec} />
              <span>{label}</span>
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
        <div className="partners">
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
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const [category, setCategory] = useState("All");
  const list = COURSES.filter(
    (course) => category === "All" || course.c === category,
  );
  return (
    <section className="sec" id="courses">
      <div className="wrap">
        <Head
          tag="Courses"
          title="Pick a career track"
          sub="Beginner-friendly programs that end with projects, interview prep and placement support."
        />
        <div className="tabs">
          {CATS.map((item) => (
            <button
              key={item}
              className={`tab${category === item ? " on" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid g4">
          {list.map((course) => (
            <div className="card" key={course.t}>
              <div className="ico">{course.i}</div>
              <h3>{course.t}</h3>
              <p>{course.x}</p>
              <div className="meta">
                <span>{course.d}</span>
                <span>{course.l}</span>
                <span>{course.m}</span>
              </div>
              <a href="#contact" className="lnk">
                View syllabus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Viz({ index }) {
  const [mode, setMode] = useState(0);
  const animation = (delay) => ({
    style: { animationDelay: `${delay * 0.35}s` },
  });
  if (index === 0)
    return (
      <div className="vz rd">
        {["Tools", "Concepts", "Workflows"].map((t, k) => (
          <div className="rn" key={t} {...animation(k)}>
            <b>{k + 1}</b>
            <span>{t}</span>
          </div>
        ))}
      </div>
    );
  if (index === 1)
    return (
      <div className="vz">
        <div className="term">
          <div {...animation(0)}>
            <em>trainer</em>$ demo --live
          </div>
          <div {...animation(1)}>› explain(concept)</div>
          <div {...animation(2)}>› show(example)</div>
          <div {...animation(3)} className="cur">
            ▍
          </div>
        </div>
        <div className="bub">👨‍🏫 “Let’s try it together.”</div>
      </div>
    );
  if (index === 2)
    return (
      <div className="vz">
        <div className="col">
          {[
            ["✓", "Exercise completed"],
            ["✓", "Guided activity done"],
            ["▶", "Your turn: practise it"],
          ].map(([icon, text], k) => (
            <div className="ck" key={text} {...animation(k)}>
              <b className={k === 2 ? "o" : ""}>{icon}</b>
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  if (index === 3)
    return (
      <div className="vz">
        <div className="avs">
          {["🧑‍💻", "👩‍💻", "🙋", "👨‍💻", "👩‍💻"].map((a, k) => (
            <div key={k} className={`a2${k === 2 ? " hl" : ""}`}>
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
  if (index === 4)
    return (
      <div className="vz">
        <div className="kb">
          {[
            ["To do", 1, ""],
            ["In progress", 2, ""],
            ["Done", 2, " dn"],
          ].map(([heading, count, cls], k) => (
            <div key={heading} className={`kc${cls}`}>
              <small>{heading}</small>
              {Array.from({ length: count }).map((_, j) => (
                <div key={j} className="kd" {...animation(k + j)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  if (index === 5)
    return (
      <div className="vz">
        <div
          className="col"
          style={{ maxWidth: "none", flexDirection: "row", flexWrap: "wrap" }}
        >
          {["Resume", "LinkedIn", "Mock interview", "Interview ready"].map(
            (text, k) => (
              <div className="ck" key={text} {...animation(k)}>
                <b>✓</b>
                {text}
              </div>
            ),
          )}
        </div>
      </div>
    );
  if (index === 6)
    return (
      <div
        className="vz"
        style={{ flexDirection: "column", alignItems: "flex-start" }}
      >
        <div className="tg">
          {["Classroom", "Live online"].map((text, k) => (
            <button
              key={text}
              className={mode === k ? "on" : ""}
              onClick={() => setMode(k)}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="pill2" key={mode}>
          {mode === 0
            ? "📍 Learn in person at our Tambaram centre"
            : "💻 Join live sessions from anywhere"}
        </div>
      </div>
    );
  return (
    <div className="vz fl">
      {["You", "Right course", "Career path"].map((text, k) => (
        <Fragment key={text}>
          {k > 0 && <span className="ar">→</span>}
          <div className="pill2" {...animation(k)}>
            {text}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function Why() {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);
  const items = [
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
  useEffect(() => {
    if (pause) return;
    const timer = setTimeout(
      () => setActive((x) => (x + 1) % items.length),
      5500,
    );
    return () => clearTimeout(timer);
  }, [active, pause, items.length]);
  const current = items[active];
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
            className={`wl${pause ? " pz" : ""}`}
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            {items.map((item, i) => (
              <button
                key={item[1]}
                className={`wi${i === active ? " on" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="e">{item[0]}</span>
                {item[1]}
                {i === active && <i />}
              </button>
            ))}
          </div>
          <div
            className="wp"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            <div className="num">{String(active + 1).padStart(2, "0")}</div>
            <div className="anim" key={active}>
              <div className="big">{current[0]}</div>
              <h3>{current[1]}</h3>
              <p>{current[2]}</p>
              <Viz index={active} />
              <div className="chips">
                {current[3].map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
            <div className="wn">
              <button
                onClick={() =>
                  setActive((active + items.length - 1) % items.length)
                }
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={() => setActive((active + 1) % items.length)}
                aria-label="Next"
              >
                →
              </button>
              <small>
                {active + 1} / {items.length}
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
          ].map(([title, text]) => (
            <div className="step" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PATHS = [
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
  const [active, setActive] = useState(0);
  return (
    <section className="sec" id="paths">
      <div className="wrap">
        <Head
          tag="Learning Paths"
          title="A learning path for every background"
          sub="Whether you are starting out, moving up or changing direction, Nexila helps you choose a course and pace that fit where you are today and where you want to go."
        />
        <div className="lpw">
          {PATHS.map((path, i) => (
            <div
              key={path.t}
              role="button"
              tabIndex={0}
              aria-expanded={i === active}
              className={`lp${i === active ? " on" : ""}`}
              style={{ "--g": `linear-gradient(150deg,${LPBG[i]},#0B1B3A)` }}
              onClick={() => setActive(i)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                (e.preventDefault(), setActive(i))
              }
            >
              <div className="sc">{LPSC[i]}</div>
              <div className="n">0{i + 1}</div>
              <div className="vt">{path.t}</div>
              <div className="dt">
                <h3>{path.t}</h3>
                <p>{path.d}</p>
                <div className="stp">
                  {path.s.map((text, k) => (
                    <Fragment key={text}>
                      {k > 0 && <em>→</em>}
                      <span>{text}</span>
                    </Fragment>
                  ))}
                </div>
                <div className="row2">
                  {path.c.map((course) => (
                    <span className="cc" key={course}>
                      {course}
                    </span>
                  ))}
                  <a
                    href="#contact"
                    onClick={openDemo}
                    className="btn cta"
                    style={{ padding: "10px 20px" }}
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

const INTERESTS = {
  d: ["📊", "Data & numbers"],
  c: ["💻", "Coding & logic"],
  b: ["🎨", "Building what people see"],
  t: ["🔍", "Spotting bugs & details"],
  s: ["☁️", "Servers & automation"],
  a: ["🤖", "AI & new tech"],
  m: ["📱", "Mobile apps"],
};
const MATCH_COURSES = [
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
  const [selected, setSelected] = useState([]);
  const toggle = (key) =>
    setSelected((v) =>
      v.includes(key) ? v.filter((x) => x !== key) : [...v, key],
    );
  const rows = MATCH_COURSES.map((course, index) => ({
    ...course,
    index,
    hits: course.k.filter((k) => selected.includes(k)),
  })).sort((a, b) =>
    selected.length
      ? b.hits.length - a.hits.length || a.index - b.index
      : a.index - b.index,
  );
  const best = selected.length && rows[0].hits.length ? rows[0] : null;
  return (
    <section className="sec alt" id="match">
      <div className="wrap">
        <Head
          tag="Not sure which course to choose?"
          title="Pick what you enjoy, we will point you to a course"
          sub="Select the things you like doing. We will highlight the courses that fit your interests and strengths best."
        />
        <div className="chs">
          {Object.entries(INTERESTS).map(([key, [emoji, label]]) => (
            <button
              key={key}
              className={`ch${selected.includes(key) ? " on" : ""}`}
              onClick={() => toggle(key)}
            >
              {emoji} {label}
            </button>
          ))}
        </div>
        <div className="mg">
          {rows.map((course) => {
            const top = best && course.index === best.index;
            const hit = course.hits.length > 0;
            return (
              <div
                key={course.t}
                className={`mc${top ? " top" : hit ? " hit" : selected.length ? " dim" : ""}`}
              >
                {top && <span className="bd">Best match</span>}
                <div className="ico">{course.i}</div>
                <h3>{course.t}</h3>
                <p>{course.x}</p>
                <div className="mt">
                  {course.hits.map((k) => (
                    <span key={k}>✓ {INTERESTS[k][1]}</span>
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
              your {selected.length} {selected.length > 1 ? "picks" : "pick"}
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
              href="#contact"
              onClick={(e) => openDemo(e, "hack")}
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
          {REVIEWS.map((review, i) => (
            <div className="card rev" key={i}>
              <div className="who">
                <div className="av">{review.n[0]}</div>
                <div>
                  <b>{review.n}</b>
                  <div style={{ color: "var(--muted)", fontSize: 12 }}>
                    Google review
                  </div>
                </div>
              </div>
              <div className="star">{"★".repeat(review.s)}</div>
              <p style={{ textAlign: "justify" }}>{review.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  const half = Math.ceil(FAQ.length / 2);
  const item = ([question, answer], index) => (
    <div className="q" key={index}>
      <button
        onClick={() => setOpen(open === index ? -1 : index)}
        aria-expanded={open === index}
      >
        {question}
        <span>{open === index ? "−" : "+"}</span>
      </button>
      {open === index && <div>{answer}</div>}
    </div>
  );
  return (
    <section className="sec">
      <div className="wrap">
        <Head tag="FAQ" title="Common questions" />
        <div className="faq2">
          <div>{FAQ.slice(0, half).map(item)}</div>
          <div>{FAQ.slice(half).map((f, i) => item(f, i + half))}</div>
        </div>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <p style={{ color: "var(--muted)", margin: "0 0 14px" }}>
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    domain: "",
  });

  // ============================================
  // CAPITALIZE NAME
  // ============================================

  const formatName = (value) => {
    return value
      .replace(/\s+/g, " ")
      .trimStart()
      .split(" ")
      .map((word) => {
        if (!word) return "";

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  // ============================================
  // HANDLE INPUT
  // ============================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME
    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        name: formatName(value),
      }));

      return;
    }

    // PHONE
    if (name === "phone") {
      // Allow only numbers
      const phone = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================
  // EMAIL VALIDATION
  // ============================================

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ============================================
  // SUBMIT
  // ============================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // ----------------------------------------
    // NAME
    // ----------------------------------------

    const name = formatName(formData.name);

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    // ----------------------------------------
    // PHONE
    // ----------------------------------------

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Mobile number must contain exactly 10 digits.");
      return;
    }

    // ----------------------------------------
    // EMAIL
    // ----------------------------------------

    // if (!isValidEmail(formData.email)) {
    //   setError("Please enter a valid email address.");
    //   return;
    // }

    // ----------------------------------------
    // COURSE
    // ----------------------------------------

    if (!formData.domain) {
      setError("Please select an interested course.");
      return;
    }

    try {
      setLoading(true);

      // ====================================
      // SEND TO CRM
      // ====================================

      const response = await fetch(
        "http://localhost:5000/api/leads/create-public",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          //   credentials: "include",

          body: JSON.stringify({
            name,
            phone: formData.phone,
            email: formData.email.trim().toLowerCase(),

            leadstatus: "New Lead",

            domain: formData.domain,
            leadsource: "website",

            // Everything else is
            // intentionally not sent.
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit enquiry.");
      }

      console.log("CRM Lead Created:", result);

      // ====================================
      // SUCCESS
      // ====================================

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        domain: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Lead submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to submit form. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="sec"
      id="contact"
      style={{
        paddingTop: 0,
      }}
    >
      <div className="wrap">
        <div className="lead">
          <div>
            <div
              className="tag"
              style={{
                color: "#7FB0FF",
              }}
            >
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

          {submitted ? (
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <h3>Thank you! ✅</h3>

              <p>We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* NAME */}

              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name *"
                autoComplete="name"
              />

              {/* PHONE */}

              <input
                required
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile number *"
                inputMode="numeric"
                maxLength={10}
                autoComplete="tel"
              />

              {/* EMAIL */}

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                autoComplete="email"
              />

              {/* COURSE */}

              <select
                required
                name="domain"
                value={formData.domain}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Interested course *
                </option>

                {COURSES.map((course) => (
                  <option key={course.t} value={course.t}>
                    {course.t}
                  </option>
                ))}
              </select>

              {/* ERROR */}

              {error && (
                <p
                  style={{
                    color: "red",
                    marginTop: "10px",
                  }}
                >
                  {error}
                </p>
              )}

              {/* SUBMIT */}

              <button className="btn cta" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Request Callback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <div className="logo" style={{ color: "#fff", marginBottom: 10 }}>
              Nexila<b> </b>Technologies
            </div>
            <p>
              Software training and placement institute in Tambaram, Chennai.
            </p>
          </div>
          <div>
            <h3>Company</h3>
            <a
              href="https://www.nexilatechnologies.com/about-us/"
              target="_blank"
              rel="noopener"
            >
              About
            </a>
            <a href="#courses">Courses</a>
            <a href="#reviews">Reviews</a>
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
            <a href="#courses">Full Stack</a>
            <a href="#contact">Internship</a>
            <a href="#hackathon">Hackathon 2026</a>
            <a href="#">Corporate Training</a>
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

    window.addEventListener("scroll", onScroll, { passive: true });

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

    // NEVER affect hackathon
    if (hack) {
      return;
    }

    if (demoLoading) {
      return;
    }

    const form = e.currentTarget;

    const formData = new FormData(form);

    // =================================================
    // GET VALUES
    // =================================================

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
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (!word) return "";

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");

    // =================================================
    // PHONE
    // =================================================

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // =================================================
    // EMAIL
    // OPTIONAL
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
        noofday: "120",
        assignfrom: null,
        assignto: null,
      };

      console.log("Sending demo lead to CRM:", crmData);

      const response = await fetch(
        "http://localhost:5000/api/leads/create-public",
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
      // DEMO SUCCESS
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

    // NEVER affect demo
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

    // Name must contain only letters/spaces
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
    // EMAIL
    // REQUIRED
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
    // SEND TO EXISTING HACKATHON CONTROLLER
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
  // RENDER
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
        {/* =================================================
            CLOSE
        ================================================= */}

        <button
          className="px"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ✕
        </button>

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="pl">
          <div
            className="tag"
            style={{
              color: "#7FB0FF",
            }}
          >
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
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="pr">
          {submitted ? (
            /* =================================================
               SUCCESS MESSAGE
            ================================================= */

            <div
              style={{
                textAlign: "center",
                padding: "30px 0",
              }}
            >
              <h3
                style={{
                  fontSize: 26,
                }}
              >
                {hack ? "Thank you! ✅" : "Thank you! ✅"}
              </h3>

              <p
                style={{
                  color: "#C4D1EE",
                }}
              >
                {hack
                  ? "Our team will contact you shortly regarding the Nexila Hackathon 2026."
                  : "Our team will call you shortly to confirm your demo slot."}
              </p>

              {hack && (
                <p
                  style={{
                    color: "#9FAED0",
                    fontSize: 13,
                  }}
                >
                  Please keep your WhatsApp number available for further
                  updates.
                </p>
              )}
            </div>
          ) : (
            <form onSubmit={hack ? handleHackathonSubmit : handleDemoSubmit}>
              {/* =================================================
                  DEMO FORM
              ================================================= */}

              {!hack && (
                <>
                  <input
                    required
                    name="name"
                    value={demoName}
                    placeholder="Full name *"
                    autoComplete="name"
                    onChange={(e) => {
                      let value = e.target.value;

                      value = value.replace(/[^A-Za-z\s]/g, "");

                      value = value.replace(/\s+/g, " ");

                      value = value
                        .split(" ")
                        .map((word) => {
                          if (!word) return "";

                          return (
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                          );
                        })
                        .join(" ");

                      setDemoName(value);
                    }}
                  />

                  <input
                    required
                    name="phone"
                    type="tel"
                    value={demoPhone}
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Mobile number *"
                    autoComplete="tel"
                    onChange={(e) => {
                      const numbersOnly = e.target.value.replace(/\D/g, "");

                      setDemoPhone(numbersOnly.slice(0, 10));
                    }}
                  />

                  <input
                    name="email"
                    type="email"
                    value={demoEmail}
                    placeholder="Email (optional)"
                    autoComplete="email"
                    onChange={(e) => setDemoEmail(e.target.value)}
                  />

                  <select required name="interestedCourse" defaultValue="">
                    <option value="" disabled>
                      Interested course *
                    </option>

                    {COURSES.map((course) => (
                      <option key={course.t} value={course.t}>
                        {course.t}
                      </option>
                    ))}
                  </select>

                  <p
                    style={{
                      margin: "8px 0 12px",
                      color: "#C4D1EE",
                      fontSize: 13,
                    }}
                  >
                    Demo classes are available both online and offline
                    (Tambaram).
                  </p>
                </>
              )}

              {/* =================================================
                  HACKATHON FORM
              ================================================= */}

              {hack && (
                <>
                  {/* NAME */}

                  <input
                    required
                    name="hackName"
                    value={hackName}
                    placeholder="Full name *"
                    autoComplete="name"
                    onChange={(e) => {
                      let value = e.target.value;

                      // Only letters
                      // and spaces
                      value = value.replace(/[^A-Za-z\s]/g, "");

                      // Prevent
                      // multiple spaces
                      value = value.replace(/\s+/g, " ");

                      // Convert to
                      // uppercase
                      value = value.toUpperCase();

                      setHackName(value);
                    }}
                  />

                  {/* MOBILE / WHATSAPP */}

                  <input
                    required
                    name="hackPhone"
                    type="tel"
                    value={hackPhone}
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="WhatsApp number *"
                    autoComplete="tel"
                    onChange={(e) => {
                      const numbersOnly = e.target.value.replace(/\D/g, "");

                      setHackPhone(numbersOnly.slice(0, 10));
                    }}
                  />

                  {/* EMAIL */}

                  <input
                    required
                    name="hackEmail"
                    type="email"
                    value={hackEmail}
                    placeholder="Email *"
                    autoComplete="email"
                    onChange={(e) => setHackEmail(e.target.value)}
                  />

                  <p
                    style={{
                      margin: "8px 0 12px",
                      color: "#C4D1EE",
                      fontSize: 13,
                    }}
                  >
                    Our team will contact you through your WhatsApp number and
                    email regarding the hackathon.
                  </p>
                </>
              )}

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                className="btn cta"
                type="submit"
                disabled={hack ? hackLoading : demoLoading}
              >
                {hack
                  ? hackLoading
                    ? "Submitting..."
                    : "Register Now"
                  : demoLoading
                    ? "Submitting..."
                    : "Book My Free Demo"}
              </button>

              <small>You can also call us on +91 980 306 1234.</small>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Partners />d
      <Courses />
      <Why />
      <Paths />
      <Match />
      <Hackathon />
      <Reviews />
      <Faq />
      <Lead />
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
    </>
  );
}