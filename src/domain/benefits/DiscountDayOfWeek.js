import { MENU_LIST } from "../../utils/constants.js";

class DiscountDayOfWeek {
  static DISCOUNT_RATE = 2023;
  static WEEK_CATEGORY_MAP = {
    평일: "DESSERTS",
    주말: "MAIN_DISHES",
  };

  #discountResult;

  constructor(order, dayOfWeek) {
    this.#discountResult = this.calculateTotalDiscount(order, dayOfWeek);
  }

  calculateTotalDiscount(order, dayOfWeek) {
    const week = dayOfWeek >= 0 && dayOfWeek <= 4 ? "평일" : "주말";
    return this.applyDiscount(
      order,
      week,
      DiscountDayOfWeek.WEEK_CATEGORY_MAP[week]
    );
  }

  applyDiscount(order, week, category) {
    let discount = 0;

    for (let orderItem of order) {
      const findMenu = MENU_LIST[category].find(
        (menuItem) => menuItem.menu === orderItem.menu
      );
      if (findMenu) {
        discount += DiscountDayOfWeek.DISCOUNT_RATE * orderItem.quantity;
      }
    }
    return { name: `${week} 할인`, discount };
  }

  getTotalDiscount() {
    return this.#discountResult;
  }
}

export default DiscountDayOfWeek;
