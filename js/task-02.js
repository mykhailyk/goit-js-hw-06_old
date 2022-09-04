const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItem = document.querySelector("#ingredients");

const arrayOfIngredients = ingredients.map((ingredients) => {
  const item = document.createElement("li");
  item.textContent = ingredients;
  item.classList.add("item");

  return item;
});

listItem.append(...arrayOfIngredients);
