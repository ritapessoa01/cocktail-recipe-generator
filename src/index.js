function displayRecipe(response) {
  new Typewriter("#cocktail-recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateCocktail(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "43465c40f4c5d3a735b5b8tbed06aoae";
  let prompt = `User instructions are: Gerenate a recipe for a ${instructionsInput.value} cocktail`;
  let context =
    "You are an expert mixologist that loves making cocktails. Your misson is to write a recipe for a cocktail folowing the user instructions in basic HTLM format. Only write a title (in <h2>), the ingredients (in <strong>) and the instructions(in <strong>). Don't write '```html' at the top";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#cocktail-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `⌛ Generating your ${instructionsInput.value} cocktail recipe...`;

  axios.get(apiUrl).then(displayRecipe);
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);
