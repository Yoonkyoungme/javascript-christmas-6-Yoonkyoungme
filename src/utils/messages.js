const READ = {
  DATE: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  ORDER:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
};

const PRINT = {
  INTRO: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  PREVIEW(date) {
    return `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`;
  },
  ORDER_MENU: "<주문 메뉴>",
  BEFORE_DISCOUNT: "\n<할인 전 총주문 금액>",
  FREE_GIFT: "\n<증정 메뉴>",
  BENEFIT_DETAILS: "\n<혜택 내역>",
  TOTAL_BENEFIT_AMOUNT: "\n<총혜택 금액>",
  AFTER_DISCOUNT: "\n<할인 후 예상 결제 금액>",
  EVENT_BADGE: "\n<12월 이벤트 배지>",
};

const ERROR = {
  INVALID_DATE: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  INVALID_ORDER: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

export { READ, PRINT, ERROR };
