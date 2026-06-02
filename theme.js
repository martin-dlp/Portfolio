document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Vérifier le thème sauvegardé ou utiliser le thème sombre par défaut
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Gérer le clic sur le bouton de basculement
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    // Mettre à jour l'icône en fonction du thème
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}); 