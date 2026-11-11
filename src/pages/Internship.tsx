"use client";

import React, { useEffect, useState } from "react";
import { Header, Footer, Topbar } from "./Home";
import its1 from "../assets/images/internship/its1.jpg";
import its2 from "../assets/images/internship/its2.jpg";
import its5 from "../assets/images/internship/its5.jpg";

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

function Head({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div>
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

function InternForm() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [graduate, setGraduate] = useState("");
  const [year, setYear] = useState("");
  const [domain, setDomain] = useState("");

  const COLLEGES = [
        "A.V.C.College (Autonomous)",
    "A.V.S. College of Science",
    "Aalim Muhammed Salegh College of Engineering",
    "Aarupadai Veedu Institute of Technology",
    "Adhiparasakthi College of Science",
    "Adhiparasakthi",
    "Adithya Institute of Technology",
    "Agarchand Manmull Jain College (A.M. Jain College)",
    "Agni College of Technology",
    "Alpha Arts And Science College",
    "Alpha College of Engineering",
    "Amrita Vishwa Vidyapeetham",
    "Anand Institute of Higher Technology",
    "Anjalai Ammal Mahalingam Engineering College",
    "Anna University Regional Campus",
    "Anna University",
    "Annai Therasai Arts And science College",
    "Annai Veilankanni's College of Engineering",
    "Apollo Arts and Science College",
    "Arasu Engineering College",
    "Asan Memorial College of Arts And Science",
    "As-Salam College of Engineering and Technology",
    "Auxilium College of Arts and Science for Women",
    "Auxilium College",
    "AVC College of Engineering",
    "AVS Engineering College",


    "B.S. Abdur Rahman Crescent University (BSACIST)",
    "Bannari Amman Institute of Technology (BIT)",
    "Bharath University",
    "Bharathidasan College of Arts and Science",
    "Bharathidasan University",
    "Bishop Hebbur College (Autonomous)",


    "C. Abdul Hakeem College of Engineering and Technology",
    "CARE College of Engineering",
    "Chennai Institute of Technology (CIT)",
    "Coimbatore Institute of Management and Technology",
    "Coimbatore Institute of Technology (CIT)",


    "D.K.M College for Women",
    "DG Vaishnav College",
    "Dhaanish Ahmed College of Engineering",
    "Dhanalakshmi College of Engineering",
    "Dhanalakshmi Srinivasan Engineering College",
    "Dr. Ambedkar Government Arts College",
    "Dr. M.G.R. Janaki College of Arts and Science for Women",
    "Dr. Mahalingam College of Engineering and Technology",
    "Dr. MGR University",
    "Dr. N.G.P. Arts and Science College",
    "Dr. N.G.P. Institute of Technology",


    "Easwari Engineering College",
    "Einstein College of Engineering",
    "Erode Arts College (Autonomous)",
    "Erode Sengunthar Engineering College",
    "Erode Vidya Sangam Sri Vasavi College",
    "Ethiraj College for Women",
    "Excel Engineering College",


    "Fatima College",
    "Francis Xavier Engineering College",


    "G.K.M. College of Engineering and Technology",
    "Ganadipathy Tulsi's Engineering College",
    "Government College of Engineering",
    "Government Vellore Institute of Technology",
    "Guru Nanak College",


    "Hindustan College Of Arts And Science",
    "Hindustan Institute of Technology and Science (HITS)",
    "Hindustan University",
    "Hindusthan College of Engineering and Technology",
    "Hindusthan Institute of Technology",
    "Holy Cross College for Women(Autonomous)",
    "Holy Cross College",


    "Indra Ganesan College of Engineering",
    "Info Institute of Engineering",
    "Islamaiah Women's Arts and Science College",
    "Islamiah College",


    "J.J.College of Arts and science",
    "Jamal Mohammed College",
    "Jeppiaar Engineering College",
    "Jeppiaar Institute of Technology",
    "Jerusalem College of Engineering",


    "K. Ramakrishnan College of Engineering",
    "K. Ramakrishnan College of Technology",
    "K.C.G. College of Technology",
    "K.S.R. College of Engineering (KSR)",
    "K.S.R. Institute for Engineering and Technology (KSR)",
    "K.S.Rangasamy College of Technology (KSR)",
    "Kalasalingam Academy of Research and Education",
    "Kalasalingam University",
    "Karpagam Arts And Science College",
    "Karpagam College of Engineering",
    "Karpagam Institute of Technology",
    "Karunya Institute of Technology and Sciences",
    "Karuppana Mariappan College",
    "KCG College of Technology",
    "Kingston Engineering College",
    "KLN College of Engineering",
    "KLN College of Information Technology",
    "Knowledge Institute of Technology (KIOT)",
    "Kongu Arts and Science College",
    "Kongu College of Arts and Science",
    "Kongu Engineering College (KEC)",
    "Kongunadu College of Engineering and Technology",
    "KPR College of Arts Science and Research",
    "KPR Institute of Engineering and Technology (KPRIET)",
    "Kumaraguru College of Technology (KCT)",


    "Lady Doak College",
    "Loyola College",


    "M.A.M. College of Engineering",
    "M.A.M. School of Engineering",
    "M.O.P Vaishnav College For Women",
    "M.P. Nachimuthu M. Jaganathan Engineering College",
    "M.S. University, Tirunelveli",
    "Madha Engineering College (MEC)",
    "Madha Institute of Engineering and Technology",
    "Madras Christian College (Autonomous)",
    "Madras Christian College (MCC)",
    "Madura College",
    "Madurai Kamaraj University",
    "Mahalakshmi College of Arts and Science",
    "Mahendra Engineering College",
    "Mahendra Institute of Technology",
    "Mass College of Engineering",
    "Meenakshi Ammal Arts And Science College",
    "Meenakshi College for Women",
    "Meenakshi College of Engineering",
    "Meenakshi Sundararajan Engineering College",
    "Mepco Schlenk Engineering College",
    "MOP Vaishnav College for Women",


    "Nandha Arts and Science College",
    "Nandha College of Technology (NCT)",
    "Nandha Engineering College (NEC)",
    "National College",
    "National Engineering College",
    "National Institute of Technology (NIT)",
    "Navarasam Arts and Science College for Women",
    "Nehru Institute of Engineering and Technology",
    "New Prince Shri Bhavani Arts And Science College",
    "New Prince Shri Bhavani College of Engineering and Technology",
    "Oxford Engineering College",

    "P.S.G College of Arts and Science (PSGCAS)",
    "Paavai Engineering College",
    "Pachaiyappa's College",
    "Panimalar Engineering College (PEC)",
    "Panimalar Institute of Technology (PIT)",
    "Park College of Engineering Technology",
    "Pattammal Alagesan College Of Arts And Science",
    "PERI Institute of Technology",
    "Periyar Maniammai Institute of Science and Technology",
    "PET Engineering College",
    "Presidency College",
    "Prince Dr. K. Vasudevan College of Engineering and Technology",
    "Prince Shri Venkateshwara Arts and Science College",
    "Prince Shri Venkateshwara Padmavathy Engineering College",
    "PRIST University",
    "PSG College of Technology (PSGCT)",
    "PSG Institute of Technology and Applied Research (PSG iTech)",
    "PSN College of Engineering and Technology",
    "PSN Institute of Technology and Science",
    "PSNA College of Engineering and Technology",
    "PSR Engineering College",
    
    "Quaid-e-Millet College",
    "Quaid-e-Millet Government Arts College for Women",
    "Queen Mary's College",

    "R.V.S College Of Arts And Science",
    "Raja Rajeswari Engineering College",
    "Rajalakshmi Engineering College (REC)",
    "Rajalakshmi Institute of Technology (RIT)",
    "Ramco Institute of Technology",
    "Rathinam College of Arts and Science (RCAS)",
    "RMD Engineering College",
    "RMK Engineering College",

    "S.A. Engineering College",
    "S.D.N.B Vaishnav College For Women",
    "S.K.R. Engineering College",
    "S.R.M Arts and Science College",
    "SACS MAVMM Engineering College",
    "Sardar Raja College of Engineering",
    "SASTRA Deemed University",
    "Sasurie College of Engineering",
    "Sathyabama Institute of Science and Technology",
    "Sathyabama University",
    "Saveetha Engineering College",
    "SCAD College of Engineering and Technology",
    "Shanmuga Arts Science Technology Research Academy (SASTRA)",
    "Shree Venkateshwara Hi-Tech Engineering College",
    "SIVET College",
    "SNS Academy",
    "SNS College of Engineering",
    "SNS College of Technology (SNSCT)",
    "Sona College of Technology",
    "Sree Amman Arts and Science College",
    "Sree Saraswathi Thyagaraja College",
    "Sree Sastha Institute of Engineering and Technology",
    "Sri Eshwar College of Engineering",
    "Sri Krishna College of Engineering and Technology (SKCET)",
    "Sri Krishna Engineering College",
    "Sri Krishna Institute of Technology",
    "Sri Lakshmi Ammal Engineering College",
    "Sri Ramakrishna Engineering College (SREC)",
    "Sri Ramakrishna Institute of Technology",
    "Sri Ramakrishna Mission Vidyalaya Arts and Science (Autonomous)",
    "Sri Sai Ram Engineering College",
    "Sri Sai Ram Institute of Technology",
    "Sri Sairam Engineering College",
    "Sri Shanmugha College of Engineering and Technology",
    "Sri Sivasubramaniya Nadar College of Engineering",
    "Sriram College Of Arts and Science",
    "SRM Arts and Science College",
    "SRM Institute of Science and Technology, Kattankulathur (SRMIST)",
    "SRM Institute of Science and Technology (SRMIST)",
    "SRM TRP Engineering College",
    "SRM University, Kattankulathur",
    "SRM University",
    "SRM Valliammai Engineering College (SRM VEC)",
    "SSN College of Engineering (SSN)",
    "St. Joseph's College of Engineering",
    "St. Joseph's Institute of Technology",
    "St.Joseph college of Arts And Science",
    "St.Joseph College",
    "Stella Maris College",
    "Surya Engineering College",

    "T.J. Institute of Technology",
    "Tagore College of Arts & Science",
    "Tagore Engineering College",
    "Thangavelu Engineering College",
    "Thanthai Periyar Government Institute of Technology",
    "The American College",
    "The New College",
    "Thiagarajar College of Engineering (TCE)",
    "Thiagarajar College",
    "Thiagarajar Polytechnic College",
    "Thirukkoilur College of Arts And Science",
    "Thiruthangal Nadar College",
    "Tirupathur Arts and Science College",

    "University of Madras (Madras University)",

    "Valliammal College For Women",
    "Vel Tech",
    "Velalar College of Engineering and Technology",
    "Velammal College of Engineering and Technology",
    "Velammal Engineering College",
    "Velammal Institute of Technology",
    "Vellalar College for Women",
    "Vellore Institute of Technology (VIT)",
    "Vels University",
    "Vidyasagar Women's College",
    "Vinayaka Mission's Kirupananda Variyar Engineering College",
    "Voarhees College",
    "VSB College of Engineering Technical Campus",
    "VSB Engineering College",
  ];

  const GRADUATES = [
    "B.A.",
    "B.Com",
    "B.Com (Computer Applications)",
    "B.B.A.",
    "B.C.A.",
    "B.Sc.",
    "B.Sc. Computer Science",
    "B.Sc. Information Technology",
    "B.Sc. Data Science",
    "B.Sc. Artificial Intelligence",
    "B.Sc. Computer Applications",
    "B.E.",
    "B.E. Computer Science and Engineering",
    "B.E. Information Technology",
    "B.E. Artificial Intelligence and Data Science",
    "B.E. Artificial Intelligence and Machine Learning",
    "B.E. Computer Science and Business Systems",
    "B.E. Cyber Security",
    "B.E. Data Science",
    "B.Tech",
    "B.Tech Computer Science and Engineering",
    "B.Tech Information Technology",
    "B.Tech Artificial Intelligence",
    "B.Tech Artificial Intelligence and Data Science",
    "B.Tech Data Science",
    "B.Tech Information Systems",
    "M.A.",
    "M.Com",
    "M.B.A.",
    "M.C.A.",
    "M.Sc.",
    "M.Sc. Computer Science",
    "M.Sc. Information Technology",
    "M.Sc. Data Science",
    "M.Sc. Artificial Intelligence",
    "M.E.",
    "M.Tech",
    "Ph.D.",
    "Other",
  ];

  const sel = (label, array, value, onChange) => (
    <select required value={value} onChange={onChange}>
      <option value="" disabled>
        {label}
      </option>

      {array.map((x) => (
        <option key={x} value={x}>
          {x}
        </option>
      ))}
    </select>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    const finalName = name.trim();
    const finalPhone = phone.trim();
    const finalCollege = college.trim();
    const finalGraduate = graduate.trim();

    if (!finalName) {
      setMessage("Please enter your name.");
      return;
    }

    if (!/^\d{10}$/.test(finalPhone)) {
      setMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (!finalCollege) {
      setMessage("Please enter your college name.");
      return;
    }

    if (!GRADUATES.includes(finalGraduate)) {
      setMessage("Please search and select your graduate from the list.");
      return;
    }

    if (!year) {
      setMessage("Please select your year of studying.");
      return;
    }

    if (!domain) {
      setMessage("Please select your domain.");
      return;
    }

    setLoading(true);

    try {
      const crmData = {
        name: finalName,
        phone: finalPhone,
        email: null,

        domain: domain,

        leadstatus: "New Lead",
        leadsource: "website",

        collegename: finalCollege,
        location: null,
        // Year of studying
        category: year,

        graduate: finalGraduate,

        joinstatus: null,
        lookingfor: "Internship",
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
        throw new Error(
          result?.message || "Unable to submit your application.",
        );
      }

      setMessage(
        result?.message ||
          "Application submitted successfully. Our team will contact you shortly.",
      );

      setOk(true);

      setName("");
      setPhone("");
      setCollege("");
      setGraduate("");
      setYear("");
      setDomain("");

      setTimeout(() => {
        setOk(false);
        setMessage("");
      }, 6000);
    } catch (error) {
      console.error("Internship application error:", error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (ok) {
    return (
      <div style={{ padding: "12px 0" }}>
        <h3 style={{ fontSize: 24 }}>Application received ✅</h3>

        <p style={{ color: "#C4D1EE" }}>
          Thank you! Our team will contact you shortly.
        </p>

        <p
          style={{
            color: "#C4D1EE",
            fontSize: 13,
            opacity: 0.7,
            marginTop: 10,
          }}
        >
          This form will be available again shortly...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => {
          const value = e.target.value
            .replace(/[^a-zA-Z\s]/g, "")
            .replace(/\s+/g, " ")
            .split(" ")
            .map((word) =>
              word
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : "",
            )
            .join(" ");

          setName(value);
        }}
      />

      <input
        required
        type="tel"
        inputMode="numeric"
        maxLength={10}
        placeholder="Contact Number"
        value={phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "").slice(0, 10);

          setPhone(value);
        }}
      />

      {/* College Name - Searchable + Custom College */}
      <input
        required
        list="college-list"
        placeholder="College Name - Search or type"
        value={college}
        onChange={(e) => {
          const value = e.target.value
            .replace(/\s+/g, " ")
            .split(" ")
            .map((word) =>
              word
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : "",
            )
            .join(" ");

          setCollege(value);
        }}
      />

      <datalist id="college-list">
        {COLLEGES.map((x) => (
          <option key={x} value={x} />
        ))}
      </datalist>

      <small
        style={{
          display: "block",
          marginTop: "-8px",
          marginBottom: "12px",
          color: "#8FA4CC",
          fontSize: 12,
        }}
      >
        If your college is not listed, type your college name.
      </small>

      {/* Graduate - Searchable but must select from list */}
      <select
        required
        value={graduate}
        onChange={(e) => setGraduate(e.target.value)}
      >
        <option value="" disabled>
          Graduate
        </option>

        {GRADUATES.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>

      {sel("Year of Studying", IYEAR, year, (e) => setYear(e.target.value))}

      {sel("Domain", IDOM, domain, (e) => setDomain(e.target.value))}

      {message && (
        <div
          style={{
            marginTop: 10,
            padding: "10px 14px",
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          {message}
        </div>
      )}

      <button
        className="btn cta"
        type="submit"
        disabled={loading}
        style={{
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Submit Form"}
      </button>
    </form>
  );
}

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
          <div className="sl">
            <div>
              {/* PROGRAM OVERVIEW */}

              <div className="blk">
                <Head
                  tag="Program overview"
                  title="A stepping stone into the IT industry"
                  sub="This internship gives college students hands-on experience in the tech industry. You apply classroom knowledge to real-world projects, build new skills and work alongside seasoned professionals, whether you want to improve your coding, understand the software development life cycle or learn about current industry trends."
                />

                <div className="grid g2">
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

              {/* BENEFITS */}

              <div className="blk">
                <Head tag="Benefits" title="What you get from the program" />

                <div className="grid g2">
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

              <div className="blk">
                <GReviews />
              </div>
            </div>

            {/* ================= SIDEBAR FORM ================= */}

            <aside className="sf">
              <div className="sfc">
                <div className="tag" style={{ color: "#7FB0FF" }}>
                  Apply for internship
                </div>

                <h3>Start your software internship</h3>

                <InternForm />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= APPLY ================= */}

      <section className="sec alt" id="apply">
        <div className="wrap">
          <div className="lead" id="contact">
            <div>
              <div className="tag" style={{ color: "#7FB0FF" }}>
                Apply for internship
              </div>

              <h2
                style={{
                  margin: "8px 0 12px",
                  fontSize: 34,
                }}
              >
                Start your software internship
              </h2>

              <p>
                Fill in the form and our team will contact you with the next
                steps. You can also call us on +91 980 306 1234.
              </p>

              <ul className="ck2" style={{ color: "#C4D1EE" }}>
                <li style={{ color: "#C4D1EE" }}>
                  2 to 8 weeks, flexible batches
                </li>

                <li style={{ color: "#C4D1EE" }}>
                  Live project with mentor support
                </li>

                <li style={{ color: "#C4D1EE" }}>
                  Certificate and recommendation letter
                </li>
              </ul>
            </div>

            <InternForm />
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

            <a href="#apply" className="btn cta">
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
