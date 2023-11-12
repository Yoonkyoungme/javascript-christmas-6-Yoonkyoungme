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

  calculatePriceForMenu(menu, quantity) {
    for (let category in MENU_LIST) {
      if (menu in MENU_LIST[category]) {
        return MENU_LIST[category][menu] * quantity;
      }
    }
    return 0;
  }

  calculateTotalPriceBeforeDiscount() {
    let total = 0;

    for (let menu in this.#order) {
      total += this.calculatePriceForMenu(menu, this.#order[menu]);
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
