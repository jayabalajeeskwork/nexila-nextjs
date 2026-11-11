"use client";

import { useState } from "react";
import { Link } from "../../lib/router-compat";
import { CCATS, CBLURB, COURSELIST, Lead, DemoPopup } from "./CourseData";
import { Topbar, Header, Footer } from "../../pages/Home";
import CourseCard from "./CourseCard";

export default function CoursesPage() {
  const [category, setCategory] = useState(-1);
  const [search, setSearch] = useState("");

  const list = COURSELIST.filter(
    (course) =>
      (category < 0 || course.cat === category) &&
      String(course.name).toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <>
      <Topbar />
      <Header />
      <section className="phero">
        <div className="wrap">
          <div className="bc">
            <Link to="/">Home</Link> / Courses
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              className={`tab ${category < 0 ? "on" : ""}`}
              onClick={() => setCategory(-1)}
            >
              All ({COURSELIST.length})
            </button>

            {CCATS.map((item, index) => (
              <button
                key={item[0]}
                className={`tab ${category === index ? "on" : ""}`}
                onClick={() => setCategory(index)}
              >
                {item[1]} {item[0]}
              </button>
            ))}
          </div>

          {category >= 0 && (
            <p className="sub" style={{ marginTop: 18 }}>
              {CBLURB[category]}
            </p>
          )}

          <div className="grid g4">
            {list.map((course) => (
              <CourseCard key={course.slug} c={course} />
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
              No courses match your search.
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
              <Link to="/#match" className="btn ghost">
                Try the interest matcher
              </Link>

              <a
                href="#contact"
                className="btn cta"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(
                    new CustomEvent("nx-open", {
                      detail: "demo",
                    }),
                  );
                }}
              >
                Talk to a Counsellor
              </a>
            </div>
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
