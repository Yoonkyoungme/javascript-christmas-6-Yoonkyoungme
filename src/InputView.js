import Order from "./domain/Order.js";
import { Console } from "@woowacourse/mission-utils";
import { READ } from "./utils/messages.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(READ.DATE);
    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(READ.ORDER);
    return input;
  },
};

export default InputView;
