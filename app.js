let Hanie = parseInt(prompt("enter a Max number"));
let Ayda = Math.floor(Math.random() * Hanie) + 1;

let Bahar = parseInt(prompt("enter a number"));

while (Bahar !== Ayda) {
  if (Bahar > Ayda) {
    Bahar = parseInt(prompt("your guess is bigger than goal"));
  } else {
    Bahar = parseInt(prompt("your guess is lower than goal"));
  }
}

alert("tof de rit boamo deroOrdi ise dooros bi");
