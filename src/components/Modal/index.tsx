import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import classNames from "classnames";

import css from "./index.module.scss";

interface IProps {
  isOpen: boolean;
  isWide?: boolean;
  aria?: {
    labelledby?: string;
    describedby?: string;
  };
  children: React.ReactNode | React.ReactNode[];
  onRequestClose(): void;
}

const Modal = ({
  children,
  isOpen,
  isWide = false,
  onRequestClose,
  aria = {}
}: IProps) => {
  // Ensure all IDs are unique throughout the site.
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={showModal}
      aria={aria}
      onRequestClose={onRequestClose}
      closeTimeoutMS={250}
      className={{
        base: classNames(css.modal, {
          [css.modalWide]: isWide
        }),
        afterOpen: css.modalAfterOpen,
        beforeClose: css.modalBeforeClose
      }} // Used to remove default styles.
      overlayClassName={{
        base: css.modalOverlay,
        afterOpen: css.modalOverlayAfterOpen,
        beforeClose: css.modalOverlayBeforeClose
      }} // Used to remove default styles.
      bodyOpenClassName={css.modalIsOpen}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
