import React, { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Box, Text } from "@mantine/core";
import {
  MusicIcon,
  ShirtIcon,
  ComicsIcon,
} from "../../../customIcons";
import { useTranslation } from "react-i18next";

const ACTION_ICONS = {
  UPLOADED: ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
  EDITED: ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  DELETED: ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  ),
  DOWNLOADED: ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  UPDATED: ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  ),
};

const RecentActivityTable = ({ activity = [] }) => {
  const { t } = useTranslation();
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
        header: t('dashboard.activity.table.type'),
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
        header: t('dashboard.activity.table.item_name'),
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
        header: t('dashboard.activity.table.category'),
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
        header: t('dashboard.activity.table.action'),
        size: 140,
        Cell: ({ cell }) => {
          const action = cell.getValue();
          const CONFIG = {
            UPLOADED:   { color: "#22C55E", label: t('dashboard.activity.table.actions.uploaded') },
            EDITED:     { color: "#38BDF8", label: t('dashboard.activity.table.actions.edited') },
            DELETED:    { color: "#F87171", label: t('dashboard.activity.table.actions.deleted') },
            DOWNLOADED: { color: "#FB923C", label: t('dashboard.activity.table.actions.downloaded') },
            UPDATED:    { color: "#A78BFA", label: t('dashboard.activity.table.actions.updated') },
          };
          const cfg = CONFIG[action] || { color: "#B5B387", label: action };
          const IconSvg = ACTION_ICONS[action] || null;

          return (
            <Box style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              {IconSvg && <IconSvg color={cfg.color} />}
              <Text
                className="alexandria-font"
                style={{
                  color: cfg.color,
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {cfg.label}
              </Text>
            </Box>
          );
        },
      },
      {
        accessorKey: "timestamp",
        header: t('dashboard.activity.table.timestamp'),
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
    [t],
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
