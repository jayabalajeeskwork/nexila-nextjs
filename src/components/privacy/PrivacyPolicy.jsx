
"use client";



import { Topbar, Header, Footer } from "../../pages/Home";
import { DemoPopup } from "../courses/CourseData";

import "./PrivacyPolicy.css";

const PRIVACY_SECTIONS = [
  {
    title: "1. Overview",
    content: [
      'Nexila Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit www.nexilatechnologies.com, enquire about our services, register for courses, participate in internships, or interact with us.',
      "We aim to handle your personal information responsibly and transparently. This policy explains what information we collect, why we collect it, and the choices available to you regarding your information.",
    ],
  },
  {
    title: "2. About Us and Our Website",
    content: [
      "Nexila Technologies provides software training, IT courses, internships, practical project training, workshops, and technology-related educational services.",
      "Our website provides information about our programmes, services, registration opportunities, and other educational resources.",
      "Website content and programme information may be updated from time to time. We make reasonable efforts to maintain accuracy but do not guarantee that all information will always be complete or current.",
    ],
  },
  {
    title: "3. Information We Collect",
    content: [
      "We may collect personal information that you voluntarily provide through enquiry forms, registration forms, internship applications, demo bookings, contact forms, and other interactions.",
      "Depending on the service you request, this information may include:",
    ],
    bullets: [
      "Name and contact details.",
      "Email address and mobile number.",
      "College name, educational details, and registration information.",
      "Course, internship, or programme preferences.",
      "Payment-related transaction details and registration records.",
      "Information you voluntarily provide when contacting our team.",
    ],
  },
  {
    title: "4. How We Use Your Information",
    content: [
      "We may use the information collected for the following purposes:",
    ],
    bullets: [
      "To respond to enquiries and demo requests.",
      "To process course, internship, and programme registrations.",
      "To communicate schedules, class updates, and programme information.",
      "To provide customer support and respond to questions.",
      "To maintain student, participant, and enquiry records.",
      "To process and verify payments through applicable payment providers.",
      "To improve our website, services, and user experience.",
      "To share relevant offers, educational updates, and promotional information where permitted.",
      "To comply with applicable legal and regulatory requirements.",
    ],
  },
  {
    title: "5. Sharing of Personal Information",
    content: [
      "Nexila Technologies does not sell your personal information to third parties.",
      "We may share relevant information with trusted service providers who help us operate our website, manage registrations, process payments, communicate with participants, or provide our services.",
      "Such information will be shared only to the extent reasonably necessary for the relevant service or purpose.",
      "We may also disclose information when required by applicable law, legal proceedings, or lawful government requests.",
      "If Nexila Technologies undergoes a merger, acquisition, restructuring, or transfer of business assets, personal information may be transferred as part of that process, subject to applicable legal requirements.",
    ],
  },
  {
    title: "6. Email and Telephone Communication",
    content: [
      "We may contact you through email, telephone, WhatsApp, or other communication channels using the details you provide.",
      "Communications may relate to enquiries, registration confirmations, course schedules, internship details, support requests, and relevant programme updates.",
      "Where promotional communications are sent, you may request to stop receiving them by contacting info@nexilatechnologies.com.",
      "Essential communications relating to your registrations or ongoing services may still be sent where necessary.",
    ],
  },
  {
    title: "7. Payment Information",
    content: [
      "When you register for a paid course, internship, or other programme, you may be directed to a third-party payment gateway.",
      "Payment transactions are subject to the payment provider's security practices and privacy policy.",
      "We may maintain relevant transaction references, payment status, and registration details for accounting, verification, and service-related purposes.",
      "We do not request that you share your payment passwords, OTPs, or card security credentials with our staff.",
    ],
  },
  {
    title: "8. Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies and similar technologies to improve website functionality, understand visitor activity, remember preferences, and analyse website performance.",
      "Cookies are small files stored on your device by your browser.",
      "You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website features.",
      "Where applicable, analytics and advertising technologies may collect information about website interactions in accordance with their respective policies and available consent settings.",
    ],
  },
  {
    title: "9. Automatically Collected Information",
    content: [
      "When you visit our website, certain technical information may be collected automatically. This may include:",
    ],
    bullets: [
      "IP address.",
      "Browser type and version.",
      "Device and operating system information.",
      "Pages visited and links accessed.",
      "Date, time, and duration of visits.",
      "General website usage and diagnostic information.",
    ],
  },
  {
    title: "10. External Links and Third-Party Services",
    content: [
      "Our website may contain links to third-party websites, social media platforms, payment gateways, and other external services.",
      "These services operate independently and may have their own privacy policies and terms of use.",
      "Nexila Technologies is not responsible for the privacy practices or content of third-party websites. We encourage visitors to review their policies before sharing personal information.",
    ],
  },
  {
    title: "11. Course Content and Educational Materials",
    content: [
      "Course content, documents, videos, training materials, and educational resources are provided for learning and guidance purposes.",
      "We may update or modify educational content, training schedules, and learning resources when necessary.",
      "Participants must not distribute, reproduce, or commercially use protected training materials without appropriate authorization.",
    ],
  },
  {
    title: "12. Photographs, Videos, and Testimonials",
    content: [
      "During training sessions, internships, workshops, hackathons, and other events, photographs or videos may be captured for documentation or promotional purposes.",
      "We will seek appropriate authorization or consent before using identifiable participant photographs, videos, or testimonials for promotional purposes.",
      "If you do not want your photographs, videos, or testimonials to be used in our promotional materials, you can contact us at info@nexilatechnologies.com.",
      "We will review such requests and take appropriate action, subject to applicable legal requirements.",
    ],
  },
  {
    title: "13. Copyright and Intellectual Property",
    content: [
      "Unless otherwise indicated, Nexila Technologies owns or has appropriate rights to the content published on its website, including text, graphics, branding, logos, and educational materials.",
      "Website content may be viewed or printed for personal and lawful purposes. Any other reproduction, redistribution, or commercial use requires appropriate permission.",
    ],
  },
  {
    title: "14. Information Security",
    content: [
      "We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, or disclosure.",
      "However, no internet transmission or electronic storage system can be guaranteed to be completely secure. We cannot guarantee absolute security of information transmitted over the internet.",
    ],
  },
  {
    title: "15. Personal Information Corrections",
    content: [
      "If you believe that the personal information we hold about you is inaccurate or incomplete, you may contact us to request a correction.",
      "Please email your request to info@nexilatechnologies.com with sufficient details to help us identify the relevant record.",
    ],
  },
  {
    title: "16. Deleting Personal Information",
    content: [
      "You may contact us to request the deletion of your personal information or account-related records.",
      "We will review and process eligible requests in accordance with applicable laws and our legitimate record-keeping obligations.",
      "Certain information may need to be retained for legal, financial, security, or transaction-related purposes.",
      "For deletion requests, contact info@nexilatechnologies.com.",
    ],
  },
  {
    title: "17. Changes to This Privacy Policy",
    content: [
      "Nexila Technologies may update this Privacy Policy from time to time to reflect changes in our services, website practices, or legal requirements.",
      "Updated versions will be published on this page along with the revised date where applicable.",
      "We encourage visitors to review this page periodically.",
    ],
  },
  {
    title: "18. Contact Us",
    content: [
      "If you have questions, concerns, correction requests, or deletion requests relating to this Privacy Policy or your personal information, please contact us:",
      "Nexila Technologies",
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

export default function PrivacyPolicy() {
  return (
    <>
      <Topbar />
      <Header />

      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-wrap">
            <div className="privacy-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              Privacy Policy
            </div>

            <span className="privacy-tag">YOUR PRIVACY MATTERS</span>

            <h1>
              Privacy <span>Policy</span>
            </h1>

            <p>
              Learn how Nexila Technologies collects, uses, and
              protects your personal information when you use our
              website and services.
            </p>
          </div>
        </section>

        <section className="privacy-content-section">
          <div className="privacy-wrap privacy-layout">
            <article className="privacy-document">
              <div className="privacy-intro">
                <h2>Privacy Policy</h2>

                <p>
                  At Nexila Technologies, we respect your privacy
                  and are committed to handling your personal
                  information responsibly.
                </p>

                <p>
                  This policy applies to visitors, students,
                  participants, applicants, and individuals who
                  interact with our website and services.
                </p>
              </div>

              {PRIVACY_SECTIONS.map((section, index) => (
                <section className="privacy-section" key={index}>
                  <h3>{section.title}</h3>

                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="privacy-contact">
                <h3>Privacy-related questions?</h3>

                <p>
                  Contact our team if you need help with your
                  personal information or privacy requests.
                </p>

                <a href="mailto:info@nexilatechnologies.com">
                  info@nexilatechnologies.com
                </a>
              </div>

              <div className="privacy-related">
                <span>Related document</span>

                <a href="/terms-and-conditions">
                  Read our Terms & Conditions →
                </a>
              </div>
            </article>

            <aside className="privacy-sidebar">
              <div className="privacy-sidebar-card">
                <span className="privacy-sidebar-icon">🔒</span>

                <h3>Your Information Matters</h3>

                <p>
                  We aim to handle your information responsibly
                  and use it for relevant educational and
                  service-related purposes.
                </p>

                <a href="/contact-us">
                  Contact Us →
                </a>
              </div>

              <div className="privacy-sidebar-card privacy-sidebar-dark">
                <span className="privacy-small-tag">
                  NEXILA TECHNOLOGIES
                </span>

                <h3>Build Your Future in IT</h3>

                <p>
                  Explore our software training, internships,
                  and practical learning programmes.
                </p>

                <a href="#contact" onClick={openDemo}>
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
