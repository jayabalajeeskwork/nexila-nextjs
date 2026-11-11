"use client";

import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "../../lib/router-compat";
import { Topbar, Header, Footer } from "../../pages/Home";
import { DemoPopup } from "../courses/CourseData";
// Blog article content is preserved from the supplied HTML source.
const BLOGS = [
  {
    slug: "ai-in-software-testing-skills-testers-need",
    title: "How AI Is Changing Software Testing: Skills Every Tester Needs",
    seoTitle: "How AI Is Changing Software Testing | Nexila Blog",
    cat: "Testing & QA",
    date: "2026-10-06",
    read: 7,
    course: "selenium",
    e: "🧪",
    g: "#0f766e",
    excerpt:
      "Self-healing scripts, AI-generated test cases and smarter test selection are reshaping QA. Here is what changes and what to learn.",
    desc: "See how AI is changing software testing, from self-healing scripts to test generation, and the skills testers should build to stay job-ready.",
    kw: [
      "AI in software testing",
      "self-healing test scripts",
      "automation testing course in Chennai",
      "AI testing tools",
      "software testing skills",
    ],
    intro:
      "Software teams release faster than ever, and testing has to keep up. Artificial intelligence is now part of that story, helping testers write, run and maintain tests with less manual effort. This guide explains what AI changes in software testing, where it falls short and which skills to build, whether you are a fresher or a manual tester planning a move into automation.",
    sections: [
      {
        id: "why-traditional",
        h: "Why traditional test automation struggles",
        p: [
          "Classic automation relies on fixed locators such as IDs and XPath. When a developer changes a page, the script fails even though the application still works, and testers spend their time repairing scripts instead of finding real defects.",
        ],
        ul: [
          "Flaky tests that pass and fail without a code change",
          "High maintenance effort after every UI update",
          "Slow test creation for long end-to-end flows",
          "Limited coverage because every scenario is written by hand",
          "Late feedback when regression suites take hours",
        ],
      },
      {
        id: "ai-helps",
        h: "Where AI helps in testing",
        p: [
          "AI in testing is a group of techniques, including machine learning, language models and computer vision, applied to different stages of the testing lifecycle.",
        ],
        ul: [
          "Self-healing locators: when an element changes, the tool compares several attributes and updates the script instead of failing.",
          "Test generation: generative AI drafts test scenarios and edge cases from requirements, for a tester to review.",
          "Test prioritisation: models use change history and past failures to run the most relevant tests first.",
          "Visual testing: computer vision flags real layout problems rather than harmless pixel differences.",
          "Failure analysis: related failures are grouped so root causes are found faster.",
        ],
      },
      {
        id: "limits",
        h: "Limits and risks of AI in testing",
        p: [
          "AI is useful, not magic. Generated tests can be wrong or redundant, so a person must review them. Models learn from history, so teams with little test data may see weaker results at first, and when a self-healing script picks the wrong element it can be confusing to debug.",
        ],
        note: "A test that checks the wrong behaviour is worse than no test, so always review AI-generated tests.",
      },
      {
        id: "replace",
        h: "Will AI replace testers?",
        p: [
          "No, but the role is changing. AI handles repetitive work such as updating locators and drafting boilerplate tests. It does not understand business context, user needs or risk the way an experienced tester does.",
          "Testers who use AI as a helper and focus on test strategy, exploratory testing and review will stay in demand.",
        ],
      },
      {
        id: "skills",
        h: "Skills to build for AI-era testing",
        ul: [
          "Testing fundamentals: test design, boundary analysis and exploratory testing",
          "Programming basics in Java or Python",
          "Core automation tools such as Selenium, plus API testing with Postman",
          "CI/CD awareness with Git and Jenkins",
          "AI literacy: writing prompts, checking output and knowing the limits",
          "Analytical thinking: question results instead of trusting them blindly",
        ],
      },
      {
        id: "start",
        h: "How to start using AI in your testing",
        ol: [
          "Pick your biggest pain point, such as flaky tests or slow regression.",
          "Run a small pilot on one module for a few weeks.",
          "Measure maintenance time and failure rates before and after.",
          "Keep humans in the loop and review everything AI produces.",
          "Train the team on the tools.",
          "Scale up only what shows clear gains.",
        ],
      },
      {
        id: "learn",
        h: "Learn testing with hands-on practice at Nexila",
        p: [
          "At Nexila Technologies in Tambaram, Chennai, our [[Selenium course|course:selenium]] starts from testing fundamentals and moves into automation with practical exercises. You can also browse our [[full list of courses|courses]] or [[talk to a counsellor|contact]] to see which path fits your background.",
        ],
      },
    ],
    takeaways: [
      "Fixed locators are why traditional scripts break.",
      "Self-healing scripts cut maintenance and false failures.",
      "Generative AI drafts test cases, but people must review them.",
      "Prioritisation shortens feedback in CI/CD pipelines.",
      "AI will not replace testers, but it changes the role.",
      "Fundamentals, Java or Python and Selenium still come first.",
    ],
    faq: [
      [
        "How is AI used in software testing?",
        "AI is used for self-healing locators, generating test cases from requirements, prioritising tests, visual comparison and grouping failures to find root causes faster.",
      ],
      [
        "What are self-healing test scripts?",
        "They are scripts that adapt when a locator changes. The tool compares several attributes of the element, finds the most likely match and updates the script instead of failing.",
      ],
      [
        "Will AI replace software testers?",
        "No. AI handles repetitive work, but testers are still needed for strategy, exploratory testing, risk analysis and reviewing AI output.",
      ],
      [
        "What should a beginner learn first for testing?",
        "Start with testing fundamentals, then basic Java or Python, then Selenium and API testing. Add AI tools once the basics are solid.",
      ],
    ],
  },

  {
    slug: "mern-stack-developer-roadmap-for-beginners",
    title: "MERN Stack Developer Roadmap for Beginners (2026 Guide)",
    seoTitle: "MERN Stack Developer Roadmap for Beginners | Nexila",
    cat: "Full Stack",
    date: "2026-10-02",
    read: 8,
    course: "mern-full-stack-training",
    e: "🧩",
    g: "#2563EB",
    excerpt:
      "A clear step-by-step path from HTML and JavaScript to React, Node.js, Express and MongoDB, with projects to build at each stage.",
    desc: "A step-by-step MERN stack roadmap for beginners: HTML, CSS, JavaScript, React, Node.js, Express and MongoDB, with projects to build along the way.",
    kw: [
      "MERN stack roadmap",
      "MERN stack developer for beginners",
      "MERN full stack course in Chennai",
      "learn React and Node.js",
      "full stack developer roadmap",
    ],
    intro:
      "The MERN stack lets you build complete web applications using one language, JavaScript, across the database, server and user interface. If you are a beginner, the hard part is not the tools but the order in which to learn them. This roadmap breaks the journey into clear steps, with projects to practise at each stage.",
    sections: [
      {
        id: "what-is-mern",
        h: "What is the MERN stack?",
        p: [
          "MERN stands for MongoDB, Express.js, React and Node.js. Each part has a job in a web application.",
        ],
        ul: [
          "MongoDB: a NoSQL database that stores your data",
          "Express.js: a web framework for building servers and APIs on Node.js",
          "React: a library for building user interfaces and single-page apps",
          "Node.js: a runtime that runs JavaScript on the server",
        ],
      },
      {
        id: "step-1",
        h: "Step 1: HTML, CSS and JavaScript",
        p: [
          "Do not skip the basics. React and Node.js make far more sense once the fundamentals are solid.",
        ],
        ul: [
          "HTML: structure, forms, tables and semantic tags",
          "CSS: the box model, flexbox, grid and responsive layouts",
          "JavaScript: variables, functions, arrays, objects, the DOM and events",
          "Modern JavaScript (ES6): arrow functions, destructuring, promises and async/await",
        ],
      },
      {
        id: "step-2",
        h: "Step 2: React for the front end",
        ul: [
          "Components, props and state",
          "Hooks such as useState and useEffect",
          "Routing for single-page applications",
          "Forms and calling APIs",
          "State management as your apps grow",
        ],
      },
      {
        id: "step-3",
        h: "Step 3: Node.js and Express for the back end",
        ul: [
          "How Node.js works and how to use npm packages",
          "Building REST APIs with Express: routes, requests and responses",
          "Middleware, input validation and error handling",
          "Authentication with tokens such as JWT",
        ],
      },
      {
        id: "step-4",
        h: "Step 4: MongoDB for data",
        ul: [
          "Collections and documents, and how NoSQL differs from SQL",
          "Create, read, update and delete operations",
          "Schema design and validation",
          "Indexing and aggregation basics",
        ],
      },
      {
        id: "step-5",
        h: "Step 5: Build projects",
        p: [
          "Projects are where the stack comes together. Aim to build at least two full applications, with login, CRUD features and deployment.",
        ],
        ul: [
          "A task manager with user accounts",
          "A blog or notes app with comments",
          "A small e-commerce store with a cart",
          "A job board with search and filters",
        ],
      },
      {
        id: "timeline",
        h: "How long does it take to learn MERN?",
        p: [
          "It depends on your starting point and how much you practise. At Nexila, the MERN course runs for 120 days with 90 hours of class time, and we share the exact schedule for each batch.",
        ],
      },
      {
        id: "learn",
        h: "Learn MERN with trainers and projects",
        p: [
          "Our [[MERN Full Stack training|course:mern-full-stack-training]] in Tambaram, Chennai covers HTML, CSS, JavaScript, React, Node.js, Express and MongoDB, with a real application built at the end. See the [[course page|course:mern-full-stack-training]] for the full syllabus, or [[ask our counsellor|contact]] if you are unsure where to begin.",
        ],
      },
    ],
    takeaways: [
      "Learn HTML, CSS and JavaScript before React.",
      "Use React for the interface and Node.js with Express for the server.",
      "MongoDB stores your data as documents.",
      "Build at least two complete projects.",
      "Deployment is part of the skill, not an extra.",
    ],
    faq: [
      [
        "Do I need to know JavaScript before learning MERN?",
        "Yes, a working knowledge of JavaScript helps a lot. Beginners can learn it as the first step, which is how the Nexila syllabus begins.",
      ],
      [
        "What is the difference between MERN and MEAN?",
        "MERN uses React for the front end, while MEAN uses Angular. The database, server framework and runtime are the same.",
      ],
      [
        "Can freshers learn the MERN stack?",
        "Yes. With a structured path and regular practice, freshers can learn MERN and build full applications.",
      ],
      [
        "Which jobs can I apply for after learning MERN?",
        "Roles such as Full Stack Developer, Front-End Developer, Back-End Developer or Software Engineer.",
      ],
    ],
  },

  {
    slug: "python-for-beginners-what-to-learn-first",
    title: "Python for Beginners: What to Learn First and How to Practise",
    seoTitle: "Python for Beginners: Where to Start | Nexila Blog",
    cat: "Programming",
    date: "2026-09-27",
    read: 6,
    course: "python-course",
    e: "🐍",
    g: "#1d4ed8",
    excerpt:
      "Starting Python? Here is what to study first, the projects worth building and the directions it can take your career.",
    desc: "Starting Python? Learn what to study first, which projects to build and how to practise so you can move into automation, data or web development.",
    kw: [
      "Python for beginners",
      "learn Python",
      "Python course in Tambaram",
      "Python projects for beginners",
      "Python career paths",
    ],
    intro:
      "Python is often the first language people learn because its syntax is readable and it is used in automation, data, web development and testing. The challenge for beginners is knowing what to learn first and how to practise without getting stuck. This guide gives you a simple order to follow.",
    sections: [
      {
        id: "why-python",
        h: "Why start with Python?",
        p: [
          "Python reads close to plain English, so you spend less time fighting syntax and more time learning how to solve problems. The same language can take you towards several careers, so the effort is not wasted if your goals change.",
        ],
      },
      {
        id: "core",
        h: "Core concepts to learn first",
        ul: [
          "Variables, data types and input/output",
          "Conditions and loops",
          "Functions and modules",
          "Lists, tuples, dictionaries and sets",
          "File handling and error handling",
          "Object-oriented basics: classes and objects",
        ],
      },
      {
        id: "practise",
        h: "How to practise effectively",
        ul: [
          "Write code every day, even for 30 minutes",
          "Type the examples yourself instead of copying",
          "Solve small problems before big projects",
          "Read error messages carefully, they usually tell you what is wrong",
          "Rebuild the same program in a different way",
        ],
      },
      {
        id: "projects",
        h: "Beginner project ideas",
        ul: [
          "A number guessing game",
          "A to-do list that saves to a file",
          "An expense tracker",
          "A simple quiz app",
          "A script that renames or organises files",
        ],
      },
      {
        id: "direction",
        h: "Choose a direction after the basics",
        ul: [
          "Automation: scripts that save time on repeated tasks",
          "Data analytics: Python with libraries for analysis and charts",
          "Web development: Python back ends with web frameworks",
          "Software testing: Python for test automation",
        ],
      },
      {
        id: "mistakes",
        h: "Common beginner mistakes",
        ul: [
          "Watching tutorials without writing code",
          "Jumping to advanced topics too early",
          "Giving up when an error appears",
          "Learning many languages at once",
        ],
      },
      {
        id: "learn",
        h: "Learn Python with guided practice at Nexila",
        p: [
          "Our [[Python course|course:python-course]] in Tambaram, Chennai takes you from the basics to practical programs with trainer support. If you are weighing Python against other options, our [[course guide|courses]] and [[counsellors|contact]] can help you decide.",
        ],
      },
    ],
    takeaways: [
      "Learn the core concepts in order before frameworks.",
      "Practise a little every day.",
      "Build small projects early.",
      "Choose a direction such as automation, data, web or testing.",
      "Do not give up at the first error.",
    ],
    faq: [
      [
        "Is Python good for beginners?",
        "Yes. Its readable syntax makes it one of the easiest languages to start with, and it is used across many fields.",
      ],
      [
        "How long does it take to learn Python basics?",
        "It varies with practice time. Many learners can grasp the basics in a few weeks of regular practice, and then build skills through projects.",
      ],
      [
        "Do I need maths to learn Python?",
        "Basic programming needs only basic logic. Data science and machine learning use more maths, which you can learn later.",
      ],
      [
        "What can I do after learning Python?",
        "You can move into automation, data analytics, web development or software testing.",
      ],
    ],
  },

  {
    slug: "aws-vs-azure-vs-gcp-which-cloud-course-to-start",
    title: "AWS vs Azure vs GCP: Which Cloud Course Should You Start With?",
    seoTitle: "AWS vs Azure vs GCP: Which Course to Start | Nexila",
    cat: "Cloud & DevOps",
    date: "2026-09-22",
    read: 7,
    course: "aws-certification-training",
    e: "☁️",
    g: "#0369a1",
    excerpt:
      "Three major cloud platforms, one first course to choose. Compare them and pick based on your goals and background.",
    desc: "Compare AWS, Azure and GCP for beginners, what each is known for, and how to choose your first cloud course based on your goals and background.",
    kw: [
      "AWS vs Azure vs GCP",
      "best cloud computing course",
      "cloud course for beginners",
      "AWS training in Chennai",
      "cloud computing career",
    ],
    intro:
      "Cloud skills are in demand across almost every IT role, but beginners often get stuck on the first question: AWS, Azure or Google Cloud? The honest answer is that the core ideas are shared, so the best first choice depends on your goals. This guide compares the three and shows how to decide.",
    sections: [
      {
        id: "cloud-basics",
        h: "What cloud computing gives you",
        p: [
          "Cloud platforms provide on-demand servers, storage, databases and networking over the internet, so teams can build and scale applications without owning hardware. All three major platforms offer these building blocks under different names.",
        ],
      },
      {
        id: "compare",
        h: "AWS, Azure and GCP at a glance",
        table: {
          head: ["Platform", "Often chosen for", "Good first step if"],
          rows: [
            [
              "AWS",
              "A very wide range of services and broad adoption across companies",
              "You want the most general starting point",
            ],
            [
              "Azure",
              "Organisations that already use Microsoft products",
              "Your target employers use the Microsoft ecosystem",
            ],
            [
              "GCP",
              "Data, analytics and AI services, and container tooling",
              "You lean towards data or machine learning work",
            ],
          ],
        },
        p: [
          "Market share and job listings change over time, so check current openings in your city before you decide.",
        ],
      },
      {
        id: "how-to-choose",
        h: "How to choose your first cloud course",
        ul: [
          "Look at job listings you want and note which platform they mention",
          "Consider your background: Microsoft-heavy workplaces often prefer Azure",
          "Think about your direction: DevOps, data or general cloud administration",
          "Start with one platform and learn it well before adding another",
        ],
      },
      {
        id: "common-foundation",
        h: "The foundation is shared",
        p: [
          "Whichever you pick, you will need the same fundamentals, which transfer between platforms.",
        ],
        ul: [
          "Linux basics and the command line",
          "Networking concepts such as IP addresses, DNS and firewalls",
          "Identity and access management",
          "Compute, storage and database services",
          "Monitoring and cost awareness",
        ],
      },
      {
        id: "devops",
        h: "Where DevOps fits in",
        p: [
          "Once you know one cloud, DevOps skills such as Git, CI/CD pipelines, containers and infrastructure as code help you deploy and manage applications automatically. Many learners follow a cloud course with a DevOps course.",
        ],
      },
      {
        id: "learn",
        h: "Cloud courses at Nexila",
        p: [
          "We offer [[AWS Training and Certification|course:aws-certification-training]], [[AWS with DevOps|course:aws-devops]], [[Azure|course:azure]] and [[Google Cloud Platform|course:gcp]] in Tambaram, Chennai. Not sure which one fits? [[Talk to our counsellor|contact]] before you decide.",
        ],
      },
    ],
    takeaways: [
      "The three platforms share the same core ideas.",
      "Choose based on your goals, your background and local job listings.",
      "Learn one platform well before adding another.",
      "Linux, networking and security are common to all.",
      "DevOps skills are a natural next step.",
    ],
    faq: [
      [
        "Which cloud platform is best for beginners?",
        "AWS is a common starting point because of its broad adoption, but Azure and GCP are good choices depending on your goals and employer targets.",
      ],
      [
        "Can I learn more than one cloud?",
        "Yes. The fundamentals transfer, so learning a second platform later is much easier.",
      ],
      [
        "Do I need coding for cloud?",
        "Basic scripting helps, but many cloud roles start with services and administration. DevOps roles use more scripting.",
      ],
      [
        "Is DevOps different from cloud computing?",
        "Cloud is the infrastructure; DevOps is the practice of building, testing and deploying software on it automatically. They work together.",
      ],
    ],
  },

  {
    slug: "how-to-choose-the-right-it-course-after-graduation",
    title: "How to Choose the Right IT Course After Graduation",
    seoTitle: "How to Choose the Right IT Course | Nexila Blog",
    cat: "Career Tips",
    date: "2026-09-17",
    read: 7,
    course: null,
    e: "🧭",
    g: "#7c3aed",
    excerpt:
      "Too many courses, too little clarity? Use this practical guide to match your interests, background and goals with the right path.",
    desc: "Not sure which IT course to pick? Use this practical guide to match your interests, background and goals with the right software training path.",
    kw: [
      "how to choose an IT course",
      "best IT course after graduation",
      "IT courses in Chennai",
      "career guidance for graduates",
      "software training institute Tambaram",
    ],
    intro:
      "After graduation, the choice of IT course can feel overwhelming. Full stack, data, testing, cloud, AI: every option sounds promising. The right choice is the one that matches your interests, your current skills and the work you want to do, not the one with the loudest advertising. Use these steps to decide.",
    sections: [
      {
        id: "start-with-you",
        h: "Start with yourself",
        p: ["Before comparing courses, answer a few honest questions."],
        ul: [
          "Do I enjoy building things, analysing data, or finding problems?",
          "How comfortable am I with coding today?",
          "Do I want to work on websites, data, cloud systems or quality?",
          "How much time can I give each week?",
          "What kind of role do I want in one or two years?",
        ],
      },
      {
        id: "match",
        h: "Match your interests to a path",
        table: {
          head: ["If you enjoy", "Consider"],
          rows: [
            [
              "Building websites and apps",
              "Full Stack (MERN, Java Full Stack), Web Development, React",
            ],
            [
              "Numbers, charts and insights",
              "Data Analytics, Power BI, Tableau, Data Science",
            ],
            [
              "Finding bugs and checking quality",
              "Software Testing (Selenium, Manual Testing)",
            ],
            [
              "Servers, systems and automation",
              "Cloud (AWS, Azure) and DevOps",
            ],
            ["Automating repetitive work", "Python, RPA (UiPath, Blue Prism)"],
            [
              "New technology and models",
              "Artificial Intelligence, Data Science",
            ],
          ],
        },
      },
      {
        id: "level",
        h: "Beginner or experienced: pick the right level",
        p: [
          "Beginners should look for a course that starts with fundamentals and includes practice and projects. Experienced professionals can choose focused courses that build on what they already know. A good institute will assess your background before recommending a level.",
        ],
      },
      {
        id: "evaluate",
        h: "What to check in any course",
        ul: [
          "A clear syllabus you can read before you enrol",
          "Hands-on practice and projects, not only theory",
          "Trainers with practical experience",
          "Small batches where you can ask questions",
          "Support with resume, LinkedIn and interviews",
          "Classroom and live online options if you need flexibility",
        ],
      },
      {
        id: "mistakes",
        h: "Mistakes to avoid",
        ul: [
          "Choosing only because of salary headlines",
          "Copying a friend's choice without checking fit",
          "Joining without seeing a syllabus or demo",
          "Expecting a course alone to guarantee a job",
        ],
      },
      {
        id: "learn",
        h: "Get free counselling at Nexila",
        p: [
          "Try the interest matcher on our [[home page|home]], read the [[course list|courses]] or [[book a free demo and counselling session|contact]]. Our team explains course suitability, duration and career paths before you enrol.",
        ],
      },
    ],
    takeaways: [
      "Start with your interests and current skills.",
      "Match them to a path, then compare courses.",
      "Look for syllabus, practice, trainers and support.",
      "Attend a demo before joining.",
      "No course can replace your own effort.",
    ],
    faq: [
      [
        "Which IT course is best after graduation?",
        "There is no single best course. The best one matches your interests, current skills and target role.",
      ],
      [
        "Can non-IT graduates join IT courses?",
        "Yes. Many courses begin with the basics, and a counsellor can suggest a suitable starting point for non-IT backgrounds.",
      ],
      [
        "Should I join a demo class first?",
        "Yes. A demo lets you see the teaching style and ask questions before you commit.",
      ],
      [
        "How do I know if a course is right for me?",
        "Read the syllabus, check for practice and projects, and talk to a counsellor about duration and career paths.",
      ],
    ],
  },

  {
    slug: "it-internship-in-chennai-tips-for-college-students",
    title:
      "IT Internship in Chennai: How College Students Can Get the Most Out of It",
    seoTitle: "IT Internship in Chennai for Students: Tips | Nexila",
    cat: "Career Tips",
    date: "2026-09-12",
    read: 6,
    course: "internship",
    e: "🚀",
    g: "#c2410c",
    excerpt:
      "What a good internship includes, how to choose one and how to turn live project work into a stronger resume.",
    desc: "Planning an IT internship in Chennai? Learn how to choose one, what to expect and how to turn live project experience into a stronger resume.",
    kw: [
      "IT internship in Chennai",
      "internship for college students",
      "software internship in Tambaram",
      "internship projects for students",
      "internship certificate",
    ],
    intro:
      "An internship is often the bridge between classroom learning and a first job. It shows you how real teams work, gives you something concrete to put on your resume and helps you decide which direction suits you. This guide explains how to choose an IT internship in Chennai and how to make the most of it.",
    sections: [
      {
        id: "why",
        h: "Why an internship matters",
        ul: [
          "You work on real, live problems instead of textbook exercises",
          "You learn how teams, tools and deadlines work",
          "You build a project you can talk about in interviews",
          "You get feedback from people in the industry",
        ],
      },
      {
        id: "good-internship",
        h: "What a good internship includes",
        ul: [
          "A live project with clear goals",
          "A mentor who gives guidance and feedback",
          "Regular reviews so you know how you are doing",
          "Access to the tools and platforms used in industry",
          "A certificate and, ideally, a recommendation letter",
        ],
      },
      {
        id: "choose",
        h: "How to choose an internship",
        ul: [
          "Check that the domain matches your interests, such as web development, data or cloud",
          "Ask what project you will work on",
          "Ask who will mentor you",
          "Confirm the duration and batch timings",
          "Check eligibility, including your year of study and degree",
        ],
      },
      {
        id: "prepare",
        h: "How to prepare before you start",
        ul: [
          "Revise the basics of the language or tool you will use",
          "Set up your laptop and a code editor",
          "Write down two or three goals for the internship",
          "Learn to use Git for version control",
        ],
      },
      {
        id: "during",
        h: "How to make the most of it",
        ul: [
          "Ask questions early instead of waiting until you are stuck",
          "Keep notes of what you build and learn",
          "Share progress with your mentor regularly",
          "Finish the project even if it is small",
        ],
      },
      {
        id: "after",
        h: "After the internship",
        ul: [
          "Add the project and tools to your resume",
          "Update your LinkedIn profile with what you built",
          "Keep the project code in a public repository",
          "Ask your mentor for feedback and a recommendation letter",
        ],
      },
      {
        id: "learn",
        h: "The Nexila internship program",
        p: [
          "Our [[internship program|internship]] in West Tambaram runs for 2 to 8 weeks with flexible batches on weekdays or weekends. It is open to any graduate from 1st year to final year, with a live project guided by a mentor from the software industry, and a certificate and recommendation letter on completion. Domains include web development, Java and Python, data, cloud, DevOps, full stack, machine learning and AI, and finance. [[Apply on the internship page|internship]] or [[ask us a question|contact]].",
        ],
      },
    ],
    takeaways: [
      "Choose a domain that matches your interests.",
      "Look for a live project, a mentor and regular reviews.",
      "Prepare the basics before day one.",
      "Document what you build.",
      "Use the experience in your resume and interviews.",
    ],
    faq: [
      [
        "Can first-year students do an IT internship?",
        "Yes. Nexila's internship accepts students from 1st year to final year, and any graduate stream can apply.",
      ],
      [
        "How long is an IT internship?",
        "Durations vary. The Nexila internship runs for 2 to 8 weeks with flexible batches.",
      ],
      [
        "Will I get a certificate?",
        "Yes, you receive a certificate of completion and a recommendation letter on successful completion.",
      ],
      [
        "Do I need coding experience?",
        "A basic understanding of software concepts and a willingness to learn is expected. Your mentor will guide you through the project.",
      ],
    ],
  },

  {
    slug: "how-to-prepare-for-a-college-hackathon",
    title: "How to Prepare for a College Hackathon: A Guide for Student Teams",
    seoTitle: "How to Prepare for a College Hackathon | Nexila Blog",
    cat: "Career Tips",
    date: "2026-09-08",
    read: 6,
    course: "hackathon",
    e: "🏆",
    g: "#be185d",
    excerpt:
      "Form the right team, pick a feasible idea, divide the work and present with confidence. A practical guide for first-time participants.",
    desc: "Preparing for a hackathon? Learn how to form a team, pick an idea, divide work and present your project, with tips for AI and programming themes.",
    kw: [
      "college hackathon tips",
      "how to prepare for a hackathon",
      "hackathon for students in Tamil Nadu",
      "hackathon project ideas",
      "AI hackathon",
    ],
    intro:
      "A hackathon is a fast, hands-on challenge where small teams turn an idea into a working project. It is one of the best ways to practise teamwork, build a portfolio piece and meet other developers. If it is your first one, a little preparation makes a big difference.",
    sections: [
      {
        id: "what",
        h: "What happens in a hackathon",
        p: [
          "Teams choose or receive a problem, build a prototype and present it to judges. Some events run in stages, with online rounds followed by an in-person final, and judges usually look at the idea, the technical work and the presentation.",
        ],
      },
      {
        id: "team",
        h: "Build a balanced team",
        p: [
          "Teams of two to four work well. Try to cover different strengths.",
        ],
        ul: [
          "A strong coder for the core logic",
          "Someone comfortable with the front end or design",
          "Someone who handles data, testing or documentation",
          "A team member who leads the presentation",
        ],
      },
      {
        id: "idea",
        h: "Pick an idea you can finish",
        ul: [
          "Solve a real problem that people recognise",
          "Keep the scope small enough to demo",
          "Use technologies your team already knows",
          "For AI themes, focus on one clear use case instead of many features",
        ],
      },
      {
        id: "plan",
        h: "Plan your build",
        ol: [
          "Write the problem and the user in one sentence.",
          "List the must-have features and cut the rest.",
          "Split tasks and agree on who does what.",
          "Set up the repository and share access early.",
          "Build the core flow first and polish later.",
          "Reserve time to test and rehearse.",
        ],
      },
      {
        id: "present",
        h: "Present with confidence",
        ul: [
          "Start with the problem, then show the solution",
          "Demo the working flow instead of reading slides",
          "Explain what you built and why you chose it",
          "Be honest about limits and next steps",
          "Practise within the time limit",
        ],
      },
      {
        id: "mistakes",
        h: "Common mistakes",
        ul: [
          "Trying to build too many features",
          "Starting without a clear problem",
          "Leaving the demo until the last minute",
          "Not testing on another machine",
        ],
      },
      {
        id: "learn",
        h: "Try Nexila Hackathon 2026",
        p: [
          "Nexila Hackathon 2026 is a tech challenge for college students, with teams of two to four, an AI and programming theme, online rounds, offline finals and a ₹50,000 prize pool. Visit the [[hackathon page|hackathon]] to see the stages and register your interest, or [[ask our team|contact]] a question.",
        ],
      },
    ],
    takeaways: [
      "Form a balanced team of two to four.",
      "Choose a small, finishable idea.",
      "Build the core flow first.",
      "Demo a working product.",
      "Practise your presentation.",
    ],
    faq: [
      [
        "Do I need experience to join a hackathon?",
        "No. Many participants join to learn. A basic project and a good team can go a long way.",
      ],
      [
        "How big should a hackathon team be?",
        "Two to four members is common. Nexila Hackathon 2026 uses teams of 2 to 4.",
      ],
      [
        "What makes a hackathon project win?",
        "A clear problem, a working demo, sound technical work and a confident presentation.",
      ],
      [
        "Can I use AI tools in a hackathon project?",
        "Follow the event rules. Where AI is the theme, choose one clear use case and explain how it works.",
      ],
    ],
  },
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
const fmtDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
};

