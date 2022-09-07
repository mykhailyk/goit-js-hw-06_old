const inputRef = document.querySelector("#validation-input");
const valueLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", whenInputBlur);

function whenInputBlur(event) {
  if (event.currentTarget.value.length === Number(valueLength)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
