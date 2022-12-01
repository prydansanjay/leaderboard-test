import { useEffect, useRef } from "react";

// Used to get previous state
const usePrevious = (value: Object) => {
  const prevChildrenRef = useRef<Object>();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
};

export default usePrevious;
