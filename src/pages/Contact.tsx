"use client";

import React, { useState } from "react";
import { Topbar, Header, Footer } from "./Home";
import { DemoPopup } from "../components/courses/CourseData";
const CONTACT_DETAILS = [
  {
    icon: "📞",
    title: "Phone",
    links: [
      {
        text: "+91 980 306 1234",
        href: "tel:+919803061234",
      },
      {
        text: "+91 96 29 173 443",
        href: "tel:+919629173443",
      },
    ],
  },
  {
    icon: "✉️",
    title: "Email",
    links: [
      {
        text: "info@nexilatechnologies.com",
        href: "mailto:info@nexilatechnologies.com",
      },
    ],
  },
  {
    icon: "📍",
    title: "Address",
    links: [
      {
        text: "West Tambaram, Chennai - 600045",
        href: "https://maps.app.goo.gl/XGk8e9hpmrD6n3tR8",
      },
    ],
  },
  {
    icon: "💬",
    title: "WhatsApp",
    links: [
      {
        text: "Chat with us",
        href: "https://wa.me/919803061234",
      },
    ],
  },
];

const CONTACT_FAQ = [
  [
    "Where is Nexila Technologies located?",
    "We are in West Tambaram, Chennai - 600045, Tamil Nadu, India. Use the Google Map on this page to get directions.",
  ],
  [
    "Can I visit the institute in person?",
    "Yes. We recommend calling ahead so we can confirm a convenient time and have a counsellor available to meet you.",
  ],
  [
    "What are your timings?",
    "Please call or message us to confirm our current timings and batch schedules.",
  ],
  [
    "Can I book a free demo class?",
    "Yes. Use the Enroll Now! button, or the free consultation form below, and our team will schedule a demo class for you.",
  ],
  [
    "How do I get a free consultation?",
    "Fill in the free consultation form on this page. Our team will contact you to schedule a conversation about courses, internships or the hackathon.",
  ],
  [
    "Can I enquire on WhatsApp?",
    "Yes. Tap the WhatsApp button on any page, or message us on +91 980 306 1234.",
  ],
  [
    "How soon will your team get back to me?",
    "Our team contacts you shortly after you submit a form. For a faster response, call us directly.",
  ],
  [
    "Do you offer online classes?",
    "Most courses are offered in both classroom mode at our Tambaram centre and live online mode. Ask our counsellor about your chosen course.",
  ],
  [
    "How do I choose the right course?",
    "Use the interest matcher on our home page or talk to our counsellor. We look at your education, skills, interests and goals, and explain course suitability, duration and career paths before you enrol.",
  ],
  [
    "Will you share the syllabus and fees before I enrol?",
    "Yes. We share the syllabus, duration and fee details before you enrol so there are no surprises.",
  ],
  [
    "How do I apply for the internship?",
    "Fill in the Apply for Internship form on our Internship page, and our team will contact you with the next steps.",
  ],
  [
    "How do I register for the Hackathon?",
    "Use the Register your interest form on our Hackathon page with your name, email and mobile number.",
  ],
  [
    "Do you offer corporate training?",
    "Yes. We offer corporate training for teams and organisations. Email us or call to discuss your requirements.",
  ],
  [
    "Which areas do your students come from?",
    "Students come from Tambaram and across Chennai, including Chromepet, Pallavaram, Velachery, Medavakkam, Guindy and OMR, as well as nearby areas such as Guduvancheri and Chengalpattu.",
  ],
];

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq">
      {CONTACT_FAQ.map(([question, answer], index) => (
        <div className="q" key={question}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{question}</span>
            <span>{open === index ? "−" : "+"}</span>
          </button>

          {open === index && <div>{answer}</div>}
        </div>
      ))}
    </div>
  );
}

