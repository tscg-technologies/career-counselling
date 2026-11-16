/* ==========================================================================
   CAREER EXPLORER SCRIPT (career-explorer.js)
   Filtering, Search, and Interactive Career Detail Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('career-grid');
  if (!gridContainer || typeof CAREER_DATABASE === 'undefined') return;

  const searchInput = document.getElementById('career-search');
  const categoryPills = document.querySelectorAll('[data-category-filter]');
  const stageSelect = document.getElementById('filter-stage');
  const interestSelect = document.getElementById('filter-interest');
  const countDisplay = document.getElementById('careers-count');

  let currentCategory = 'all';
  let currentStage = 'all';
  let currentInterest = 'all';
  let searchQuery = '';

  // Render initial cards
  renderCareers();

  // Search input with debounce
  let debounceTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCareers();
      }, 180);
    });
  }

  // Category filter pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category-filter');
      renderCareers();
    });
  });

  // Stage select
  if (stageSelect) {
    stageSelect.addEventListener('change', (e) => {
      currentStage = e.target.value;
      renderCareers();
    });
  }

  // Interest select
  if (interestSelect) {
    interestSelect.addEventListener('change', (e) => {
      currentInterest = e.target.value;
      renderCareers();
    });
  }

  // Check URL query parameters (e.g. ?category=Technology or ?id=ux-designer)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCat = urlParams.get('category');
  const paramId = urlParams.get('id');

  if (paramCat) {
    const matchingPill = document.querySelector(`[data-category-filter="${paramCat}"]`);
    if (matchingPill) {
      categoryPills.forEach(p => p.classList.remove('active'));
      matchingPill.classList.add('active');
      currentCategory = paramCat;
      renderCareers();
    }
  }

  if (paramId) {
    const career = CAREER_DATABASE.find(c => c.id === paramId);
    if (career) {
      setTimeout(() => openCareerModal(career), 300);
    }
  }

  function filterData() {
    return CAREER_DATABASE.filter(item => {
      const matchCat = (currentCategory === 'all' || item.category.toLowerCase() === currentCategory.toLowerCase());
      const matchStage = (currentStage === 'all' || item.stage === currentStage);
      const matchInterest = (currentInterest === 'all' || item.interestArea === currentInterest);
      
      const matchSearch = !searchQuery || (
        item.title.toLowerCase().includes(searchQuery) ||
        item.summary.toLowerCase().includes(searchQuery) ||
        item.keySkills.some(skill => skill.toLowerCase().includes(searchQuery)) ||
        item.category.toLowerCase().includes(searchQuery)
      );

      return matchCat && matchStage && matchInterest && matchSearch;
    });
  }

  function renderCareers() {
    const filtered = filterData();

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${CAREER_DATABASE.length} careers`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--color-white); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">No careers match your current filter</h3>
          <p style="color: var(--color-text-muted); max-width: 460px; margin: 0 auto 1.5rem;">
            Try clearing your search terms or selecting 'All Categories' to discover more pathways.
          </p>
          <button class="btn btn-secondary btn-sm" id="reset-filters-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('reset-filters-btn')?.addEventListener('click', resetFilters);
      return;
    }

    gridContainer.innerHTML = filtered.map(c => `
      <div class="career-card-item hover-lift" data-career-id="${c.id}" tabindex="0" role="button" aria-label="View details for ${c.title}">
        <div class="career-card-category">${c.category}</div>
        <h3 class="career-card-title">${c.title}</h3>
        <p class="career-card-desc">${c.summary}</p>
        
        <div class="career-card-skills">
          ${c.keySkills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          ${c.keySkills.length > 3 ? `<span class="skill-tag">+${c.keySkills.length - 3}</span>` : ''}
        </div>

        <div class="career-card-footer">
          <span class="view-details-link">
            Explore Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: capitalize;">${c.stage}</span>
        </div>
      </div>
    `).join('');

    // Attach click and key listeners to rendered cards
    gridContainer.querySelectorAll('.career-card-item').forEach(card => {
      const id = card.getAttribute('data-career-id');
      const career = CAREER_DATABASE.find(item => item.id === id);

      card.addEventListener('click', () => openCareerModal(career));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCareerModal(career);
        }
      });
    });
  }

  function resetFilters() {
    currentCategory = 'all';
    currentStage = 'all';
    currentInterest = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (stageSelect) stageSelect.value = 'all';
    if (interestSelect) interestSelect.value = 'all';
    categoryPills.forEach(p => p.classList.remove('active'));
    document.querySelector('[data-category-filter="all"]')?.classList.add('active');
    renderCareers();
  }

  // Modal Functionality
  const modalOverlay = document.getElementById('career-modal-overlay');
  const modalCloseBtn = document.getElementById('career-modal-close');
  const modalBody = document.getElementById('career-modal-body');

  function openCareerModal(career) {
    if (!modalOverlay || !modalBody || !career) return;

    modalBody.innerHTML = `
      <div class="modal-header">
        <span class="eyebrow" style="margin-bottom: 0.75rem;">${career.category} Pathway</span>
        <h2 style="font-size: 2.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">${career.title}</h2>
        <p style="font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6;">${career.summary}</p>
      </div>

      <div class="modal-section">
        <h4>What This Professional Commonly Does</h4>
        <ul style="padding-left: 1.25rem; line-height: 1.8; color: var(--color-text-secondary);">
          ${career.responsibilities.map(r => `<li style="margin-bottom: 0.5rem;">${r}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>Essential Skills & Attributes</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
          ${career.keySkills.map(s => `<span class="skill-tag" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">${s}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h4>Example Educational Pathways</h4>
        <ul style="padding-left: 1.25rem; line-height: 1.8; color: var(--color-text-secondary);">
          ${career.educationPathways.map(p => `<li style="margin-bottom: 0.5rem;">${p}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>Questions to Consider Before Choosing This Path</h4>
        <div style="background: var(--color-lavender-light); border-radius: var(--radius-md); padding: 1.25rem 1.5rem;">
          <ul style="padding-left: 1.25rem; line-height: 1.7; color: var(--color-navy);">
            ${career.reflectionQuestions.map(q => `<li style="margin-bottom: 0.5rem;">${q}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="modal-section">
        <h4>Related Career Explorations</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${career.relatedCareers.map(rel => `<span class="tag-badge" style="background: var(--color-ivory); border: 1px solid var(--color-border); padding: 0.4rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--color-navy); font-weight: 500;">${rel}</span>`).join('')}
        </div>
      </div>

      <div class="disclaimer-box">
        <strong>Important Educational Note:</strong> Course eligibility, professional licensing, and admission standards vary significantly across different universities, statutory boards, and jurisdictions. All pathways presented here are educational examples and should be independently verified with relevant institutions or governing bodies.
      </div>

      <div style="margin-top: 2.25rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <a href="contact.html?career=${encodeURIComponent(career.title)}" class="btn btn-primary">
          Discuss This Career With a Counsellor
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <button class="btn btn-secondary" id="modal-secondary-close">Close Details</button>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    document.getElementById('modal-secondary-close')?.addEventListener('click', closeModal);
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('open')) {
      closeModal();
    }
  });
});
