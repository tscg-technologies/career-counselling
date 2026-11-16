/* ==========================================================================
   CAREER RESOURCES SCRIPT (resources.js)
   Article Filtering, Search, Article Detail Modal, and Interactive Checklists
   ========================================================================== */

const DEMO_ARTICLES = [
  {
    id: "art-1",
    title: "How to Explore Career Options After Class 10",
    category: "Stream Selection",
    readTime: "5 min read",
    tag: "High School",
    summary: "A practical framework for evaluating Science, Commerce, and Humanities streams based on genuine aptitude rather than peer pressure.",
    content: `
      <p>The transition from Class 10 is often one of the earliest high-stakes academic junctions students encounter. Frequently, this decision is clouded by misconceptions that certain academic streams automatically determine an individual's intellectual worth or future prosperity.</p>
      <h4>1. Separate Subject Interest From Subject Scores</h4>
      <p>High marks in a particular subject during Class 10 do not always mean you will enjoy the rigorous depth required in higher secondary grades. Look beyond exam percentages: do you genuinely enjoy solving analytical theorems, writing persuasive essays, or balancing ledger transactions during unstructured personal time?</p>
      <h4>2. Understand Stream Intersections</h4>
      <p>Today's professional world is intensely multidisciplinary. Studying Commerce with Mathematics allows easy entry into computational finance, while Humanities students routinely advance into data journalism, intellectual property law, and corporate design strategy.</p>
      <h4>3. Avoid Premature Specialization Anxiety</h4>
      <p>Selecting a stream does not lock you into a single lifelong occupation. It simply defines your foundational methodology for the next two years. Keep an open mindset and cultivate transferable problem-solving capabilities.</p>
    `
  },
  {
    id: "art-2",
    title: "Understanding Career Choices After Class 12",
    category: "Course Selection",
    readTime: "6 min read",
    tag: "Higher Secondary",
    summary: "Navigating entrance examinations, degree pathways, professional credentials, and alternative multidisciplinary degrees.",
    content: `
      <p>Completing Class 12 represents a significant crossroads. The sheer volume of prospective entrance tests, institutional rankings, and parental expectations can create analysis paralysis.</p>
      <h4>1. Distinguish Professional Degrees from Foundational Degrees</h4>
      <p>Professional degrees (e.g. B.Tech, MBBS, B.Arch, B.Des, 5-Year Integrated LLB) train candidates for specific regulated professions. Foundational degrees (e.g. B.Sc. in Physics, B.A. in Economics, B.Com) offer wider analytical versatility and open pathways into postgraduate specializations.</p>
      <h4>2. Look Beyond Campus Brand Names</h4>
      <p>While institutional pedigree matters, the modern employment landscape prioritizes verifiable competencies, hands-on project portfolios, internships, and communication skills far above raw institutional prestige.</p>
      <h4>3. Always Have Parallel Contingency Plans</h4>
      <p>Competitive entrance examinations typically accept only a small fraction of applicants. Formulating a healthy secondary pathway prevents chronic burnout and maintains positive academic momentum.</p>
    `
  },
  {
    id: "art-3",
    title: "How to Choose a College Course",
    category: "Higher Education",
    readTime: "4 min read",
    tag: "College",
    summary: "Key criteria to examine: syllabus relevance, faculty mentorship, campus culture, internship access, and long-term career mobility.",
    content: `
      <p>Choosing an undergraduate course requires careful evaluation of both curriculum and future career mobility.</p>
      <h4>Curriculum Rigor and Elective Breadth</h4>
      <p>Review the exact credit structure of prospective degree programs. Does the university allow cross-departmental electives (e.g. studying Computer Science with Cognitive Psychology or Economics with Data Analytics)?</p>
      <h4>Faculty Mentorship and Practical Exposure</h4>
      <p>Look at active research labs, clinical rotations, or design atelier facilities rather than promotional brochures. Active mentorship makes the difference between passive memorization and applied expertise.</p>
    `
  },
  {
    id: "art-4",
    title: "Skills That Can Support a Technology Career",
    category: "Skill Development",
    readTime: "5 min read",
    tag: "Technology",
    summary: "Why coding syntax is only half the battle: critical thinking, version control, technical writing, and systems comprehension.",
    content: `
      <p>Aspiring technologists often obsess over learning the latest framework or buzzword. However, long-term technical resilience is anchored in evergreen fundamentals.</p>
      <h4>1. Systems Architecture Over Isolated Syntax</h4>
      <p>Programming languages change rapidly, but fundamental computing concepts—concurrency, network protocols, data structures, and database indexing—remain durable across decades.</p>
      <h4>2. Clear Technical Documentation</h4>
      <p>An engineer who can write clear pull request summaries, architectural decision records (ADRs), and bug reproductions will outpace peers who only produce undocumented code.</p>
    `
  },
  {
    id: "art-5",
    title: "Exploring Career Options After Graduation",
    category: "Career Planning",
    readTime: "6 min read",
    tag: "Graduates",
    summary: "Bridging the gap between university theory and workplace realities: entry roles, graduate exams, and professional skill mapping.",
    content: `
      <p>Graduation often brings a sharp reality shock: academic excellence does not automatically map onto immediate workplace placement without proactive positioning.</p>
      <h4>Building a Demonstrable Body of Work</h4>
      <p>Whether you completed an engineering degree, commerce, or humanities, recruiters look for proof of work: GitHub repos, financial analysis summaries, design case studies, or published research papers.</p>
      <h4>First Job vs. Forever Job</h4>
      <p>Your first job is not an immutable life verdict. It is an apprenticeship where you learn corporate communication, project pacing, feedback integration, and professional accountability.</p>
    `
  },
  {
    id: "art-6",
    title: "How Working Professionals Can Plan a Career Transition",
    category: "Career Transitions",
    readTime: "7 min read",
    tag: "Professionals",
    summary: "Step-by-step strategies for changing roles or industries without starting over from scratch: leveraging transferable capabilities.",
    content: `
      <p>A career pivot in your late 20s, 30s, or 40s is increasingly standard. The modern economy values individuals who bring domain expertise from one sector into another.</p>
      <h4>Audit Your Transferable Competencies</h4>
      <p>Skills like stakeholder communication, crisis management, budget allocation, and team leadership translate across virtually any sector.</p>
      <h4>De-Risk the Transition</h4>
      <p>Avoid abrupt resignations without an established landing strip. Build evening projects, freelance contracts, or micro-credentials in your target domain before formally transitioning.</p>
    `
  },
  {
    id: "art-7",
    title: "How Parents Can Support Career Decisions",
    category: "Parent Guidance",
    readTime: "5 min read",
    tag: "Parental Support",
    summary: "Constructive communication techniques that encourage children without projecting anxiety, outdated paradigms, or comparison.",
    content: `
      <p>Parental support is one of the most powerful determinants of a student's emotional resilience and career self-efficacy.</p>
      <h4>Replace Invalidation With Curiosity</h4>
      <p>Instead of dismissing unfamiliar fields (e.g., UI design, content strategy, or bioinformatics), ask open-ended questions: "What does an average workday look like in this field? What kind of organizations hire for this?"</p>
      <h4>Recognize the Evolution of the Job Market</h4>
      <p>Many thriving contemporary professions simply did not exist a generation ago. Encouraging adaptability and critical thinking prepares students far better than mandating rigid career tracks.</p>
    `
  },
  {
    id: "art-8",
    title: "Why Career Planning Should Be Flexible",
    category: "Career Planning",
    readTime: "5 min read",
    tag: "Philosophy",
    summary: "Treating your professional journey as an agile discovery process rather than a rigid, unyielding 40-year blueprint.",
    content: `
      <p>In a volatile global economy shaped by rapid technological progress and changing social priorities, a 30-year fixed career plan is an illusion.</p>
      <h4>The Compass Over the Map</h4>
      <p>A rigid map assumes the terrain never shifts. A compass, however, guides you using your core personal values, intrinsic interests, and foundational strengths, allowing you to navigate unexpected detours gracefully.</p>
      <h4>Continuous Reflection</h4>
      <p>Schedule an annual career check-in with yourself: Are you still learning? Does your current work align with your personal values? If not, what small course corrections can you test?</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initArticleExplorer();
  initChecklistInteractions();
  initWorksheetInteractions();
});

function initArticleExplorer() {
  const articlesGrid = document.getElementById('articles-grid');
  if (!articlesGrid) return;

  const searchInput = document.getElementById('article-search');
  const categoryPills = document.querySelectorAll('[data-resource-category]');
  const countDisplay = document.getElementById('articles-count');

  let currentCategory = 'all';
  let searchQuery = '';

  renderArticles();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderArticles();
    });
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-resource-category');
      renderArticles();
    });
  });

  function renderArticles() {
    const filtered = DEMO_ARTICLES.filter(item => {
      const matchCat = (currentCategory === 'all' || item.category === currentCategory);
      const matchSearch = !searchQuery || (
        item.title.toLowerCase().includes(searchQuery) ||
        item.summary.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery)
      );
      return matchCat && matchSearch;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${DEMO_ARTICLES.length} articles`;
    }

    if (filtered.length === 0) {
      articlesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--color-white); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
          <p style="color: var(--color-text-muted);">No articles found matching "${searchQuery}".</p>
        </div>
      `;
      return;
    }

    articlesGrid.innerHTML = filtered.map(art => `
      <article class="article-card hover-lift" data-article-id="${art.id}">
        <div class="article-body">
          <div class="article-meta">
            <span>${art.category}</span>
            <span>${art.readTime}</span>
          </div>
          <h3 class="article-title">${art.title}</h3>
          <p class="article-summary">${art.summary}</p>
          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--color-border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <button class="btn btn-ghost btn-sm open-article-btn" data-art="${art.id}" style="padding-left: 0; font-weight: 600;">
              Read Full Article →
            </button>
            <span style="font-size: 0.75rem; background: var(--color-lavender-light); padding: 0.2rem 0.6rem; border-radius: var(--radius-full); color: var(--color-royal-blue); font-weight: 500;">${art.tag}</span>
          </div>
        </div>
      </article>
    `).join('');

    // Attach read article listeners
    articlesGrid.querySelectorAll('.open-article-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-art');
        const art = DEMO_ARTICLES.find(a => a.id === id);
        openArticleModal(art);
      });
    });
  }

  // Article Modal
  const modalOverlay = document.getElementById('article-modal-overlay');
  const modalClose = document.getElementById('article-modal-close');
  const modalContent = document.getElementById('article-modal-content');

  function openArticleModal(art) {
    if (!modalOverlay || !modalContent || !art) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--color-border);">
        <span class="eyebrow" style="margin-bottom: 0.5rem;">${art.category}</span>
        <h2 style="font-size: 2.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">${art.title}</h2>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); font-family: var(--font-mono);">${art.readTime} • Illustrative Demo Publication</div>
      </div>
      <div style="line-height: 1.8; color: var(--color-text-secondary); font-size: 1.05rem;">
        ${art.content}
      </div>
      <div class="disclaimer-box" style="margin-top: 2rem;">
        <strong>Notice:</strong> This editorial article is published for demonstration and career exploration purposes only. Academic admission criteria and hiring standards fluctuate annually; verify specific queries with official institutional registries.
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeArticleModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeArticleModal();
    });
  }
}

/**
 * Interactive Checklists (Career Planning & Interview Prep)
 */
function initChecklistInteractions() {
  const checklists = document.querySelectorAll('.interactive-checklist');

  checklists.forEach(list => {
    const items = list.querySelectorAll('.checklist-item');
    const counter = list.parentElement.querySelector('.checklist-counter');

    function updateCount() {
      const checked = list.querySelectorAll('.checklist-item.checked').length;
      if (counter) {
        counter.textContent = `${checked} of ${items.length} completed`;
      }
    }

    items.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
        updateCount();
      });
    });

    updateCount();
  });
}

/**
 * Interactive Course Comparison Matrix
 */
function initWorksheetInteractions() {
  const matrixInputs = document.querySelectorAll('.worksheet-input');
  matrixInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = 'var(--color-royal-blue)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = 'var(--color-border)';
    });
  });
}
