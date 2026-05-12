# js-events-interactive-page

## Objectif pédagogique

Apprendre à détecter et réagir aux événements utilisateur en JavaScript :  
clics, double-clics, survols, touches clavier — en manipulant le DOM en temps réel.

---

## Structure du projet

```
js-events-interactive-page/
├── exo_events.html   # Page HTML de base (fournie, non modifiée)
├── script.js         # Fichier JavaScript contenant les 9 fonctionnalités
└── README.md         # Ce fichier
```

---

## Fonctionnalités implémentées

| # | Description | Événement utilisé |
|---|-------------|-------------------|
| 1 | Clic sur le footer → log "clique" en console | `click` |
| 1-bis | Compteur de clics affiché en console | `click` |
| 2 | Hamburger menu → toggle affichage navbar | `click` |
| 3 | Bouton Edit card 1 → texte rouge (irréversible) | `click` |
| 4 | Bouton Edit card 2 → toggle couleur verte | `click` |
| 5 | Double-clic navbar → supprime/restaure Bootstrap CSS | `dblclick` |
| 6 | Survol bouton View → réduction de la card parente | `mouseenter` / `mouseleave` |
| 7 | Bouton `==>` → dernière card passe en premier | `click` |
| 8 | Bouton `<==` → première card passe en dernier | `click` |
| 9 | Logo focusé + touche `a`/`y`/`p`/`b` → layouts Bootstrap | `keydown` |

---

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Edge)
- [Visual Studio Code](https://code.visualstudio.com/) (recommandé)
- Connexion Internet (pour charger le CDN Bootstrap)

---

## Extensions VS Code à installer

Installez ces extensions avant d'ouvrir le projet dans VS Code :

| Extension | ID | Utilité |
|---|---|---|
| **Live Server** | `ritwickdey.LiveServer` | Lance un serveur local avec rechargement automatique |
| **Prettier** | `esbenp.prettier-vscode` | Formate automatiquement HTML, CSS et JS |
| **ESLint** | `dbaeumer.vscode-eslint` | Détecte les erreurs JavaScript en temps réel |
| **IntelliSense for CSS** | `ecmel.vscode-html-css` | Autocomplétion des classes CSS dans le HTML |
| **JavaScript (ES6) snippets** | `xabikos.JavaScriptSnippets` | Raccourcis de code JS modernes |
| **Auto Rename Tag** | `formulahendry.auto-rename-tag` | Renomme automatiquement les balises HTML jumelles |

### Installation rapide via terminal VS Code

```bash
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension ecmel.vscode-html-css
code --install-extension xabikos.JavaScriptSnippets
code --install-extension formulahendry.auto-rename-tag
```

---

## Exécution du projet avec VS Code

### Méthode recommandée — Live Server

1. **Ouvrir le dossier** dans VS Code :
   ```
   Fichier → Ouvrir le dossier → sélectionner js-events-interactive-page/
   ```

2. **Installer l'extension Live Server** (voir tableau ci-dessus si pas encore fait)

3. **Lancer la page** :
   - Clic droit sur `exo_events.html` dans l'explorateur de fichiers VS Code
   - Sélectionner **"Open with Live Server"**
   - Le navigateur s'ouvre automatiquement sur `http://127.0.0.1:5500/exo_events.html`

4. **Ouvrir la console** du navigateur pour voir les logs JavaScript :
   - Raccourci : `F12` → onglet **Console**

> Toute modification de `script.js` sera rechargée automatiquement grâce à Live Server.

### Méthode alternative — Ouverture directe

Double-cliquer sur `exo_events.html` pour l'ouvrir dans le navigateur par défaut.  
⚠️ Certaines fonctionnalités peuvent être limitées par les restrictions CORS du protocole `file://`.  
Préférez Live Server pour une expérience complète.

---

## Tester les fonctionnalités

| Fonctionnalité | Comment tester |
|---|---|
| F1 / F1-bis | Cliquer sur la barre noire en bas de page → voir la console |
| F2 | Réduire la fenêtre du navigateur → cliquer l'icône ☰ |
| F3 | Cliquer **Edit** sur la card 1 → texte devient rouge |
| F4 | Cliquer **Edit** sur la card 2 → texte bascule vert/normal |
| F5 | Double-cliquer sur la navbar → Bootstrap disparaît/réapparaît |
| F6 | Passer la souris sur un bouton **View** → card se réduit |
| F7 | Cliquer **==>** → la dernière card passe à gauche |
| F8 | Cliquer **<==** → la première card passe à droite |
| F9 | Cliquer sur **"JS & Events"** puis appuyer sur `a`, `y`, `p` ou `b` |

---

## Technologies utilisées

- **HTML5** — Structure de la page
- **Bootstrap 5.3** (CDN) — Grille responsive et composants UI
- **JavaScript ES6** — Logique interactive (vanilla JS, aucune dépendance)

---

## Licence

Ce projet est réalisé dans le cadre de la formation **ETP4A** Semaine 9, Jour 1.