const COURSELIST = [
  ["selenium", "Selenium Testing"],
  ["mern-full-stack-training", "MERN Full Stack"],
  ["python-course", "Python Programming"],
  ["aws-devops", "AWS with DevOps"],
  ["data-science", "Data Science & AI"],
  ["power-bi", "Power BI & Tableau"],
].map(([slug, name]) => ({ slug, name }));

const SNAP_EXTRA = {
  internship: {
    name: "IT Internship Program",
    link: ["internship"],
    facts: [
      ["Duration", "2 – 8 weeks"],
      ["Batches", "Flexible, weekdays or weekends"],
      ["Open to", "Any graduate, 1st to final year"],
      ["Format", "Live project with a mentor"],
      ["On completion", "Certificate and recommendation letter"],
    ],
  },
  hackathon: {
    name: "Nexila Hackathon 2026",
    link: ["hackathon"],
    facts: [
      ["Theme", "AI & Programming"],
      ["Team size", "2 – 4 members"],
      ["Format", "Online rounds, offline finals"],
      ["Prize pool", "₹50,000"],
      ["Eligibility", "College students"],
    ],
  },
  none: {
    name: "Find your course",
    link: ["courses"],
    facts: [
      ["Courses", "35 across 10 tracks"],
      ["Levels", "Beginner to advanced"],
      ["Mode", "Classroom + Live online"],
      ["Free demo", "Available"],
      ["Counselling", "Free career guidance"],
    ],
  },
};

