import { Button, Divider } from "@mantine/core";
import React from "react";
import { MdCancel } from "react-icons/md";

const DeleteModal = ({ close, type = "item" }) => {
  const itemType = type;

  return (
    <div className="p-4">
      <p className="text-3xl font-semibold mb-3">
        {itemType}
      </p>
      <p className="text-sm text-slate-500">
        {itemType}
      </p>

      <Divider my={25} />

      <p className="text-sm flex gap-2">
        <MdCancel color="#ED4537" size={18} />
        {itemType}
      </p>
      <p className="text-sm flex gap-2 ">
        <MdCancel color="#ED4537" size={18} />
        {itemType}
      </p>

      <div className="flex gap-3 mt-10">
        <Button onClick={close} w={"100%"} size="md" className="!bg-slate-200 !text-slate-500">
          Cancel
        </Button>
        <Button w={"100%"} size="md" className="!bg-red-500">
          Delete {itemType}
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
