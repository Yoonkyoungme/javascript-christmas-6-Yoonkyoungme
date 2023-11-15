import Order from "../src/domain/Order.js";
import { ERROR } from "../src/utils/messages.js";

describe("주문 클래스 테스트", () => {
  it("정상적인 주문 형식이 전달되면 인스턴스를 생성", () => {
    const orders = [
      "타파스-1",
      "시저샐러드-3,해산물파스타-1",
      "바비큐립-1,크리스마스파스타-3,초코케이크-2,레드와인-1",
    ];
    orders.forEach((order) => {
      expect(new Order(order)).toBeInstanceOf(Order);
    });
  });

  it("주문 메뉴가 형식에 맞지 않으면 에러를 발생", () => {
    const invalidOrders = [
      "양송이 수프-1",
      "양송이수프-0",
      "초코케이크 - 1",
      "해산물파스타",
      "크리스마스파스타-3,초코케이크-2,레드와인",
      "크리스마스파스타-3, 초코케이크-2, 레드와인-1",
    ];
    invalidOrders.forEach((invalidOrder) => {
      expect(() => new Order(invalidOrder)).toThrow(ERROR.INVALID_ORDER);
    });
  });

  it("메뉴판에 없는 메뉴이면 에러를 발생", () => {
    const invalidOrders = ["사이다-1", "콜라-2", "뇨끼파스타-1"];
    invalidOrders.forEach((invalidOrder) => {
      expect(() => new Order(invalidOrder)).toThrow(ERROR.INVALID_ORDER);
    });
  });

  it("중복된 메뉴를 입력한 경우 에러를 발생", () => {
    const invalidOrders = [
      "초코케이크-2,아이스크림-1,초코케이크-1",
      "티본스테이크-2,티본스테이크-1",
    ];
    invalidOrders.forEach((invalidOrder) => {
      expect(() => new Order(invalidOrder)).toThrow(ERROR.INVALID_ORDER);
    });
  });

  it("메뉴의 총 개수가 20개를 초과한 경우 에러를 발생", () => {
    const invalidOrders = [
      "초코케이크-21",
      "시저샐러드-2,티본스테이크-5,크리스마스파스타-11,레드와인-3",
    ];
    invalidOrders.forEach((invalidOrder) => {
      expect(() => new Order(invalidOrder)).toThrow(ERROR.INVALID_ORDER);
    });
  });

  it("음료만 입력한 경우 에러를 발생", () => {
    const invalidOrders = [
      "제로콜라-1",
      "레드와인-3",
      "샴페인-1",
      "제로콜라-1",
      "레드와인-1",
    ];
    invalidOrders.forEach((invalidOrder) => {
      expect(() => new Order(invalidOrder)).toThrow(ERROR.INVALID_ORDER);
    });
  });
});
