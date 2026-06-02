# Portfolio Martin DELPLACE

Site portfolio statique (HTML, CSS, JavaScript) déployable sur Vercel.

## Navbar

Une seule navbar partagée : `navbar.js` (injectée dans `#site-header` sur chaque page).

## Documents

| Bouton | Fichier | Chemin relatif |
|--------|---------|----------------|
| CV | `CV_Martin_DELPLACE.pdf` | `documents/CV_Martin_DELPLACE.pdf` |
| E5 | `Tableau_Synthese_E5.png` | `documents/Tableau_Synthese_E5.png` |

Les fichiers doivent être présents dans le dossier **`documents/`** à la racine du projet (copie miroir dans `public/documents/` optionnelle).

## Test local

```powershell
npx --yes serve .
```

Ouvrir `http://localhost:3000/Accueil.html`

> Les chemins relatifs `documents/...` ne fonctionnent pas si vous ouvrez les fichiers HTML directement (`file://`). Utilisez un serveur HTTP local ou Vercel.

## Déploiement Vercel

Aucune variable d'environnement requise. Le dossier `documents/` à la racine est servi automatiquement à l’URL `/documents/...`.
