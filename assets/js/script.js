'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  console.log(`Filtre sélectionné : ${selectedValue}`);
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category.toLowerCase()) {
      item.classList.add("active"); // Afficher
      console.log(`Affiche : ${item.dataset.category}`);
    } else {
      item.classList.remove("active"); // Cacher
      console.log(`Cache : ${item.dataset.category}`);
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Ajouter un événement click à chaque bouton de navigation
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Supprimer la classe active de tous les boutons et sections
    navigationLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Ajouter la classe active au bouton et à la section correspondante
    link.classList.add("active");
    pages[index].classList.add("active");

    // Faire défiler vers le haut
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  });
});
const filterBtns = document.querySelectorAll("[data-filter-btn]");
console.log(filterBtns);
filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedCategory = btn.dataset.category.toLowerCase();

    // Supprime "active" de tous les boutons
    filterBtns.forEach(btn => btn.classList.remove("active"));

    // Ajoute "active" au bouton cliqué
    btn.classList.add("active");

    // Applique le filtre
    filterFunc(selectedCategory);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".section-button"); // Boutons
  const sections = document.querySelectorAll(".section"); // Sections de contenu

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          // Cache toutes les sections
          sections.forEach(section => {
              section.style.display = "none";
          });

          // Affiche uniquement la section correspondante
          const target = button.getAttribute("data-target");
          const targetSection = document.querySelector(`#${target}`);
          if (targetSection) {
              targetSection.style.display = "block";
          }
      });
  });
});
pages[index].classList.add("transitioning");
setTimeout(() => {
  pages[index].classList.remove("transitioning");
}, 500); // Correspond à la durée de la transition CSS

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const activePage = document.querySelector("[data-page].active");
    activePage?.classList.remove("active");
    pages[index].classList.add("active");

    link.classList.add("active");
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  });
});


