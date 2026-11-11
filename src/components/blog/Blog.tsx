"use client";

import { useMemo, useState } from "react";
import { Link } from "../../lib/router-compat";

import { Topbar, Header, Footer } from "../../pages/Home";
import { DemoPopup } from "../courses/CourseData";
// Blog listing data taken from your HTML
const BLOGS = [
  {
    slug: "ai-in-software-testing-skills-testers-need",
    title: "How AI Is Changing Software Testing: Skills Every Tester Needs",
    cat: "Testing & QA",
    date: "2026-10-06",
    read: 7,
    e: "🧪",
    g: "#0f766e",
    excerpt:
      "Self-healing scripts, AI-generated test cases and smarter test selection are reshaping QA. Here is what changes and what to learn.",
    kw: [
      "AI in software testing",
      "automation testing",
      "software testing skills",
    ],
  },
  {
    slug: "mern-stack-developer-roadmap-for-beginners",
    title: "MERN Stack Developer Roadmap for Beginners (2026 Guide)",
    cat: "Full Stack",
    date: "2026-10-02",
    read: 8,
    e: "🧩",
    g: "#2563EB",
    excerpt:
      "A clear step-by-step path from HTML and JavaScript to React, Node.js, Express and MongoDB, with projects to build at each stage.",
    kw: ["MERN stack roadmap", "React", "Node.js", "full stack developer"],
  },
  {
    slug: "python-for-beginners-what-to-learn-first",
    title: "Python for Beginners: What to Learn First and How to Practise",
    cat: "Programming",
    date: "2026-09-27",
    read: 6,
    e: "🐍",
    g: "#1d4ed8",
    excerpt:
      "Starting Python? Here is what to study first, the projects worth building and the directions it can take your career.",
    kw: ["Python for beginners", "Python projects", "Python career paths"],
  },
  {
    slug: "aws-vs-azure-vs-gcp-which-cloud-course-to-start",
    title: "AWS vs Azure vs GCP: Which Cloud Course Should You Start With?",
    cat: "Cloud",
    date: "2026-09-22",
    read: 7,
    e: "☁️",
    g: "#0369a1",
    excerpt:
      "Compare AWS, Azure and GCP for beginners, what each is known for, and how to choose your first cloud course.",
    kw: ["AWS", "Azure", "GCP", "cloud computing"],
  },
  {
    slug: "how-to-choose-the-right-it-course-after-graduation",
    title: "How to Choose the Right IT Course After Graduation",
    cat: "Career Tips",
    date: "2026-09-17",
    read: 7,
    e: "🧭",
    g: "#7c3aed",
    excerpt:
      "Too many courses, too little clarity? Use this practical guide to match your interests, background and goals with the right path.",
    kw: ["IT courses", "career guidance", "courses after graduation"],
  },
  {
    slug: "it-internship-in-chennai-tips-for-college-students",
    title:
      "IT Internship in Chennai: How College Students Can Get the Most Out of It",
    cat: "Internship",
    date: "2026-09-12",
    read: 7,
    e: "🎓",
    g: "#0f766e",
    excerpt:
      "Planning an IT internship in Chennai? Learn how to choose one, what to expect and how to turn live project experience into a stronger resume.",
    kw: ["IT internship", "internship for students", "internship in Chennai"],
  },
  {
    slug: "how-to-prepare-for-a-college-hackathon",
    title: "How to Prepare for a College Hackathon: A Guide for Student Teams",
    cat: "Career Tips",
    date: "2026-09-08",
    read: 6,
    e: "🏆",
    g: "#be185d",
    excerpt:
      "Form the right team, pick a feasible idea, divide the work and present with confidence. A practical guide for first-time participants.",
    kw: ["college hackathon tips", "student hackathon", "AI hackathon"],
  },
];

const BLOG_CATS = [
  "Testing & QA",
  "Full Stack",
  "Programming",
  "Cloud",
  "Career Tips",
  "Internship",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
};

function BlogThumb({ blog, big = false }) {
  return (
    <div
      className={`bth${big ? " big" : ""}`}
      style={{
        "--g": `linear-gradient(150deg, ${blog.g}, #0B1B3A)`,
      }}
    >
      <span>{blog.e}</span>
    </div>
  );
}

function PostCard({ blog }) {
  return (
    <Link className="card bcard" to={`/blogs/${blog.slug}`}>
      <BlogThumb blog={blog} />

      <div className="bbody">
        <span className="cat">{blog.cat}</span>

        <h3>{blog.title}</h3>

        <p>{blog.excerpt}</p>

        <div className="bmeta">
          {formatDate(blog.date)} · {blog.read} min read
        </div>
      </div>
    </Link>
  );
}

