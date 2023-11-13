class VisitDate {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = parseInt(date);
  }

  #validate(date) {}

  getDate() {
    return this.#date;
  }

  formatDate(year, month, day) {
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return `${year}-${month}-${day}`;
  }

  getDayOfWeek() {
    const dateStr = this.formatDate(2023, 12, this.#date);
    const dayOfWeek = new Date(dateStr).getDay();
    return dayOfWeek;
  }
}

export default VisitDate;
