import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import css from "./index.module.scss";

interface IProps {
  isOpen: boolean;
  aria?: {
    labelledby?: string;
    describedby?: string;
  };
  children: React.ReactNode | React.ReactNode[];
  onRequestClose(): void;
}

const Drawer = ({ children, isOpen, onRequestClose, aria = {} }: IProps) => {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    setShowDrawer(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={showDrawer}
      aria={aria}
      onRequestClose={onRequestClose}
      closeTimeoutMS={250}
      className={{
        base: css.drawer,
        afterOpen: css.drawerAfterOpen,
        beforeClose: css.drawerBeforeClose
      }} // Used to remove default styles.
      overlayClassName={{
        base: css.drawerOverlay,
        afterOpen: css.drawerOverlayAfterOpen,
        beforeClose: css.drawerOverlayBeforeClose
      }} // Used to remove default styles.
      bodyOpenClassName={css.drawerIsOpen}
    >
      {children}
    </ReactModal>
  );
};

export default Drawer;
