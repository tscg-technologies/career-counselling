/* ==========================================================================
   CONTACT & BOOK A SESSION SCRIPT (contact.js)
   Frontend validation, career auto-population, and interactive confirmation modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('session-booking-form');
  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const paramCareer = urlParams.get('career');
  const paramStage = urlParams.get('stage');

  // Auto-populate guidance field if coming from career card
  const guidanceField = document.getElementById('guidance-area');
  const stageField = document.getElementById('user-stage');
  const messageField = document.getElementById('form-message');

  if (paramCareer && guidanceField) {
    guidanceField.value = `Exploring pathway for: ${paramCareer}`;
    if (messageField) {
      messageField.value = `Hello, I am interested in discussing the educational steps and industry outlook for a career as a ${paramCareer}.`;
    }
  }

  if (paramStage && stageField) {
    stageField.value = paramStage;
  }

  // Real-time input error removal
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form-group')?.classList.remove('has-error');
    });
  });

  // Handle submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      showConfirmationModal();
    }
  });

  function validateForm() {
    let isValid = true;

    // Name
    const nameInput = document.getElementById('full-name');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Please enter your full name');
      isValid = false;
    }

    // Email
    const emailInput = document.getElementById('email-address');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid email address');
      isValid = false;
    }

    // Phone
    const phoneInput = document.getElementById('phone-number');
    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Please enter a valid contact phone number');
      isValid = false;
    }

    // Persona
    const personaInput = document.getElementById('user-persona');
    if (!personaInput.value) {
      showError(personaInput, 'Please select your role');
      isValid = false;
    }

    // Stage
    if (!stageField.value) {
      showError(stageField, 'Please specify your current stage');
      isValid = false;
    }

    // Mode
    const modeInput = document.getElementById('counselling-mode');
    if (!modeInput.value) {
      showError(modeInput, 'Please select a preferred session format');
      isValid = false;
    }

    // Message
    if (!messageField.value.trim() || messageField.value.trim().length < 10) {
      showError(messageField, 'Please share a brief note about what you wish to discuss (minimum 10 characters)');
      isValid = false;
    }

    // Consent Checkbox
    const consentCheck = document.getElementById('consent-checkbox');
    const consentGroup = consentCheck.closest('.form-group');
    if (!consentCheck.checked) {
      consentGroup.classList.add('has-error');
      isValid = false;
    } else {
      consentGroup.classList.remove('has-error');
    }

    return isValid;
  }

  function showError(element, msg) {
    const group = element.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      const errEl = group.querySelector('.form-error');
      if (errEl) errEl.textContent = msg;
    }
  }

  function showConfirmationModal() {
    const modal = document.getElementById('booking-confirmation-modal');
    const detailsContainer = document.getElementById('confirmed-booking-details');
    if (!modal) return;

    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email-address').value.trim();
    const persona = document.getElementById('user-persona').value;
    const mode = document.getElementById('counselling-mode').value;
    const guidance = guidanceField.value.trim() || 'General Career Direction Consultation';

    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <div style="background: var(--color-ivory); border-radius: var(--radius-md); padding: 1.5rem; margin: 1.5rem 0; text-align: left; border: 1px solid var(--color-border);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem;">
            <div><strong style="color: var(--color-text-muted);">Name:</strong> <span style="color: var(--color-navy); font-weight: 600;">${name}</span></div>
            <div><strong style="color: var(--color-text-muted);">Role:</strong> <span style="color: var(--color-navy); font-weight: 600;">${persona}</span></div>
            <div><strong style="color: var(--color-text-muted);">Email:</strong> <span style="color: var(--color-navy); font-weight: 600;">${email}</span></div>
            <div><strong style="color: var(--color-text-muted);">Format:</strong> <span style="color: var(--color-navy); font-weight: 600;">${mode}</span></div>
            <div style="grid-column: 1 / -1;"><strong style="color: var(--color-text-muted);">Topic:</strong> <span style="color: var(--color-navy); font-weight: 600;">${guidance}</span></div>
          </div>
        </div>
      `;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset form
    form.reset();
  }

  // Modal Close
  const closeBtns = document.querySelectorAll('.close-confirmation-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('booking-confirmation-modal');
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
});
