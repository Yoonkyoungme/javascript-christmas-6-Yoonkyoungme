class Order {
  #order;

  constructor(order) {
    this.#validate(order);
    this.#order = this.parseOrder(order);
  }

  #validate(order) {}

  parseOrder(order) {
    const orderList = order.split(",");
    const orderMap = {};

    for (let order of orderList) {
      let [item, quantity] = order.split("-");
      orderMap[item] = parseInt(quantity, 10);
    }

    return orderMap;
  }

  getOrder() {
    return this.#order;
  }
}

export default Order;
