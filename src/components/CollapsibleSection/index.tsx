import React, { useState, useRef } from "react";

import css from "./index.module.scss";

interface IProps {
  heading: string;
  preHeading?: string;
  children: React.ReactNode | Array<React.ReactNode>;
  open?: boolean;
}

const CollapsibleSection = ({
  heading,
  preHeading,
  children,
  open = false
}: IProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [contentHeight, setContentHeight] = useState("0.01px");

  const content = useRef(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
    setContentHeight(!isOpen ? `${content.current.scrollHeight}px` : "0.01px");
  };

  return (
    <div className={css["collapsibleSection"]}>
      <button type="button" aria-expanded={isOpen} onClick={toggleCollapsible}>
        <h4>
          {preHeading && (
            <>
              <span className="color-secondary">{preHeading}</span>
              <br />
            </>
          )}
          {heading}
        </h4>
        <svg
          viewBox="0 0 12 12"
          width="12"
          height="12"
          role="presentation"
          focusable="false"
        >
          <rect height="12" width="2" y="0" x="5" />
          <rect height="2" width="12" y="5" x="0" />
        </svg>
      </button>
      <div
        ref={content}
        style={{ maxHeight: contentHeight }}
        inert={!isOpen ? "" : undefined} // React doesn't support boolean `inert` yet, so we need strings.
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
