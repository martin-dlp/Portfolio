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
          </ul>
        </nav>
      </div>`;
  }

  function initNavbar() {
    const header = document.getElementById('site-header');
    if (!header) return;

    const activePage = document.body.dataset.page || '';
    header.innerHTML = renderNavbar(activePage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
