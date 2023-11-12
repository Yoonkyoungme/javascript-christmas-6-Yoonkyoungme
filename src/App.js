import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Calculator from "./Calculator.js";

class App {
  #date;
  #order;

  async run() {
    OutputView.printIntro();
    await this.getInputData();
    this.calculatePrice();
    OutputView.printPreview(this.#date, this.#order);
  }

  async getInputData() {
    this.#date = await InputView.readDate();
    this.#order = await InputView.readOrder();
  }

  calculatePrice() {
    const calculator = new Calculator(this.#order);
  }
}

export default App;
