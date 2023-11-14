import { ERROR } from "../utils/messages.js";

class VisitDate {
  static YEAR = 2023;
  static MONTH = 12;
  static START_DAY = 1;
  static END_DAY = 31;

  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = parseInt(date);
  }

  #validate(date) {
    if (!this.#isInteger(date) || !this.#isInRange(date)) {
      throw new Error(ERROR.INVALID_DATE);
    }
  }

  #isInteger(date) {
    return !isNaN(date) && date % 1 === 0;
  }

  #isInRange(date) {
    return date >= VisitDate.START_DAY && date <= VisitDate.END_DAY;
  }

  getDate() {
    return this.#date;
  }

  formatDate(year, month, day) {
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return `${year}-${month}-${day}`;
  }

  getDayOfWeek() {
    const dateStr = this.formatDate(
      VisitDate.YEAR,
      VisitDate.MONTH,
      this.#date
    );
    const dayOfWeek = new Date(dateStr).getDay();
    return dayOfWeek;
  }
}

export default VisitDate;
