export default class Currency {
  constructor(code, name) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be a String');
    if (Object.getPrototypeOf(code) !== String.prototype) throw TypeError('code must be a string');

    this._name = name;
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  set name(newname) {
    if (Object.getPrototypeOf(newname) !== String.prototype) throw TypeError('name must be a String');
    this._name = newname;
  }

  set code(newCode) {
    if (Object.getPrototypeOf(newCode) !== String.prototype) throw TypeError('code must be a string');
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
