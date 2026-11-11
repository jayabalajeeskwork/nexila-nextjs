"use client";

import { useState } from "react";
export default function CourseAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div>
        {items.map((item, index) => (
          <div className="q" key={index}>
            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              {item[0]}

              <span style={{ color: "var(--blue)" }}>
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && <div>{item[1]}</div>}
          </div>
        ))}
      </div>
    </>
  );
}
