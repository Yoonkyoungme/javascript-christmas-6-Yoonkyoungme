import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printIntro();
    await this.getInputData();
  }

  async getInputData() {
    const date = await InputView.readDate();
    const order = await InputView.readOrder();
  }
}

export default App;
