import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./";

import General from "./Modal.md";

let stories = storiesOf("Interactions|Modal", module);

stories.add(
  "Default",
  () => {
    const [openModal, setOpenModal] = useState(false);
    return (
      <>
        <button onClick={() => setOpenModal(true)}>Open</button>
        <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
          <button onClick={() => setOpenModal(false)}>Close</button>
        </Modal>
      </>
    );
  },
  {
    notes: { General }
  }
);
