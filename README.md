# ePortfolio Abdelmajid EL HOU

Site vitrine statique (HTML/CSS/JS) construit à partir du template **Portfolio-Website** de [@jigar-sable](https://github.com/jigar-sable/Portfolio-Website) et totalement adapté à mon profil de Data Engineer/Analyst & formateur.

## Stack & fonctionnalités
- HTML5 / CSS3 personnalisés (`assets/css/style.css`)
- JavaScript vanilla + jQuery pour l’UI (menu sticky, scroll smooth, animations ScrollReveal, Typed.js, Particles.js, Tilt.js)
- Données injectées via JSON pour les compétences (`skills.json`) et les réalisations (`projects/projects.json`)
- Formulaire de contact côté client qui ouvre un `mailto:` pré-rempli vers `abdelmajid.elhou@gmail.com`

## Où mettre à jour mes contenus ?
| Section | Fichier(s) | Notes |
| --- | --- | --- |
| Hero, À propos, Parcours, Expérience, Contact | `index.html` | Texte 100 % en français |
| Compétences & outils | `skills.json` | Chaque entrée = nom + URL d’icône |
| Réalisations / services | `projects/projects.json` | `image` accepte un chemin relatif (`assets/images/...`) |
| Styles perso | `assets/css/style.css` | Ajout des classes `.work-subtitle`, `.contact-info`, etc. |

Les anciennes pages BootstrapMade (MyResume) sont sauvegardées dans `legacy-myresume/`.

## Développement local
1. Ouvrir le dossier dans VS Code et lancer l’extension “Live Server” sur `index.html` **ou** simplement ouvrir `index.html` dans votre navigateur.
2. Pour modifier les données : éditer les fichiers ci-dessus puis recharger la page (pas de build nécessaire).

## Licence
Usage personnel uniquement. Le design de base reste sous licence de [BootstrapMade](https://bootstrapmade.com/) et de [@jigar-sable](https://github.com/jigar-sable/Portfolio-Website). Merci de conserver leurs mentions.
