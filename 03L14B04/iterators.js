const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log("While Loop: " + colors[i]);
  i++;
}

for (i = 0; i < colors.length; i++) {
  console.log("For loop: " + colors[i]);
}

colors.forEach((item) => console.log("Array Method: " + item));

// 1. While loop: 4, For loop: 2
// 2. forEach: 1
// 3. Het is leesbaarder en minder foutgevoelig
// 4.

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
};

const keys = Object.keys(fruits);
console.log(keys); // [apple, orange, pear]

for (const key of keys) {
  console.log(key);
}
