import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import VisitDate from "./domain/VisitDate.js";
import Order from "./domain/Order.js";
import Benefits from "./domain/benefits/Benefits.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    OutputView.printIntro();
    const date = await this.createDate();
    const order = await this.createOrder();
    const benefits = new Benefits(order, date);

    this.printPreview(date, order, benefits);
  }

  async createDate() {
    try {
      const inputdate = await InputView.readDate();
      const date = new VisitDate(inputdate);
      return date;
    } catch (error) {
      Console.print(error.message);
      return await this.createDate();
    }
  }

  async createOrder() {
    try {
      const inputOrder = await InputView.readOrder();
      const order = new Order(inputOrder);
      return order;
    } catch (error) {
      Console.print(error.message);
      return await this.createOrder();
    }
  }

  printPreview(date, order, benefits) {
    OutputView.printPreview(date, order, benefits);
  }
}

export default App;
