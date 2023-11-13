class DiscountSpecial {
  #discountResult;

  constructor(date, dayOfWeek) {
    this.#discountResult = this.calculateTotalDiscount(date, dayOfWeek);
  }

  calculateTotalDiscount(date, dayOfWeek) {
    if (dayOfWeek === 0 || date === 25) {
      return { name: "특별 할인", discount: 1000 };
    }
  }

  getTotalDiscount() {
    return this.#discountResult;
  }
}

export default DiscountSpecial;
