import { MENU_LIST } from "./utils/constants.js";

class Calculator {
  #order;
  #totalPriceBeforeDiscount;

  constructor(order) {
    this.#order = order;
    this.#totalPriceBeforeDiscount = this.calculateTotalPriceBeforeDiscount();
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
}

export default Calculator;
