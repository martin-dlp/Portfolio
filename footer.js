// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Vérifier si le bouton existe
    if (backToTopButton) {
        // Fonction pour gérer l'apparition/disparition du bouton
        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
        
        // Écouter l'événement de scroll
        window.addEventListener('scroll', toggleBackToTop);
        
        // Vérifier la position initiale
        toggleBackToTop();
        
        // Gérer le clic sur le bouton
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 