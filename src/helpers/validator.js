// @flow

export default {
  trim(str: string): string{
    return str.trim();
  },

  isNumeric(str: string): bool {
    return /^\d+$/.test(str);
  },

  isAlpha(str: string): bool {
    return /^[A-ZÁ-Úa-zá-ú ']+$/.test(str);
  },

  isAlphaNumeric(str: string): bool {
    return /^[A-ZÁ-Úa-zá-ú0-9 ']+$/.test(str);
  },

  isEmpty(str: string): bool {
    return str === '';
  },

  isEmptyObject(obj: Object): bool {
    return Object.entries(obj).length === 0
  },

  exactLength(str: string, length: number): bool {
    return str.length == length;
  },

  range(str: string, min: number, max: number): bool {
    return str.length >= min && str.length <= max;
  },

  isEmail(str: string): bool {
    return /^[^@]+@[^@]+\.[^@]+$/.test(str);
  },

  areEqual(str1: string, str2: string): bool {
    return str1.localeCompare(str2) === 0;
  }
}