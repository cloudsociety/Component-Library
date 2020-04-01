import React, { useEffect, useRef, useState } from "react";
// import scrollSnapPolyfill from "css-scroll-snap-polyfill"

import css from "./index.module.scss";

interface IProps {
  children: Array<any>;
  // dots?: React.ReactNode;
  // showScrollbars?: boolean;
  // hidePrevNext?: boolean;
  // stepBy?: number;
}

const Slider = ({ children }: IProps) => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // kick off the polyfill!
    // scrollSnapPolyfill();

    const config = {
      root: slider.current,
      rootMargin: "-10px", // Ensure items just outside viewport are "off".
      threshold: 0
    };

    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        entry.target.classList.remove("visible");
        if (entry.intersectionRatio === 0) {
          return;
        }
        entry.target.classList.add("visible");
      });

      // TODO: Fix me!!! Not quite right
      setCurrentSlide(+entries[0].target.getAttribute("data-index"));
    }, config);

    // Gonna need this later, so bump it to state.
    setSlides(slider.current.children);
    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-index", index);
      observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [slides]);

  // Liberally adapted from:
  // https://inclusive-components.design/a-content-slider/
  const changeSlide = (slideIndex: number) => {
    const childPos: ClientRect = slides[slideIndex].getBoundingClientRect();
    const parentPos: ClientRect = slider.current.getBoundingClientRect();
    const relativePos: number = childPos.left - parentPos.left;

    // Use `.scroll` so polyfill can capture it.
    // slider.current.scroll({ top: 0, left: scrollPos, behavior: "smooth" });
    slider.current.scrollBy({
      top: 0,
      left: relativePos,
      behavior: "smooth"
    });
  };

  function showNextPrevious(direction: string) {
    const parentPos: ClientRect = slider.current.getBoundingClientRect();
    let visibleChildren: Array<HTMLElement> = [
      ...slider.current.querySelectorAll(".visible")
    ].filter(child => {
      const bounds = child.getBoundingClientRect();
      return (
        bounds.left + 5 >= parentPos.left && bounds.right - 5 <= parentPos.right
      );
    });
    const visibleQuantity: number = visibleChildren.length;
    const firstVisibleChildIndex: number = +visibleChildren[0].getAttribute(
      "data-index"
    );

    const newIndex: number =
      direction === "previous"
        ? firstVisibleChildIndex - 1 < 0
          ? slides.length - 1
          : firstVisibleChildIndex - 1
        : firstVisibleChildIndex + visibleQuantity >= slides.length
        ? 0
        : firstVisibleChildIndex + 1;
    changeSlide(newIndex);
  }

  return (
    <>
      <div className="buttons">
        <button id="previous" onClick={() => showNextPrevious("previous")}>
          Previous
        </button>
        <button id="next" onClick={() => showNextPrevious("next")}>
          Next
        </button>
      </div>
      <div className={css.slider} tabIndex={-1}>
        <ul
          className={css.slides}
          ref={slider}
          role="region"
          aria-label="gallery"
          tabIndex={0}
        >
          {children.map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </div>
      {/* <div>
        {myArr.map((_item, index) => (
          <button key={index} onClick={() => changeSlide(index)}>
            {index + 1}
          </button>
        ))}
      </div> */}
    </>
  );
};

export default Slider;
