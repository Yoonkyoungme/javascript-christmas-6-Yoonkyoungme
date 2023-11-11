import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "./utils/messages.js";

const OutputView = {
  printIntro() {
    Console.print(PRINT.INTRO);
  },

  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  },
  // ...
};

export default OutputView;
