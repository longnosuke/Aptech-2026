function add() {
  let n1 = parseInt(prompt("Enter n1:"));
  let n2 = parseInt(prompt("Enter n2:"));
  let n3 = parseInt(prompt("Enter n3:"));
  let result = n1 + n2 + n3;
  alert(`The sum of ${n1}, ${n2}, and ${n3} is ${result}.`);
}

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const subtract = (a, b) => {
  return a - b;
};
