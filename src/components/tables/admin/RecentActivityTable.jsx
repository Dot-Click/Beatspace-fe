import React, { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Box, Badge, Text } from '@mantine/core';
import { MusicIcon, ShirtIcon, ComicsIcon, UploadIcon, EditIcon, DeleteIcon } from '../../../customIcons';

const RecentActivityTable = ({ activity = [] }) => {
  // Transform activity data from API to table format
  const data = useMemo(() => {
    if (!activity || activity.length === 0) return [];

    return activity.map((item) => {
      // Determine type based on category
      const categoryUpper = item.category?.toUpperCase() || '';
      let type = 'MERCH'; // default
      if (categoryUpper === 'BEATS' || categoryUpper === 'BEAT') {
        type = 'BEAT';
      } else if (categoryUpper === 'COMICS' || categoryUpper === 'COMIC') {
        type = 'COMIC';
      } else if (categoryUpper === 'MERCH' || categoryUpper === 'MERCHANDISE') {
        type = 'MERCH';
      }

      // Format timestamp
      let formattedTimestamp = '';
      if (item.timestamp) {
        const date = new Date(item.timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}`;
      }

      return {
        type: type,
        itemName: item.item_name || '',
        category: categoryUpper,
        action: item.action?.toUpperCase() || '',
        timestamp: formattedTimestamp
      };
    });
  }, [activity]);

  const columns = useMemo(() => [
    {
      accessorKey: 'type',
      header: 'TYPE',
      size: 60,
      Cell: ({ row }) => {
        const type = row.original.type;
        let IconComponent = ShirtIcon; // default
        if (type === 'BEAT') {
          IconComponent = MusicIcon;
        } else if (type === 'COMIC') {
          IconComponent = ComicsIcon;
        } else if (type === 'MERCH') {
          IconComponent = ShirtIcon;
        }
        return (
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <IconComponent />
          </Box>
        );
      },
    },
    {
      accessorKey: 'itemName',
      header: 'ITEM NAME',
      size: 200,
      Cell: ({ cell }) => (
        <Text className="alexandria-font" style={{ color: '#C1BE91', fontSize: '14px', fontWeight: 500 }}>
          {cell.getValue()}
        </Text>
      ),
    },
    {
      accessorKey: 'category',
      header: 'CATEGORY',
      size: 120,
      Cell: ({ cell }) => (
        <Text className="alexandria-font" style={{ color: '#C1BE91', fontSize: '14px', fontWeight: 500 }}>
          {cell.getValue()}
        </Text>
      ),
    },
    {
      accessorKey: 'action',
      header: 'ACTION',
      size: 140,
      Cell: ({ cell }) => {
        const action = cell.getValue();
        let color = '';
        let bgColor = '';
        let ActionIcon = null;

        switch (action) {
          case 'UPLOADED':
            color = '#12E008';
            bgColor = 'rgba(18, 224, 8, 0.1)';
            ActionIcon = UploadIcon;
            break;
          case 'EDITED':
            color = '#51F6D2';
            bgColor = 'rgba(81, 246, 210, 0.1)';
            ActionIcon = EditIcon;
            break;
          case 'DELETED':
            color = '#FF2222';
            bgColor = 'rgba(255, 34, 34, 0.1)';
            ActionIcon = DeleteIcon;
            break;
          default:
            color = '#C1BE91';
            bgColor = 'rgba(193, 190, 145, 0.1)';
        }

        return (
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {ActionIcon && <ActionIcon />}
            <Badge
              className="alexandria-font"
              style={{
                backgroundColor: bgColor,
                color: color,
                border: `1px solid ${color}`,
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '4px 8px'
              }}
            >
              {action}
            </Badge>
          </Box>
        );
      },
    },
    {
      accessorKey: 'timestamp',
      header: 'TIMESTAMP',
      size: 150,
      Cell: ({ cell }) => (
        <Text className="alexandria-font" style={{ color: '#C1BE91', fontSize: '14px' }}>
          {cell.getValue()}
        </Text>
      ),
    },
  ], []);

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
        backgroundColor: '#2A2B35',
        border: 'none',
        borderRadius: '0',
      },
    },
    mantineTableHeadProps: {
      style: {
        backgroundColor: '#000000',
        borderRadius: '0',
      },
    },
    mantineTableHeadCellProps: {
      style: {
        backgroundColor: '#000000',
        color: '#C1BE91',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        padding: '16px 12px',
        borderBottom: '1px solid #3A3B45',
        textAlign: 'left',
        borderRadius: '0',
      },
    },
    mantineTableBodyProps: {
      style: {
        backgroundColor: '#2A2B35',
      },
    },
    mantineTableBodyCellProps: {
      style: {
        backgroundColor: '#2A2B35',
        padding: '16px 12px',
        borderBottom: '1px solid #3A3B45',
        verticalAlign: 'middle',
      },
    },
    mantineTableBodyRowProps: ({ row }) => ({
      style: {
        backgroundColor: '#2A2B35',
        '&:hover': {
          backgroundColor: '#3A3B45',
        },
      },
    }),
  });

  return (
    <Box className="alexandria-font" style={{ backgroundColor: '#2A2B35', borderRadius: '8px', border: '2px solid #C1BE91' }}>
      {/* Header integrated within table container */}
      <Box style={{
        padding: '16px 16px 12px 16px',
        borderBottom: '1px solid #CBC895',
        backgroundColor: '#2A2B35'
      }}>
        <Text
          className="alexandria-font"
          style={{
            color: '#C1BE91',
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            margin: 0
          }}
        >
          RECENT ACTIVITY LOG
        </Text>
      </Box>

      {/* Table */}
      <Box className="alexandria-font">
        <MantineReactTable table={table} />
      </Box>
    </Box>
  );
};

export default RecentActivityTable;