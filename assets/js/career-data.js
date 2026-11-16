/* ==========================================================================
   CAREER DATABASE (Static Dataset for Career Explorer & Assessment)
   Educational and exploratory only.
   ========================================================================== */

const CAREER_DATABASE = [
  // --- Technology & Engineering ---
  {
    id: "software-developer",
    title: "Software Developer",
    category: "Technology",
    stage: "college",
    interestArea: "technology",
    summary: "Designs, codes, and maintains computer software, web platforms, and mobile applications to solve complex user problems.",
    responsibilities: [
      "Writing clean, modular, and maintainable code in languages like Python, JavaScript, Java, or C#",
      "Collaborating with product managers and designers to implement intuitive user features",
      "Testing software components for performance, security, and scalability",
      "Debugging codebases and reviewing peer code submissions"
    ],
    keySkills: ["Algorithms & Data Structures", "Problem Solving", "Version Control (Git)", "System Architecture", "Continuous Learning"],
    educationPathways: [
      "B.Tech / B.E. in Computer Science or Information Technology",
      "BCA followed by MCA or specialized software engineering certifications",
      "Self-directed learning pathways paired with open-source project portfolios"
    ],
    relatedCareers: ["Cloud Engineer", "UX/UI Designer", "Data Analyst"],
    reflectionQuestions: [
      "Do you enjoy breaking down logical puzzles and diagnosing intricate technical errors?",
      "Are you comfortable with continuous learning in a rapidly changing tech ecosystem?",
      "Do you prefer building user-facing interfaces or backend logic and server architecture?"
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "Technology",
    stage: "graduate",
    interestArea: "analytical",
    summary: "Translates complex datasets into actionable business insights, visual dashboards, and strategic recommendations.",
    responsibilities: [
      "Collecting and cleaning raw data from relational databases and cloud pipelines",
      "Designing dashboards using PowerBI, Tableau, or custom interactive web charts",
      "Identifying patterns, anomalies, and trend lines in commercial or operational data",
      "Presenting findings clearly to non-technical stakeholders and executives"
    ],
    keySkills: ["SQL & Relational Databases", "Excel & Spreadsheet Modeling", "Python / R Basics", "Data Visualization", "Critical Thinking"],
    educationPathways: [
      "Bachelor's degree in Statistics, Mathematics, Computer Science, Economics, or Commerce",
      "Postgraduate diplomas in Business Analytics or Data Science",
      "Industry certificates in SQL, PowerBI, and data manipulation"
    ],
    relatedCareers: ["Data Scientist", "Business Analyst", "Financial Analyst"],
    reflectionQuestions: [
      "Do you find satisfaction in uncovering stories hidden inside numbers and spreadsheets?",
      "Can you explain technical conclusions in simple, persuasive terms?",
      "How comfortable are you with statistical thinking and hypothesis testing?"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Technology",
    stage: "graduate",
    interestArea: "analytical",
    summary: "Develops advanced statistical and machine learning models to predict trends, automate decisions, and extract deep insights.",
    responsibilities: [
      "Formulating mathematical hypotheses and engineering predictive models",
      "Designing experimentation pipelines and evaluating algorithm accuracy",
      "Handling big data infrastructure and processing unstructured text or imagery",
      "Collaborating with engineering teams to deploy models into production environments"
    ],
    keySkills: ["Advanced Mathematics & Statistics", "Python / R", "Machine Learning Libraries (Scikit-Learn, PyTorch)", "Experimental Design", "Data Wrangling"],
    educationPathways: [
      "Undergraduate degree in Mathematics, Data Science, Statistics, or Computer Science",
      "Master's or Ph.D. in Machine Learning, Computational Statistics, or AI",
      "Hands-on research publications or competitive modeling portfolios"
    ],
    relatedCareers: ["AI/ML Engineer", "Data Analyst", "Research Scientist"],
    reflectionQuestions: [
      "Are you passionate about higher-level mathematics and probability theory?",
      "Do you like testing theoretical assumptions against real-world observations?",
      "Are you curious about how algorithms learn from vast amounts of data?"
    ]
  },
  {
    id: "aiml-engineer",
    title: "AI/ML Engineer",
    category: "Technology",
    stage: "graduate",
    interestArea: "technology",
    summary: "Builds, optimizes, and scales artificial intelligence and machine learning architectures for enterprise systems.",
    responsibilities: [
      "Implementing deep learning architectures and neural networks",
      "Optimizing model inference time and resource utilization in cloud environments",
      "Building robust data pipelines for model retraining and continuous evaluation",
      "Securing AI applications against prompt vulnerabilities and data drift"
    ],
    keySkills: ["Deep Learning Frameworks", "High-performance Python / C++", "Cloud AI Infrastructure", "MLOps & CI/CD", "Data Ethics"],
    educationPathways: [
      "B.Tech / M.Tech in Computer Science, Artificial Intelligence, or Robotics",
      "Specialized degrees in Computational Data Science",
      "Extensive portfolio demonstrating deployed neural models and open-source benchmarks"
    ],
    relatedCareers: ["Data Scientist", "Software Developer", "Cloud Engineer"],
    reflectionQuestions: [
      "Are you intrigued by the mechanics of artificial intelligence and deep neural networks?",
      "Do you enjoy bridging theoretical algorithms with production-ready software systems?",
      "Are you motivated by solving engineering bottlenecks in complex computing environments?"
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Technology",
    stage: "college",
    interestArea: "technology",
    summary: "Monitors, protects, and strengthens organizational networks, servers, and applications against malicious threats.",
    responsibilities: [
      "Monitoring network traffic for security breaches, anomalies, and unauthorized access",
      "Performing vulnerability scans, penetration assessments, and system audits",
      "Developing incident response protocols and investigating security incidents",
      "Educating employees on cybersecurity hygiene and threat vectors like phishing"
    ],
    keySkills: ["Network Protocols & Architecture", "Ethical Hacking & Penetration Testing", "Security Information & Event Management (SIEM)", "Risk Mitigation", "Incident Response"],
    educationPathways: [
      "Bachelor's degree in Information Security, Computer Science, or Cyber Forensics",
      "Industry certifications: CompTIA Security+, CEH, CISSP, or OSCP",
      "Hands-on participation in Capture The Flag (CTF) challenges"
    ],
    relatedCareers: ["Cloud Engineer", "Software Developer", "Public Administration Professional"],
    reflectionQuestions: [
      "Do you possess an investigative curiosity for uncovering vulnerabilities and loopholes?",
      "Can you maintain composure and focus during high-pressure incident containment?",
      "Are you disciplined about staying ahead of emerging global security threats?"
    ]
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "Technology",
    stage: "graduate",
    interestArea: "technology",
    summary: "Architects, manages, and automates scalable cloud computing infrastructure and distributed deployment environments.",
    responsibilities: [
      "Designing resilient cloud infrastructure across platforms (AWS, Azure, Google Cloud)",
      "Automating infrastructure provisioning through Infrastructure as Code (Terraform, Ansible)",
      "Managing containerization and cluster orchestration (Docker, Kubernetes)",
      "Ensuring uptime, disaster recovery readiness, and cost optimization"
    ],
    keySkills: ["Cloud Platforms", "Linux Administration", "Containerization & Orchestration", "Networking & DNS", "CI/CD Pipelines"],
    educationPathways: [
      "Bachelor's in Computer Science, Systems Engineering, or Information Technology",
      "Cloud Architecture Certifications (AWS Solutions Architect, Azure Administrator)",
      "Practical experience managing distributed Linux systems"
    ],
    relatedCareers: ["Software Developer", "Cybersecurity Analyst", "AI/ML Engineer"],
    reflectionQuestions: [
      "Do you like working behind the scenes on massive, resilient digital systems?",
      "Are you interested in how websites handle millions of simultaneous visitors?",
      "Do you enjoy automating repetitive configuration steps through code?"
    ]
  },
  {
    id: "ux-designer",
    title: "UX/UI Designer",
    category: "Technology",
    stage: "college",
    interestArea: "creative",
    summary: "Researches user behaviors and crafts intuitive, accessible, and visually captivating digital product interfaces.",
    responsibilities: [
      "Conducting user interviews, usability testing, and persona research",
      "Creating user journey maps, wireframes, prototypes, and design systems",
      "Collaborating closely with product managers and engineers to refine interactions",
      "Ensuring digital products meet universal accessibility (WCAG) guidelines"
    ],
    keySkills: ["User Empathy & Research", "Interaction Design", "Figma / Design Tools", "Information Architecture", "Prototyping"],
    educationPathways: [
      "Bachelor's degree in Design (B.Des), Human-Computer Interaction, or Digital Arts",
      "Relevant background in Psychology, Cognitive Science, or Computer Science",
      "Robust portfolio of end-to-end case studies demonstrating problem-solving logic"
    ],
    relatedCareers: ["Graphic Designer", "Product Manager", "Software Developer"],
    reflectionQuestions: [
      "Do you constantly notice why certain apps are a pleasure to use while others are frustrating?",
      "Can you balance human empathy and visual aesthetics with business goals?",
      "Do you enjoy conducting interviews to discover how real people think and feel?"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    category: "Technology",
    stage: "professional",
    interestArea: "leadership",
    summary: "Guides the strategic vision, feature roadmap, and cross-functional execution of digital products and services.",
    responsibilities: [
      "Defining the long-term vision, product goals, and user value proposition",
      "Prioritizing feature roadmaps based on user feedback, technical feasibility, and business viability",
      "Bridging communication between software engineers, designers, and marketing teams",
      "Analyzing key performance indicators (KPIs) to evaluate product releases"
    ],
    keySkills: ["Strategic Roadmapping", "Cross-functional Leadership", "User Empathy", "Analytical Prioritization", "Stakeholder Communication"],
    educationPathways: [
      "Undergraduate background in Engineering, Design, or Business Management",
      "MBA or equivalent product leadership credentials",
      "Progressive background in software engineering, UX design, or business analysis"
    ],
    relatedCareers: ["Business Analyst", "UX/UI Designer", "Entrepreneur"],
    reflectionQuestions: [
      "Do you enjoy orchestrating diverse teams toward a shared collective vision?",
      "Can you make tough trade-offs between speed, quality, and scope?",
      "Are you energized by both customer conversations and business strategy?"
    ]
  },

  // --- Healthcare & Life Sciences ---
  {
    id: "doctor",
    title: "Doctor (Medical Practitioner)",
    category: "Healthcare",
    stage: "school",
    interestArea: "social",
    summary: "Diagnoses illnesses, prescribes treatments, conducts medical interventions, and promotes holistic patient health.",
    responsibilities: [
      "Examining patients, reviewing clinical histories, and formulating diagnoses",
      "Ordering and interpreting laboratory tests, diagnostic scans, and clinical data",
      "Developing comprehensive treatment regimens and prescribing medication",
      "Counseling patients and families on disease prevention and healthy living habits"
    ],
    keySkills: ["Clinical Acumen", "Empathetic Communication", "Stamina & Resilience", "Decisive Problem Solving", "Ethical Integrity"],
    educationPathways: [
      "High School with Biology, Chemistry, and Physics (PCB stream)",
      "National or state medical entrance exam (e.g. NEET-UG in India)",
      "MBBS degree (5.5 years including mandatory rotatory clinical internship)",
      "Postgraduate residency (MD / MS) for clinical specialization"
    ],
    relatedCareers: ["Pharmacist", "Physiotherapist", "Healthcare Administrator"],
    reflectionQuestions: [
      "Are you deeply motivated to improve human wellbeing through rigorous science and patient care?",
      "Are you prepared for long academic journeys and demanding clinical training hours?",
      "Can you stay calm, empathetic, and attentive under critical medical circumstances?"
    ]
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    category: "Healthcare",
    stage: "college",
    interestArea: "science",
    summary: "Dispenses medications, assesses drug interactions, and advises healthcare teams on safe pharmacotherapy.",
    responsibilities: [
      "Evaluating prescriptions for correct dosages, drug compatibility, and safety",
      "Advising patients on proper medication timing, side effects, and storage guidelines",
      "Collaborating with physicians on clinical pharmacotherapy in hospital wards",
      "Overseeing pharmaceutical inventory, compliance, and controlled substance protocols"
    ],
    keySkills: ["Pharmacology", "Attention to Detail", "Patient Consultation", "Chemical Safety", "Regulatory Compliance"],
    educationPathways: [
      "Science stream with Chemistry & Biology/Math in Class 12",
      "Bachelor of Pharmacy (B.Pharm - 4 years) or Doctor of Pharmacy (Pharm.D - 6 years)",
      "Registration with the State/National Pharmacy Council to obtain a dispensing license"
    ],
    relatedCareers: ["Biotechnology Professional", "Doctor", "Chemist"],
    reflectionQuestions: [
      "Do you find the chemical chemistry of medicines and their biological action exciting?",
      "Are you meticulous with numbers, measurements, and detail-sensitive documentation?",
      "Would you like working either in community health centers or research laboratories?"
    ]
  },
  {
    id: "physiotherapist",
    title: "Physiotherapist",
    category: "Healthcare",
    stage: "college",
    interestArea: "social",
    summary: "Helps patients restore physical mobility, recover from injuries, and manage chronic pain through rehabilitation techniques.",
    responsibilities: [
      "Assessing patients' physical range of motion, muscle strength, and motor function",
      "Formulating customized exercise therapy regimens and manual therapy plans",
      "Utilizing therapeutic modalities (electrotherapy, ultrasound, joint mobilization)",
      "Tracking patient recovery milestones and educating them on ergonomic postures"
    ],
    keySkills: ["Musculoskeletal Knowledge", "Hands-on Physical Dexterity", "Patient Empathy & Patience", "Rehabilitation Planning", "Biomechanical Analysis"],
    educationPathways: [
      "Higher secondary education with Physics, Chemistry, and Biology",
      "Bachelor of Physiotherapy (BPT - 4.5 years including mandatory internship)",
      "Master of Physiotherapy (MPT) for specialized fields (Sports, Neurology, Orthopedics)"
    ],
    relatedCareers: ["Doctor", "Healthcare Administrator", "Environmental Scientist"],
    reflectionQuestions: [
      "Do you prefer hands-on, active work over sitting in front of a desk screen all day?",
      "Do you have the patience to celebrate gradual physical progress with individuals?",
      "Are you fascinated by human biomechanics, athletics, and muscle movement?"
    ]
  },
  {
    id: "med-lab-professional",
    title: "Medical Laboratory Professional",
    category: "Healthcare",
    stage: "college",
    interestArea: "science",
    summary: "Performs critical laboratory diagnostics on clinical specimens to enable physicians to accurately diagnose diseases.",
    responsibilities: [
      "Collecting, preparing, and analyzing biological samples (blood, tissue, fluids)",
      "Operating high-precision automated analyzers and clinical microscopes",
      "Maintaining laboratory quality control protocols and calibration benchmarks",
      "Documenting test results accurately into Hospital Information Systems (HIS)"
    ],
    keySkills: ["Clinical Microscopy", "Precision & Detail Focus", "Biosafety Protocols", "Laboratory Instrumentation", "Quality Assurance"],
    educationPathways: [
      "Class 12 with Physics, Chemistry, and Biology",
      "B.Sc. in Medical Laboratory Technology (BMLT - 3 to 4 years)",
      "Certification and licensing with relevant state health authorities"
    ],
    relatedCareers: ["Biotechnology Professional", "Chemist", "Pharmacist"],
    reflectionQuestions: [
      "Do you enjoy working in quiet, structured laboratory settings with sophisticated instruments?",
      "Are you dependable and accurate when precision is essential for human health?",
      "Do you like analyzing patterns under a microscope?"
    ]
  },
  {
    id: "biotech-professional",
    title: "Biotechnology Professional",
    category: "Healthcare",
    stage: "graduate",
    interestArea: "science",
    summary: "Applies cellular and biomolecular processes to develop therapies, diagnostic tools, and sustainable agricultural solutions.",
    responsibilities: [
      "Conducting molecular cloning, gene sequencing, and cell culture experiments",
      "Developing recombinant proteins, monoclonal antibodies, or therapeutic vaccines",
      "Analyzing genomic and proteomic datasets using bioinformatics software",
      "Authoring clinical trial documentation and intellectual property filings"
    ],
    keySkills: ["Molecular Biology Techniques", "Bioinformatics Analysis", "Experimental Protocol Design", "Scientific Documentation", "Regulatory Science"],
    educationPathways: [
      "Undergraduate degree in Biotechnology, Biochemistry, Genetics, or Life Sciences",
      "M.Sc. or M.Tech in Biotechnology or Industrial Microbiology",
      "Doctoral research (Ph.D.) for independent research and development leadership"
    ],
    relatedCareers: ["Research Scientist", "Pharmacist", "Chemist"],
    reflectionQuestions: [
      "Are you intrigued by the genetic code and cellular engineering?",
      "Do you want to contribute to next-generation cancer therapies or biomanufacturing?",
      "Are you excited by the intersection of biology, software, and laboratory science?"
    ]
  },
  {
    id: "healthcare-admin",
    title: "Healthcare Administrator",
    category: "Healthcare",
    stage: "professional",
    interestArea: "leadership",
    summary: "Manages hospital operations, clinical staffing, regulatory compliance, and patient care delivery systems.",
    responsibilities: [
      "Overseeing daily facility operations, clinical workflows, and emergency readiness",
      "Managing hospital budgets, resource allocation, and medical supply chains",
      "Ensuring strict compliance with health accreditation boards (e.g. NABH, JCI)",
      "Implementing health informatics systems to streamline patient admissions and records"
    ],
    keySkills: ["Health Systems Management", "Operational Logistics", "Financial Budgeting", "Healthcare Policy Compliance", "Team Coordination"],
    educationPathways: [
      "Bachelor's degree in Life Sciences, Medicine, Nursing, Commerce, or Management",
      "Master of Hospital Administration (MHA) or MBA in Healthcare Management",
      "Specialized administrative training in health policy and hospital operations"
    ],
    relatedCareers: ["Human Resources Professional", "Business Analyst", "Doctor"],
    reflectionQuestions: [
      "Do you want to make healthcare more efficient, humane, and accessible?",
      "Are you skilled at organizing complex logistical workflows under tight deadlines?",
      "Do you enjoy connecting administrative leadership with clinical care?"
    ]
  },

  // --- Business & Finance ---
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    category: "Business",
    stage: "college",
    interestArea: "analytical",
    summary: "Evaluates financial data, market trends, and investment opportunities to guide corporate capital and portfolio decisions.",
    responsibilities: [
      "Building discounted cash flow (DCF) and three-statement financial models",
      "Tracking industry trends, macroeconomic indicators, and competitor balance sheets",
      "Evaluating capital expenditure proposals and potential mergers/acquisitions",
      "Drafting investment memos and reporting quarterly performance metrics"
    ],
    keySkills: ["Financial Modeling", "Corporate Valuation", "Excel Mastery", "Macroeconomic Analysis", "Risk Assessment"],
    educationPathways: [
      "Bachelor's degree in Finance, Economics, Commerce, or Statistics",
      "Chartered Financial Analyst (CFA) certification or Chartered Accountancy (CA)",
      "MBA in Finance from recognized business schools"
    ],
    relatedCareers: ["Accountant", "Data Analyst", "Business Analyst"],
    reflectionQuestions: [
      "Do you follow business news, stock markets, and macroeconomic trends with interest?",
      "Are you comfortable working extensively with financial metrics and valuation models?",
      "Can you synthesize market ambiguity into clear, quantitative recommendations?"
    ]
  },
  {
    id: "accountant",
    title: "Accountant (Chartered / CPA)",
    category: "Business",
    stage: "college",
    interestArea: "analytical",
    summary: "Prepares financial statements, audits corporate accounts, and ensures fiscal transparency and statutory tax compliance.",
    responsibilities: [
      "Maintaining accurate general ledgers and preparing annual balance sheets",
      "Conducting statutory internal and external audits to safeguard corporate governance",
      "Managing tax planning, calculating liabilities, and filing statutory returns",
      "Advising leadership on internal financial controls and risk management"
    ],
    keySkills: ["Financial Accounting Standards (IFRS / GAAP)", "Taxation Law", "Audit & Assurance", "Integrity & Discretion", "Attention to Detail"],
    educationPathways: [
      "Commerce stream (B.Com / BBA in Finance)",
      "Professional qualifications: Chartered Accountant (ICAI CA), ACCA, or CPA",
      "Practical mandatory articleship / apprenticeship under practicing firms"
    ],
    relatedCareers: ["Financial Analyst", "Business Analyst", "Policy Researcher"],
    reflectionQuestions: [
      "Do you take pride in meticulous accuracy and structured bookkeeping?",
      "Are you intrigued by tax strategies, fiscal integrity, and business transparency?",
      "Are you disciplined enough to master rigorous professional examinations?"
    ]
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    category: "Business",
    stage: "graduate",
    interestArea: "analytical",
    summary: "Acts as a bridge between business stakeholders and technical teams to optimize enterprise processes and software systems.",
    responsibilities: [
      "Eliciting business requirements from cross-functional executive teams",
      "Documenting functional specifications, user stories, and process flowcharts",
      "Assessing operational bottlenecks and recommending software solutions",
      "Conducting user acceptance testing (UAT) and measuring business value delivery"
    ],
    keySkills: ["Requirements Elicitation", "Process Mapping (BPMN)", "Data Querying (SQL)", "Stakeholder Management", "Clear Documentation"],
    educationPathways: [
      "Bachelor's in Business Administration, Computer Science, Economics, or Engineering",
      "Certifications such as CBAP, ECBA, or Agile Scrum Master",
      "Hands-on experience in cross-functional corporate consulting"
    ],
    relatedCareers: ["Product Manager", "Data Analyst", "Financial Analyst"],
    reflectionQuestions: [
      "Do you like identifying what isn't working smoothly in an organization and fixing it?",
      "Can you translate executive aspirations into clear technical specifications?",
      "Do you thrive when interacting across many different teams every day?"
    ]
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    category: "Business",
    stage: "professional",
    interestArea: "creative",
    summary: "Develops brand strategy, oversees omni-channel campaigns, and drives customer acquisition and engagement.",
    responsibilities: [
      "Formulating marketing campaigns across digital, content, and offline channels",
      "Managing customer acquisition budgets, conversion funnels, and return on ad spend",
      "Analyzing consumer behavior data to refine audience segmentation and messaging",
      "Leading creative teams of copywriters, designers, and media planners"
    ],
    keySkills: ["Brand Strategy", "Campaign Analytics", "Consumer Psychology", "Content Marketing", "Budget Optimization"],
    educationPathways: [
      "Bachelor's in Mass Communication, Business Administration, or Commerce",
      "MBA in Marketing or specialized master's in Brand Communications",
      "Digital marketing certifications and documented campaign case studies"
    ],
    relatedCareers: ["Content Strategist", "Product Manager", "Graphic Designer"],
    reflectionQuestions: [
      "Are you fascinated by why people decide to buy or trust certain brands?",
      "Can you blend creative storytelling with hard quantitative performance metrics?",
      "Do you enjoy keeping your finger on the pulse of cultural trends and media habits?"
    ]
  },
  {
    id: "hr-professional",
    title: "Human Resources Professional",
    category: "Business",
    stage: "college",
    interestArea: "social",
    summary: "Cultivates organizational culture, leads talent acquisition, and drives employee development and workplace policies.",
    responsibilities: [
      "Sourcing, interviewing, and onboarding high-caliber candidates",
      "Designing performance review cycles, learning initiatives, and career progression frameworks",
      "Resolving workplace conflicts and mediating employee relations with empathy",
      "Ensuring compliance with national labor laws, safety standards, and compensation equity"
    ],
    keySkills: ["People Empathy", "Conflict Resolution", "Organizational Design", "Labor Law Knowledge", "Talent Assessment"],
    educationPathways: [
      "Bachelor's in Psychology, Sociology, Business Administration, or Humanities",
      "Master's in Human Resource Management (MHRM) or MBA in HR",
      "Certifications from bodies like SHRM or HRCI"
    ],
    relatedCareers: ["Healthcare Administrator", "Policy Researcher", "Marketing Manager"],
    reflectionQuestions: [
      "Do you enjoy understanding human behavior, motivation, and group dynamics?",
      "Can you deliver difficult feedback with empathy, professionalism, and fairness?",
      "Are you interested in building positive, inclusive workplace environments?"
    ]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur / Founder",
    category: "Business",
    stage: "professional",
    interestArea: "leadership",
    summary: "Identifies unaddressed market needs, builds viable business models, and leads new commercial or social ventures.",
    responsibilities: [
      "Developing initial prototypes or service models to achieve product-market fit",
      "Pitching investors, securing seed capital, and managing early cash flow runways",
      "Recruiting initial founding team members and fostering company culture",
      "Iterating continuously based on early customer feedback and operational roadblocks"
    ],
    keySkills: ["Resilience & Adaptability", "Opportunity Recognition", "Strategic Risk Taking", "Resourcefulness", "Inspirational Leadership"],
    educationPathways: [
      "Diverse academic backgrounds (Engineering, Design, Humanities, Commerce)",
      "Incubator participation, mentorship networks, and practical venture experimentation",
      "Continuous self-education through real-world market testing"
    ],
    relatedCareers: ["Product Manager", "Business Analyst", "Marketing Manager"],
    reflectionQuestions: [
      "Do you thrive when there is no established rulebook and high ambiguity?",
      "Can you rebound quickly when an initial concept or pitch does not succeed?",
      "Are you passionate about turning an abstract idea into a thriving reality?"
    ]
  },

  // --- Creative & Media ---
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    category: "Creative",
    stage: "college",
    interestArea: "creative",
    summary: "Communicates ideas through visual form, typography, color harmony, and composition across print and digital media.",
    responsibilities: [
      "Designing brand identity assets (logos, typography guidelines, iconography)",
      "Creating marketing collaterals, social graphics, editorial publications, and packaging",
      "Translating creative briefs into distinct visual concepts",
      "Refining designs in response to art director and client feedback"
    ],
    keySkills: ["Typography & Layout", "Color Theory", "Adobe Creative Suite (Illustrator, Photoshop, InDesign)", "Visual Storytelling", "Brand Consistency"],
    educationPathways: [
      "Bachelor of Design (B.Des) or Bachelor of Fine Arts (BFA)",
      "Specialized diplomas in Visual Communication or Graphic Design",
      "Strong portfolio demonstrating cohesive branding, typography, and layout sense"
    ],
    relatedCareers: ["UX/UI Designer", "Animator", "Content Strategist"],
    reflectionQuestions: [
      "Do you spend hours obsessing over color palettes, fonts, and clean layouts?",
      "Can you visually translate abstract thoughts and values into concrete designs?",
      "Are you open to revising your creative work based on functional feedback?"
    ]
  },
  {
    id: "animator",
    title: "Animator (2D / 3D)",
    category: "Creative",
    stage: "college",
    interestArea: "creative",
    summary: "Brings characters, environments, and visual effects to life for films, games, television, and digital products.",
    responsibilities: [
      "Creating storyboards, character character sheets, and movement blocking",
      "Keyframing character motion following the 12 classic animation principles",
      "Rigging 3D character models and configuring bone weight distributions",
      "Collaborating with lighting, texturing, and sound engineers to polish final sequences"
    ],
    keySkills: ["Principles of Animation", "3D Software (Maya, Blender, Cinema 4D)", "Kinematic Timing & Spacing", "Character Acting", "Patience & Persistence"],
    educationPathways: [
      "Degree or diploma in Animation, Visual Effects, or Digital Media",
      "Specialized studio training institutes",
      "Showreel showcasing convincing character movement, weight, and emotion"
    ],
    relatedCareers: ["Video Editor", "Graphic Designer", "UX/UI Designer"],
    reflectionQuestions: [
      "Do you notice the subtle physics and weight when objects or living creatures move?",
      "Do you have the patience to refine 24 individual frames for one second of animation?",
      "Are you passionate about games, cinematic storytelling, and digital artistry?"
    ]
  },
  {
    id: "video-editor",
    title: "Video Editor",
    category: "Creative",
    stage: "college",
    interestArea: "creative",
    summary: "Shapes raw video footage, sound design, and color pacing into compelling narrative, documentary, or commercial stories.",
    responsibilities: [
      "Reviewing and organizing hours of raw camera rushes and audio stems",
      "Assembling rough cuts and refining pacing to heighten narrative emotion",
      "Performing color grading, sound mixing, dialogue cleaning, and motion graphics",
      "Exporting media in optimal codecs and aspect ratios for multi-platform distribution"
    ],
    keySkills: ["Story Pacing & Rhythm", "Non-linear Editing Software (Premiere Pro, DaVinci Resolve, Final Cut)", "Color Grading", "Audio Mixing", "Attention to Narrative Flow"],
    educationPathways: [
      "Bachelor's in Film Studies, Mass Communication, or Multimedia",
      "Practical apprenticeship in post-production studios",
      "Video editing showreel demonstrating sharp cuts, narrative structure, and sonic balance"
    ],
    relatedCareers: ["Animator", "Content Strategist", "Graphic Designer"],
    reflectionQuestions: [
      "Do you understand how musical beats and cut timing influence audience emotion?",
      "Can you sit with complex timelines and sculpt a coherent story out of chaos?",
      "Are you excited by both cinematic filmmaking and high-tempo digital content?"
    ]
  },
  {
    id: "content-strategist",
    title: "Content Strategist",
    category: "Creative",
    stage: "graduate",
    interestArea: "creative",
    summary: "Plans, writes, and governs multi-channel written content to educate audiences and build brand authority.",
    responsibilities: [
      "Conducting audience research, search keyword analysis, and content audits",
      "Developing content calendars, editorial style guides, and brand voice guidelines",
      "Authoring high-impact white papers, editorial articles, scripts, and case studies",
      "Measuring reader retention, organic search visibility, and conversion metrics"
    ],
    keySkills: ["Editorial Writing", "Audience Empathy", "Search Engine Optimization (SEO)", "Narrative Structuring", "Content Governance"],
    educationPathways: [
      "Bachelor's in English Literature, Journalism, Communications, or Humanities",
      "Master's in Media, Creative Writing, or Marketing",
      "Diverse portfolio of published editorial pieces, thought-leadership essays, or blogs"
    ],
    relatedCareers: ["Marketing Manager", "UX/UI Designer", "Policy Researcher"],
    reflectionQuestions: [
      "Do you have a natural flair for finding the exact right word and rhythm in writing?",
      "Can you adapt your writing voice to match completely different audiences?",
      "Do you enjoy diving into research to explain complex subjects with clarity?"
    ]
  },
  {
    id: "architect",
    title: "Architect",
    category: "Creative",
    stage: "school",
    interestArea: "creative",
    summary: "Designs safe, functional, and aesthetically captivating buildings and spatial environments balancing art and structural engineering.",
    responsibilities: [
      "Creating conceptual spatial sketches and structural floor plans for clients",
      "Developing building information models (BIM) and technical construction blueprints",
      "Ensuring designs comply with building codes, fire safety, and environmental zoning",
      "Conducting on-site construction inspections to verify architectural integrity"
    ],
    keySkills: ["Spatial Reasoning", "Computer-Aided Design (AutoCAD, Revit)", "Structural Physics Understanding", "Sustainable Design", "Client Presentation"],
    educationPathways: [
      "Class 12 with Physics, Chemistry, and Mathematics (PCM stream)",
      "Qualifying architectural aptitude exams (e.g. NATA / JEE Main Paper 2)",
      "Bachelor of Architecture (B.Arch - 5 years)",
      "Mandatory registration with the national Council of Architecture"
    ],
    relatedCareers: ["Graphic Designer", "Civil Services Aspirant", "Environmental Scientist"],
    reflectionQuestions: [
      "Are you fascinated by how physical spaces shape human emotion and community life?",
      "Can you visualize 3-dimensional structures in your mind effortlessly?",
      "Are you ready to blend rigorous mathematics and building physics with artistic vision?"
    ]
  },
  {
    id: "fashion-designer",
    title: "Fashion Designer",
    category: "Creative",
    stage: "college",
    interestArea: "creative",
    summary: "Creates apparel, textiles, and accessories reflecting cultural expression, functional utility, and aesthetic trends.",
    responsibilities: [
      "Researching seasonal trends, garment history, and textile innovations",
      "Sketching garment concepts and selecting fabrics, trims, and color stories",
      "Developing technical specification packs and supervising pattern making and draping",
      "Coordinating sample fittings and collaborating with manufacturing ateliers"
    ],
    keySkills: ["Garment Construction & Draping", "Textile Science", "Trend Forecasting", "Illustration & Tech Packs", "Commercial Feasibility"],
    educationPathways: [
      "Higher secondary education in any stream",
      "Design entrance exams (e.g. NIFT / NID)",
      "Bachelor of Design in Fashion Design or Textile Design (4 years)",
      "Design portfolio demonstrating collection development, fabric manipulation, and sketches"
    ],
    relatedCareers: ["Graphic Designer", "Animator", "Marketing Manager"],
    reflectionQuestions: [
      "Do you express your individuality through garments, textiles, and styling?",
      "Are you interested in the craftsmanship, drape, and tactile properties of fabrics?",
      "Can you anticipate upcoming cultural shifts before they become mainstream?"
    ]
  },

  // --- Science & Research ---
  {
    id: "research-scientist",
    title: "Research Scientist",
    category: "Science",
    stage: "graduate",
    interestArea: "science",
    summary: "Designs rigorous experimental investigations to uncover fundamental truths and pioneer technological breakthroughs.",
    responsibilities: [
      "Formulating novel scientific hypotheses and designing controlled experiments",
      "Operating high-precision laboratory instruments and processing statistical results",
      "Writing research grant proposals to secure funding from scientific councils",
      "Publishing findings in peer-reviewed scientific journals and presenting at conferences"
    ],
    keySkills: ["Scientific Methodology", "Critical Thinking", "Grant Writing", "Data Analysis", "Intellectual Tenacity"],
    educationPathways: [
      "Bachelor's degree in Natural Sciences, Physics, Chemistry, or Biological Sciences",
      "Master of Science (M.Sc.) followed by Ph.D. in a specialized domain",
      "Postdoctoral fellowships for advanced institutional research appointments"
    ],
    relatedCareers: ["Chemist", "Physicist", "Biotechnology Professional"],
    reflectionQuestions: [
      "Are you driven by questions that no one on the planet currently knows the answers to?",
      "Do you possess the patience to conduct experiments that may fail multiple times before working?",
      "Are you dedicated to rigorous empirical proof over intuitive assumptions?"
    ]
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    category: "Science",
    stage: "college",
    interestArea: "science",
    summary: "Assesses ecological hazards, conducts environmental impact studies, and advises on sustainability and conservation policies.",
    responsibilities: [
      "Collecting field samples of soil, water, air, and vegetation for pollutant tracking",
      "Conducting environmental impact assessments (EIA) for industrial and urban developments",
      "Modeling climate resilience, watershed conservation, and biodiversity habitats",
      "Recommending remediation strategies to government bodies and green enterprises"
    ],
    keySkills: ["Ecological Fieldwork", "Geographic Information Systems (GIS)", "Environmental Law & Policy", "Chemical Analysis", "Conservation Ethics"],
    educationPathways: [
      "Bachelor's degree in Environmental Science, Ecology, Geology, or Forestry",
      "Master's degree in Environmental Management, Climate Science, or Sustainability",
      "Practical fieldwork experience and GIS modeling credentials"
    ],
    relatedCareers: ["Research Scientist", "Policy Researcher", "Civil Services Aspirant"],
    reflectionQuestions: [
      "Are you passionate about planetary conservation, climate resilience, and ecosystem health?",
      "Do you enjoy splitting time between outdoor fieldwork and data analysis?",
      "Would you like working at the intersection of ecological science and environmental policy?"
    ]
  },
  {
    id: "chemist",
    title: "Chemist (Industrial / Analytical)",
    category: "Science",
    stage: "college",
    interestArea: "science",
    summary: "Studies the atomic properties of substances and synthesizes novel compounds for pharmaceuticals, materials, and energy.",
    responsibilities: [
      "Synthesizing and purifying chemical compounds in controlled laboratory reactors",
      "Conducting spectroscopic and chromatographic analyses (NMR, HPLC, GC-MS)",
      "Formulating consumer chemicals, coatings, batteries, or pharmaceutical active ingredients",
      "Enforcing rigorous chemical safety, storage, and hazardous waste protocols"
    ],
    keySkills: ["Chemical Synthesis", "Analytical Spectroscopy", "Laboratory Safety & Hazmat", "Mathematical Precision", "Quality Control"],
    educationPathways: [
      "Class 12 with Chemistry, Physics, and Mathematics",
      "B.Sc. in Chemistry (3–4 years)",
      "M.Sc. in Organic, Inorganic, Physical, or Analytical Chemistry",
      "Ph.D. for advanced R&D leadership roles in industrial laboratories"
    ],
    relatedCareers: ["Pharmacist", "Research Scientist", "Biotechnology Professional"],
    reflectionQuestions: [
      "Are you excited by the prospect of mixing and reacting substances to create completely new materials?",
      "Do you respect meticulous laboratory protocols and clean safety procedures?",
      "Are you drawn to solving energy storage, clean water, or medicine through chemistry?"
    ]
  },
  {
    id: "physicist",
    title: "Physicist (Theoretical / Applied)",
    category: "Science",
    stage: "graduate",
    interestArea: "analytical",
    summary: "Investigates the fundamental laws of nature—from subatomic particles to cosmic scale astrophysics and quantum computing.",
    responsibilities: [
      "Formulating mathematical models of physical phenomena and quantum dynamics",
      "Running computational physics simulations and high-performance cluster computing",
      "Designing sensitive detector experiments (particle accelerators, optical interferometers)",
      "Collaborating on international scientific consortia and publishing theoretical models"
    ],
    keySkills: ["Advanced Calculus & Linear Algebra", "Quantum Mechanics / Electrodynamics", "Computational Simulation (Python, C++, Fortran)", "Abstract Problem Solving", "Mathematical Rigor"],
    educationPathways: [
      "Class 12 with Physics and Mathematics (PCM stream)",
      "B.Sc. in Physics or Integrated M.Sc. in Physical Sciences",
      "Doctoral degree (Ph.D.) in specialized fields like Condensed Matter, Optics, or Astrophysics"
    ],
    relatedCareers: ["Research Scientist", "Data Scientist", "AI/ML Engineer"],
    reflectionQuestions: [
      "Are you consumed by wonder about how spacetime, gravity, and quantum mechanics operate?",
      "Do you relish solving advanced mathematical differential equations?",
      "Are you comfortable thinking in highly abstract, non-intuitive mathematical spaces?"
    ]
  },

  // --- Law & Public Service ---
  {
    id: "lawyer",
    title: "Lawyer / Legal Practitioner",
    category: "Law",
    stage: "school",
    interestArea: "leadership",
    summary: "Interprets statutes, advocates for clients in courts of law, drafts contracts, and upholds justice and due process.",
    responsibilities: [
      "Researching case law precedents, legislative acts, and constitutional provisions",
      "Drafting legal briefs, contracts, pleadings, and corporate governance documents",
      "Representing clients in courtroom litigation, mediation, and arbitration hearings",
      "Advising individuals and companies on legal liabilities, rights, and regulatory duties"
    ],
    keySkills: ["Legal Reasoning & Analysis", "Persuasive Written & Oral Advocacy", "Case Law Research", "Ethical Integrity", "Negotiation Strategy"],
    educationPathways: [
      "5-Year Integrated Law Degree (BA LLB / BBA LLB) after Class 12 via CLAT / AILET, or 3-Year LLB following graduation in any stream",
      "Enrolment with the State Bar Council",
      "Passing the All India Bar Examination (AIBE) or jurisdictional licensing exam"
    ],
    relatedCareers: ["Policy Researcher", "Civil Services Aspirant", "Public Administration Professional"],
    reflectionQuestions: [
      "Do you enjoy constructing tightly argued, evidence-backed arguments?",
      "Can you speed-read dense texts, identify nuances, and recall details under pressure?",
      "Are you passionate about justice, fundamental rights, and upholding the rule of law?"
    ]
  },
  {
    id: "civil-services",
    title: "Civil Services Aspirant / Officer",
    category: "Law",
    stage: "graduate",
    interestArea: "leadership",
    summary: "Administers public policies, oversees district governance, manages law and order, and drives socio-economic welfare initiatives.",
    responsibilities: [
      "Supervising administrative machinery, revenue administration, and public welfare programs",
      "Managing crisis response, disaster mitigation, and district law enforcement coordination",
      "Formulating and reviewing state and central government development initiatives",
      "Interacting directly with citizens, local panchayats, and civic stakeholders"
    ],
    keySkills: ["Comprehensive General Awareness", "Administrative Leadership", "Crisis Management", "Public Empathy", "Constitutional Adherence"],
    educationPathways: [
      "Bachelor's degree in any discipline from a recognized university",
      "Preparation and qualification for Union Public Service Commission (UPSC CSE) or State Public Service Commissions (Prelims, Mains, Personality Test Interview)",
      "Foundation and specialized training at national civil service academies"
    ],
    relatedCareers: ["Public Administration Professional", "Policy Researcher", "Lawyer"],
    reflectionQuestions: [
      "Are you motivated by serving the broader public interest at an impactful scale?",
      "Can you maintain dedication across a demanding, multi-stage competitive examination?",
      "Are you prepared to live and work across diverse rural and urban administrative districts?"
    ]
  },
  {
    id: "policy-researcher",
    title: "Policy Researcher / Analyst",
    category: "Law",
    stage: "graduate",
    interestArea: "analytical",
    summary: "Evaluates legislative proposals, social policies, and economic frameworks to advise think tanks and governments on systemic reforms.",
    responsibilities: [
      "Reviewing comparative international policies, economic data, and civic outcomes",
      "Conducting surveys, qualitative interviews, and socio-economic econometric analysis",
      "Authoring policy briefs, white papers, and regulatory recommendations",
      "Engaging with lawmakers, media commentators, and civil society groups"
    ],
    keySkills: ["Policy Evaluation", "Econometric Analysis", "Qualitative Research", "Clear Policy Brief Writing", "Stakeholder Engagement"],
    educationPathways: [
      "Bachelor's in Public Policy, Economics, Political Science, Law, or Sociology",
      "Master's in Public Policy (MPP), Public Administration (MPA), or Development Studies",
      "Published research papers and think tank fellowship experience"
    ],
    relatedCareers: ["Civil Services Aspirant", "Lawyer", "Content Strategist"],
    reflectionQuestions: [
      "Do you question why certain public systems succeed while others fail?",
      "Can you balance idealistic goals with budgetary, political, and pragmatic constraints?",
      "Do you love researching socio-economic issues to propose constructive structural reforms?"
    ]
  },
  {
    id: "public-admin",
    title: "Public Administration Professional",
    category: "Law",
    stage: "graduate",
    interestArea: "leadership",
    summary: "Manages public institutions, municipal departments, and non-profit organizations to deliver essential community services.",
    responsibilities: [
      "Coordinating the delivery of municipal services, sanitation, and public health campaigns",
      "Managing municipal budgets, public tenders, and transparent resource procurement",
      "Coordinating multi-agency initiatives between police, municipal corporations, and citizens",
      "Documenting program accountability and reporting to civic review committees"
    ],
    keySkills: ["Civic Operations", "Public Finance", "Inter-agency Coordination", "Community Outreach", "Regulatory Compliance"],
    educationPathways: [
      "Undergraduate degree in Arts, Commerce, Science, or Social Work",
      "Master of Public Administration (MPA) or Social Work (MSW)",
      "Recruitment via state municipal boards or non-governmental organization networks"
    ],
    relatedCareers: ["Civil Services Aspirant", "Healthcare Administrator", "Policy Researcher"],
    reflectionQuestions: [
      "Do you enjoy organizing community activities and community welfare projects?",
      "Can you navigate municipal bureaucracy with patience and steady determination?",
      "Are you driven to make civic governance responsive and accessible to ordinary citizens?"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CAREER_DATABASE };
}
