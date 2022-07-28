import CurrencySymbol from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (Object.getPrototypeOf(currency) !== CurrencySymbol.prototype) { throw TypeError('currency must be a CurrencySymbol'); }
    if (Object.getPrototypeOf(amount) !== Number.prototype) { throw TypeError('amount must be a Number'); }

    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (Object.getPrototypeOf(amount) !== Number.prototype) { throw TypeError('amount must be a number'); }
    if (Object.getPrototypeOf(conversionRate) !== Number.prototype) { throw TypeError('conversionRate must be a number'); }
    return amount * conversionRate;
  }

  set currency(newCurrency) {
    if (Object.getPrototypeOf(newCurrency) !== CurrencySymbol.prototype) { throw TypeError('currency must be a CurrencySymbol'); }
    this._currency = newCurrency;
  }

  set amount(newAmount) {
    if (Object.getPrototypeOf(newAmount) !== Number.prototype) { throw TypeError('amount must be a Number'); }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }
}
