class DiscountChristmas {
  static INITIAL_DISCOUNT = 1000;
  static DAILY_DISCOUNT = 100;

  #discountResult;

  constructor(date) {
    this.#discountResult = this.calculateTotalDiscount(date);
  }

  calculateTotalDiscount(date) {
    const discount =
      DiscountChristmas.INITIAL_DISCOUNT +
      DiscountChristmas.DAILY_DISCOUNT * (date - 1);

    return { name: "크리스마스 디데이 할인", discount };
  }

  getTotalDiscount() {
    return this.#discountResult;
  }
}

export default DiscountChristmas;
