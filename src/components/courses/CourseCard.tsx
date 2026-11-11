"use client";

import { Link } from "../../lib/router-compat";
import { CCATS } from "./CourseData";
import { useNavigate } from "../../lib/router-compat";
export default function CourseCard({ c }: { c: any }) {
  const category = CCATS[c.cat];
const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${c.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link
      to={`/courses/${c.slug}`}
      className="cc2"
      style={{
        "--g": `linear-gradient(150deg, ${category[2]}, #0B1B3A)`,
      }}
    >
      <div className="top">
        <span className="bd2">{category[0]}</span>
        {category[1]}
      </div>

      <div className="b">
        <h3>{c.name}</h3>

        <div className="meta">
          <span>Classroom + Live online</span>
          <span>Free demo</span>
        </div>

        <span className="lnk">View details →</span>
      </div>
    </Link>
  );
}
