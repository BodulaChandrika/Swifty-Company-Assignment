export const saveState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadState = (key, defaultValue) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};
