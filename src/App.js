import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Date from "./domain/Date.js";
import Order from "./domain/Order.js";
import Benefits from "./domain/benefits/Benefits.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    OutputView.printIntro();
    const date = await this.createDate();
    const order = await this.createOrder();
    const benefits = new Benefits(order.calculateTotalPrice());

    this.printPreview(date, order, benefits);
  }

  async createDate() {
    const inputdate = await InputView.readDate();
    const date = new Date(inputdate);
    return date;
  }

  async createOrder() {
    const inputOrder = await InputView.readOrder();
    const order = new Order(inputOrder);
    return order;
  }

  printPreview(date, order, benefits) {
    OutputView.printPreview(date, order, benefits);
  }
}

export default App;
