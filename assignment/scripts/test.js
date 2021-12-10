let pets = 4;
let friendsPets = 3;
let mostPets;

switch (mostPets) {
  case pets > friendsPets:
    mostPets = pets;
    break;
  case pets< friendsPets:
    mostPets = friendsPets;
  default:
    mostPets = pets, friendsPets;
}

console.log(mostPets);
