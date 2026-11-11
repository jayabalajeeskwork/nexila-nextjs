"use client";

import { useState } from "react";
import { Link } from "../../lib/router-compat";
import { COURSES, CATS, SLUG } from "./CourseData";
import { Topbar, Header, Footer } from "../../pages/Home";
import { Consultation } from "../../pages/Contact";
export default function Courses() {
  const [category, setCategory] = useState("All");

  const list = COURSES.filter(
    (course) => category === "All" || course.c === category,
  );

  return (
    <>
      <Topbar />
      <Header />
      <section className="sec" id="courses">
        <div className="wrap">
          <div>
            <div className="tag">Courses</div>

            <h2 className="h2">Pick a career track</h2>

            <p className="sub">
              Beginner-friendly programs that end with projects, interview prep
              and placement support.
            </p>
          </div>

          <div className="tabs">
            {CATS.map((item) => (
              <button
                key={item}
                className={`tab ${category === item ? "on" : ""}`}
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

                <Link to={`/courses/${SLUG[course.t]}`} className="lnk">
                  View course →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/courses" className="btn outl">
              View all courses →
            </Link>
          </div>
        </div>
      </section>
      <Consultation />

      <Footer />
    </>
  );
}
