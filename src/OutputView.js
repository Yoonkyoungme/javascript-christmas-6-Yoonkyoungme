import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "./utils/messages.js";

const OutputView = {
  printIntro() {
    Console.print(PRINT.INTRO);
  },

  printPreview(data, order) {
    this.printPreviewStart(data);
    this.printMenu(order);
  },

  printPreviewStart(data) {
    Console.print(PRINT.PREVIEW(data));
  },

  printMenu(order) {
    Console.print(PRINT.ORDER_MENU);
    for (let [menu, quantity] of Object.entries(order)) {
      Console.print(`${menu} ${quantity}개`);
    }
  },
};

export default OutputView;
