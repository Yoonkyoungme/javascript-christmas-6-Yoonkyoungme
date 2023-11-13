import FreeGift from "./FreeGift.js";
import DiscountDayOfWeek from "./DiscountDayOfWeek.js";
import DiscountSpecial from "./DiscountSpecial.js";

class Benefits {
  #date;
  #order;
  #dayOfWeek;
  #totalPrice;

  constructor(order, date) {
    this.#date = date.getDate();
    this.#order = order.getOrder();
    this.#dayOfWeek = date.getDayOfWeek();
    this.#totalPrice = order.getTotalPrice();
  }

  getFreeGift() {
    const freeGift = new FreeGift(this.#totalPrice);
    return freeGift.getFreeGift();
  }

  getDiscountDayOfWeek() {
    const discount = new DiscountDayOfWeek(this.#order, this.#dayOfWeek);
    return discount.getTotalDiscount();
  }

  getDiscountSpecial() {
    const discount = new DiscountSpecial(this.#date, this.#dayOfWeek);
    return discount.getTotalDiscount();
  }
}

export default Benefits;
