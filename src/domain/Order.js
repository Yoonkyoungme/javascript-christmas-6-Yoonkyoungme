import { MENU_LIST } from "../utils/constants.js";
import { ERROR } from "../utils/messages.js";

class Order {
  static LIMIT_QUANTITY = 20;

  #order;

  constructor(order) {
    this.#validate(order);
    this.#order = this.parseOrder(order);
  }

  #validate(order) {
    this.#checkOrderFormat(order);
    this.#checkMenuExists(order);
  }

  #checkOrderFormat(order) {
    const regex = /^([가-힣]+-[1-9][\d]*,)*([가-힣]+-[1-9][\d]*)$/;
    if (!regex.test(order)) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  }

  #checkMenuExists(order) {
    const orderMenus = this.getOrderMenus(order);
    const menuList = Object.values(MENU_LIST)
      .flat()
      .map((item) => item.menu);
    if (!orderMenus.every((menu) => menuList.includes(menu))) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  }

  getOrderMenus(order) {
    return order.split(",").map((item) => item.split("-")[0]);
  }

  parseOrder(order) {
    const orderList = [];

    for (let menuDetails of order.split(",")) {
      let [menu, quantity] = menuDetails.split("-");
      quantity = parseInt(quantity, 10);
      orderList.push({ menu, quantity });
    }

    return orderList;
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

  calculateTotalPrice() {
    let total = 0;

    for (let category in MENU_LIST) {
      this.#order.forEach((order) => {
        total += this.calculateMenuPrice(category, order);
      });
    }

    return total;
  }

  getOrder() {
    return this.#order;
  }

  getTotalPrice() {
    return this.calculateTotalPrice();
  }
}

export default Order;
