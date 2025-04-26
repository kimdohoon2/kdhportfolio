import { useCallback } from "react";

export const useCircleMove = (circleClass: string) => {
  return useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const smallCircle = e.currentTarget.querySelector(
        `.${circleClass}`
      ) as HTMLElement;

      if (smallCircle) {
        smallCircle.style.transform = `translate(${relX}px, ${relY}px)`;
      }
    },
    [circleClass]
  );
};
