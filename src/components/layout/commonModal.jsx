import { Modal } from "@mantine/core";
import React from "react";

const CommonModal = ({ opened, close, title, content, children }) => {
  return (
    <div>
      <Modal
        radius={"xl"}
        size={"35rem"}
        opened={opened}
        onClose={close}
        title={title}
        centered
      >
        {content || children}
      </Modal>
    </div>
  );
};

export default CommonModal;
