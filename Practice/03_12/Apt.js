/***
 * Create Apt object
 */

class Apt {
  constructor(
    // Define prameters
    wall_color,
    bedroom_num,
    bathroom_num,
    floor_type,
    closet_type
  ) {
    // Define properties
    (this.wall_color = wall_color),
      (this.bed_bath_num = {
        bed_num: bedroom_num,
        bath_num: bathroom_num,
      });
    (this.floor_type = floor_type), (this.closet_type = closet_type);
  }
  // Define methods
  updatebedbathnum(new_bednum, new_bathnum) {
    (this.bed_bath_num.bed_num = new_bednum),
      (this.bed_bath_num.bath_num = new_bathnum);
  }
  updatefloortype(new_floortype) {
    this.floor_type = new_floortype;
  }
}

export default Apt;
