// Deel A
// Maak een broodje kaas
// 1. Pak een boterham
// 2. Stop er kaas tussen
// 3. Leg een boterham er bovenop

const makeCheeseSandwich = () => {
  console.log("1. Pak een boterham");
  console.log("2. Stop er kaas tussen");
  console.log("3. Leg er een boterham bovenop");
};

makeCheeseSandwich();

// Deel B

// Function declaration
const makeSandwich = (topping) => {
  return console.log(`There you go, a sandwich with ${topping}`);
};

// Function call
makeSandwich("cheese");
makeSandwich("ham");

// Deel C

const calculateDiscountedPrice = (totalAmount, discount) => {
  return Math.round(totalAmount - discount);
};

console.log(calculateDiscountedPrice(3.4, 1.6));

// Deel D

const calculateMinimumDiscountedPrice = (totalAmount, discount) => {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  }

  return totalAmount;
};

console.log(calculateMinimumDiscountedPrice(10, 5));
