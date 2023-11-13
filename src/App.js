import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import VisitDate from "./domain/VisitDate.js";
import Order from "./domain/Order.js";
import Benefits from "./domain/benefits/Benefits.js";

class App {
  async run() {
    OutputView.printIntro();
    const date = await this.createDate();
    const order = await this.createOrder();
    const benefits = new Benefits(order, date);

    this.printPreview(date, order, benefits);
  }

  async createDate() {
    const inputdate = await InputView.readDate();
    const date = new VisitDate(inputdate);
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
