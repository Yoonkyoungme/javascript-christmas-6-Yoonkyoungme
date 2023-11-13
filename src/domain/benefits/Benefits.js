/**
 * Benefits 클래스
 * 1. 증정 이벤트
 * 2. 요일 할인
 *  2.1. 평일 할인
 *  2.2. 주말 할인
 * 3.특별 할인
 * 4. 크리스마스 디데이 할인
 * 5. 이벤트 배지
 */

import FreeGift from "./FreeGift.js";

class Benefits {
  #totalPrice;

  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
  }

  getFreeGift() {
    const freeGift = new FreeGift(this.#totalPrice);
    return freeGift.getFreeGift();
  }
}

export default Benefits;
