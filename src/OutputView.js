import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "./utils/messages.js";
import { NOT_RECEIVE } from "./utils/constants.js";

const OutputView = {
  printIntro() {
    Console.print(PRINT.INTRO);
  },

  printPreview(date, order, benefits) {
    this.printPreviewStart(date);
    this.printMenu(order);
    this.printTotalPriceBeforeDiscount(order);
    this.printFreeGift(benefits);
    this.printBenefits(benefits);
    this.printTotalPriceAfterDiscount(benefits);
    this.printEventBadge(benefits);
  },

  printPreviewStart(date) {
    Console.print(PRINT.PREVIEW(date.getDate()));
  },

  printMenu(order) {
    Console.print(PRINT.ORDER_MENU);
    order.getOrder().forEach(({ menu, quantity }) => {
      Console.print(`${menu} ${quantity}개`);
    });
  },

  printTotalPriceBeforeDiscount(order) {
    Console.print(PRINT.BEFORE_DISCOUNT);
    Console.print(`${order.getTotalPrice().toLocaleString()}원`);
  },

  printFreeGift(benefits) {
    Console.print(PRINT.FREE_GIFT);
    const freeGift = benefits.getFreeGift();
    Console.print(freeGift.discount === 0 ? NOT_RECEIVE : freeGift.menu);
  },

  printBenefits(benefits) {
    Console.print(PRINT.BENEFIT_DETAILS);
    const totalBenefits = benefits.getTotalBenefits();

    this.isNotReceive(totalBenefits)
      ? Console.print(NOT_RECEIVE)
      : this.printBenefitList(totalBenefits);

    this.printTotalBenefitAmount(totalBenefits);
  },

  isNotReceive(totalBenefits) {
    return (
      totalBenefits === NOT_RECEIVE || totalBenefits.totalDiscountPrice === 0
    );
  },

  printBenefitList(totalBenefits) {
    totalBenefits.benefitList
      .filter(({ discount }) => discount !== 0)
      .forEach(this.printBenefit);
  },

  printBenefit({ name, discount }) {
    Console.print(`${name}: -${discount.toLocaleString()}원`);
  },

  printTotalBenefitAmount(totalBenefits) {
    Console.print(PRINT.TOTAL_BENEFIT_AMOUNT);

    let totalBenefitAmount = 0;
    if (!this.isNotReceive(totalBenefits)) {
      let { totalDiscountPrice } = totalBenefits;
      totalBenefitAmount = `-${totalDiscountPrice.toLocaleString()}`;
    }

    Console.print(`${totalBenefitAmount}원`);
  },

  printTotalPriceAfterDiscount(benefits) {
    Console.print(PRINT.AFTER_DISCOUNT);
    Console.print(`${benefits.getTotalPrice().toLocaleString()}원`);
  },

  printEventBadge(benefits) {
    Console.print(PRINT.EVENT_BADGE);
    Console.print(benefits.getEventBadge());
  },
};

export default OutputView;
