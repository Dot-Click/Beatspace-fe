import { Button, Divider } from "@mantine/core";
import React from "react";
import { MdCancel } from "react-icons/md";

const DeleteItem = ({ close, loading, type = "item", onConfirm, onDelete }) => {
  const handleConfirmDelete = () => {
    if (typeof onConfirm === "function") {
      onConfirm();
    } else if (typeof onDelete === "function") {
      onDelete();
    }
  };

  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="p-4">
      <p className="text-3xl font-semibold mb-3">
        {/* Title */}
        {type}
      </p>
      <p className="text-sm text-slate-500">
        {/* Description */}
        {type}
      </p>

      <Divider my={25} />

      <p className="text-sm flex gap-2">
        <MdCancel color="#ED4537" size={18} />
        {/* Info 1 */}
        {type}
      </p>
      <p className="text-sm flex gap-2 ">
        <MdCancel color="#ED4537" size={18} />
        {/* Info 2 */}
        {type}
      </p>

      <div className="flex gap-3 mt-10">
        <Button
          onClick={close}
          w={"100%"}
          size="md"
          className="!bg-slate-200 !text-slate-500"
        >
          Cancel
        </Button>

        <Button
          w={"100%"}
          size="md"
          className="!bg-red-500"
          loading={loading}
          onClick={handleConfirmDelete}
        >
          Delete {capitalizedType}
        </Button>
      </div>
    </div>
  );
};

export default DeleteItem;
