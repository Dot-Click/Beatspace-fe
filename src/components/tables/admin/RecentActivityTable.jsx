import React, { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Box, Text } from "@mantine/core";
import {
  MusicIcon,
  ShirtIcon,
  ComicsIcon,
  UploadIcon,
  EditIcon,
  DeleteIcon,
} from "../../../customIcons";

const RecentActivityTable = ({ activity = [] }) => {
  // Transform activity data from API to table format
  const data = useMemo(() => {
    if (!activity || activity.length === 0) return [];

    return activity.map((item) => {
      // Determine type based on category
      const categoryUpper = item.category?.toUpperCase() || "";
      let type = "MERCH"; // default
      if (categoryUpper === "BEATS" || categoryUpper === "BEAT") {
        type = "BEAT";
      } else if (categoryUpper === "COMICS" || categoryUpper === "COMIC") {
        type = "COMIC";
      } else if (categoryUpper === "MERCH" || categoryUpper === "MERCHANDISE") {
        type = "MERCH";
      }

      // Format timestamp
      let formattedTimestamp = "";
      if (item.timestamp) {
        const date = new Date(item.timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}`;
      }

      return {
        type: type,
        itemName: item.item_name || "",
        category: categoryUpper,
        action: item.action?.toUpperCase() || "",
        timestamp: formattedTimestamp,
      };
    });
  }, [activity]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "type",
        header: "TYPE",
        size: 60,
        Cell: ({ row }) => {
          const type = row.original.type;
          let IconComponent = ShirtIcon; // default
          if (type === "BEAT") {
            IconComponent = MusicIcon;
          } else if (type === "COMIC") {
            IconComponent = ComicsIcon;
          } else if (type === "MERCH") {
            IconComponent = ShirtIcon;
          }
          return (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <IconComponent />
            </Box>
          );
        },
      },
      {
        accessorKey: "itemName",
        header: "ITEM NAME",
        size: 200,
        Cell: ({ cell }) => (
          <Text
            className="alexandria-font"
            style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}
          >
            {cell.getValue()}
          </Text>
        ),
      },
      {
        accessorKey: "category",
        header: "CATEGORY",
        size: 120,
        Cell: ({ cell }) => (
          <Text
            className="alexandria-font"
            style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}
          >
            {cell.getValue()}
          </Text>
        ),
      },
      {
        accessorKey: "action",
        header: "ACTION",
        size: 140,
        Cell: ({ cell }) => {
          const action = cell.getValue();
          let color = "";
          let ActionIcon = null;

          switch (action) {
            case "UPLOADED":
              color = "#12E008";
              ActionIcon = UploadIcon;
              break;
            case "EDITED":
              color = "#51F6D2";
              ActionIcon = EditIcon;
              break;
            case "DELETED":
              color = "#FF2222";
              ActionIcon = DeleteIcon;
              break;
            default:
              color = "#";
          }

          return (
            <Box style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {ActionIcon && <ActionIcon />}
              <Text
                className="alexandria-font"
                style={{
                  color: color,
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {action}
              </Text>
            </Box>
          );
        },
      },
      {
        accessorKey: "timestamp",
        header: "TIMESTAMP",
        size: 150,
        Cell: ({ cell }) => (
          <Text
            className="alexandria-font"
            style={{ color: "#ffffff", fontSize: "14px" }}
          >
            {cell.getValue()}
          </Text>
        ),
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableTableHead: true,
    mantineTableProps: {
      style: {
        backgroundColor: "#313026",
        border: "none",
      },
    },
    mantineTableHeadProps: {
      style: {
        backgroundColor: "#040404",
      },
    },
    mantineTableHeadCellProps: {
      style: {
        backgroundColor: "#040404",
        color: "#CBC895",
        fontFamily: "'Press Start 2P', cursive",
        fontSize: "10px",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        padding: "16px 12px",
        borderBottom: "1px solid rgba(203, 200, 149, 0.2)",
        textAlign: "left",
      },
    },
    mantineTableBodyProps: {
      style: {
        backgroundColor: "transparent",
      },
    },
    mantineTableBodyCellProps: {
      style: {
        backgroundColor: "",
        padding: "16px 12px",
        borderBottom: "1px solid rgba(203, 200, 149, 0.1)",
        verticalAlign: "middle",
      },
    },
    mantineTableBodyRowProps: ({ row }) => ({
      style: {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
      },
    }),
  });

  return (
    <Box className="alexandria-font recent-activity">
      <MantineReactTable table={table} />
    </Box>
  );
};

export default RecentActivityTable;
