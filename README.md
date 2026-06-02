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

**Ce projet n’est pas Next.js** : pages HTML à la racine (`Accueil.html`, `index.html`, etc.).

Le fichier `vercel.json` force le mode site statique (`framework: null`, `outputDirectory: "."`).

Dans le tableau de bord Vercel → **Settings → General → Build & Development** :

| Paramètre | Valeur |
|-----------|--------|
| Framework Preset | **Other** |
| Build Command | *(vide ou laisser `vercel.json`)* |
| Output Directory | **`.`** (point) ou vide |
| Install Command | *(vide)* |

Aucune variable d'environnement requise. Le dossier `documents/` à la racine est servi à l’URL `/documents/...`.

Après push, la page d’accueil est accessible sur `/` (redirection vers `Accueil.html`) et directement sur `/Accueil.html`.
