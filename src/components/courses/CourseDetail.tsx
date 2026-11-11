"use client";

import { useEffect, useState } from "react";
import { Link, useParams } from "../../lib/router-compat";
import { useNavigate } from "../../lib/router-compat";

import { useLocation } from "../../lib/router-compat";
import {
  CCATS,
  CBLURB,
  CHN,
  COURSELIST,
  DET,
  GEN_FAQ,
  Lead,
  DemoPopup,
} from "./CourseData";
import { Topbar, Header, Footer } from "../../pages/Home";
import CourseCard from "./CourseCard";
import CourseAccordion from "./CourseAccordion";
import CourseJourney from "./CourseJourney";

const DEFAULT_TRAINER = [
  "Experienced technical trainers",
  "Instructor-led sessions with practical demonstrations",
  "Help with projects and interview preparation",
  "Questions welcome at any time",
];

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [open, setOpen] = useState(0);
  const [tab, setTab] = useState("about");

  const location = useLocation();

useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, [location.pathname]);

  const course = COURSELIST.find((item) => item.slug === slug);

  useEffect(() => {
    const ids = ["about", "syllabus", "trainer", "faqs"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTab(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [slug]);

  const showDemo = (event) => {
    event.preventDefault();

    window.dispatchEvent(new CustomEvent("nx-open", { detail: "demo" }));
  };

  if (!course) {
    return <h2>Course not found</h2>;
  }
  if (!course) {
    return (
      <section className="sec">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 className="h2">Course not found</h2>
          <Link to="/courses" className="btn cta">
            Browse all courses
          </Link>
        </div>
      </section>
    );
  }

  const details = DET[slug];
  const category = CCATS[course.cat];

  const description = details
    ? details.desc
    : `${CBLURB[course.cat]} Nexila's ${course.name} training is led by experienced trainers, with hands-on practice and guided projects, in classroom or live online mode.`;

  const facts = details
    ? details.facts
    : [
        ["Mode", "Classroom + Live online"],
        ["Free demo", "Available"],
        ["Batches", "Small, focused batches"],
        ["Duration", "Shared by our counsellor"],
      ];

  const faqs = details ? details.faqs : GEN_FAQ(course.name);

  const related = [
    ...COURSELIST.filter(
      (item) => item.cat === course.cat && item.slug !== slug,
    ),
    ...COURSELIST.filter(
      (item) =>
        item.cat !== course.cat &&
        ["mern", "python", "aws-devops", "data-science", "selenium"].includes(
          String(item.slug),
        ),
    ),
  ].slice(0, 4);

  const jump = (id) => {
    setTab(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Topbar />
      <Header />

      <section className="hero" style={{ paddingBottom: 48 }}>
        <div className="wrap">
          <div className="hgrid">
            <div>
              <div className="bc">
                <Link to="/">Home</Link> / <Link to="/courses">Courses</Link> /{" "}
                {course.name}
              </div>

              <div className="tag">{category[0]}</div>

              <h1
                style={{
                  marginTop: 8,
                  fontSize: "clamp(30px, 5vw, 48px)",
                }}
              >
                {course.name} <span>Training</span>
              </h1>

              <p style={{ fontSize: 17 }}>{description}</p>

              <div className="row">
                <a href="#contact" className="btn cta" onClick={showDemo}>
                  Enroll Now!
                </a>

                <a href="#contact" className="btn ghost" onClick={showDemo}>
                  Request Syllabus
                </a>
              </div>
            </div>

            <div
              className="abv"
              style={{
                background: `linear-gradient(150deg, ${category[2]}, #0B1B3A)`,
              }}
            >
              {category[1]}
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
          ].map(([id, label]) => (
            <button
              key={id}
              className={`ct ${tab === id ? "on" : ""}`}
              onClick={() => jump(id)}
            >
              {label}
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
                <p>{description}</p>

                {details ? (
                  <>
                    <div className="stk">
                      {details.stack.map(([title, description]) => (
                        <div className="card" key={title}>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      ))}
                    </div>

                    <h3 style={{ fontSize: 19 }}>What the course covers</h3>

                    <ul className="lst">
                      {details.comps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontSize: 19 }}>What you will get</h3>

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

                {details ? (
                  details.mods.map((module, index) => (
                    <div className="sy" key={module.t}>
                      <button
                        onClick={() => setOpen(open === index ? -1 : index)}
                        aria-expanded={open === index}
                      >
                        <span>
                          <i className="n">{index + 1}</i>
                          {module.t}
                        </span>

                        <span style={{ color: "var(--blue)" }}>
                          {open === index ? "−" : "+"}
                        </span>
                      </button>

                      {open === index && (
                        <div className="bd3">
                          {module.g ? (
                            module.g.map(([heading, topics]) => (
                              <div key={heading}>
                                <div className="gh">{heading}</div>

                                <div className="tp">
                                  {topics.map((topic) => (
                                    <span key={topic}>{topic}</span>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="tp" style={{ marginTop: 4 }}>
                              {module.i.map((topic) => (
                                <span key={topic}>{topic}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="card">
                    <h3>Detailed {course.name} syllabus</h3>

                    <p style={{ margin: "8px 0 16px" }}>
                      Our counsellor will share the module-wise syllabus,
                      duration and schedule for this course.
                    </p>

                    <a href="#contact" className="btn cta" onClick={showDemo}>
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
                      {(details?.trainer || DEFAULT_TRAINER).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="btn cta"
                      onClick={showDemo}
                      style={{ marginTop: 18 }}
                    >
                      Let's Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="sx" id="faqs">
                <h2>Frequently asked questions</h2>
                <CourseAccordion items={faqs} />
              </div>
            </div>

            <aside className="side">
              <div className="snap">
                <h3>Course snapshot</h3>

                {facts.map(([label, value]) => (
                  <div className="fr" key={label}>
                    <span>{label}</span>
                    <b>{value}</b>
                  </div>
                ))}

                <a
                  href="#contact"
                  className="btn cta"
                  onClick={showDemo}
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
                  onClick={showDemo}
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
        </div>
      </section>

      <CourseJourney />

      <section className="sec alt">
        <div className="wrap">
          <div>
            <div className="tag">Trending courses</div>
            <h2 className="h2">You may also like</h2>
          </div>

          <div className="grid g4" >
            {related.map((item) => (
              <CourseCard key={item.slug} c={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div>
            <div className="tag">Available in Chennai</div>
            <h2 className="h2">{course.name} training near you</h2>
          </div>

          <div className="areas">
            {CHN.map((area) => (
              <span key={area}>
                {course.name} course in {area}
              </span>
            ))}
          </div>
        </div>
      </section>
      <DemoPopup />
      <Lead />
      <a
        className="wa"
        href="https://wa.me/919803061234"
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>
      <Footer />
    </>
  );
}
