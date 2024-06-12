/***
 * Create Birthdayparty class
 */

class Birthdayparty {
  constructor(
    //Define prameters
    date,
    place,
    guests_num,
    balloon_color,
    theme,
    cake_size
  ) {
    // Define properties
    (this.date = date),
      (this.place = place),
      (this.guests_num = guests_num),
      (this.decoration = {
        balloons_color: balloon_color,
        party_theme: theme,
      }),
      (this.cake_size = cake_size);
  }
  change_decoration(color, charechter) {
    (this.decoration.balloons_color = color),
      (this.decoration.party_theme = charechter);
  }
  update_cake_size(new_size) {
    this.cake_size = new_size;
  }
}

export default Birthdayparty;
