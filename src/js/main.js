var burger = document.querySelector(".burger");
var burger_menu = document.querySelector(".burger_menu");

var toggleMenu = function toggleMenu() {
  burger_menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 50);
});

const boutonAjouterAuPanier = document.querySelector(".ajouter_au_panier");
let quantite = 0;

boutonAjouterAuPanier.addEventListener("click", () => {
  if (quantite === 0) {
    boutonAjouterAuPanier.innerHTML = `
      <button class="moins bouton quantity-controls">-</button>
      <span class="quantite bouton quantity-controls">${quantite}</span>
      <button class="plus bouton quantity-controls">+</button>
    `;
    const boutonMoins = boutonAjouterAuPanier.querySelector(".moins");
    const boutonPlus = boutonAjouterAuPanier.querySelector(".plus");
    const affichageQuantite = boutonAjouterAuPanier.querySelector(".quantite");

    boutonMoins.addEventListener("click", () => {
      if (quantite > 0) {
        quantite--;
        affichageQuantite.textContent = quantite;
        if (quantite === 0) {
          boutonAjouterAuPanier.innerHTML = "Ajouter au panier";
          boutonAjouterAuPanier.classList.remove("quantity-controls");
        }
      }
    });

    boutonPlus.addEventListener("click", () => {
      quantite++;
      affichageQuantite.textContent = quantite;
    });
  }
});
