import { Console } from "@woowacourse/mission-utils";
import { READ } from "./utils/messages.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(READ.DATE);
    return input;
  },
};

export default InputView;
