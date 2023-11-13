import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "./utils/messages.js";
import { BENEFITS } from "./utils/constants.js";

const OutputView = {
  printIntro() {
    Console.print(PRINT.INTRO);
  },

  printPreview(date, order, benefits) {
    this.printPreviewStart(date);
    this.printMenu(order);
    this.printTotalPriceBeforeDiscount(order);
    this.printFreeGift(benefits);
  },

  printPreviewStart(date) {
    Console.print(PRINT.PREVIEW(date.getDate()));
  },

  printMenu(order) {
    Console.print(PRINT.ORDER_MENU);

    const orderList = order.getOrder();
    for (let menuDetails of orderList) {
      let { menu, quantity } = menuDetails;
      Console.print(`${menu} ${quantity}개`);
    }
  },

  printTotalPriceBeforeDiscount(order) {
    const totalPrice = order.getTotalPrice();
    Console.print(PRINT.BEFORE_DISCOUNT);
    Console.print(`${totalPrice.toLocaleString()}원`);
  },

  printFreeGift(benefits) {
    Console.print(PRINT.FREE_GIFT);
    const freeGift = benefits.getFreeGift();
    Console.print(
      freeGift === BENEFITS.NOT_RECEIVE ? BENEFITS.NOT_RECEIVE : freeGift.menu
    );
  },
};

export default OutputView;
