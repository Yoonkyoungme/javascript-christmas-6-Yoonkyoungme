import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "./utils/messages.js";

const OutputView = {
  printIntro() {
    Console.print(PRINT.INTRO);
  },

  printPreview(data, order, totalPrice, benefits) {
    this.printPreviewStart(data);
    this.printMenu(order);
    this.printTotalPriceBeforeDiscount(totalPrice);
    this.printFreeGift(benefits);
  },

  printPreviewStart(data) {
    Console.print(PRINT.PREVIEW(data));
  },

  printMenu(orderList) {
    Console.print(PRINT.ORDER_MENU);

    for (let order of orderList) {
      let { menu, quantity } = order;
      Console.print(`${menu} ${quantity}개`);
    }
  },

  printTotalPriceBeforeDiscount(totalPrice) {
    Console.print(PRINT.BEFORE_DISCOUNT);
    Console.print(`${totalPrice.toLocaleString()}원`);
  },

  printFreeGift(benefits) {
    Console.print(PRINT.FREE_GIFT);
    const freeGift = benefits["증정 이벤트"] === "없음" ? "없음" : "샴페인 1개";
    Console.print(freeGift);
  },
};

export default OutputView;
