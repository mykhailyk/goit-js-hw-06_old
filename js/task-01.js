const arrayOfNumber = document.querySelector("#categories");

const quantityOfElement = arrayOfNumber.children;
console.log(`Number of categories: ${quantityOfElement.length}`);

const listCategories = document.querySelectorAll(".item");
listCategories.forEach((item) => {
  console.log("");
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