function getSnapshot(post) {
  if (post.course === "internship" || post.course === "hackathon")
    return SNAP_EXTRA[post.course];
  if (!post.course) return SNAP_EXTRA.none;
  const course = COURSELIST.find((item) => item.slug === post.course);
  return {
    name: `${course?.name || "Course"} Training`,
    link: ["course", post.course],
    facts: [
      ["Mode", "Classroom + Live online"],
      ["Level", "Beginner to advanced"],
      ["Duration", "Shared by our counsellor"],
      ["Free demo", "Available"],
      ["Batches", "Small, focused batches"],
    ],
  };
}

function routeFor(target) {
  const [route, slug] = target.split(":");
  if (route === "course") return `/courses/${slug}`;
  if (route === "courses") return "/courses";
  if (route === "contact") return "/contact-us";
  if (route === "internship")
    return "/it-internship-for-students-tambaram-chennai";
  if (route === "hackathon") return "/nexila-hackathon-2026";
  if (route === "about") return "/about-us";
  if (route === "blogs") return "/blogs";
  return "/";
}

function RichText({ text }) {
  const navigate = useNavigate();
  const parts = [];
  const regex = /\[\[(.+?)\|(.+?)\]\]/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const label = match[1];
    const target = match[2];
    parts.push(
      <a
        key={match.index}
        className="lnk"
        href={routeFor(target)}
        onClick={(event) => {
          event.preventDefault();
          navigate(routeFor(target));
        }}
      >
        {label}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function BlogThumb({ post, big = false }) {
  return (
    <div
      className={`bth${big ? " big" : ""}`}
      style={{ "--g": `linear-gradient(150deg, ${post.g}, #0B1B3A)` }}
    >
      <span>{post.e}</span>
    </div>
  );
}
function DemoRequestForm({ post }) {
  const [submitted, setSubmitted] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoCourse, setDemoCourse] = useState(
    COURSELIST.find((course) => course.slug === post.course)?.name || "",
  );
  const [demoLoading, setDemoLoading] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    if (demoLoading) return;

    const name = demoName.trim().replace(/\s+/g, " ");
    const phone = demoPhone.trim();
    const email = demoEmail.trim();
    const interested = demoCourse.trim();

    // NAME VALIDATION
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      alert("Name should contain only letters and spaces.");
      return;
    }

    const formattedName = name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // PHONE VALIDATION
    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // OPTIONAL EMAIL VALIDATION
    if (email !== "") {
      const emailRegex =
        /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
    }

    // COURSE VALIDATION
    if (!interested) {
      alert("Please select the interested course.");
      return;
    }

    try {
      setDemoLoading(true);

      const crmData = {
        name: formattedName,
        phone,
        email: email || null,
        domain: interested,
        leadstatus: "New Lead",
        leadsource: "website",

        collegename: null,
        location: null,
        category: null,
        graduate: null,
        joinstatus: null,
        lookingfor: null,
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

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit demo request.");
      }

      setSubmitted(true);
      setDemoName("");
      setDemoPhone("");
      setDemoEmail("");
    } catch (error) {
      console.error("Demo lead submission error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <div className="sfc bdf">
      <div className="tag">Free demo class</div>
      <h3>Request a free demo</h3>

      {submitted ? (
        <div className="demo-success">
          <h3>Thank you! ✅</h3>
          <p>Our team will call you shortly to confirm your demo slot.</p>
        </div>
      ) : (
        <form onSubmit={handleDemoSubmit}>
          <input
            required
            name="name"
            placeholder="Full name *"
            value={demoName}
            onChange={(e) =>
              setDemoName(
                e.target.value
                  .replace(/[^A-Za-z\s]/g, "")
                  .replace(/\s+/g, " ")
                  .replace(/^\s+/, "")
                  .split(" ")
                  .map((word) =>
                    word
                      ? word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                      : "",
                  )
                  .join(" "),
              )
            }
          />

          <input
            required
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            placeholder="10-digit mobile number *"
            value={demoPhone}
            onChange={(e) =>
              setDemoPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
          />

          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            value={demoEmail}
            onChange={(e) => setDemoEmail(e.target.value)}
          />

          <select
            required
            name="interestedCourse"
            value={demoCourse}
            onChange={(e) => setDemoCourse(e.target.value)}
            aria-label="Interested course"
          >
            <option value="" disabled>
              Interested course
            </option>

            {COURSELIST.map((course) => (
              <option key={course.slug} value={course.name}>
                {course.name}
              </option>
            ))}

            <option value="IT Internship Program">IT Internship Program</option>
          </select>

          <button className="btn cta" type="submit" disabled={demoLoading}>
            {demoLoading ? "Submitting..." : "Book My Free Demo"}
          </button>

          <small>
            Free demo is available both offline (Tambaram) and online.
            <br />
            You can also call us on +91 980 306 1234.
          </small>
        </form>
      )}
    </div>
  );
}

function Comments({ slug }) {
  const key = `nx_comments_${slug}`;
  const api = typeof window !== "undefined" ? window.NX_COMMENTS_API || "" : "";
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", text: "", site: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let live = true;
    if (api) {
      fetch(`${api}?post=${encodeURIComponent(slug)}`)
        .then((response) => response.json())
        .then((data) => {
          if (live) setComments(Array.isArray(data) ? data : []);
        })
        .catch(() => {});
    } else {
      try {
        const saved = JSON.parse(localStorage.getItem(key) || "[]");
        if (live) setComments(saved);
      } catch {}
    }
    return () => {
      live = false;
    };
  }, [api, key, slug]);

  const update = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));
  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    const name = form.name.trim();
    const text = form.text.trim();
    if (form.site) return;
    if (name.length < 2 || name.length > 60)
      return setError("Please enter your name (2 to 60 characters).");
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      return setError("Please enter a valid email, or leave it blank.");
    if (text.length < 5 || text.length > 1000)
      return setError("Your comment should be between 5 and 1000 characters.");
    if ((text.match(/https?:\/\//g) || []).length > 2)
      return setError("Please include at most two links.");
    setBusy(true);
    const comment = {
      id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      name,
      text,
      date: new Date().toISOString(),
    };
    try {
      if (api) {
        const response = await fetch(api, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            post: slug,
            name,
            email: form.email.trim(),
            text,
          }),
        });
        if (!response.ok) throw new Error("Could not post comment");
        const saved = await response.json();
        if (saved?.id && saved.status !== "pending")
          setComments((current) => [saved, ...current]);
      } else {
        const next = [comment, ...comments];
        setComments(next);
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {}
      }
      setForm({ name: "", email: "", text: "", site: "" });
      setSuccess(true);
    } catch {
      setError("Sorry, your comment could not be posted. Please try again.");
    }
    setBusy(false);
  };

  const when = (value) => {
    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? ""
      : `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  };
  return (
    <section className="cmts" id="comments">
      <h2>Comments ({comments.length})</h2>
      <form onSubmit={submit} noValidate>
        <div className="two">
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name *"
            maxLength={60}
            aria-label="Your name"
          />
          <input
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="Email (optional, never shown)"
            type="email"
            aria-label="Email"
          />
        </div>
        <textarea
          value={form.text}
          onChange={(event) => update("text", event.target.value)}
          placeholder="Share your thoughts or ask a question *"
          rows={4}
          maxLength={1000}
          aria-label="Your comment"
        />
        <input
          className="hp"
          tabIndex={-1}
          autoComplete="off"
          value={form.site}
          onChange={(event) => update("site", event.target.value)}
          aria-hidden="true"
        />
        {error && (
          <div className="cerr" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="cok" role="status">
            Thank you! Your comment has been posted.
          </div>
        )}
        <div className="crow">
          <button className="btn cta" type="submit" disabled={busy}>
            {busy ? "Posting..." : "Post Comment"}
          </button>
          <small>
            {form.text.length}/1000
            {api ? "" : " · Comments are saved in this browser (demo mode)."}
          </small>
        </div>
      </form>
      {comments.length ? (
        <ul className="clist">
          {comments.map((comment) => (
            <li key={comment.id}>
              <span className="av">
                {(comment.name || "?")[0].toUpperCase()}
              </span>
              <div>
                <b>{comment.name}</b> <small>{when(comment.date)}</small>
                <p>{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cempty">
          No comments yet. Be the first to share your thoughts.
        </p>
      )}
    </section>
  );
}

function JourneyTrack() {
  const [active, setActive] = useState(-1);
  const stages = [
    ["📚", "Learn", "Master fundamentals with expert-led sessions."],
    ["🛠️", "Practice", "Solve assignments and build projects."],
    ["🚀", "Intern", "Work on live projects in our internship program."],
    ["🎯", "Get Placed", "Interview with our hiring partners."],
  ];

  const openDemo = (event) => {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("nx-open", { detail: "demo" }));
  };

  return (
    <section className="sec jt-sec">
      <div className="wrap">
        <div className="tag">Your journey</div>
        <h2 className="h2">Your journey with Nexila</h2>
        <p className="sub">
          Four stages that take you from fundamentals to the interview room.
        </p>
        <div className="jt run">
          <i className="fl" />
          {stages.map(([icon, title, description], index) => (
            <button
              key={title}
              className={`js${index <= active ? " on" : ""}`}
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
        <div className="journey-action">
          <a href="#contact" className="btn cta" onClick={openDemo}>
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default function BlogPost({ slug: slugProp }: { slug?: string } = {}) {
  const params = useParams();
  const navigate = useNavigate();
  const slug =
    slugProp || params.slug || "ai-in-software-testing-skills-testers-need";
  const post = useMemo(() => BLOGS.find((item) => item.slug === slug), [slug]);
  const [openFaq, setOpenFaq] = useState(-1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (post) document.title = post.seoTitle;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [post]);

  const openDemo = (event) => {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("nx-open", { detail: "demo" }));
  };
  const jump = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blogs/${slug}`
      : `/blogs/${slug}`;
  const snapshot = post ? getSnapshot(post) : null;
  const related = post
    ? [
        ...BLOGS.filter((item) => item.slug !== slug && item.cat === post.cat),
        ...BLOGS.filter((item) => item.slug !== slug && item.cat !== post.cat),
      ].slice(0, 3)
    : [];

  if (!post)
    return (
      <>
        <Topbar />
        <Header />
        <section className="sec">
          <div className="wrap">
            <h2 className="h2">Article not found</h2>
            <Link to="/blogs" className="btn cta">
              Back to blog
            </Link>
          </div>
        </section>
        <Footer />
        <DemoPopup />
      </> 
    );

  const toc = [
    ...post.sections.map((section) => [section.id, section.h]),
    ["takeaways", "Key takeaways"],
    ["faqs", "FAQs"],
    ["comments", "Comments"],
  ];
  const coursePath =
    snapshot.link[0] === "course"
      ? `/courses/${snapshot.link[1]}`
      : routeFor(snapshot.link[0]);

  return (
    <>
      <Topbar />
      <Header />
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap blog-hero-wrap">
          <div className="bc">
            <Link to="/">Home</Link> / <Link to="/blogs">Blog</Link> /{" "}
            {post.cat}
          </div>
          <span className="cat blog-category">{post.cat}</span>
          <h1 className="blog-title">{post.title}</h1>
          <div className="pmeta">
            <span>✍️ Nexila Technologies Team</span>
            <span>📅 {fmtDate(post.date)}</span>
            <span>⏱ {post.read} min read</span>
          </div>
        </div>
      </section>
      <section className="sec blog-content-section">
        <div className="wrap">
          <div className="bl">
            <article className="art">
              <BlogThumb post={post} big />
              <p className="lead2">
                <RichText text={post.intro} />
              </p>
              <nav className="toc" aria-label="Table of contents">
                <b>In this article</b>
                <ol>
                  {toc.map(([id, heading]) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(event) => {
                          event.preventDefault();
                          jump(id);
                        }}
                      >
                        {heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="asec">
                  <h2>{section.h}</h2>
                  {(section.p || []).map((paragraph, index) => (
                    <p key={index}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  {section.table && (
                    <div className="tw">
                      <table>
                        <thead>
                          <tr>
                            {section.table.head.map((heading) => (
                              <th key={heading}>{heading}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, index) => (
                            <tr key={index}>
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.ul && (
                    <ul>
                      {section.ul.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.ol && (
                    <ol>
                      {section.ol.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  )}
                  {section.note && (
                    <div className="anote">
                      💡 <b>Key advice:</b> {section.note}
                    </div>
                  )}
                </section>
              ))}
              <section id="takeaways" className="asec">
                <div className="tk">
                  <h2>🎯 Key takeaways</h2>
                  <ul>
                    {post.takeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
              <section id="faqs" className="asec">
                <h2>Frequently asked questions</h2>
                {post.faq.map(([question, answer], index) => (
                  <div className="q" key={question}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      aria-expanded={openFaq === index}
                    >
                      {question}
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </button>
                    {openFaq === index && <div>{answer}</div>}
                  </div>
                ))}
              </section>
              <div className="shr">
                <b>Share this article:</b>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(shareUrl);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 1800);
                    } catch {
                      setCopied(false);
                    }
                  }}
                >
                  {copied ? "Copied!" : "Copy link"}
                </button>
              </div>
              <div className="auth">
                <span className="av big">N</span>
                <div>
                  <b>Nexila Technologies Team</b>
                  <small>
                    Software training and career guidance · Tambaram, Chennai
                  </small>
                  <p>
                    The Nexila team trains students, graduates and working
                    professionals in software development, cloud, data, testing
                    and more, with hands-on practice and career support.
                  </p>
                </div>
              </div>
              <Comments slug={slug} />
            </article>
            <aside className="bsd">
              <div className="snap">
                <h3>Course snapshot</h3>
                <div className="snapshot-name">{snapshot.name}</div>
                {snapshot.facts.map(([label, value]) => (
                  <div className="fr" key={label}>
                    <span>{label}</span>
                    <b>{value}</b>
                  </div>
                ))}
                <Link to={coursePath} className="btn cta snapshot-link">
                  {snapshot.link[0] === "course"
                    ? "View course details"
                    : snapshot.link[0] === "internship"
                      ? "View internship details"
                      : snapshot.link[0] === "hackathon"
                        ? "View hackathon details"
                        : "Browse courses"}
                </Link>
              </div>
              <div className="bsticky">
                <DemoRequestForm post={post} />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <JourneyTrack />
      <section className="sec">
        <div className="wrap">
          <div className="tag">Keep reading</div>
          <h2 className="h2">Related articles</h2>
          <div className="grid g3 related-blogs">
            {related.map((item) => (
              <Link
                key={item.slug}
                className="card bcard"
                to={`/blogs/${item.slug}`}
              >
                <BlogThumb post={item} />
                <div className="bbody">
                  <span className="cat">{item.cat}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="bmeta">
                    {fmtDate(item.date)} · {item.read} min read
                  </div>
                </div>
              </Link>
            ))}
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
