"use client";

import { useEffect, useRef, useState } from "react";
const STAGES = [
  ["📚", "Learn", "Master fundamentals with expert-led sessions."],
  ["🛠️", "Practice", "Solve assignments and build projects."],
  ["🚀", "Intern", "Work on live projects in our internship program."],
  ["🎯", "Get Placed", "Interview with our hiring partners."],
];

export default function CourseJourney() {
  const [run, setRun] = useState(false);
  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setRun(true);

          STAGES.forEach((_, index) => {
            setTimeout(() => {
              setActive((current) => Math.max(current, index));
            }, 300 + index * 750);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sec jt-sec">
      <div className="wrap" ref={ref}>
        <div>
          <div className="tag">Your journey</div>
          <h2 className="h2">Your journey with Nexila</h2>
          <p className="sub">
            Four stages that take you from fundamentals to the interview room.
          </p>
        </div>

        <div className={`jt ${run ? "run" : ""}`}>
          <i className="fl" />

          {STAGES.map(([icon, title, description], index) => (
            <button
              key={title}
              className={`js ${index <= active ? "on" : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.7}s` }}
              onClick={() => setActive(index)}
            >
              <span className="nd">{icon}</span>

              <div>
                <small>Stage {index + 1}</small>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a
            href="#contact"
            className="btn cta"
            onClick={(event) => {
              event.preventDefault();
              window.dispatchEvent(
                new CustomEvent("nx-open", { detail: "demo" })
              );
            }}
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}