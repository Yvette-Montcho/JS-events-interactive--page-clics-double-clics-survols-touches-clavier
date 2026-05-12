// =============================================================================
// script.js — Gestion des événements JavaScript (9 fonctionnalités)
// Projet : JS & Events — ETP4A Week 9 Jour 1
// =============================================================================

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 1 & 1-BIS — Clic sur le footer avec compteur
// Cible : l'élément <footer>
// -----------------------------------------------------------------------------

// Sélection du footer via son sélecteur de balise
const footer = document.querySelector("footer");

// Compteur de clics — initialisé à 0, incrémenté à chaque clic
let clickCount = 0;

// Écoute l'événement "click" sur le footer
footer.addEventListener("click", function () {
  // Incrémente le compteur avant de l'afficher
  clickCount++;
  // Affiche en console le numéro du clic courant
  console.log("clic numéro " + clickCount);
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 2 — Hamburger Menu (toggle de la classe "collapse")
// Cible : le bouton #hamburger-btn et l'élément #navbarHeader
// -----------------------------------------------------------------------------

// Sélection du bouton hamburger par son identifiant
const hamburgerBtn = document.getElementById("hamburger-btn");

// Sélection du menu de navigation à afficher/masquer
const navbarHeader = document.getElementById("navbarHeader");

// Écoute le clic sur le bouton hamburger
hamburgerBtn.addEventListener("click", function () {
  // toggle() ajoute la classe si absente, la retire si présente
  navbarHeader.classList.toggle("collapse");
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 3 — Clic sur "Edit" de la Card 1 → texte rouge irréversible
// Cible : le premier bouton .btn-edit dans la première .card-col
// -----------------------------------------------------------------------------

// Sélection de toutes les colonnes de cards pour accéder à chacune individuellement
const cardCols = document.querySelectorAll(".card-col");

// Récupération du bouton Edit et du paragraphe de texte de la card 1 (index 0)
const editBtn1 = cardCols[0].querySelector(".btn-edit");
const cardText1 = cardCols[0].querySelector(".card-text");

// Écoute le clic sur le bouton Edit de la card 1
editBtn1.addEventListener("click", function () {
  // Applique la couleur rouge au texte — modification directe du style inline
  cardText1.style.color = "red";
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 4 — Clic sur "Edit" de la Card 2 → toggle couleur verte
// Cible : le bouton .btn-edit de la deuxième .card-col
// -----------------------------------------------------------------------------

// Récupération du bouton Edit et du paragraphe de la card 2 (index 1)
const editBtn2 = cardCols[1].querySelector(".btn-edit");
const cardText2 = cardCols[1].querySelector(".card-text");

// Écoute le clic sur le bouton Edit de la card 2
editBtn2.addEventListener("click", function () {
  // Vérifie si la couleur est déjà verte pour basculer entre vert et la couleur par défaut
  if (cardText2.style.color === "green") {
    // Remet la couleur par défaut (chaîne vide = hérite du CSS)
    cardText2.style.color = "";
  } else {
    // Applique la couleur verte
    cardText2.style.color = "green";
  }
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 5 — Double-clic sur la navbar → supprime/restaure Bootstrap CSS
// Cible : l'élément <nav> #main-navbar
// -----------------------------------------------------------------------------

// Sélection de la navbar principale
const mainNavbar = document.getElementById("main-navbar");

// Sélection de la balise <link> du CDN Bootstrap pour pouvoir la désactiver
const bootstrapCss = document.getElementById("bootstrap-css");

// Indicateur booléen : Bootstrap est-il actuellement actif ?
let bootstrapEnabled = true;

// Écoute le double-clic sur la navbar
mainNavbar.addEventListener("dblclick", function () {
  // Bascule entre désactivé et activé
  bootstrapEnabled = !bootstrapEnabled;
  // La propriété "disabled" sur un <link> empêche le navigateur d'appliquer la feuille de style
  bootstrapCss.disabled = !bootstrapEnabled;
  // Trace en console l'état courant de Bootstrap pour faciliter le débogage
  console.log("Bootstrap CSS " + (bootstrapEnabled ? "activé" : "désactivé"));
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 6 — Survol du bouton "View" → réduction de la card parente
// Cible : tous les boutons .btn-view
// -----------------------------------------------------------------------------

// Sélection de tous les boutons "View" présents dans la page
const viewButtons = document.querySelectorAll(".btn-view");

// Itération sur chaque bouton View pour attacher les écouteurs d'événements
viewButtons.forEach(function (btn) {
  // Récupère la card parente (l'ancêtre .card-col) du bouton survolé
  const parentCard = btn.closest(".card-col");

  // Récupère l'image et le texte de cette card spécifique
  const cardImage = parentCard.querySelector(".card-image");
  const cardText = parentCard.querySelector(".card-text");
  const cardTitle = parentCard.querySelector(".card-title");

  // "mouseenter" se déclenche quand la souris entre dans la zone du bouton
  btn.addEventListener("mouseenter", function () {
    // Cache le texte et le titre en les rendant invisibles
    cardText.style.display = "none";
    cardTitle.style.display = "none";
    // Réduit l'image à 20 % de sa taille originale via transform CSS
    cardImage.style.transform = "scale(0.2)";
    // Empêche l'image réduite de repousser le contenu en dessous
    cardImage.style.transformOrigin = "top left";
  });

  // "mouseleave" se déclenche quand la souris quitte la zone du bouton
  btn.addEventListener("mouseleave", function () {
    // Restaure l'affichage du texte et du titre
    cardText.style.display = "";
    cardTitle.style.display = "";
    // Supprime la transformation pour revenir à la taille normale
    cardImage.style.transform = "";
    cardImage.style.transformOrigin = "";
  });
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 7 — Clic sur "==>" → la dernière card passe en première position
// Cible : le bouton #btn-rotate-right et le conteneur #cards-wrapper
// -----------------------------------------------------------------------------

// Sélection du conteneur des cards (parent direct des .card-col)
const cardsWrapper = document.getElementById("cards-wrapper");

// Sélection du bouton de rotation vers la droite (dernière → première)
const btnRotateRight = document.getElementById("btn-rotate-right");

// Écoute le clic sur le bouton "==>"
btnRotateRight.addEventListener("click", function () {
  // Récupère la liste actualisée des colonnes (importante : la liste change après chaque rotation)
  const cols = cardsWrapper.querySelectorAll(".card-col");

  // Récupère la dernière card de la liste
  const lastCard = cols[cols.length - 1];

  // insertBefore(noeud, reference) insère "noeud" avant "reference" dans le parent
  // cols[0] est la première card → la dernière card sera donc insérée avant elle
  cardsWrapper.insertBefore(lastCard, cols[0]);
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 8 — Clic sur "<==" → la première card passe en dernière position
// Cible : le bouton #btn-rotate-left
// -----------------------------------------------------------------------------

// Sélection du bouton de rotation vers la gauche (première → dernière)
const btnRotateLeft = document.getElementById("btn-rotate-left");

// Écoute le clic sur le bouton "<=="
btnRotateLeft.addEventListener("click", function () {
  // Récupère la liste actualisée des colonnes
  const cols = cardsWrapper.querySelectorAll(".card-col");

  // Récupère la première card de la liste
  const firstCard = cols[0];

  // appendChild() ajoute un nœud à la fin du parent — la première card devient la dernière
  cardsWrapper.appendChild(firstCard);
});

// -----------------------------------------------------------------------------
// FONCTIONNALITÉ 9 — Keydown sur le logo → redistribution Bootstrap en colonnes
// Cible : #site-logo (tabindex="0" dans le HTML pour pouvoir recevoir le focus)
// Touches : "a" (gauche) | "y" (centre) | "p" (droite) | "b" (normal)
// -----------------------------------------------------------------------------

// Sélection du logo cliquable (doit avoir tabindex="0" dans le HTML pour le focus)
const siteLogo = document.getElementById("site-logo");

// Sélection du wrapper de toutes les cards pour lui appliquer les classes Bootstrap
const cardsWrapperF9 = document.getElementById("cards-wrapper");

// Écoute les touches du clavier lorsque le logo est focusé
siteLogo.addEventListener("keydown", function (event) {
  // Récupère la touche pressée (en minuscule pour uniformiser)
  const key = event.key.toLowerCase();

  // Réinitialise d'abord les classes de positionnement avant d'en appliquer de nouvelles
  cardsWrapperF9.className = "row";

  // Sélectionne le comportement en fonction de la touche pressée
  if (key === "a") {
    // Aligne le wrapper sur 4 colonnes à gauche de l'écran
    cardsWrapperF9.classList.add("col-4", "ms-0");
    console.log("Layout : 4 colonnes à gauche (touche 'a')");
  } else if (key === "y") {
    // Centre le wrapper sur 4 colonnes au milieu de l'écran
    cardsWrapperF9.classList.add("col-4", "mx-auto");
    console.log("Layout : 4 colonnes au centre (touche 'y')");
  } else if (key === "p") {
    // Aligne le wrapper sur 4 colonnes à droite de l'écran
    cardsWrapperF9.classList.add("col-4", "ms-auto");
    console.log("Layout : 4 colonnes à droite (touche 'p')");
  } else if (key === "b") {
    // Rétablit le layout normal (classe "row" déjà réinitialisée au-dessus)
    console.log("Layout : normal rétabli (touche 'b')");
  }
});

// Trace de démarrage — confirme que le script est bien chargé et prêt
console.log("script.js chargé — 9 fonctionnalités actives ✓");
