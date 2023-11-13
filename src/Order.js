class Order {
  #order;

  constructor(order) {
    this.#validate(order);
    this.#order = this.parseOrder(order);
  }

  #validate(order) {}

  parseOrder(order) {
    const orderList = order.split(",");
    const orderMap = [];

    for (let order of orderList) {
      let [menu, quantity] = order.split("-");
      quantity = parseInt(quantity, 10);
      orderMap.push({ menu, quantity });
    }

    return orderMap;
  }

  getOrder() {
    return this.#order;
  }
}

export default Order;
