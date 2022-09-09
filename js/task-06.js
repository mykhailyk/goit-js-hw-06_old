const inputRef = document.querySelector("#validation-input");
const valueLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", whenInputBlur);

const changeClass = (newClass, oldClass) => {
  inputRef.classList.add(newClass);
  inputRef.classList.remove(oldClass);
};

function whenInputBlur(event) {
  if (event.currentTarget.value.length === Number(valueLength)) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid", "valid");
  }
}
