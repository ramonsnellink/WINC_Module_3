const age = 23;
const isFemale = false;
const driverStatus = "bob";
const name = "kees";
const totalAmount = 30;

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je bent een vrouw");
} else {
  console.log("Je bent geen vrouw");
}

if (driverStatus === "bob") {
  console.log("Je mag rijden");
} else {
  console.log("Je mag niet rijden");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting");
} else {
  console.log("Je krijgt geen korting");
}

if (name === "bram" || name === "sarah") {
  console.log("Je krijgt een gratis biertje");
} else {
  console.log("Je krijgt geen gratis biertje");
}

if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
  console.log("gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting, maar leuk dat je er bent");
}
