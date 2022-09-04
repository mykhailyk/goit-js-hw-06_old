const refs = {
  textInput: document.querySelector("#name-input"),
  textOutput: document.querySelector("#name-output"),
};

const whenInputActive = (active) => {
  active.currentTarget.value === ""
    ? (refs.textOutput.textContent = "Anonymous")
    : (refs.textOutput.textContent = active.currentTarget.value);
};

refs.textInput.addEventListener("input", whenInputActive);
