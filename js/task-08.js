const form = document.querySelector(".login-form");
form.addEventListener("submit", whenFormSubmit);

function whenFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  const formResult = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    formResult[name] = value;
  });

  form.reset();
}
