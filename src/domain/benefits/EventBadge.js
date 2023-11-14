import { NOT_RECEIVE } from "../../utils/constants.js";

class EventBadge {
  static MINIMUM_PRICE = 5000;
  static BADGE_STATE = {
    산타: 20000,
    트리: 10000,
    별: 5000,
  };

  #badge;

  constructor(totalBenefits) {
    this.#badge = this.applyBadge(totalBenefits);
  }

  applyBadge(totalBenefits) {
    if (totalBenefits < EventBadge.MINIMUM_PRICE) {
      return NOT_RECEIVE;
    }

    for (let [badge, price] of Object.entries(EventBadge.BADGE_STATE)) {
      if (totalBenefits >= price) {
        return badge;
      }
    }
  }

  getEventBadge() {
    return this.#badge;
  }
}

export default EventBadge;
