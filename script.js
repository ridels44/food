const modal = document.querySelector(".modal-img");
const previews = document.querySelectorAll(".photo img");
const original = document.querySelector(".modal-img__full");
const imgText = document.querySelector(".modal-img__caption");

const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

const recipePhoto = document.querySelectorAll(".recipe__photo");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("modal-img-open");
    original.classList.add("modal-img__full-open");
    const originalSrc = preview.getAttribute("data-orginal");
    original.src = `./img/${originalSrc}.jpg`;
    imgText.textContent = preview.alt;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-img")) {
    modal.classList.remove("modal-img-open");
    original.classList.remove("modal-img__full-open");
  }
});

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  document.body.classList.toggle("dark");
  recipePhoto.forEach((recipe) => {
    recipe.classList.toggle("dark-recipe");
  });
});