function openDemo(event) {
  event.preventDefault();

  window.dispatchEvent(
    new CustomEvent("nx-open", {
      detail: "demo",
    }),
  );
}

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("new");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = useMemo(
    () => [...BLOGS].sort((a, b) => b.date.localeCompare(a.date))[0],
    [],
  );

  const filteredBlogs = useMemo(() => {
    const query = search.toLowerCase().trim();

    const filtered = BLOGS.filter((blog) => {
      const matchesCategory = category === "All" || blog.cat === category;

      const searchableText = [blog.title, blog.excerpt, blog.cat, ...blog.kw]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });

    return filtered.sort((a, b) =>
      sort === "quick"
        ? a.read - b.read || b.date.localeCompare(a.date)
        : b.date.localeCompare(a.date),
    );
  }, [category, search, sort]);

  const popularBlogs = [
    BLOGS.find(
      (blog) => blog.slug === "ai-in-software-testing-skills-testers-need",
    ),
    BLOGS.find(
      (blog) => blog.slug === "mern-stack-developer-roadmap-for-beginners",
    ),
    BLOGS.find(
      (blog) =>
        blog.slug === "how-to-choose-the-right-it-course-after-graduation",
    ),
  ].filter(Boolean);

  const showFeatured = !search.trim() && category === "All";

  return (
    <>
      <Topbar />
      <Header />

      {/* Blog hero and search */}
      <section className="hero" style={{ paddingBottom: 44 }}>
        <div className="wrap">
          <div className="bc">
            <Link to="/">Home</Link> / Blog
          </div>

          <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>
            Nexila <span>Blog</span>
          </h1>

          <p>
            IT course guides, career roadmaps, internship and interview tips,
            and tech updates from our software training team in Tambaram,
            Chennai.
          </p>

          <div className="sx">
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search articles, e.g. Python, MERN, internship"
              aria-label="Search articles"
            />
          </div>
        </div>
      </section>

      {/* Blog listing */}
      <section className="sec" style={{ paddingTop: 44 }}>
        <div className="wrap">
          {showFeatured && (
            <Link className="feat" to={`/blogs/${featured.slug}`}>
              <BlogThumb blog={featured} big />

              <div>
                <span className="cat">Latest · {featured.cat}</span>

                <h2>{featured.title}</h2>

                <p>{featured.excerpt}</p>

                <div className="bmeta">
                  {formatDate(featured.date)} · {featured.read} min read
                </div>

                <span className="btn cta" style={{ marginTop: 16 }}>
                  Read article →
                </span>
              </div>
            </Link>
          )}

          <div className="bll">
            <div>
              {/* Category filters */}
              <div className="tabs" style={{ marginTop: 0 }}>
                {["All", ...BLOG_CATS].map((cat) => {
                  const count =
                    cat === "All"
                      ? BLOGS.length
                      : BLOGS.filter((blog) => blog.cat === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`tab${category === cat ? " on" : ""}`}
                      onClick={() => {
                        setCategory(cat);
                        setVisibleCount(6);
                      }}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Results count and sorting */}
              <div className="bsort">
                <span>
                  Showing <b>{filteredBlogs.length}</b> article
                  {filteredBlogs.length === 1 ? "" : "s"}
                </span>

                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  aria-label="Sort articles"
                >
                  <option value="new">Newest first</option>
                  <option value="quick">Quick reads first</option>
                </select>
              </div>

              {/* Blog cards */}
              {filteredBlogs.length > 0 ? (
                <div className="grid g2" style={{ marginTop: 20 }}>
                  {filteredBlogs.slice(0, visibleCount).map((blog) => (
                    <PostCard key={blog.slug} blog={blog} />
                  ))}
                </div>
              ) : (
                <p style={{ color: "var(--muted)", marginTop: 24 }}>
                  No articles match your search. Try another keyword.
                </p>
              )}

              {/* Load more */}
              {filteredBlogs.length > visibleCount && (
                <div style={{ textAlign: "center", marginTop: 28 }}>
                  <button
                    type="button"
                    className="btn outl"
                    onClick={() => setVisibleCount((count) => count + 6)}
                  >
                    Load more articles ↓
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="bside2">
              <div className="card">
                <h3 style={{ marginBottom: 12 }}>Popular reads</h3>

                {popularBlogs.map((blog, index) => (
                  <Link
                    key={blog.slug}
                    className="pr"
                    to={`/blogs/${blog.slug}`}
                  >
                    <b>{index + 1}</b>
                    <span>{blog.title}</span>
                  </Link>
                ))}
              </div>

              <div className="sfc" style={{ marginTop: 18 }}>
                <div className="tag" style={{ color: "#7FB0FF" }}>
                  Free demo
                </div>

                <h3>Ready to start your IT career?</h3>

                <p
                  style={{
                    color: "#C4D1EE",
                    fontSize: 14,
                    margin: "0 0 14px",
                  }}
                >
                  Talk to our counsellors and attend a free demo class.
                </p>

                <a
                  href="#contact"
                  className="btn cta"
                  onClick={openDemo}
                  style={{ display: "block", textAlign: "center" }}
                >
                  Book Free Demo
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom call to action */}
      <section
        className="sec alt"
        style={{ paddingTop: 56, paddingBottom: 56 }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 className="h2">Ready to start your IT career?</h2>

          <p className="sub" style={{ marginBottom: 22 }}>
            Book a free demo or browse our courses to find the right path.
          </p>

          <div className="row" style={{ justifyContent: "center" }}>
            <a href="#contact" className="btn cta" onClick={openDemo}>
              Book Free Demo →
            </a>

            <Link to="/courses" className="btn outl">
              View Courses
            </Link>
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
      <Footer />
      <DemoPopup />
    </>
  );
}
