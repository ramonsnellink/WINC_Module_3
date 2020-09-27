const tellFortune = (numOfChildren, partnerName, location, jobTitle) => {
  console.log(
    `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids`
  );
};

tellFortune(3, "Hermine", "Elburg", "Fotograaf");
tellFortune(2, "Bla", "Zwolle", "Front-end Developer");
tellFortune(0, "Geen", "Amsterdam", "Zielig");
