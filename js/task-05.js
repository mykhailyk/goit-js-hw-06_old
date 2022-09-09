const refs = {
  textInput: document.querySelector("#name-input"),
  textOutput: document.querySelector("#name-output"),
};

const whenInputActive = (active) => {
  const value = active.currentTarget.value.trim();
  value === ""
    ? (refs.textOutput.textContent = "Anonymous")
    : (refs.textOutput.textContent = value);
};

refs.textInput.addEventListener("input", whenInputActive);
