import { useEffect, useState } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? true : !value);

export const clearObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
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

export const useDebounce = <V>(value: V, delay: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再执行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
