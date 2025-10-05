const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const button = document.getElementById("filterBtn");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  resultDiv.textContent = `Original array: [${numbers.join(", ")}]\nEven numbers: [${evenNumbers.join(", ")}]`;
});
