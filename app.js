// Initialisation : Afficher 'Hello World!' dans la console
console.log("Hello World!");

// Sélectionner le body pour la mise à jour du background
let body = document.querySelector("body");
// Sélectionner le premier input couleur
let firstColorInput = document.querySelector(".first-color-input");
// Sélectionner le second input couleur
let secondColorInput = document.querySelector(".second-color-input");
// Sélectionner l'input range pour l'orientation du gradient
let rangeInput = document.querySelector(".input-range");
// Sélectionner la div d'affichage de la première couleur
let firstColorValueDisplay = document.querySelector("#first-color-label");
// Sélectionner la div d'affichage de la seconde couleur
let secondColorValueDisplay = document.querySelector("#second-color-label");
// Sélectionner la div d'affichage de l'orientation
let orientationValue = document.querySelector(".orientation-value");
// Sélectionner le bouton de copie
let copyButton = document.querySelector(".copy-button");
// Sélectionner le bouton pour générer des couleurs aléatoires
let randomButton = document.querySelector(".random-button");

// Initialiser les variables pour les valeurs des couleurs et de l'orientation
let firstColorValue = firstColorInput.value;
let secondColorValue = secondColorInput.value;
let rangeValue = rangeInput.value;

// Je sélectionne les labels pour les couleurs
let firstLabel = document.querySelector("#first-color-label");
let secondLabel = document.querySelector("#second-color-label");

// Fonction pour mettre à jour le gradient du body
function updateGradient() {
  // Vérifier si toutes les valeurs sont présentes
  if (firstColorValue && secondColorValue && rangeValue) {
    // Construire la string du gradient
    let gradient = `linear-gradient(${rangeValue}deg, ${firstColorValue}, ${secondColorValue})`;
    // Appliquer le gradient au body
    body.style.background = gradient;
    // Log pour le débogage
    // console.log("Gradient appliqué:", gradient);
  }
}

// Écouteur d'événement pour le premier input couleur
firstColorInput.addEventListener("change", function (event) {
  // Stocker la nouvelle valeur de couleur
  firstColorValue = event.target.value;
  // Afficher la couleur dans la div correspondante
  console.log(firstLabel);
  firstLabel.style.background = firstColorValue;

  // Je passe la couleur en majuscule
  firstColorValueDisplay.textContent = firstColorValue.toUpperCase();
  // Appliquer le nouveau gradient
  updateGradient();
});

// Écouteur d'événement pour le second input couleur
secondColorInput.addEventListener("change", function (event) {
  // Stocker la nouvelle valeur de couleur
  secondColorValue = event.target.value;
  // Afficher la couleur dans la div correspondante
  secondLabel.style.background = secondColorValue;
  // Je passe la couleur en majuscule
  secondColorValueDisplay.textContent = secondColorValue.toUpperCase();
  // Appliquer le nouveau gradient
  updateGradient();
});

// Écouteur d'événement pour l'input range
rangeInput.addEventListener("input", function (event) {
  // Stocker la nouvelle valeur de l'orientation
  rangeValue = event.target.value;
  // Afficher le gradient dans le body
  body.style.background = rangeValue;
  // Afficher la nouvelle orientation
  orientationValue.textContent = "Orientation: " + rangeValue + "°";
  // Appliquer le nouveau gradient
  updateGradient();
});

// Fonction pour copier du texte dans le presse-papiers
function copyToClipboard(text) {
  // Utiliser l'API Clipboard pour la copie
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Log en cas de réussite
      console.log("Texte copié:", text);
    })
    .catch((err) => {
      // Log en cas d'erreur
      console.error("Erreur de copie:", err);
    });
}

// Écouteur d'événement pour le bouton de copie
copyButton.addEventListener("click", function (event) {
  // Vérifier si le gradient est complet
  if (firstColorValue && secondColorValue && rangeValue) {
    // Construire la string du gradient
    let gradient = `linear-gradient(${rangeValue}deg, ${firstColorValue}, ${secondColorValue})`;
    // Copier le gradient
    copyToClipboard(gradient);
  } else {
    // Log d'avertissement en cas d'infos manquantes
    console.warn("Infos de gradient incomplètes.");
  }
});

// Fonction pour générer une couleur hexadécimale aléatoire
function randomHexColor() {
  // Fonction pour générer un composant couleur
  const randomValue = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  // Retourner la couleur complète
  return `#${randomValue()}${randomValue()}${randomValue()}`;
}

// Écouteur d'événement pour le bouton de couleurs aléatoires
randomButton.addEventListener("click", function (event) {
  // Générer et stocker les couleurs aléatoires
  firstColorValue = randomHexColor();
  secondColorValue = randomHexColor();
  // Mettre à jour les inputs avec les couleurs générées
  firstLabel.style.background = firstColorValue;
  secondLabel.style.background = secondColorValue;
  
  // Afficher les couleurs générées
  firstColorValueDisplay.textContent = firstColorValue.toUpperCase();
  secondColorValueDisplay.textContent = secondColorValue.toUpperCase();
  // Appliquer le nouveau gradient
  updateGradient();
});
