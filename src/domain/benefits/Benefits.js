import DiscountChristmas from "./DiscountChristmas.js";
import DiscountDayOfWeek from "./DiscountDayOfWeek.js";
import DiscountSpecial from "./DiscountSpecial.js";
import FreeGift from "./FreeGift.js";
import { EVENT_DAY } from "../../utils/constants.js";

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

  getDicountChristmas() {
    const discount = new DiscountChristmas(this.#date);
    return discount.getTotalDiscount();
  }

  getDiscountDayOfWeek() {
    const discount = new DiscountDayOfWeek(this.#order, this.#dayOfWeek);
    return discount.getTotalDiscount();
  }

  getDiscountSpecial() {
    const discount = new DiscountSpecial(this.#date, this.#dayOfWeek);
    return discount.getTotalDiscount();
  }

  getFreeGift() {
    const freeGift = new FreeGift(this.#totalPrice);
    return freeGift.getFreeGift();
  }

  applyEvent() {
    const totalBenefits = [];

    if (this.#date <= EVENT_DAY) {
      totalBenefits.push(this.getDicountChristmas());
    }
    totalBenefits.push(
      this.getDiscountDayOfWeek(),
      this.getDiscountSpecial(),
      this.getFreeGift()
    );

    return totalBenefits;
  }
}

export default Benefits;
