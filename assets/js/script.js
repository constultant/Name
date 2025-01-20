'use strict';

// Fonction pour activer ou désactiver une classe
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// Variables pour la barre latérale
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Gestion de la barre latérale pour mobile
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// Variables pour les témoignages
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variables pour la modal des témoignages
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Fonction pour afficher ou cacher la modal
const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Ajouter un événement à chaque élément de témoignage
testimonialsItem.forEach((item) => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
});

// Fermer la modal avec le bouton ou en cliquant sur l'overlay
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Variables pour la sélection personnalisée et les filtres
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Fonction pour gérer les filtres
const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === "all" || selectedValue === item.dataset.category.toLowerCase()) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Gestion des éléments de la sélection personnalisée
select.addEventListener("click", () => {
  elementToggleFunc(select);
});

selectItems.forEach((item) => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Ajouter un événement à tous les boutons de filtre
filterBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let selectedValue = this.dataset.category.toLowerCase();

    filterBtn.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    filterFunc(selectedValue);
  });
});

// Variables pour le formulaire de contact
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Activer le bouton de soumission si le formulaire est valide
formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    form.checkValidity() ? formBtn.removeAttribute("disabled") : formBtn.setAttribute("disabled", "");
  });
});

// Sélectionne les boutons de navigation et les pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Ajoute un événement à chaque bouton
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    console.log("Bouton cliqué :", link.innerText);

    // Supprime la classe "active" de tous les boutons et pages
    navigationLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Ajoute la classe "active" au bouton et à la section correspondante
    link.classList.add("active");
    pages[index].classList.add("active");

    // Remonte en haut de la page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});





console.log("JavaScript est bien chargé !");
document.getElementById("test-btn").addEventListener("click", function () {
  console.log("Bouton cliqué !");
});



