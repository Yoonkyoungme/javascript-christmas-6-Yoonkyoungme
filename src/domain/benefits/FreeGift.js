import { NUMBERS, BENEFITS } from "../../utils/constants.js";

class FreeGift {
  #freeGift;

  constructor(totalPrice) {
    this.#freeGift = this.calculateFreeGift(totalPrice);
  }

  calculateFreeGift(totalPrice) {
    if (totalPrice >= NUMBERS.FREE_GIFT_PRICE) {
      return BENEFITS.RECEIVE.FREE_GIFT;
    }
    return BENEFITS.NOT_RECEIVE;
  }

  getFreeGift() {
    return this.#freeGift;
  }
}

export default FreeGift;
