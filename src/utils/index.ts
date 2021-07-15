import { useEffect, useState } from "react";
export const isFalsy = (value: any) => (value === 0 ? true : !value);

export const clearObject = (object: any) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: Function) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
