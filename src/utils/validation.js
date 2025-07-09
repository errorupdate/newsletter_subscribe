export const validateFullName = (name) => /^[A-Za-z\s]+$/.test(name);
export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePreference = (pref) => !!pref;
