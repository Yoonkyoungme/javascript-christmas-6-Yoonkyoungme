import DiscountChristmas from "./DiscountChristmas.js";
import DiscountDayOfWeek from "./DiscountDayOfWeek.js";
import DiscountSpecial from "./DiscountSpecial.js";
import FreeGift from "./FreeGift.js";
import EventBadge from "./EventBadge.js";
import { NOT_RECEIVE, EVENT_DAY } from "../../utils/constants.js";

class Benefits {
  static BASE_PRICE = 10000;
  #date;
  #order;
  #dayOfWeek;
  #totalPrice;

  constructor(order, date) {
    this.#date = date.getDate();
    this.#order = order.getOrder();
    this.#dayOfWeek = date.getDayOfWeek();
    this.#totalPrice = order.getTotalPrice();
  }

  getDiscounts() {
    return {
      christmas: new DiscountChristmas(this.#date),
      dayOfWeek: new DiscountDayOfWeek(this.#order, this.#dayOfWeek),
      special: new DiscountSpecial(this.#date, this.#dayOfWeek),
    };
  }

  getFreeGift() {
    return new FreeGift(this.#totalPrice).getFreeGift();
  }

  applyChristmasDiscount(benefitList, discounts) {
    if (this.#date <= EVENT_DAY) {
      benefitList.push(discounts.christmas.getTotalDiscount());
    }
    return benefitList;
  }

  applyOtherDiscounts(benefitList, discounts) {
    const { dayOfWeek, special } = discounts;
    benefitList.push(
      dayOfWeek.getTotalDiscount(),
      special.getTotalDiscount(),
      this.getFreeGift()
    );
    return benefitList;
  }

  applyEvent() {
    const discounts = this.getDiscounts();
    let benefitList = [];
    benefitList = this.applyChristmasDiscount(benefitList, discounts);
    benefitList = this.applyOtherDiscounts(benefitList, discounts);
    const totalDiscountPrice = this.calculateTotalBenefits(benefitList);
    return { benefitList, totalDiscountPrice };
  }

  calculateTotalBenefits(benefitList) {
    return benefitList.reduce((acc, cur) => acc + cur.discount, 0);
  }

  getTotalBenefits() {
    if (this.#totalPrice < Benefits.BASE_PRICEto) {
      return NOT_RECEIVE;
    }
    return this.applyEvent();
  }

  findGiftDiscount(benefitList) {
    return benefitList.find((benefit) => benefit.name === "증정 이벤트")
      .discount;
  }

  getTotalPrice() {
    const totalBenefits = this.getTotalBenefits();
    const { benefitList, totalDiscountPrice } = totalBenefits;

    if (totalBenefits !== NOT_RECEIVE) {
      const giftDiscount = this.findGiftDiscount(benefitList);
      return this.#totalPrice - (totalDiscountPrice - (giftDiscount || 0));
    }
    return this.#totalPrice;
  }

  getEventBadge() {
    const totalBenefits = this.getTotalBenefits();
    if (totalBenefits === NOT_RECEIVE) {
      return NOT_RECEIVE;
    }

    const badge = new EventBadge(totalBenefits.totalDiscountPrice);
    return badge.getEventBadge();
  }
}

export default Benefits;
