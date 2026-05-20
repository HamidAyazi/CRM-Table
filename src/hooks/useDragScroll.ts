import { useRef } from "react";

// drag scroll hook to allow horizontal scrolling with mouse click
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  //drag states
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // triggred when mouse button is down
  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;

    isDown = true;
    ref.current.style.cursor = "grabbing"; // mouse cursor style

    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft; // triggered scroll position
  };

  // triggred when mouse leaves element
  const onMouseLeave = () => {
    isDown = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  // triggered when mouse button is up
  const onMouseUp = () => {
    isDown = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  // calculate and scroll the element based on mouse movement
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !ref.current) return;

    e.preventDefault();

    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.2;

    ref.current.scrollLeft = scrollLeft - walk;
  };

  return {
    ref,
    handlers: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
    },
  };
}
