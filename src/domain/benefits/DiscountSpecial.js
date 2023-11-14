import { EVENT_DAY } from "../../utils/constants.js";

class DiscountSpecial {
  #discountResult;

  constructor(date, dayOfWeek) {
    this.#discountResult = this.calculateTotalDiscount(date, dayOfWeek);
  }

  calculateTotalDiscount(date, dayOfWeek) {
    if (dayOfWeek === 0 || date === EVENT_DAY) {
      return { name: "특별 할인", discount: 1000 };
    }
    return { name: "특별 할인", discount: 0 };
  }

  getTotalDiscount() {
    return this.#discountResult;
  }
}

export default DiscountSpecial;
