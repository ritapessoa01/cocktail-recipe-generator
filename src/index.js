function generateCocktail(event) {
  event.preventDefault();

  new Typewriter("#cocktail-recipe", {
    strings: "mojito recipe mojito recipe mojito recipe",
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);
