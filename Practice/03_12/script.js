/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Car from "./Car.js";
import Apt from "./Apt.js";
import Birthdayparty from "./Birthdaypart.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const mycar = new Car(
  "bzr",
  "red",
  "toyta",
  2024,
  "leather",
  "black",
  "elctrec",
  "April 15, 2024 15:00:00 PST"
);

console.log("The My Car object:", mycar);
console.log("The color of my car:", mycar.color);
console.log("The origin car seat color:", mycar.enterior.seatcolors);
mycar.updateenterior("fabric", "dark grey");
console.log("The new car enrerior:", mycar.enterior);
console.log("The Car aquired:", mycar.carAge());
console.log("My car age:", mycar.date_bought);

const myapt = new Apt("white", 2, 2, "carpet", "walk_in");

console.log("My Apartment object:", myapt);
console.log("My apartment bedroom number:", myapt.bed_bath_num.bed_num);

const dean_birthday_part = new Birthdayparty(
  "2024-04-27",
  "Tamen park",
  52,
  "yellow and orange",
  "monkey",
  "half sheet"
);

console.log("Dean birthday party object:", dean_birthday_part);
console.log("The original theme:", dean_birthday_part.decoration.party_theme);
dean_birthday_part.change_decoration("green", "gorilla");
console.log("The new part theme:", dean_birthday_part.decoration.party_theme);

const bookTitle = "Alice's Adventures in lalland";
const bookAuther = "Lewis Carroll";
const bookPubYear = 1865;
const bookISBN = 9798369203415;

const book = new Book(bookTitle, bookAuther, bookPubYear, bookISBN);
