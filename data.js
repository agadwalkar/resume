/* ═══════════════════════════════════════════════════════════════
   RESUME DATA
   ─────────────────────────────────────────────────────────────
   To add a new Work Experience card, add an object to EXPERIENCE.
   To add a new Internship card, add an object to INTERNSHIPS.

   Card shape:
   {
     title:   "Card Title",
     role:    "Software Engineer II",
     bullets: [
       "Plain text or text with <strong>bold numbers</strong>."
     ],
     tags: [
       { label: "Angular",    type: "framework" },  // teal
       { label: "TypeScript", type: "lang"      },  // purple
       { label: "CI/CD",      type: "devops"    },  // pink
       { label: "Compliance", type: "concept"   },  // sky blue
     ]
   }
═══════════════════════════════════════════════════════════════ */

'use strict';

window.EXPERIENCE = [
  {
    title: "Return With Me",
    role: "Software Engineer II",
    bullets: [
      "Co-developed a cross-platform iOS and Android mobile app enabling in-store associates to process customer returns directly from a handheld device, eliminating dependence on a fixed POS terminal; delivered in under <strong>3 months</strong> as one of a 3-developer, 1-tester team.",
      "Self-taught React Native from scratch to contribute immediately, building multiple screens, reusable components, and unit tests; contributed <strong>82 commits</strong> across the project lifecycle."
    ],
    tags: [
      { label: "React Native", type: "framework" },
      { label: "TypeScript",   type: "lang"      },
      { label: "iOS",          type: "framework" },
      { label: "Android",      type: "framework" }
    ]
  },
  {
    title: "Self Serve Returns",
    role: "Software Engineer III",
    bullets: [
      "Co-developed a customer-facing React Native kiosk application on Android OS enabling shoppers to independently process in-store returns for online purchases without associate assistance; delivered in under <strong>3 months</strong> through close coordination with external hardware vendors as one of two developers on the project."
    ],
    tags: [
      { label: "React Native", type: "framework" },
      { label: "JavaScript",   type: "lang"      },
      { label: "Android",      type: "framework" }
    ]
  },
  {
    title: "In-Store Returns Cloud Migration",
    role: "Software Engineer III",
    bullets: [
      "Managed end-to-end migration of the In-Store Returns UI Application from OneOps to Walmart's cloud-native platform (WCNP), leveraging Docker containers and Kubernetes for scalable container orchestration.",
      "Proactively coded Remote Services (RS) WCNP support ahead of schedule, enabling a focused <strong>6-hour single-store pilot</strong>; the subsequent chain-wide rollout completed in under <strong>30 minutes</strong>.",
      "Introduced CCM configuration flags to safely support cloud-native endpoints alongside legacy infrastructure, enabling zero-downtime production validation and unblocking the backend team's full cloud migration."
    ],
    tags: [
      { label: "Docker",     type: "devops" },
      { label: "Kubernetes", type: "devops" },
      { label: "CCM",        type: "devops" },
      { label: "WCNP",       type: "devops" }
    ]
  },
  {
    title: "Backend Architecture Redesign",
    role: "Software Engineer III",
    bullets: [
      "Redesigned the Node.js backend to enable seamless cross-device compatibility, extending the returns application beyond POS terminals to any standard browser environment via URL-based direct access — a capability that previously did not exist.",
      "Refactored major sections of the Node.js and Angular codebase to support non-POS operation, improving architectural flexibility and reducing coupling to hardware-specific infrastructure."
    ],
    tags: [
      { label: "Node.js",    type: "framework" },
      { label: "Angular",    type: "framework" },
      { label: "Refactoring", type: "concept"  }
    ]
  },
  {
    title: "Backend Refactoring",
    role: "Software Engineer II",
    bullets: [
      "Optimized and refactored refund calculation logic for online-to-in-store returns using Java 8 and Spring Boot, improving computation performance, enhancing accuracy, and reducing overall code complexity."
    ],
    tags: [
      { label: "Java",        type: "lang"      },
      { label: "Spring Boot", type: "framework" }
    ]
  },
  {
    title: "Pharmacy Returns",
    role: "Software Engineer II",
    bullets: [
      "Built the Angular UI flow for pharmacy prescription returns, introducing digital signature validation to meet regulatory requirements for controlled-substance refunds.",
      "Enabled in-store associates to process prescription refunds digitally, replacing a manual cash-mailing process and eliminating significant administrative overhead for pharmacy staff."
    ],
    tags: [
      { label: "Angular",    type: "framework" },
      { label: "JavaScript", type: "lang"      },
      { label: "Compliance", type: "concept"   }
    ]
  },
  {
    title: "Marketplace Tire Returns",
    role: "Software Engineer II",
    bullets: [
      "Integrated with the SPaaS API to generate laser-printer shipping labels for third-party tire returns, enabling the Auto Care Center to process marketplace returns independently as sole developer.",
      "Designed a new print template sized for the smaller tire-label format, increasing hardware flexibility and reducing the manual steps required for associates handling large-item returns."
    ],
    tags: [
      { label: "Angular",         type: "framework" },
      { label: "JavaScript",      type: "lang"      },
      { label: "API Development", type: "concept"   }
    ]
  },
  {
    title: "Instant Refund Flow",
    role: "Software Engineer III",
    bullets: [
      "Developed the first-ever instant refund flow for in-person marketplace purchases, enabling customers to receive immediate refunds without delays as sole developer."
    ],
    tags: [
      { label: "Angular", type: "framework" }
    ]
  },
  {
    title: "Lottery Returns (Regulatory Compliance)",
    role: "Software Engineer III",
    bullets: [
      "Coordinated with executive leadership and external vendors to deliver a regulation-compliant returns flow for lottery tickets; introduced a new on-scan API call not previously implemented in the application, automating the return process to minimize associate intervention."
    ],
    tags: [
      { label: "Compliance",      type: "concept" },
      { label: "API Development", type: "concept" }
    ]
  },
  {
    title: "Returns Inventory Management",
    role: "Software Engineer III",
    bullets: [
      "Maintained and enhanced an Angular web application for item returns inventory spanning three international markets; implemented client-side state preservation to retain user inputs and results across page transitions, reducing unnecessary API calls and improving overall user experience."
    ],
    tags: [
      { label: "Angular", type: "framework" }
    ]
  },
  {
    title: "Marketplace Claims Routing",
    role: "Software Engineer III",
    bullets: [
      "Extended marketplace keep-it functionality by building a claims-routing flow directing non-kept items to claims; proactively identified and resolved multiple pre-existing marketplace return bugs, improving overall returns functionality and integration stability."
    ],
    tags: [
      { label: "Angular", type: "framework" }
    ]
  },
  {
    title: "Legacy System Modernization",
    role: "Software Engineer III",
    bullets: [
      "Led the removal of legacy redirect systems and developed a new configurable fallback flow within the returns application; enabled parallel operation of legacy and new flows for zero-risk rollout, positioning the platform for full legacy retirement and reduced long-term maintenance burden."
    ],
    tags: [
      { label: "Refactoring",    type: "concept" },
      { label: "Technical Debt", type: "concept" }
    ]
  },
  {
    title: "Build Infrastructure &amp; DevOps",
    role: "Software Engineer III",
    bullets: [
      "Led migration of build artifacts from legacy file storage to Artifactory, improving build reliability by <strong>100%</strong>; established a GitHub branching strategy and developed an automated script to detect and intelligently increment version numbers across diverging branches, eliminating manual versioning conflicts and streamlining the release process.",
      "Configured and maintained Looper CI/CD pipelines, including version upgrades that improved pipeline stability and build throughput for the team.",
      "Migrated application logging from Splunk to Open Observe, maintaining full observability continuity during the platform transition with zero gaps in production monitoring coverage.",
      "Provided on-call production issue support, improving team incident response efficiency by <strong>15%</strong> through faster identification and resolution of runtime failures."
    ],
    tags: [
      { label: "CI/CD",        type: "devops" },
      { label: "Artifactory",  type: "devops" },
      { label: "Git",          type: "devops" },
      { label: "Looper",       type: "devops" },
      { label: "Open Observe", type: "devops" }
    ]
  },
  {
    title: "Code Quality Framework",
    role: "Software Engineer II",
    bullets: [
      "Implemented SonarQube for the In-Store Returns UI Application, surfacing unit test coverage metrics on every PR and release build; drove code coverage to <strong>50% of lines covered</strong>, improving code quality visibility across the team and reducing the occurrence of production bugs.",
      "Refactored CCM configuration management by splitting large flag sets and removing outdated entries, reducing total active flags from <strong>46 to 22</strong>, cutting average deployment time by <strong>10 minutes</strong>, and eliminating <strong>401 lines of production code</strong>, <strong>10 unit tests</strong>, and <strong>79 redundant test lines</strong>; CCM configuration updates now complete in approximately <strong>5 seconds</strong> under normal load with zero system crashes."
    ],
    tags: [
      { label: "SonarQube", type: "devops" },
      { label: "CCM",       type: "devops" }
    ]
  },
  {
    title: "Team Leadership &amp; Onboarding",
    role: "Software Engineer II–III",
    bullets: [
      "Onboarded <strong>4 new team members</strong>, building ramp-up documentation and guiding them through the codebase, tooling, and team processes to accelerate time-to-productivity.",
      "Served as the cross-functional liaison between UI/UX, Backend, and Product Management, translating design specs into implementable requirements and coordinating delivery across workstreams."
    ],
    tags: [
      { label: "Mentorship",      type: "concept" },
      { label: "Cross-functional", type: "concept" }
    ]
  }
];

