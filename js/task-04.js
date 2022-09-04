const counterRef = document.querySelector("#counter");

const decrementButton = counterRef.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = counterRef.querySelector(
  'button[data-action="increment"]'
);
const valueEl = counterRef.querySelector("#value");

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

decrementButton.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementButton.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
