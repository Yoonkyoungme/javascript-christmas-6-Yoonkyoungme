import { ERROR } from "../utils/messages.js";

class Date {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = parseInt(date);
  }

  #validate(date) {}

  getDate() {
    return this.#date;
  }
}

export default Date;
