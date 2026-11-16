# Career Counseling & Career Guidance Platform
## Premium Editorial Digital Guidance Demonstration

> **Central Premise:** *"Your Future Isn't One-Size-Fits-All. Discover a Direction That Fits You."*

This repository contains a multi-page, static website built for a generic Career Counseling and Guidance Service. Designed as a digital agency portfolio demonstration, it adopts an editorial-meets-digital platform aesthetic rather than a traditional coaching institute template.

---

## 1. Technology Architecture

- **HTML5:** Semantic, accessible markup across 7 main pages.
- **CSS3:** Custom design system without third-party frameworks. Utilizes CSS variables, responsive CSS grid/flexbox, and `@media` queries.
- **Vanilla JavaScript:** 100% dependency-free JavaScript powering all navigation, interactive filters, modal dialogs, multi-step discovery tools, dynamic checklists, and client-side form validation.
- **Deployment Ready:** Fully static, zero-build-step structure suitable for direct upload to Hostinger static hosting, GitHub Pages, Netlify, or any static HTTP server.

---

## 2. Seven Main Pages

1. **`index.html` (Home):**
   - Abstract symbol-only logo and sticky header with mobile drawer navigation.
   - Hero section featuring an interactive SVG **Career Direction Map** with animated paths, connected career nodes, and floating micro-labels.
   - Interactive 4-stage journey selector (School Students, College Students, Graduates, Working Professionals).
   - Six visually distinct career category discovery modules.
   - 5-stage counselling roadmap (`01 Understand Yourself` through `05 Take Your Next Step`).
   - Parent & student co-exploration framework.

2. **`about.html` (About & Philosophy):**
   - Editorial headline: *"Career Guidance Should Start With the Individual."*
   - Five-pillar guidance approach & ethical principles.
   - Comprehensive breakdown of supported student and professional cohorts.
   - Illustrated 4-phase transformation from uncertainty to purposeful action.
   - Illustrative demo counselor profiles clearly designated for presentation purposes.

3. **`services.html` (Counselling Services):**
   - Differentiated guidance sections for School Students (Class 9–10), Class 11–12, College Undergraduates, Graduates, and Working Professionals.
   - Interactive parent consultation accordion and institutional campus awareness workshop overview.
   - Transparent pricing notes (`"Enquire for session details"`).

4. **`career-explorer.html` (Career Explorer):**
   - Filterable career library with 30+ professions across Technology, Healthcare, Business, Creative, Science, and Law.
   - Instant live search, category pills, education stage dropdown, and interest area filter.
   - Rich interactive detail modal displaying responsibilities, key skills, example educational routes, reflection questions, related career links, and institutional regulatory disclaimers.

5. **`career-assessment.html` (Career Discovery Tool):**
   - Multi-step interactive questionnaire (6 comprehensive questions, 1 question per screen).
   - Animated progress indicator and question transitions.
   - Transparent, client-side category matching algorithm producing tailored exploration clusters.
   - Prominent ethical disclaimer clarifying that the activity is an exploratory tool rather than a standardized psychometric evaluation.

6. **`resources.html` (Career Resources & Worksheets):**
   - Four interactive tools: Career Planning Checklist, Interview Readiness Checklist, Course Comparison Matrix Worksheet, and Skill Development Roadmap.
   - Searchable editorial library with 8 demo articles on stream choices, college selection, career transitions, and parental support.
   - Interactive article reader modal.

7. **`contact.html` (Contact & Book a Session):**
   - Comprehensive consultation booking intake form with client-side validation.
   - Dynamic parameter pre-population from Career Explorer links.
   - Interactive session confirmation modal with summary review.
   - Dummy contact information placeholders and visual breakdown of what a first consultation covers.

---

## 3. Supplementary Documentation & Assets

- **`IMAGE-GENERATION-GUIDE.md`:** Complete inventory table of all 13 image placeholders, with 13 individually copy-ready Google Flow generation prompts specifying subjects, lighting, composition, camera angles, color palettes, and negative prompts.
- **`sitemap.xml` & `robots.txt`:** SEO-compliant static metadata.
- **`assets/css/`:** `style.css` (global design tokens & components), `animations.css` (SVG path dash animations, scroll reveals, reduced motion queries), `responsive.css` (breakpoints for 1200px, 992px, 768px, 480px).
- **`assets/js/`:** `career-data.js` (static dataset of 30 careers), `main.js`, `career-explorer.js`, `career-discovery.js`, `resources.js`, `contact.js`.

---

## 4. Local Preview

To preview the website locally without any server dependencies, open `index.html` directly in any modern browser:

```powershell
Start-Process "index.html"
```

Or serve via any lightweight static HTTP server:
```powershell
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.
