import VisitDate from "../src/domain/VisitDate.js";
import { ERROR } from "../src/utils/messages.js";

describe("방문 날짜 클래스 테스트", () => {
  it("정상적인 주문 형식이 전달되면 인스턴스를 생성", () => {
    const dates = [15, 1, 31];
    dates.forEach((date) => {
      expect(new VisitDate(date)).toBeInstanceOf(VisitDate);
    });
  });

  it("유효하지 않은 날짜가 전달되면 에러 발생", () => {
    const invalidDates = ["", "11일", 0, 32, 1.1];
    invalidDates.forEach((invalidDate) => {
      expect(() => new VisitDate(invalidDate)).toThrow(ERROR.INVALID_DATE);
    });
  });
});
