import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "./utils/messages.js";

const OutputView = {
  printIntro() {
    Console.print(PRINT.INTRO);
  },

  printPreview(data, order, totalPrice) {
    this.printPreviewStart(data);
    this.printMenu(order);
    this.printTotalPriceBeforeDiscount(totalPrice);
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

  printTotalPriceBeforeDiscount(totalPrice) {
    Console.print(PRINT.BEFORE_DISCOUNT);
    Console.print(`${totalPrice.toLocaleString()}원`);
  },
};

export default OutputView;
