import Order from "./Order.js";
import { Console } from "@woowacourse/mission-utils";
import { READ } from "./utils/messages.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(READ.DATE);
    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(READ.ORDER);
    const order = new Order(input);
    return order.getOrder();
  },
};

export default InputView;
