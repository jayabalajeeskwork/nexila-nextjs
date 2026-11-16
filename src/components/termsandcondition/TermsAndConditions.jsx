"use client";



import { Topbar, Header, Footer } from "../../pages/Home";
import { DemoPopup } from "../courses/CourseData";

import "./TermsAndConditions.css";

const TERMS = [
  {
    title: "1. Acceptance of this Agreement",
    content: [
      "By registering for a course, submitting an enquiry, booking a demo, or using the services available on www.nexilatechnologies.com, you agree to these Terms and Conditions.",
      "If you do not agree with these terms, please discontinue using our website and services.",
    ],
  },
  {
    title: "2. User Account and Information",
    content: [
      "You agree to provide accurate and complete information when registering for our courses, internships, workshops, or other services.",
      "If you receive login credentials for any learning platform, they are intended for your personal use only. Sharing your account or credentials with another person is not permitted.",
      "You are responsible for maintaining the confidentiality of your account information and informing us of any unauthorized access.",
    ],
  },
  {
    title: "3. Courses and Training Services",
    content: [
      "Nexila Technologies provides software training, technical education, internship programmes, project training, workshops, and related learning services.",
      "Course content, duration, schedule, delivery mode, trainers, and learning materials may be updated from time to time to maintain the quality and relevance of our programmes.",
      "We reserve the right to make reasonable changes to course content, trainers, schedules, or delivery methods when necessary.",
      "Course materials are provided for educational and learning purposes. Course completion does not guarantee employment, placement, or a particular salary.",
    ],
  },
  {
    title: "4. Website Usage and Services",
    content: [
      "We grant visitors and registered participants permission to use our website and services for personal, educational, and lawful purposes.",
      "You may access and download permitted learning materials for your own educational use.",
      "You must not reproduce, redistribute, sell, publish, modify, or commercially exploit our website content, course materials, videos, or other intellectual property without prior written permission.",
      "You must not misuse our website, attempt unauthorized access, distribute malicious software, or interfere with the operation of our services.",
    ],
  },
  {
    title: "5. Intellectual Property Rights",
    content: [
      "Unless otherwise stated, the website design, branding, logos, course materials, training content, documents, videos, and other resources belong to Nexila Technologies or their respective rights holders.",
      "Your registration does not transfer ownership of any intellectual property to you.",
      "Unauthorized copying, distribution, reproduction, or commercial use of our intellectual property is prohibited.",
    ],
  },
  {
    title: "6. Fees and Payments",
    content: [
      "Course, internship, workshop, and other programme fees will be communicated before registration or payment.",
      "Participants are responsible for checking the programme details, applicable fees, duration, and payment information before completing a transaction.",
      "Payments made through third-party payment providers are subject to the respective provider's terms and conditions.",
      "Please contact Nexila Technologies for payment-related queries, corrections, or assistance.",
      "Any applicable cancellation or refund conditions communicated at the time of registration will apply.",
    ],
  },
  {
    title: "7. Use of Participant Information",
    content: [
      "We may use the information provided by participants to manage registrations, provide training, communicate schedules, offer support, and share relevant programme updates.",
      "We will handle personal information in accordance with our Privacy Policy.",
      "Photographs, videos, or testimonials may be used for promotional purposes where appropriate authorization or consent has been obtained.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "We make reasonable efforts to maintain accurate website information and reliable services. However, we do not guarantee uninterrupted or error-free access.",
      "Nexila Technologies shall not be responsible for temporary website downtime, technical interruptions, third-party service failures, or circumstances beyond our reasonable control.",
      "We are not responsible for indirect losses arising from the use or inability to use our website or services, to the extent permitted by applicable law.",
      "We do not guarantee specific academic results, employment opportunities, salary packages, or career outcomes.",
    ],
  },
  {
    title: "9. Termination and Suspension",
    content: [
      "We reserve the right to suspend or terminate access to our website, learning resources, or services if a participant violates these Terms and Conditions, engages in misconduct, shares account credentials, or misuses our services.",
      "Where appropriate, we may notify the participant before taking such action.",
      "Any rights or obligations that are intended to continue after termination will remain applicable.",
    ],
  },
  {
    title: "10. Indemnity",
    content: [
      "You agree to take responsibility for claims, losses, or damages arising from your unauthorized use of our website, misuse of our services, infringement of third-party rights, or violation of these Terms and Conditions, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "11. External Links",
    content: [
      "Our website may contain links to third-party websites, applications, or services. These links are provided for convenience.",
      "Nexila Technologies does not control or accept responsibility for the content, privacy practices, or policies of external websites. Users should review the applicable terms and policies of those services.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    content: [
      "We reserve the right to modify or update these Terms and Conditions when necessary.",
      "Updated terms will be published on this page. Continued use of our website or services after such updates constitutes acceptance of the revised terms, subject to applicable law.",
    ],
  },
  {
    title: "13. Governing Law and Jurisdiction",
    content: [
      "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.",
      "Subject to applicable law, courts having jurisdiction in Chennai, Tamil Nadu, India, shall have jurisdiction over disputes arising from these terms.",
    ],
  },
  {
    title: "14. Contact Information",
    content: [
      "If you have questions regarding these Terms and Conditions, please contact Nexila Technologies.",
      "Email: info@nexilatechnologies.com",
      "Website: www.nexilatechnologies.com",
      "Location: West Tambaram, Chennai, Tamil Nadu – 600045.",
    ],
  },
];

function openDemo(event) {
  event.preventDefault();

  window.dispatchEvent(
    new CustomEvent("nx-open", {
      detail: "demo",
    })
  );
}

export default function TermsAndConditions() {
  return (
    <>
      <Topbar />
      <Header />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-wrap">
            <div className="legal-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              Terms & Conditions
            </div>

            <span className="legal-tag">LEGAL INFORMATION</span>

            <h1>
              Terms & <span>Conditions</span>
            </h1>

            <p>
              Please read these terms carefully before using Nexila
              Technologies' website, courses, internships, and services.
            </p>
          </div>
        </section>

        <section className="legal-content-section">
          <div className="legal-wrap legal-layout">
            <article className="legal-document">
              <div className="legal-intro">
                <h2>Terms and Conditions</h2>
                <p>
                  Welcome to Nexila Technologies. These terms explain
                  the conditions governing your access to and use of
                  our website and services.
                </p>
              </div>

              {TERMS.map((section, index) => (
                <section className="legal-section" key={index}>
                  <h3>{section.title}</h3>

                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <div className="legal-contact">
                <h3>Need clarification?</h3>
                <p>
                  Our team is happy to help with questions about
                  our services and terms.
                </p>
                <a href="mailto:info@nexilatechnologies.com">
                  info@nexilatechnologies.com
                </a>
              </div>

              <div className="legal-related">
                <span>Related policy</span>
                <a href="/privacy-policy">
                  Read our Privacy Policy →
                </a>
              </div>
            </article>

            <aside className="legal-sidebar">
              <div className="legal-sidebar-card">
                <span className="legal-sidebar-icon">📄</span>
                <h3>Learn with Nexila</h3>
                <p>
                  Explore software courses, practical projects,
                  and internship programmes.
                </p>

                <a href="/courses" className="legal-sidebar-link">
                  Explore Courses →
                </a>
              </div>

              <div className="legal-sidebar-card legal-sidebar-dark">
                <span className="legal-small-tag">FREE DEMO</span>
                <h3>Ready to start your IT journey?</h3>
                <p>
                  Connect with our team and experience a demo class.
                </p>

                <a
                  href="#contact"
                  className="legal-demo-btn"
                  onClick={openDemo}
                >
                  Book Free Demo →
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <a
        className="wa"
        href="https://wa.me/919803061234"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 WhatsApp
      </a>

      <Footer />
      <DemoPopup />
    </>
  );
}
