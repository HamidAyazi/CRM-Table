import { useRef } from "react";

export function useDragScroll<T extends HTMLElement>() {
  // drag scroll hook to allow horizontal scrolling with mouse click
  const ref = useRef<T | null>(null);

  //drag states
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent) => {
    // initialized when mouse button is down
    if (!ref.current) return;

    isDown = true;
    ref.current.style.cursor = "grabbing"; // mouse cursor style

    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft; // triggered scroll position
  };

  const onMouseLeave = () => { // triggred when mouse leaves element
    isDown = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    // triggered when mouse button is up
    isDown = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => { // calculate and scroll the element based on mouse movement
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
