/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const room = {
  name: "main",
  wall_color: "white",
  shape: "rectangular",
  floor: "carpet",
  contians: {
    bed_type: "queen",
    chairs_num: 2,
    closet_type: "walk in",
  },
  size: 50,
};

console.log("The room object:", room);
console.log("The room type:", room.name);

var floor_type = "floor";

console.log("The floor type:", room[floor_type]);

console.log("The room colest type:", room.contians.closet_type);

const car = {
  brand: "Toyta",
  color: "red",
  engine_type: "elcetric",
  enterir: {
    set_cloth: "mixed",
    color: "black",
    door_num: 4,
  },
  model: 2024,
};

console.log("The New car brand:", car.brand);
console.log("The color of the car onterior:", car.enterir.color);

var num_doors = "door_num";

console.log("The car doors number is:", car.enterir[num_doors]);
