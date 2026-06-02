(function () {
  const NAV_LINKS = [
    { href: 'Accueil.html', label: 'Accueil', page: 'accueil' },
    { href: 'Apropos.html', label: 'À propos', page: 'apropos' },
    { href: 'Compétences.html', label: 'Compétences', page: 'competences' },
    { href: 'Projets.html', label: 'Projets', page: 'projets' },
    { href: 'VeillesTechnologiques.html', label: 'Veille Technologique', page: 'veille' },
    { href: 'MonParcours.html', label: 'Mon Parcours', page: 'parcours' },
    { href: 'Contact.html', label: 'Contact', page: 'contact' }
  ];

  const DOCUMENTS = [
    {
      href: 'documents/CV_Martin_DELPLACE.pdf',
      label: 'CV',
      ariaLabel: 'Ouvrir le CV au format PDF dans un nouvel onglet'
    },
    {
      href: 'documents/Tableau_Synthese_E5.png',
      label: 'E5',
      ariaLabel: 'Ouvrir le tableau de synthèse E5 dans un nouvel onglet'
    }
  ];

  const SITUATIONS = [
    {
      href: 'documents/Situation_1.pdf',
      label: 'Situation 1',
      ariaLabel: 'Ouvrir la Situation 1 au format PDF dans un nouvel onglet'
    },
    {
      href: 'documents/Situation_2.pdf',
      label: 'Situation 2',
      ariaLabel: 'Ouvrir la Situation 2 au format PDF dans un nouvel onglet'
    }
  ];

  function renderSituationsDropdown() {
    const itemsHtml = SITUATIONS.map((situation) => `
      <li role="none">
        <a
          href="${situation.href}"
          class="document-dropdown-item"
          role="menuitem"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${situation.ariaLabel}"
        >
          <i class="fas fa-file-pdf" aria-hidden="true"></i>
          ${situation.label}
        </a>
      </li>`).join('');

    return `
      <li class="nav-dropdown document-dropdown">
        <button
          type="button"
          class="nav-link document-btn document-dropdown-trigger"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Télécharger les situations BTS"
        >
          <i class="fas fa-download" aria-hidden="true"></i>
          Situations
          <i class="fas fa-chevron-down dropdown-chevron" aria-hidden="true"></i>
        </button>
        <ul class="document-dropdown-menu" role="menu">
          ${itemsHtml}
        </ul>
      </li>`;
  }

  function renderNavbar(activePage) {
    const linksHtml = NAV_LINKS.map((link) => {
      const activeClass = link.page === activePage ? ' active' : '';
      return `<li><a href="${link.href}" class="nav-link${activeClass}">${link.label}</a></li>`;
    }).join('');

    const docsHtml = DOCUMENTS.map((doc) => `
      <li>
        <a href="${doc.href}" class="nav-link document-btn" target="_blank" rel="noopener noreferrer" aria-label="${doc.ariaLabel}">
          <i class="fas fa-download" aria-hidden="true"></i>
          ${doc.label}
        </a>
      </li>`).join('');

    return `
      <div class="container">
        <h1 class="glitch-text">Mon Portfolio</h1>
        <nav aria-label="Navigation principale">
          <ul>
            ${linksHtml}
            ${docsHtml}
            ${renderSituationsDropdown()}
          </ul>
        </nav>
      </div>`;
  }

  function closeAllDropdowns(except) {
    document.querySelectorAll('.document-dropdown.is-open').forEach((dropdown) => {
      if (dropdown !== except) {
        dropdown.classList.remove('is-open');
        const trigger = dropdown.querySelector('.document-dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initDocumentDropdowns() {
    const dropdowns = document.querySelectorAll('.document-dropdown');
    if (!dropdowns.length) return;

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector('.document-dropdown-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = !dropdown.classList.contains('is-open');
        closeAllDropdowns(willOpen ? dropdown : null);
        dropdown.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });

    document.addEventListener('click', () => closeAllDropdowns());
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeAllDropdowns();
    });
  }

  function initNavbar() {
    const header = document.getElementById('site-header');
    if (!header) return;

    const activePage = document.body.dataset.page || '';
    header.innerHTML = renderNavbar(activePage);
    initDocumentDropdowns();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
