export const add = (firstValue: number, secondValue: number) =>
  firstValue + secondValue;

export const multiply = (firstValue: number, secondValue = 0) =>
  firstValue * secondValue;

export const subtract = (firstValue: number, secondValue?: number) =>
  firstValue - (secondValue ?? 0);
