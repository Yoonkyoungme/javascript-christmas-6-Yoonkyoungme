class FreeGift {
  static FREE_GIFT_PRICE = 120000;
  static FREE_GIFT_DISCOUNT = 25000;
  static FREE_GIFT_EVENT = {
    name: "증정 이벤트",
    menu: "샴페인",
  };

  #freeGift;

  constructor(totalPrice) {
    this.#freeGift = this.calculateFreeGift(totalPrice);
  }

  calculateFreeGift(totalPrice) {
    const discount =
      totalPrice >= FreeGift.FREE_GIFT_PRICE ? FreeGift.FREE_GIFT_DISCOUNT : 0;
    return { ...FreeGift.FREE_GIFT_EVENT, discount };
  }

  getFreeGift() {
    return this.#freeGift;
  }
}

export default FreeGift;
