import { LengthOptions } from './models/options/length';
import { ValidatorFn } from './models/ValidatorFn';

const _validateLength: ValidatorFn = (
  text: string,
  options?: LengthOptions
): boolean => {
  const textLength = text.trim().length;

  if (options?.min && textLength < options.min) return false;
  if (options?.max && textLength > options.max) return false;

  return true;
};

export const validateNameLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateSurname: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validatePasswordLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 6, max: 20 });
};

export const validateTitleLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateFirstNameLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateLastNameLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateAddressLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateCountryLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateCityLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateStateLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateZipCodeLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validatePhoneNumberLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validateUserEmailLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

