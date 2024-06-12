/**
 * Creat new Car class
 */

class Car {
  constructor(
    // Define prameters
    name,
    color,
    brand,
    model,
    seatcloth,
    seatcolor,
    engintype,
    date_bought
  ) {
    // Define properties
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.enterior = {
      seatmaterial: seatcloth,
      seatcolors: seatcolor,
    };
    this.engintype = engintype;
    this.date_bought = date_bought;
  }
  changecarcolor(newcolor) {
    this.color = newcolor;
  }
  updateenterior(newmaterial, newseatcolor) {
    (this.enterior.seatmaterial = newmaterial),
      (this.enterior.seatcolors = newseatcolor);
  }
  carAge() {
    let now = new Date();
    let acuire_date = new Date(this.date_bought);
    let elapsed = now - acuire_date;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Car;
