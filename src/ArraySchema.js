class ArraySchema {
  constructor() {
    this.integer = false;
    this.customm = null;
  }

  isInteger(data) {
    for (let i = 0; i < data.length; i += 1) {
      if (!Number.isInteger(data[i])) {
        return false;
      }
    }
    return true;
  }

  isCustom(data) {
    if (!this.customm) {
      return true;
    }
    for (let i = 0; i < data.length; i += 1) {
      if (!this.customm(data[i])) {
        return false;
      }
    }
    return true;
  }

  isValid(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (this.integer && !this.isInteger(data)) {
      return false;
    }
    if (this.customm && !this.isCustom(data)) {
      return false;
    }
    return true;
  }

  allIntegers() {
    this.integer = true;
    return this;
  }

  custom(rules) {
    this.customm = rules;
    return this;
  }
}

export default ArraySchema;
