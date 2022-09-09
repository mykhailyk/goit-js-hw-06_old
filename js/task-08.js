const form = document.querySelector(".login-form");
form.addEventListener("submit", whenFormSubmit);

function whenFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  const formResult = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    formResult[name] = value;
  });

  console.log(formResult);
  form.reset();
}