window.INTERNSHIPS = [
  {
    title: "Walmart Global Tech",
    role: "Software Engineer Intern · Jun–Aug 2021 · Reston, VA",
    bullets: [
      "Created a new UI flow using Angular Framework to allow for user feedback about the UI experience.",
      "Reformatted logs to save storage space, allowing for longer retention of logs."
    ],
    tags: [
      { label: "Angular",    type: "framework" },
      { label: "JavaScript", type: "lang"      }
    ]
  },
  {
    title: "ComScore Inc.",
    role: "Data Analyst Intern · Jun–Aug 2018 · Reston, VA",
    bullets: [
      "Created a presentable, user-friendly display for TV market data trends throughout the country, allowing anyone to understand and analyze the raw data easily.",
      "Parsed and formatted raw data in Python to be aggregated and stored into a SQL Server database.",
      "Presented the aggregated data in an interactive, user-friendly form using Qlik.",
      "Automated the entire process to update the data on a regular basis."
    ],
    tags: [
      { label: "Python",             type: "lang"      },
      { label: "SQL",                type: "framework" },
      { label: "Qlik",               type: "concept"   },
      { label: "Data Visualization", type: "concept"   },
      { label: "Automation",         type: "concept"   }
    ]
  },
  {
    title: "Two Six Labs",
    role: "Data Science Intern · Aug 2017–Jan 2018 · Arlington, VA",
    bullets: [
      "Created documentation for HTTP (1.1 and 2.0), REST, SMTP, IMAP, POP3, TCP, UDP, and QUIC protocols, written to be accessible to non-computer scientists.",
      "Helped conduct research on detecting vulnerabilities in 8 different black boxes by creating Snort rule sets to detect TCP-specific vulnerabilities.",
      "Researched and evaluated supervised machine learning algorithms by efficiency and correctness using Python's Scikit-learn modules; gathered and corrected research data to produce representative graphs and charts."
    ],
    tags: [
      { label: "Python",           type: "lang"      },
      { label: "Scikit-learn",     type: "framework" },
      { label: "TCP/Networking",   type: "concept"   },
      { label: "Security Research", type: "concept"  },
      { label: "ML Research",      type: "concept"   }
    ]
  },
  {
    title: "ComScore Inc.",
    role: "Data Analyst Intern · Jun–Aug 2016 · Reston, VA",
    bullets: [
      "Aggregated data using SQL Server and Greenplum databases.",
      "Optimized Python code to allow more efficient automation of data analysis."
    ],
    tags: [
      { label: "Python",    type: "lang"      },
      { label: "SQL",       type: "framework" },
      { label: "GreenPlum", type: "framework" },
      { label: "Data Analysis", type: "concept" }
    ]
  }
];
