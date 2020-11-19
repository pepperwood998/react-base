import { useRef, useEffect } from "react";

export default function useEffectSkip(fn: () => any, inputs: any[]) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
}
