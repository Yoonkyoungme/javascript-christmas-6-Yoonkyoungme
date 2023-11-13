import FreeGift from "./FreeGift.js";
import DiscountDayOfWeek from "./DiscountDayOfWeek.js";

class Benefits {
  #order;
  #dayOfWeek;
  #totalPrice;

  constructor(order, date) {
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
}

export default Benefits;
