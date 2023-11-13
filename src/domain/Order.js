import { MENU_LIST } from "../utils/constants.js";

class Order {
  #order;

  constructor(order) {
    this.#validate(order);
    this.#order = this.parseOrder(order);
  }

  #validate(order) {}

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
