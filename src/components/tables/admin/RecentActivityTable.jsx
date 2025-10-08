import React, { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Box, Badge, Text } from '@mantine/core';
import { MusicIcon, ShirtIcon, UploadIcon, EditIcon, DeleteIcon } from '../../../customIcons';

const RecentActivityTable = () => {
  // Sample data based on the design
  const data = useMemo(() => [
    {
      type: 'BEAT',
      itemName: 'Dark Trap Beat #47',
      category: 'BEAT',
      action: 'UPLOADED',
      timestamp: '2025-08-27 14:32'
    },
    {
      type: 'MERCH',
      itemName: 'Beatspace Hoodie - Black',
      category: 'MERCH',
      action: 'EDITED',
      timestamp: '2025-08-27 13:45'
    },
    {
      type: 'BEAT',
      itemName: 'Lo-Fi Chill Vibes',
      category: 'BEAT',
      action: 'DELETED',
      timestamp: '2025-08-27 12:18'
    },
    {
      type: 'MERCH',
      itemName: 'Producer Sticker Pack',
      category: 'MERCH',
      action: 'UPLOADED',
      timestamp: '2025-08-27 11:55'
    },
    {
      type: 'BEAT',
      itemName: 'Melodic Rap Beat',
      category: 'BEAT',
      action: 'EDITED',
      timestamp: '2025-08-27 10:30'
    },
    {
      type: 'MERCH',
      itemName: 'Studio T-Shirt - White',
      category: 'MERCH',
      action: 'UPLOADED',
      timestamp: '2025-08-27 09:15'
    }
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: 'type',
      header: 'TYPE',
      size: 60,
      Cell: ({ row }) => {
        const type = row.original.type;
        return (
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            {type === 'BEAT' ? <MusicIcon /> : <ShirtIcon />}
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
        backgroundColor: '#2A2B35',
      },
    },
    mantineTableHeadCellProps: {
      style: {
        backgroundColor: '#2A2B35',
        color: '#C1BE91',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        padding: '16px 12px',
        borderBottom: '1px solid #3A3B45',
        textAlign: 'left',
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