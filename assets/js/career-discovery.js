/* ==========================================================================
   CAREER DISCOVERY TOOL (career-discovery.js)
   Multi-step interactive discovery questionnaire with transparent scoring
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('quiz-wrapper');
  if (!container) return;

  const QUESTIONS = [
    {
      num: 1,
      title: "Which activities interest you most?",
      subtitle: "Select the activity that feels most engaging and natural to you.",
      options: [
        { label: "Solving technical problems and coding logic", category: "tech", icon: "💻" },
        { label: "Helping people overcome difficulties and improving health", category: "health", icon: "🩺" },
        { label: "Analyzing numbers, market trends, and business data", category: "biz", icon: "📊" },
        { label: "Creating visual artwork, stories, and multimedia", category: "creative", icon: "🎨" },
        { label: "Conducting scientific experiments and discovering how things work", category: "science", icon: "🔬" },
        { label: "Debating ideas, understanding laws, and public advocacy", category: "law", icon: "⚖️" }
      ]
    },
    {
      num: 2,
      title: "Which subject areas do you enjoy exploring?",
      subtitle: "Think about topics you read, research, or study with genuine curiosity.",
      options: [
        { label: "Mathematics, Computer Science, and Artificial Intelligence", category: "tech", icon: "🤖" },
        { label: "Biology, Human Anatomy, and Health Sciences", category: "health", icon: "🧬" },
        { label: "Economics, Commerce, Finance, and Enterprise", category: "biz", icon: "📈" },
        { label: "Visual Arts, Architecture, Literature, and Media Production", category: "creative", icon: "📐" },
        { label: "Physics, Chemistry, and Environmental Ecology", category: "science", icon: "🧪" },
        { label: "Political Science, Jurisprudence, and History", category: "law", icon: "🏛️" }
      ]
    },
    {
      num: 3,
      title: "What kind of work environment appeals to you?",
      subtitle: "Where would you feel most energized and productive on a daily basis?",
      options: [
        { label: "Fast-moving digital tech hub, remote workspace, or coding lab", category: "tech", icon: "🖥️" },
        { label: "Hospital, diagnostic facility, or wellness rehabilitation clinic", category: "health", icon: "🏥" },
        { label: "Corporate executive boardroom, trading floor, or startup incubator", category: "biz", icon: "🏢" },
        { label: "Creative design studio, film editing suite, or makerspace", category: "creative", icon: "🎬" },
        { label: "Research facility, cleanroom laboratory, or ecological field site", category: "science", icon: "🌱" },
        { label: "Legal chamber, public administration office, or policy think tank", category: "law", icon: "📚" }
      ]
    },
    {
      num: 4,
      title: "What kind of problem would you like to spend your days solving?",
      subtitle: "Different careers tackle very different types of questions.",
      options: [
        { label: "Automating repetitive work and building resilient digital platforms", category: "tech", icon: "⚙️" },
        { label: "Alleviating illness, restoring mobility, and saving lives", category: "health", icon: "❤️" },
        { label: "Optimizing investments, reducing corporate waste, and scaling ventures", category: "biz", icon: "💼" },
        { label: "Designing intuitive interfaces, evocative films, and expressive brands", category: "creative", icon: "✨" },
        { label: "Exploring atomic reactions, climate patterns, or astrophysics", category: "science", icon: "🌌" },
        { label: "Drafting equitable legislation and protecting civic rights", category: "law", icon: "🛡️" }
      ]
    },
    {
      num: 5,
      title: "Which type of day-to-day impact matters most to you?",
      subtitle: "What gives you the highest sense of accomplishment after finishing a task?",
      options: [
        { label: "Shipping reliable code that powers millions of user devices", category: "tech", icon: "🚀" },
        { label: "Seeing an individual patient recover strength and vitality", category: "health", icon: "🤝" },
        { label: "Growing a profitable company and creating sustainable employment", category: "biz", icon: "📈" },
        { label: "Inspiring people emotionally through thoughtful design or story", category: "creative", icon: "🌟" },
        { label: "Publishing new empirical discoveries that expand human knowledge", category: "science", icon: "📖" },
        { label: "Defending a citizen's constitutional rights or passing public policy", category: "law", icon: "⚖️" }
      ]
    },
    {
      num: 6,
      title: "What skills would you most like to develop in the next 3 years?",
      subtitle: "Which capabilities would make you feel most capable and fulfilled?",
      options: [
        { label: "System architecture, full-stack programming, and cloud tooling", category: "tech", icon: "💻" },
        { label: "Clinical diagnosis, pharmacology, and therapeutic care", category: "health", icon: "🩺" },
        { label: "Financial modeling, negotiation, and cross-functional leadership", category: "biz", icon: "📊" },
        { label: "Design systems, 3D modeling, cinematography, and animation", category: "creative", icon: "🎨" },
        { label: "Experimental methodology, bioinformatics, and laboratory precision", category: "science", icon: "🔬" },
        { label: "Legal jurisprudence, argumentative synthesis, and policy drafting", category: "law", icon: "🏛️" }
      ]
    }
  ];

  const CATEGORY_META = {
    tech: {
      name: "Technology & Digital Systems",
      color: "var(--color-royal-blue)",
      bg: "var(--color-lavender)",
      careers: ["Software Developer", "Data Analyst", "AI/ML Engineer", "UX/UI Designer", "Cloud Engineer"],
      questions: [
        "Which specific area of tech excites you most: building user products, data modeling, or cloud architecture?",
        "How do you plan to balance formal computer science theory with hands-on portfolio projects?"
      ]
    },
    health: {
      name: "Healthcare & Human Development",
      color: "#1E8257",
      bg: "var(--color-mint-subtle)",
      careers: ["Doctor (Medical Practitioner)", "Pharmacist", "Physiotherapist", "Biotechnology Professional", "Healthcare Administrator"],
      questions: [
        "Do you prefer direct clinical patient interaction or laboratory diagnostics and research?",
        "Are you prepared for the multi-year training pathways common in medical and therapeutic careers?"
      ]
    },
    biz: {
      name: "Business, Finance & Enterprise",
      color: "#D4543F",
      bg: "var(--color-coral-subtle)",
      careers: ["Financial Analyst", "Accountant (CA/CPA)", "Business Analyst", "Marketing Manager", "Entrepreneur"],
      questions: [
        "Are you drawn more toward quantitative analysis and numbers or team leadership and strategy?",
        "Would you thrive in a large corporate organization or a high-velocity startup environment?"
      ]
    },
    creative: {
      name: "Creative, Design & Media",
      color: "#7066C4",
      bg: "var(--color-lavender-light)",
      careers: ["Graphic Designer", "UX/UI Designer", "Animator", "Video Editor", "Content Strategist", "Architect"],
      questions: [
        "What formats do you prefer working in: digital screens, spatial architecture, or narrative storytelling?",
        "How will you build a design portfolio that showcases both aesthetic quality and problem-solving reasoning?"
      ]
    },
    science: {
      name: "Science & Empirical Research",
      color: "#0284C7",
      bg: "#E0F2FE",
      careers: ["Research Scientist", "Environmental Scientist", "Chemist", "Physicist", "Biotechnology Professional"],
      questions: [
        "Do you envision yourself pursuing academic research, governmental agencies, or industrial R&D?",
        "Are you interested in environmental conservation, materials, or fundamental sciences?"
      ]
    },
    law: {
      name: "Law, Governance & Public Impact",
      color: "var(--color-navy)",
      bg: "#F1F5F9",
      careers: ["Lawyer", "Civil Services Aspirant", "Policy Researcher", "Public Administration Professional"],
      questions: [
        "Are you more drawn toward courtroom advocacy, public administrative leadership, or policy think tanks?",
        "What societal challenges do you feel most compelled to tackle?"
      ]
    }
  };

  let currentQuestionIndex = 0;
  let userAnswers = []; // array of category strings per question

  const progressBar = document.getElementById('quiz-progress-bar');
  const progressText = document.getElementById('quiz-progress-text');
  const stepNumberText = document.getElementById('quiz-step-number');
  const questionCard = document.getElementById('quiz-question-card');
  const resultsCard = document.getElementById('quiz-results-card');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const nextBtn = document.getElementById('quiz-next-btn');

  renderCurrentQuestion();

  function renderCurrentQuestion() {
    const q = QUESTIONS[currentQuestionIndex];
    if (!q) return;

    // Update progress
    const pct = Math.round(((currentQuestionIndex + 1) / QUESTIONS.length) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `Question ${currentQuestionIndex + 1} of ${QUESTIONS.length}`;
    if (stepNumberText) stepNumberText.textContent = `Step 0${currentQuestionIndex + 1}`;

    const currentSelected = userAnswers[currentQuestionIndex];

    questionCard.innerHTML = `
      <h3 class="question-title">${q.title}</h3>
      <p class="question-subtext">${q.subtitle}</p>

      <div class="options-stack">
        ${q.options.map((opt, idx) => `
          <button type="button" class="option-btn ${currentSelected === opt.category ? 'selected' : ''}" data-cat="${opt.category}">
            <div class="option-bullet"></div>
            <div style="font-size: 1.5rem; line-height: 1;">${opt.icon}</div>
            <div>
              <div class="option-content-title">${opt.label}</div>
            </div>
          </button>
        `).join('')}
      </div>
    `;

    // Attach option listeners
    questionCard.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        questionCard.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const cat = btn.getAttribute('data-cat');
        userAnswers[currentQuestionIndex] = cat;
        updateNavControls();
      });
    });

    updateNavControls();
  }

  function updateNavControls() {
    if (prevBtn) {
      prevBtn.style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
    }

    if (nextBtn) {
      const hasAnswered = !!userAnswers[currentQuestionIndex];
      nextBtn.disabled = !hasAnswered;
      nextBtn.style.opacity = hasAnswered ? '1' : '0.4';
      nextBtn.style.pointerEvents = hasAnswered ? 'auto' : 'none';

      if (currentQuestionIndex === QUESTIONS.length - 1) {
        nextBtn.innerHTML = `
          Generate Exploration Summary
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
      } else {
        nextBtn.innerHTML = `
          Continue
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;
      }
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!userAnswers[currentQuestionIndex]) return;

      if (currentQuestionIndex < QUESTIONS.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
      } else {
        showResults();
      }
    });
  }

  function showResults() {
    // Count occurrences of each category
    const counts = {};
    userAnswers.forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1;
    });

    // Sort categories by frequency
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    const topPrimary = sorted[0] || 'tech';
    const topSecondary = sorted[1] || 'biz';

    const primaryMeta = CATEGORY_META[topPrimary];
    const secondaryMeta = CATEGORY_META[topSecondary];

    questionCard.style.display = 'none';
    document.querySelector('.quiz-nav-controls').style.display = 'none';
    document.querySelector('.progress-header').style.display = 'none';

    resultsCard.style.display = 'block';
    resultsCard.innerHTML = `
      <div style="text-align: center; margin-bottom: 2.5rem;">
        <span class="results-header-badge">Exploration Summary Generated</span>
        <h2 style="font-size: 2.4rem; color: var(--color-navy); margin-bottom: 0.75rem;">Your Career Direction Profile</h2>
        <p style="color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
          Based on the preferences you selected across 6 exploratory questions, here are two prominent pathways worth investigating in greater depth:
        </p>
      </div>

      <div class="suggested-clusters">
        <div class="cluster-card" style="border-top: 4px solid ${primaryMeta.color};">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-family: var(--font-mono); font-weight: 700; color: ${primaryMeta.color};">Primary Cluster</span>
          <h4 style="margin: 0.5rem 0 1rem;">${primaryMeta.name}</h4>
          <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 1.25rem;">Careers in this cluster focus on your demonstrated interests in this sphere.</p>
          <div style="margin-bottom: 1.25rem;">
            <div style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.5rem;">Sample Pathways to Explore:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${primaryMeta.careers.map(car => `<a href="career-explorer.html" style="font-size: 0.8rem; background: var(--color-white); border: 1px solid var(--color-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-sm); color: var(--color-navy); font-weight: 500;">${car} →</a>`).join('')}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.4rem;">Discussion Points:</div>
            <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--color-navy); line-height: 1.6;">
              ${primaryMeta.questions.map(q => `<li>${q}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="cluster-card" style="border-top: 4px solid ${secondaryMeta.color};">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-family: var(--font-mono); font-weight: 700; color: ${secondaryMeta.color};">Complementary Cluster</span>
          <h4 style="margin: 0.5rem 0 1rem;">${secondaryMeta.name}</h4>
          <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 1.25rem;">Combining this area with your primary cluster can unlock distinctive multidisciplinary niches.</p>
          <div style="margin-bottom: 1.25rem;">
            <div style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.5rem;">Sample Pathways to Explore:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${secondaryMeta.careers.map(car => `<a href="career-explorer.html" style="font-size: 0.8rem; background: var(--color-white); border: 1px solid var(--color-border); padding: 0.3rem 0.65rem; border-radius: var(--radius-sm); color: var(--color-navy); font-weight: 500;">${car} →</a>`).join('')}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 0.4rem;">Discussion Points:</div>
            <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--color-navy); line-height: 1.6;">
              ${secondaryMeta.questions.map(q => `<li>${q}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="disclaimer-box" style="margin: 2rem 0;">
        <strong>Important Mandatory Exploration Disclaimer:</strong> This interactive activity is for general career exploration only. It is not a validated psychometric or aptitude assessment, clinical test, or scientific evaluation, and should not be used as the sole basis for educational or career decisions. Discuss important decisions with a qualified professional and verify relevant course and eligibility requirements.
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2.5rem;">
        <a href="contact.html" class="btn btn-primary">
          Discuss Results With a Counsellor
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="career-explorer.html" class="btn btn-secondary">Browse Career Library</a>
        <button type="button" class="btn btn-ghost" id="quiz-restart-btn">Restart Discovery Activity</button>
      </div>
    `;

    document.getElementById('quiz-restart-btn')?.addEventListener('click', restartQuiz);
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultsCard.style.display = 'none';
    questionCard.style.display = 'block';
    document.querySelector('.quiz-nav-controls').style.display = 'flex';
    document.querySelector('.progress-header').style.display = 'block';
    renderCurrentQuestion();
  }
});
