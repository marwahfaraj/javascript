/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  new_poket_num: function (num) {
    this.pocketNum = num;
  },
  change_color: function (new_color) {
    this.color = new_color;
  },
};

console.log("The current poket number:", backpack.pocketNum);

backpack.new_poket_num(20);
console.log("The new pocket num:", backpack.pocketNum);

console.log("The current backpack color:", backpack.color);

backpack.change_color("red");

console.log("The new backpack color:", backpack.color);
