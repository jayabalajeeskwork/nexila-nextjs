"use client";

import { useState, useRef, useEffect } from "react";
export const COURSES = [
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

export const CATS = ["All", ...new Set(COURSES.map((course) => course.c))];

export const SLUG = {
  "MERN Full Stack": "mern",
  "Java Full Stack": "java-full-stack",
  "AWS with DevOps": "aws-devops",
  "Azure Training": "azure",
  "Data Science & AI": "data-science",
  "Power BI & Tableau": "power-bi",
  "Selenium Testing": "selenium",
  "Python Programming": "python-for-beginners-what-to-learn-first",
};

export const CCATS = [
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

export const CBLURB = [
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


export const COURSELIST = [
  [0, "java-course", "Java"],
  [
    0,
    "python-for-beginners-what-to-learn-first",
    "Python",
  ],
  [1, "aws-certification-training", "AWS Training & Certification"],
  [1, "aws-devops-training-tambaram-chennai", "AWS with DevOps"],
  [1, "azure", "Azure"],
  [1, "gcp", "Google Cloud Platform (GCP)"],
  [2, "selenium", "Selenium Testing"],
  [2, "soapui", "SoapUI"],
  [2, "manual-testing", "Manual Testing"],
  [2, "mobile-testing", "Mobile Application Testing"],
  [3, "oracle", "Oracle"],
  [3, "mysql", "MySQL"],
  [3, "mongodb", "MongoDB"],
  [4, "data-analytics-training", "Data Analytics"],
  [4, "data-science", "Data Science"],
  [4, "tableau", "Tableau"],
  [4, "power-bi", "Power BI"],
  [5, "android-os", "Android"],
  [5, "ios", "iOS"],
  [6, "mern-full-stack-training", "MERN Full Stack"],
  [6, "mean-full-stack-training", "MEAN Full Stack"],
  [6, "java-full-stack", "Java Full Stack"],
  [6, "python-full-stack", "Python Full Stack"],
  [7, "ui-path-rpa", "UiPath"],
  [7, "blue-prism-rpa", "Blue Prism"],
  [7, "openspan", "OpenSpan"],
  [7, "automation-anywhere-rpa", "Automation Anywhere"],
  [8, "web-development", "Web Development"],
  [8, "angular-js", "Angular JS"],
  [8, "react-js", "React JS"],
  [8, "frontend-development", "Front-End Development"],
  [9, "artificial-intelligence", "Artificial Intelligence"],
  [9, "matlab", "MATLAB"],
  [9, "informatica", "Informatica"],
  [9, "net-course", ".NET"],
].map(([cat, slug, name]) => ({ cat, slug, name }));

export const GEN_FAQ = (course) => [
  [
    `What will I learn in ${course}?`,
    "You will learn the tools and concepts used in real projects, with trainer demonstrations, hands-on practice and guided assignments. Our counsellor can share the detailed syllabus.",
  ],
  [
    "Do I need prior experience?",
    "Our beginner-friendly tracks start from the basics. Ask our counsellor about prerequisites for this course.",
  ],
  [
    "Is it available online or in person?",
    "Yes. Most courses run in our Tambaram classroom and as live online batches.",
  ],
  [
    "Can I attend a demo class first?",
    "Yes. You can book a free demo class and ask the trainer your questions before you enrol.",
  ],
  [
    "What are the fees and duration?",
    "These vary by course. Our team shares complete details, including the syllabus, before you enrol.",
  ],
];

export const CHN = [
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

export const DET = {
  mern: {
    desc: "Learn to build complete web applications with the MERN stack: MongoDB, Express.js, React and Node.js. You will cover JavaScript fundamentals, RESTful API development, front-end interfaces and database management, and gain hands-on experience connecting every layer and deploying a full application.",
    stack: [
      ["MongoDB", "NoSQL database that stores your application data."],
      [
        "Express.js",
        "Web framework for Node.js that makes servers and APIs simpler to build.",
      ],
      [
        "React",
        "JavaScript library for building user interfaces and single-page apps.",
      ],
      ["Node.js", "Runtime that lets you run JavaScript on the server."],
    ],
    comps: [
      "JavaScript fundamentals: core concepts including ES6 features",
      "Node.js basics: environment setup, event-driven architecture and npm packages",
      "Express.js: RESTful APIs, middleware, routing, requests and responses",
      "MongoDB: databases, collections, documents and CRUD operations",
      "React: components, state with hooks and routing with React Router",
      "Full stack integration: connecting front end and back end, API calls and data flow",
      "Deployment: publishing apps on platforms such as Heroku, AWS or Vercel",
    ],
    facts: [
      ["Duration", "120 days"],
      ["Class time", "90 hours"],
      ["Mode", "Classroom + Live online"],
      ["Level", "Beginners to experienced"],
      ["Projects", "Real-world application"],
      ["Certificate", "Completion certificate"],
    ],
    mods: [
      {
        t: "HTML",
        g: [
          [
            "Basics",
            [
              "Elements",
              "Tags",
              "Text formatting",
              "Attributes",
              "Links",
              "Lists",
              "Images",
              "Tables",
              "Colors & backgrounds",
            ],
          ],
          [
            "Web forms",
            [
              "Input",
              "Text fields",
              "Password",
              "Checkboxes",
              "Radio",
              "Select",
              "Upload",
              "Textarea",
              "Hidden fields",
              "Submit & reset",
            ],
          ],
          [
            "Special tags",
            ["Body", "Meta", "Style", "Div", "Layouts", "Frames"],
          ],
          [
            "Semantic elements",
            [
              "Article",
              "Aside",
              "Figure",
              "Footer",
              "Header",
              "Mark",
              "Nav",
              "Progress",
              "Section",
              "Summary",
              "Time",
            ],
          ],
          [
            "HTML5 forms",
            [
              "Datalist",
              "Output",
              "Color",
              "Date",
              "Datetime-local",
              "Email",
              "Month",
              "Number",
              "Range",
              "Search",
              "Tel",
              "URL",
              "Week",
              "Autocomplete",
              "Autofocus",
              "Pattern (regexp)",
              "Min & max",
            ],
          ],
        ],
      },
      {
        t: "CSS",
        g: [
          [
            "Fundamentals",
            [
              "Syntax",
              "Selectors (ID, class, tag, attribute)",
              "Backgrounds",
              "Text",
              "Fonts",
              "Links",
              "Lists",
              "Tables",
            ],
          ],
          [
            "Box model & layout",
            [
              "Border",
              "Outline",
              "Margin",
              "Padding",
              "Dimension",
              "Display",
              "Positioning",
              "Floating",
              "Navigation bar",
              "Image gallery",
              "Image opacity",
              "Alignment",
            ],
          ],
          [
            "CSS3",
            [
              "Border-radius",
              "Border images",
              "Background size & origin",
              "Text effects & shadow",
              "Box-shadow",
              "Text-overflow",
              "Word-wrap & word-break",
              "Fonts",
            ],
          ],
          [
            "Transforms & transitions",
            [
              "2D transforms",
              "3D transforms",
              "Transition delay",
              "Transition duration",
              "Transition property",
              "Timing function",
            ],
          ],
        ],
      },
      {
        t: "JavaScript",
        g: [
          [
            "Getting started",
            [
              "What is JavaScript?",
              "What is AJAX?",
              "Development workflow",
              "Tools",
              "Objects",
              "Variables",
              "Comparisons",
              "Events",
              "Your first script",
              "Internal vs external scripts",
              "Comments",
            ],
          ],
          [
            "Core language",
            [
              "Alerts, confirms and prompts",
              "Conditional statements",
              "Functions & return values",
              "Switch/case",
              "Error handling",
              "Loops",
              "Arrays",
              "do & while loops",
              "Detecting objects",
            ],
          ],
          [
            "Interactivity",
            [
              "Image rollovers",
              "Slideshows",
              "Random images",
              "Jump & dynamic menus",
              "Form validation",
              "Email verification",
              "Window, mouse, keyboard & focus events",
            ],
          ],
          [
            "Browser & data",
            [
              "Cookies: write, read, delete",
              "The DOM: add, delete, insert, replace nodes",
              "Dates & times",
              "Countdowns",
            ],
          ],
          [
            "Real-world uses",
            [
              "Sliding menus",
              "Pop-up menus",
              "Slideshows with captions",
              "Stylesheet switcher",
            ],
          ],
        ],
      },
      {
        t: "ReactJS",
        i: [
          "Introduction to ReactJS",
          "Library & directory structure",
          "React components",
          "Types of components",
          "Building a simple component",
          "Component composition",
          "Component styling",
          "Inter-component communication",
          "Passing data between components",
          "Routing & single-page apps",
          "Hooks & states",
          "Hooks vs states",
          "Types of hooks",
          "Redux as a state container",
          "React Bootstrap",
          "Deploying a ReactJS app",
        ],
      },
      {
        t: "Node JS",
        i: [
          "Introduction to Node.js",
          "Application architecture",
          "Synchronous & asynchronous programming",
          "Callback functions",
          "Promises",
          "MongoDB with Node.js",
          "Designing the schema",
          "Designing REST APIs (GET, POST, PUT, DELETE)",
          "JSON Web Token authentication",
          "Building an auth app",
          "E-commerce backend",
          "Payment gateway integration",
        ],
      },
      {
        t: "ExpressJS: building RESTful APIs",
        i: [
          "Express & RESTful services",
          "Your first web server",
          "Nodemon",
          "Environment variables",
          "Route parameters",
          "Handling GET requests",
          "Handling POST requests",
          "Calling endpoints with Postman",
          "Input validation",
          "Handling PUT requests",
          "Handling DELETE requests",
          "Project: build the Genres API",
        ],
      },
      {
        t: "Express: advanced topics",
        i: [
          "Middleware",
          "Custom middleware",
          "Built-in middleware",
          "Environments & configuration",
          "Debugging",
          "Templating engines",
          "Database engines & integration",
          "Authentication",
          "Structuring Express applications",
        ],
      },
      {
        t: "MongoDB",
        i: [
          "Introduction to MongoDB (NoSQL)",
          "Collections",
          "Documents",
          "MySQL vs NoSQL",
          "Inserting data",
          "Filter queries",
          "Schema validation",
          "Indexing",
          "Aggregation",
          "Embedded documents",
        ],
      },
    ],
    trainer: [
      "10+ years of experience",
      "Has trained hundreds of students",
      "Strong theoretical and practical knowledge",
      "Certified professionals with high grades",
      "Well connected with hiring HRs in multinational companies",
      "Real-time project and application experience in MNCs",
      "Currently working in top-level multinational companies",
    ],
    faqs: [
      [
        "What is the MERN stack?",
        "MERN stands for MongoDB (database), Express.js (web framework for Node.js), React (front-end library) and Node.js (runtime). Together they let you build full stack web applications using JavaScript.",
      ],
      [
        "Who is this course for?",
        "Beginners who want to start a career in web development, and developers who want to add full stack skills.",
      ],
      [
        "What prerequisites do I need?",
        "Familiarity with HTML, CSS and basic JavaScript is recommended. Knowing REST APIs and asynchronous programming helps but is not mandatory.",
      ],
      [
        "What will I learn?",
        "You will set up a MERN application, manage a MongoDB database, build a server with Express.js, develop a front end with React and connect everything into a complete application.",
      ],
      [
        "What tools or software do I need?",
        "A code editor such as VS Code, Node.js installed and access to MongoDB (locally or through a cloud service). Familiarity with Git also helps.",
      ],
      [
        "How is the course structured?",
        "Lectures, hands-on coding exercises and projects, with access to additional learning resources.",
      ],
      [
        "Is there hands-on practice?",
        "Yes. The course includes hands-on exercises and projects so you can apply what you learn in real-world scenarios.",
      ],
      [
        "Is it available online or in person?",
        "Both. You can learn in our Tambaram classroom or join live online sessions.",
      ],
      [
        "How long is the course?",
        "120 days, with 90 hours of class time in total. Our team will share the exact schedule when you enrol.",
      ],
      [
        "Will I get a certificate?",
        "Yes. On successful completion you receive a certificate of completion that you can add to your resume or LinkedIn profile.",
      ],
      [
        "What jobs can I apply for?",
        "Roles such as Full Stack Developer, Front-End Developer, Back-End Developer or Software Engineer.",
      ],
      [
        "Will I work on real-world projects?",
        "Yes. You will build a complete application with the MERN stack, which reinforces your learning and gives you practical experience.",
      ],
    ],
  },
};
export function Lead() {
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
export function DemoPopup() {
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
