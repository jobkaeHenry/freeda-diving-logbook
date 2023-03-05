export const getLS = (key: string) => {
  return localStorage.getItem(key);
};

export const setLS = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLS = (key: string) => {
  localStorage.removeItem(key);
};
