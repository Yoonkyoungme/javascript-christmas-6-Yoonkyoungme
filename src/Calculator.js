import { MENU_LIST, NUMBERS } from "./utils/constants.js";

class Calculator {
  #order;
  #totalPriceBeforeDiscount;
  #benefits = {};

  constructor(order) {
    this.#order = order;
    this.#totalPriceBeforeDiscount = this.calculateTotalPriceBeforeDiscount();
    this.#benefits = this.calculateBenefits();
  }

  calculateMenuPrice(category, order) {
    let price = 0;

    MENU_LIST[category].forEach((menuDetails) => {
      if (menuDetails.menu === order.menu) {
        price += menuDetails.price * order.quantity;
      }
    });

    return price;
  }

  calculateTotalPriceBeforeDiscount() {
    let total = 0;

    for (let category in MENU_LIST) {
      this.#order.forEach((order) => {
        total += this.calculateMenuPrice(category, order);
      });
    }

    return total;
  }

  calculateFreeGift() {
    this.#benefits["증정 이벤트"] =
      this.#totalPriceBeforeDiscount >= NUMBERS.FREE_GIFT_PRICE
        ? MENU_LIST.DRINKS.샴페인
        : "없음";
  }

  calculateBenefits() {
    this.calculateFreeGift();
    return this.#benefits;
  }
}

export default Calculator;
