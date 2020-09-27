const calculateSupply = (age, amountPerDay) => {
  const maxAge = 100;

  const amountTotal = (maxAge - age) * (365 * amountPerDay);
  console.log(`You will need ${amountTotal} to last you until the ripe old age of ${maxAge}`);
};

calculateSupply(34, 2);
calculateSupply(99, 10);

calculateSupply(16, 3);
