"use client";

import { useState } from "react";
const API_URL = "http://localhost:5000/api/leads/create-public";

const TAMIL_NADU_DISTRICTS = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kancheepuram",
  "Kanniyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const CURRENT_STATUSES = [
  "Graduate - Job Seeker",
  "Working Professional - Technical",
  "Working Professional - Non-Technical",
  "College Student - Final Year",
  "College Student - (1st - Pre Final Year)",
];

const PROGRAM_TYPES = [
  "Internship",
  "Course",
  "Project Guidance",
  "Project with Internship",
  "Others",
];

const JOINING_TIMELINES = ["With In Week", "With In Month", "Immediately"];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  graduate: "",
  qualificationOther: "",
  collegename: "",
  collegeRegisterId: "",
  category: "",
  lookingfor: "",
  domain: "",
  location: "",
  joinstatus: "",
};

const getOptionLabel = (item) => {
  if (typeof item === "string") return item;

  return item?.t ?? item?.name ?? item?.label ?? item?.value ?? "";
};

export default function EnquiryForm({
  courses = [
    "Full Stack - Python",
    "Full Stack - Java",
    "Full Stack - MERN",
    "Full Stack - MERN",
    "Cloud Computing - AWS",
    "React JS",
    "AWS & DevOps",
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Data Analytics",
    "Power BI",
    "Tableau",
    "DevOps",
    "Software Testing",
    "Cloud Computing - Azure",
    "Cloud Computing - GCP",
    "Mobile App Development",
    "Finance",
    "Digital Marketing",
    "Others",
  ],
  colleges = [
    "A.V.C.College (Autonomous)",
    "A.V.S. College of Science",
    "Aalim Muhammed Salegh College of Engineering",
    "Aarupadai Veedu Institute of Technology",
    "Adhiparasakthi College of Science",
    "Adhiparasakthi",
    "Adithya Institute of Technology",
    "Agarchand Manmull Jain College (A.M. Jain College)",
    "Agni College of Technology",
    "Alpha Arts And Science College",
    "Alpha College of Engineering",
    "Amrita Vishwa Vidyapeetham",
    "Anand Institute of Higher Technology",
    "Anjalai Ammal Mahalingam Engineering College",
    "Anna University Regional Campus",
    "Anna University",
    "Annai Therasai Arts And science College",
    "Annai Veilankanni's College of Engineering",
    "Apollo Arts and Science College",
    "Arasu Engineering College",
    "Asan Memorial College of Arts And Science",
    "As-Salam College of Engineering and Technology",
    "Auxilium College of Arts and Science for Women",
    "Auxilium College",
    "AVC College of Engineering",
    "AVS Engineering College",

    "B.S. Abdur Rahman Crescent University (BSACIST)",
    "Bannari Amman Institute of Technology (BIT)",
    "Bharath University",
    "Bharathidasan College of Arts and Science",
    "Bharathidasan University",
    "Bishop Hebbur College (Autonomous)",

    "C. Abdul Hakeem College of Engineering and Technology",
    "CARE College of Engineering",
    "Chennai Institute of Technology (CIT)",
    "Coimbatore Institute of Management and Technology",
    "Coimbatore Institute of Technology (CIT)",

    "D.K.M College for Women",
    "DG Vaishnav College",
    "Dhaanish Ahmed College of Engineering",
    "Dhanalakshmi College of Engineering",
    "Dhanalakshmi Srinivasan Engineering College",
    "Dr. Ambedkar Government Arts College",
    "Dr. M.G.R. Janaki College of Arts and Science for Women",
    "Dr. Mahalingam College of Engineering and Technology",
    "Dr. MGR University",
    "Dr. N.G.P. Arts and Science College",
    "Dr. N.G.P. Institute of Technology",

    "Easwari Engineering College",
    "Einstein College of Engineering",
    "Erode Arts College (Autonomous)",
    "Erode Sengunthar Engineering College",
    "Erode Vidya Sangam Sri Vasavi College",
    "Ethiraj College for Women",
    "Excel Engineering College",

    "Fatima College",
    "Francis Xavier Engineering College",

    "G.K.M. College of Engineering and Technology",
    "Ganadipathy Tulsi's Engineering College",
    "Government College of Engineering",
    "Government Vellore Institute of Technology",
    "Guru Nanak College",

    "Hindustan College Of Arts And Science",
    "Hindustan Institute of Technology and Science (HITS)",
    "Hindustan University",
    "Hindusthan College of Engineering and Technology",
    "Hindusthan Institute of Technology",
    "Holy Cross College for Women(Autonomous)",
    "Holy Cross College",

    "Indra Ganesan College of Engineering",
    "Info Institute of Engineering",
    "Islamaiah Women's Arts and Science College",
    "Islamiah College",

    "J.J.College of Arts and science",
    "Jamal Mohammed College",
    "Jeppiaar Engineering College",
    "Jeppiaar Institute of Technology",
    "Jerusalem College of Engineering",

    "K. Ramakrishnan College of Engineering",
    "K. Ramakrishnan College of Technology",
    "K.C.G. College of Technology",
    "K.S.R. College of Engineering (KSR)",
    "K.S.R. Institute for Engineering and Technology (KSR)",
    "K.S.Rangasamy College of Technology (KSR)",
    "Kalasalingam Academy of Research and Education",
    "Kalasalingam University",
    "Karpagam Arts And Science College",
    "Karpagam College of Engineering",
    "Karpagam Institute of Technology",
    "Karunya Institute of Technology and Sciences",
    "Karuppana Mariappan College",
    "KCG College of Technology",
    "Kingston Engineering College",
    "KLN College of Engineering",
    "KLN College of Information Technology",
    "Knowledge Institute of Technology (KIOT)",
    "Kongu Arts and Science College",
    "Kongu College of Arts and Science",
    "Kongu Engineering College (KEC)",
    "Kongunadu College of Engineering and Technology",
    "KPR College of Arts Science and Research",
    "KPR Institute of Engineering and Technology (KPRIET)",
    "Kumaraguru College of Technology (KCT)",

    "Lady Doak College",
    "Loyola College",

    "M.A.M. College of Engineering",
    "M.A.M. School of Engineering",
    "M.O.P Vaishnav College For Women",
    "M.P. Nachimuthu M. Jaganathan Engineering College",
    "M.S. University, Tirunelveli",
    "Madha Engineering College (MEC)",
    "Madha Institute of Engineering and Technology",
    "Madras Christian College (Autonomous)",
    "Madras Christian College (MCC)",
    "Madura College",
    "Madurai Kamaraj University",
    "Mahalakshmi College of Arts and Science",
    "Mahendra Engineering College",
    "Mahendra Institute of Technology",
    "Mass College of Engineering",
    "Meenakshi Ammal Arts And Science College",
    "Meenakshi College for Women",
    "Meenakshi College of Engineering",
    "Meenakshi Sundararajan Engineering College",
    "Mepco Schlenk Engineering College",
    "MOP Vaishnav College for Women",

    "Nandha Arts and Science College",
    "Nandha College of Technology (NCT)",
    "Nandha Engineering College (NEC)",
    "National College",
    "National Engineering College",
    "National Institute of Technology (NIT)",
    "Navarasam Arts and Science College for Women",
    "Nehru Institute of Engineering and Technology",
    "New Prince Shri Bhavani Arts And Science College",
    "New Prince Shri Bhavani College of Engineering and Technology",
    "Oxford Engineering College",

    "P.S.G College of Arts and Science (PSGCAS)",
    "Paavai Engineering College",
    "Pachaiyappa's College",
    "Panimalar Engineering College (PEC)",
    "Panimalar Institute of Technology (PIT)",
    "Park College of Engineering Technology",
    "Pattammal Alagesan College Of Arts And Science",
    "PERI Institute of Technology",
    "Periyar Maniammai Institute of Science and Technology",
    "PET Engineering College",
    "Presidency College",
    "Prince Dr. K. Vasudevan College of Engineering and Technology",
    "Prince Shri Venkateshwara Arts and Science College",
    "Prince Shri Venkateshwara Padmavathy Engineering College",
    "PRIST University",
    "PSG College of Technology (PSGCT)",
    "PSG Institute of Technology and Applied Research (PSG iTech)",
    "PSN College of Engineering and Technology",
    "PSN Institute of Technology and Science",
    "PSNA College of Engineering and Technology",
    "PSR Engineering College",

    "Quaid-e-Millet College",
    "Quaid-e-Millet Government Arts College for Women",
    "Queen Mary's College",

    "R.V.S College Of Arts And Science",
    "Raja Rajeswari Engineering College",
    "Rajalakshmi Engineering College (REC)",
    "Rajalakshmi Institute of Technology (RIT)",
    "Ramco Institute of Technology",
    "Rathinam College of Arts and Science (RCAS)",
    "RMD Engineering College",
    "RMK Engineering College",

    "S.A. Engineering College",
    "S.D.N.B Vaishnav College For Women",
    "S.K.R. Engineering College",
    "S.R.M Arts and Science College",
    "SACS MAVMM Engineering College",
    "Sardar Raja College of Engineering",
    "SASTRA Deemed University",
    "Sasurie College of Engineering",
    "Sathyabama Institute of Science and Technology",
    "Sathyabama University",
    "Saveetha Engineering College",
    "SCAD College of Engineering and Technology",
    "Shanmuga Arts Science Technology Research Academy (SASTRA)",
    "Shree Venkateshwara Hi-Tech Engineering College",
    "SIVET College",
    "SNS Academy",
    "SNS College of Engineering",
    "SNS College of Technology (SNSCT)",
    "Sona College of Technology",
    "Sree Amman Arts and Science College",
    "Sree Saraswathi Thyagaraja College",
    "Sree Sastha Institute of Engineering and Technology",
    "Sri Eshwar College of Engineering",
    "Sri Krishna College of Engineering and Technology (SKCET)",
    "Sri Krishna Engineering College",
    "Sri Krishna Institute of Technology",
    "Sri Lakshmi Ammal Engineering College",
    "Sri Ramakrishna Engineering College (SREC)",
    "Sri Ramakrishna Institute of Technology",
    "Sri Ramakrishna Mission Vidyalaya Arts and Science (Autonomous)",
    "Sri Sai Ram Engineering College",
    "Sri Sai Ram Institute of Technology",
    "Sri Sairam Engineering College",
    "Sri Shanmugha College of Engineering and Technology",
    "Sri Sivasubramaniya Nadar College of Engineering",
    "Sriram College Of Arts and Science",
    "SRM Arts and Science College",
    "SRM Institute of Science and Technology, Kattankulathur (SRMIST)",
    "SRM Institute of Science and Technology (SRMIST)",
    "SRM TRP Engineering College",
    "SRM University, Kattankulathur",
    "SRM University",
    "SRM Valliammai Engineering College (SRM VEC)",
    "SSN College of Engineering (SSN)",
    "St. Joseph's College of Engineering",
    "St. Joseph's Institute of Technology",
    "St.Joseph college of Arts And Science",
    "St.Joseph College",
    "Stella Maris College",
    "Surya Engineering College",

    "T.J. Institute of Technology",
    "Tagore College of Arts & Science",
    "Tagore Engineering College",
    "Thangavelu Engineering College",
    "Thanthai Periyar Government Institute of Technology",
    "The American College",
    "The New College",
    "Thiagarajar College of Engineering (TCE)",
    "Thiagarajar College",
    "Thiagarajar Polytechnic College",
    "Thirukkoilur College of Arts And Science",
    "Thiruthangal Nadar College",
    "Tirupathur Arts and Science College",

    "University of Madras (Madras University)",

    "Valliammal College For Women",
    "Vel Tech",
    "Velalar College of Engineering and Technology",
    "Velammal College of Engineering and Technology",
    "Velammal Engineering College",
    "Velammal Institute of Technology",
    "Vellalar College for Women",
    "Vellore Institute of Technology (VIT)",
    "Vels University",
    "Vidyasagar Women's College",
    "Vinayaka Mission's Kirupananda Variyar Engineering College",
    "Voarhees College",
    "VSB College of Engineering Technical Campus",
    "VSB Engineering College",
  ],
  qualifications = [
    "B.A.",
    "B.Com",
    "B.Com (Computer Applications)",
    "B.B.A.",
    "B.C.A.",
    "B.Sc.",
    "B.Sc. Computer Science",
    "B.Sc. Information Technology",
    "B.Sc. Data Science",
    "B.Sc. Artificial Intelligence",
    "B.Sc. Computer Applications",
    "B.E.",
    "B.E. Computer Science and Engineering",
    "B.E. Information Technology",
    "B.E. Artificial Intelligence and Data Science",
    "B.E. Artificial Intelligence and Machine Learning",
    "B.E. Computer Science and Business Systems",
    "B.E. Cyber Security",
    "B.E. Data Science",
    "B.Tech",
    "B.Tech Computer Science and Engineering",
    "B.Tech Information Technology",
    "B.Tech Artificial Intelligence",
    "B.Tech Artificial Intelligence and Data Science",
    "B.Tech Data Science",
    "B.Tech Information Systems",
    "M.A.",
    "M.Com",
    "M.B.A.",
    "M.C.A.",
    "M.Sc.",
    "M.Sc. Computer Science",
    "M.Sc. Information Technology",
    "M.Sc. Data Science",
    "M.Sc. Artificial Intelligence",
    "M.E.",
    "M.Tech",
    "Ph.D.",
    "Other",
  ],
}) {
  const [formData, setFormData] = useState({ ...EMPTY_FORM });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const updateField = (name, value) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleNameChange = (value) => {
    const formatted = value
      .replace(/[^A-Za-z\s]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^\s+/, "")
      .split(" ")
      .map((word) =>
        word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : "",
      )
      .join(" ");

    updateField("name", formatted);
  };

  const handlePhoneChange = (value) => {
    updateField("phone", value.replace(/\D/g, "").slice(0, 10));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    const name = formData.name.trim().replace(/\s+/g, " ");
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const qualification =
      formData.graduate === "Other"
        ? formData.qualificationOther.trim()
        : formData.graduate;

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      alert("Please enter a valid name using letters and spaces only.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const emailRegex =
      /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!qualification) {
      alert("Please select or enter your qualification.");
      return;
    }

    const requiredFields = [
      ["collegename", "Please enter your college name."],
      ["category", "Please select your current status."],
      ["lookingfor", "Please select your program type."],
      ["domain", "Please select your field of interest."],
      ["location", "Please enter your city."],
      ["joinstatus", "Please select your joining timeline."],
    ];

    for (const [field, message] of requiredFields) {
      if (!String(formData[field] || "").trim()) {
        alert(message);
        return;
      }
    }

    const crmData = {
      name,
      phone,
      email,
      graduate: qualification,
      collegename: formData.collegename.trim(),
      collegeRegisterId: formData.collegeRegisterId.trim(),
      category: formData.category,
      lookingfor: formData.lookingfor,
      domain: formData.domain,
      location: formData.location.trim(),
      joinstatus: formData.joinstatus,

      leadstatus: "New Lead",
      leadsource: "Enquiry Form",

      internshipduration: null,
      collegenameOther: undefined,
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

    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(crmData),
      });

      const result = await response.json();

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || "Unable to submit your enquiry.");
      }

      setSubmittedData({
        ...crmData,
        nexilaID: result?.data?.nexilaID,
      });

      // Clear the form after successful CRM submission.
      setFormData({ ...EMPTY_FORM });
      setShowSuccess(true);
    } catch (error) {
      console.error("Enquiry submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Could not connect to the server. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const courseOptions = courses.map(getOptionLabel).filter(Boolean);

  const collegeOptions = colleges.map(getOptionLabel).filter(Boolean);

  const qualificationOptions = qualifications
    .map(getOptionLabel)
    .filter(Boolean);

  return (
    <main className="nex-enquiry-page">
      <section className="nex-enquiry-layout">
        <aside className="nex-enquiry-intro">
          <a href="/" className="nex-enquiry-brand">
            <img
              src="/nextextlogo.jpeg"
              alt="Nexila Technologies"
              className="nex-enquiry-logo"
            />
          </a>

          <span className="nex-enquiry-eyebrow">
            Welcome to Nexila Technologies
          </span>

          <h1>Enquiry Form</h1>

          {/* <div className="nex-enquiry-benefits">
            <div>
              <span className="nex-enquiry-check">✓</span>
              Guidance from our team
            </div>
            <div>
              <span className="nex-enquiry-check">✓</span>
              Programs matched to your goals
            </div>
            <div>
              <span className="nex-enquiry-check">✓</span>
              Classroom and online learning options
            </div>
          </div> */}

          <div className="nex-enquiry-contact">
            <span>Have a question?</span>
            <a href="tel:+919803061234">+91 980 306 1234</a>
          </div>
        </aside>

        <section className="nex-enquiry-form-card">
          {/* <div className="nex-enquiry-form-heading">
            <span className="nex-enquiry-eyebrow">ENQUIRY FORM</span>
            <h2>Let's get to know you</h2>
            <p>Fill in your details and our team will get back to you.</p>
          </div> */}

          <form onSubmit={handleSubmit} noValidate>
            <div className="nex-enquiry-fields">
              <div className="nex-field">
                <label htmlFor="nex-name">Full Name *</label>
                <input
                  id="nex-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                />
              </div>

              <div className="nex-field">
                <label htmlFor="nex-phone">Mobile Number *</label>
                <input
                  id="nex-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  maxLength={10}
                  required
                />
              </div>

              <div className="nex-field">
                <label htmlFor="nex-email">Email Address *</label>
                <input
                  id="nex-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </div>

              <div className="nex-field">
                <label htmlFor="nex-qualification">Qualification *</label>
                <select
                  id="nex-qualification"
                  value={formData.graduate}
                  onChange={(e) => {
                    updateField("graduate", e.target.value);
                    updateField("qualificationOther", "");
                  }}
                  required
                >
                  <option value="">Select qualification</option>
                  {qualificationOptions.map((qualification) => (
                    <option key={qualification} value={qualification}>
                      {qualification}
                    </option>
                  ))}
                </select>
              </div>

              {formData.graduate === "Other" && (
                <div className="nex-field nex-field-full">
                  <label htmlFor="nex-qualification-other">
                    Enter Qualification *
                  </label>
                  <input
                    id="nex-qualification-other"
                    value={formData.qualificationOther}
                    onChange={(e) =>
                      updateField("qualificationOther", e.target.value)
                    }
                    placeholder="Enter your qualification"
                    required
                  />
                </div>
              )}

              <div className="nex-field">
                <label htmlFor="nex-college">College Name *</label>
                <input
                  id="nex-college"
                  list="nex-college-options"
                  autoComplete="organization"
                  placeholder="Search or type college name"
                  value={formData.collegename}
                  onChange={(e) => updateField("collegename", e.target.value)}
                  required
                />
                <datalist id="nex-college-options">
                  {collegeOptions.map((college) => (
                    <option key={college} value={college} />
                  ))}
                </datalist>
                <small>
                  If your college is not available in the list, you can type the
                  college name manually.
                </small>
              </div>

              <div className="nex-field">
                <label htmlFor="nex-collegeRegisterId">
                  Register Number (if applicable)
                </label>

                <input
                  id="nex-collegeRegisterId"
                  name="collegeRegisterId"
                  type="text"
                  placeholder="Enter your register number"
                  value={formData.collegeRegisterId}
                  onChange={(e) =>
                    updateField("collegeRegisterId", e.target.value)
                  }
                />
              </div>

              <div className="nex-field">
                <label htmlFor="nex-status">Current Status *</label>
                <select
                  id="nex-status"
                  value={formData.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  required
                >
                  <option value="">Select current status</option>
                  {CURRENT_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="nex-field">
                <label htmlFor="nex-program">Program Type *</label>
                <select
                  id="nex-program"
                  value={formData.lookingfor}
                  onChange={(e) => updateField("lookingfor", e.target.value)}
                  required
                >
                  <option value="">Select program type</option>
                  {PROGRAM_TYPES.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              <div className="nex-field">
                <label htmlFor="nex-domain">Field of Interest *</label>
                <select
                  id="nex-domain"
                  value={formData.domain}
                  onChange={(e) => updateField("domain", e.target.value)}
                  required
                >
                  <option value="">Select field of interest</option>
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="nex-field">
                <label htmlFor="nex-city">City / District *</label>
                <input
                  id="nex-city"
                  list="nex-city-options"
                  autoComplete="address-level2"
                  placeholder="Search or type your city"
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  required
                />
                <datalist id="nex-city-options">
                  {TAMIL_NADU_DISTRICTS.map((district) => (
                    <option key={district} value={district} />
                  ))}
                </datalist>
                <small>
                  Select a Tamil Nadu district or enter another city.
                </small>
              </div>

              <div className="nex-field nex-field-full">
                <label htmlFor="nex-timeline">Joining Timeline *</label>
                <select
                  id="nex-timeline"
                  value={formData.joinstatus}
                  onChange={(e) => updateField("joinstatus", e.target.value)}
                  required
                >
                  <option value="">When are you planning to join?</option>
                  {JOINING_TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="nex-enquiry-submit"
              disabled={loading}
            >
              {loading ? "Submitting your enquiry..." : "Submit Enquiry"}
              {!loading && <span aria-hidden="true"> →</span>}
            </button>

            <p className="nex-enquiry-privacy">
              By submitting this form, you agree that our team may contact you
              regarding your enquiry.
            </p>
          </form>
        </section>
      </section>

      {showSuccess && submittedData && (
        <div
          className="nex-success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nex-success-title"
        >
          <div className="nex-success-card">
            <div className="nex-success-icon">✓</div>
            <span className="nex-enquiry-eyebrow">ENQUIRY RECEIVED</span>
            <h2 id="nex-success-title">
              Thank you, {submittedData.name.split(" ")[0]}!
            </h2>
            <p>
              Your enquiry has been submitted successfully. Our team will get
              back to you soon.
            </p>

            {submittedData.nexilaID && (
              <div className="nex-success-reference">
                <span>Your enquiry reference</span>
                <strong>{submittedData.nexilaID}</strong>
              </div>
            )}

            <button
              type="button"
              className="nex-enquiry-submit"
              onClick={() => {
                setShowSuccess(false);
                setSubmittedData(null);
                setFormData({ ...EMPTY_FORM });
              }}
            >
              Back to Form
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
