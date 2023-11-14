import DiscountChristmas from "./DiscountChristmas.js";
import DiscountDayOfWeek from "./DiscountDayOfWeek.js";
import DiscountSpecial from "./DiscountSpecial.js";
import FreeGift from "./FreeGift.js";
import { NOT_RECEIVE, EVENT_DAY } from "../../utils/constants.js";

class Benefits {
  static BASE_PRICE = 10000;

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
    const benefitList = [];

    if (this.#date <= EVENT_DAY) {
      benefitList.push(this.getDicountChristmas());
    }
    benefitList.push(
      this.getDiscountDayOfWeek(),
      this.getDiscountSpecial(),
      this.getFreeGift()
    );
    const totalDiscountPrice = this.calculateTotalBenefits(benefitList);
    return { benefitList, totalDiscountPrice };
  }

  calculateTotalBenefits(benefitList) {
    const discountPrice = benefitList.reduce(
      (acc, cur) => acc + cur.discount,
      0
    );
    return discountPrice;
  }

  getTotalBenefits() {
    if (this.#totalPrice >= Benefits.BASE_PRICE) {
      return this.applyEvent();
    }
    return NOT_RECEIVE;
  }
}

export default Benefits;
