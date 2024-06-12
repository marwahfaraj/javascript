/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Green Frog",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "April 5, 2024 15:00:00 PST"
);

const content = `
<main>
  <article>
    <h1>${everydayPack.name}</h1>
    <ul>
      <li>Volume: ${everydayPack.volume}</li>
      <li>Color: ${everydayPack.color}</li>
      <li>Age: ${everydayPack.backpackAge}</li>
      <li>Number of pockets: ${everydayPack.pocketNum}</li>
      <li>Left strap length: ${everydayPack.strapLength.left}</li>
      <li>Right strap length: ${everydayPack.strapLength.right}</li>
      <li>Lid status: ${everydayPack.lidOpen}</li>
    </ul>
  </article>
</main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);

console.log("The Day since acuired:", everydayPack.backpackAge());