export function Consultation() {
  const [ok, setOk] = useState(false);

  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [interested, setInterested] = useState("");
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoMessage, setDemoMessage] = useState("");
  const handleConsultationSubmit = async (e) => {
    e.preventDefault();

    setDemoMessage("");

    const name = demoName.trim();
    const phone = demoPhone.trim();
    const email = demoEmail.trim().toLowerCase();

    // ================================
    // NAME VALIDATION
    // ================================

    if (!name) {
      setDemoMessage("Please enter your full name.");
      return;
    }

    // ================================
    // MOBILE VALIDATION
    // ================================

    if (!/^\d{10}$/.test(phone)) {
      setDemoMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    // ================================
    // EMAIL VALIDATION
    // Optional
    // ================================

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setDemoMessage("Please enter a valid email address.");
      return;
    }

    // ================================
    // INTEREST VALIDATION
    // ================================

    if (!interested) {
      setDemoMessage("Please select what you would like to discuss.");
      return;
    }

    setDemoLoading(true);

    try {
      // ================================
      // CRM DATA
      // ================================

      const crmData = {
        name: name,
        phone: phone,
        email: email || null,

        domain: null,

        leadstatus: "New Lead",
        leadsource: "website",

        collegename: null,
        location: null,
        category: null,
        graduate: null,
        joinstatus: null,
        lookingfor: interested,
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

      // ================================
      // BACKEND ERROR
      // ================================

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your request.");
      }

      console.log("CRM lead created:", result);

      // ================================
      // SUCCESS
      // ================================

      setDemoMessage(
        result?.message || "Thank you! Our team will contact you shortly.",
      );

      setOk(true);

      // Clear form
      setDemoName("");
      setDemoPhone("");
      setDemoEmail("");
      setInterested("");

      // ================================
      // RETURN TO FORM AFTER 6 SECONDS
      // ================================

      setTimeout(() => {
        setOk(false);
        setDemoMessage("");
      }, 6000);
    } catch (error) {
      console.error("Lead submission error:", error);

      setDemoMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <section className="sec alt" id="consultation">
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
              Talk to us before you decide
            </h2>

            <p>
              Have a question about the hackathon, an internship or a course?
              Book a free consultation and our team will guide you. You can also
              call us on +91 980 306 1234.
            </p>

            <ul className="ck2">
              <li style={{ color: "#C4D1EE" }}>
                Course suitability and career paths
              </li>

              <li style={{ color: "#C4D1EE" }}>
                Internship and hackathon guidance
              </li>

              <li style={{ color: "#C4D1EE" }}>
                Clear answers before you enrol
              </li>
            </ul>
          </div>

          {ok ? (
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  marginBottom: 8,
                }}
              >
                🎉
              </div>

              <h3
                style={{
                  fontSize: 26,
                  marginBottom: 8,
                }}
              >
                Thank you! ✅
              </h3>

              <p>
                Our team will contact you shortly to schedule your free
                consultation.
              </p>

              <p
                style={{
                  fontSize: 13,
                  opacity: 0.7,
                  marginTop: 12,
                }}
              >
                This form will be available again shortly...
              </p>
            </div>
          ) : (
            <form onSubmit={handleConsultationSubmit}>
              {/* NAME */}

              <input
                required
                type="text"
                placeholder="Full name"
                value={demoName}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z\s]/g, "")
                    .replace(/\s+/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

                  setDemoName(value);
                }}
              />

              {/* MOBILE */}

              <input
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Mobile number"
                value={demoPhone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                  setDemoPhone(value);
                }}
              />

              {/* EMAIL */}

              <input
                type="email"
                placeholder="Email (optional)"
                value={demoEmail}
                onChange={(e) => {
                  setDemoEmail(e.target.value);
                }}
              />

              {/* INTEREST */}

              <select
                required
                value={interested}
                onChange={(e) => {
                  setInterested(e.target.value);
                }}
              >
                <option value="" disabled>
                  What would you like to discuss?
                </option>

                <option value="Nexila Hackathon 2026">
                  Nexila Hackathon 2026
                </option>

                <option value="Internship Program">Internship Program</option>

                <option value="Courses and training">
                  Courses and training
                </option>

                <option value="Corporate training">Corporate training</option>

                <option value="Something else">Something else</option>
              </select>

              {/* ERROR / RESPONSE MESSAGE */}

              {demoMessage && (
                <div
                  style={{
                    marginTop: 10,
                    padding: "10px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                >
                  {demoMessage}
                </div>
              )}

              {/* SUBMIT */}

              <button
                className="btn cta"
                type="submit"
                disabled={demoLoading}
                style={{
                  opacity: demoLoading ? 0.7 : 1,
                  cursor: demoLoading ? "not-allowed" : "pointer",
                }}
              >
                {demoLoading ? "Submitting..." : "Request Free Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <Topbar />

      <Header />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <div className="hgrid">
            <div>
              <div className="bc">
                <a href="/">Home</a> / Contact us
              </div>

              <div className="tag">We would love to hear from you</div>

              <h1
                style={{
                  marginTop: 8,
                  fontSize: "clamp(32px,5vw,52px)",
                }}
              >
                Contact <span>Us</span>
              </h1>

              <p>
                Questions about a course, an internship or the hackathon? Reach
                our team by phone, email or WhatsApp, or visit us in West
                Tambaram, Chennai.
              </p>

              <div className="row">
                <a className="btn cta" href="tel:+919803061234">
                  Call Now
                </a>

                <a
                  className="btn ghost"
                  href="https://wa.me/919803061234"
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="gl">
              <h3>Reach us</h3>

              {CONTACT_DETAILS.map((item) => (
                <div className="cr" key={item.title}>
                  <span className="gi2">{item.icon}</span>

                  <div>
                    <small>{item.title}</small>

                    {item.links.map((link) => (
                      <a
                        key={link.text}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http") ? "noopener" : undefined
                        }
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec alt">
        <div className="wrap">
          <div className="rev-head">
            <div>
              <div className="tag">Google Reviews</div>

              <h2 className="h2">What our learners say</h2>

              <p className="sub">
                See what students and learners have to say about Nexila
                Technologies.
              </p>
            </div>

            <div className="live">Google Reviews</div>
          </div>

          <div className="grid g3">
            <div className="card rev">
              <div className="who">
                <div className="av">R</div>
                <span>Rithikka Varshini</span>
              </div>
              <div className="star">★★★★★</div>
              <p>
                I sincerely thank the entire team for providing me with this
                valuable internship opportunity. Throughout the internship, I
                gained practical knowledge of Cloud Computing and AWS through
                well-structured hands-on sessions. The learning materials and
                guidance provided by the mentors made even complex topics easy
                to understand. I especially enjoyed working on real-time tasks
                such as creating IAM users, launching EC2 instances, and
                deploying a Linux web application.
              </p>
            </div>

            <div className="card rev">
              <div className="who">
                <div className="av">N</div>
                <span>Nalini Lokeshkumar</span>
              </div>
              <div className="star">★★★★★</div>

              <p>
                I had a great learning experience at Nexila Technologies while
                completing the Full Stack Python course. The trainers explained
                concepts clearly with practical examples, making it easy to
                understand both frontend and backend development. The hands-on
                projects and assignments helped me improve my coding and
                problem-solving skills.
              </p>
            </div>

            <div className="card rev">
              <div className="who">
                <div className="av">R</div>
                <span>Raziya Begum</span>
              </div>
              <div className="star">★★★★★</div>
              <p>
                I had a very good learning experience at Nexila Technologies.
                The Data Analytics course is well-organized and easy to
                understand. The trainers explain every topic clearly with
                practical examples. The hands-on projects and assignments helped
                me build confidence. The staff are supportive and always ready
                to clear doubts. The placement guidance and interview
                preparation are also helpful. I recommend this institute to
                anyone who wants to learn Data Analytics.{" "}
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 28,
            }}
          >
            <a
              className="btn outl"
              href="https://share.google/YXbXZivGjBjjmfGsZ"
              target="_blank"
              rel="noopener"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="sec">
        <div className="wrap">
          <div>
            <div className="tag">Find us</div>

            <h2 className="h2">Find us on Google Map</h2>

            <p className="sub">
              Visit Nexila Technologies in West Tambaram, Chennai.
            </p>
          </div>

          <div className="mapg">
            <div className="mapc">
              <div className="mapph">
                <div>
                  📍
                  <span>Nexila Technologies, West Tambaram</span>
                </div>
              </div>

              <iframe
                title="Nexila Technologies on Google Maps"
                src="https://www.google.com/maps?q=Nexila+Technologies+West+Tambaram+Chennai+600045&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="card">
              <div className="ico">📍</div>

              <h3>Nexila Technologies</h3>

              <p style={{ marginBottom: 18 }}>
                West Tambaram, Chennai - 600045
                <br />
                Tamil Nadu, India
              </p>

              <div
                className="row"
                style={{
                  flexDirection: "column",
                }}
              >
                <a
                  className="btn cta"
                  href="https://maps.app.goo.gl/XGk8e9hpmrD6n3tR8"
                  target="_blank"
                  rel="noopener"
                  style={{ textAlign: "center" }}
                >
                  Open in Google Maps
                </a>

                <a
                  className="btn outl"
                  href="https://share.google/YXbXZivGjBjjmfGsZ"
                  target="_blank"
                  rel="noopener"
                  style={{ textAlign: "center" }}
                >
                  View us on Google
                </a>

                <a
                  className="btn outl"
                  href="tel:+919803061234"
                  style={{ textAlign: "center" }}
                >
                  Call before you visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec alt">
        <div className="wrap">
          <div>
            <div className="tag">FAQs</div>

            <h2 className="h2">Contact and enquiry questions</h2>

            <p className="sub">Quick answers before you get in touch.</p>
          </div>

          <FAQSection />
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
      {/* FREE CONSULTATION */}
      <Consultation />
      <DemoPopup />
      <Footer />
    </>
  );
}

export default Contact;
