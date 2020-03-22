import React, { useState } from "react";
import { boolean } from "@storybook/addon-knobs";
import shortid from "shortid";
import Modal from "./";

import General from "./readme.mdx";

export default {
  title: "Molecules|Modal",
  component: Modal,
  parameters: {
    docs: {
      page: General
    }
  }
};

export const Default = () => {
  const shortId = shortid.generate(); // Use this to generate unique ids
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open</button>
      <Modal
        isOpen={openModal}
        isWide={boolean("Wide dimensions?", false)}
        onRequestClose={() => setOpenModal(false)}
        aria={{
          labelledby: `modal-title-${shortId}`
        }}
      >
        <h2 id={`modal-title-${shortId}`}>
          First element in modal should be waypoint marker like a heading for AT
          users. It can be visibly hidden if desired.
        </h2>
        <button onClick={() => setOpenModal(false)}>Close</button>
      </Modal>
    </>
  );
};
