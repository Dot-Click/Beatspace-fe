import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Text,
  Tabs,
  Table,
  Badge,
  Loader,
  Center,
  ScrollArea,
  Avatar,
  Group,
  Stack,
} from '@mantine/core';
import { getOrders, getDonations } from '../../store/actions/adminActions';
import dayjs from 'dayjs';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const adminState = useSelector((state) => state.admin);
  const { 
    orders = [], 
    donations = [], 
    isLoadingOrders = false, 
    isLoadingDonations = false 
  } = adminState || {};
  
  const [activeTab, setActiveTab] = useState('merch');

  useEffect(() => {
    dispatch(getOrders());
    dispatch(getDonations());
  }, [dispatch]);

  const CornerAccents = () => (
    <>
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#F6F4D3] z-20"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#F6F4D3] z-20"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#F6F4D3] z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#F6F4D3] z-20"></div>
    </>
  );

  const safeOrders = Array.isArray(orders) ? orders : [];
  const safeDonations = Array.isArray(donations) ? donations : [];

  const merchRows = safeOrders.map((order) => (
    <Table.Tr key={order?._id || Math.random()}>
      <Table.Td>
        <Text size="sm" color="white" className="alexandria-font">
          {order?.createdAt ? dayjs(order.createdAt).format('DD MMM YYYY') : 'N/A'}
        </Text>
        <Text size="xs" color="dimmed" className="alexandria-font">
          {order?.createdAt ? dayjs(order.createdAt).format('HH:mm') : ''}
        </Text>
      </Table.Td>
      <Table.Td>
        <Stack gap={0}>
          <Text size="sm" color="white" className="alexandria-font">{order?.customerName || 'N/A'}</Text>
          <Text size="xs" color="dimmed" className="alexandria-font">{order?.customerEmail || 'N/A'}</Text>
        </Stack>
      </Table.Td>
      <Table.Td>
        <Stack gap="xs">
          {Array.isArray(order?.items) && order.items.map((item, idx) => (
            <Group key={idx} gap="xs">
              {item?.image && <Avatar src={item.image} size="sm" radius="xs" />}
              <Text size="xs" color="white" className="alexandria-font">
                {item?.name || 'Item'} x{item?.quantity || 1}
              </Text>
            </Group>
          ))}
        </Stack>
      </Table.Td>
      <Table.Td>
        <Text fw={700} color="#F6F4D3" className="alexandria-font">€{order?.totalAmount?.toFixed(2) || '0.00'}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color={order?.status === 'paid' ? 'green' : 'blue'} variant="filled" radius="xs" className="alexandria-font">
          {(order?.status || 'pending').toUpperCase()}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));

  const donationRows = safeDonations.map((donation) => (
    <Table.Tr key={donation?._id || Math.random()}>
      <Table.Td>
        <Text size="sm" color="white" className="alexandria-font">
          {donation?.createdAt ? dayjs(donation.createdAt).format('DD MMM YYYY') : 'N/A'}
        </Text>
        <Text size="xs" color="dimmed" className="alexandria-font">
          {donation?.createdAt ? dayjs(donation.createdAt).format('HH:mm') : ''}
        </Text>
      </Table.Td>
      <Table.Td>
        <Stack gap={0}>
          <Text size="sm" color="white" className="alexandria-font">{donation?.customerName || 'Guest'}</Text>
          <Text size="xs" color="dimmed" className="alexandria-font">{donation?.customerEmail || 'N/A'}</Text>
        </Stack>
      </Table.Td>
      <Table.Td>
        <Text fw={700} color="#5EEAD4" className="alexandria-font">€{donation?.amount?.toFixed(2) || '0.00'}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color="green" variant="filled" radius="xs" className="alexandria-font">
          {(donation?.stripeSessionStatus || 'paid').toUpperCase()}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box className="bg-[#1A1A23] min-h-screen p-6" style={{ position: 'relative' }}>
      <Box className="bg-[#2F2E24] border border-[#B5B387]/30 p-6 relative overflow-hidden mb-6">
        <CornerAccents />
        <h1 className="pixel-font text-[#F6F4D3] text-[24px] uppercase tracking-widest mb-2">
          SALES & DONATIONS
        </h1>
        <Text color="dimmed" size="sm" className="alexandria-font">
          Manage your merch orders and view support artist contributions.
        </Text>
      </Box>

      <Box className="bg-[#2F2E24] border border-[#B5B387]/30 relative">
        <CornerAccents />
        <Tabs value={activeTab} onChange={setActiveTab} color="#F6F4D3" variant="pills" p="md">
          <Tabs.List mb="md">
            <Tabs.Tab value="merch" className="alexandria-font">MERCH ORDERS</Tabs.Tab>
            <Tabs.Tab value="donations" className="alexandria-font">DONATIONS</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="merch">
            {isLoadingOrders ? (
              <Center h={200}><Loader color="#F6F4D3" /></Center>
            ) : (
              <ScrollArea>
                <Table className="alexandria-font" style={{ color: 'white' }}>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th style={{ color: '#F6F4D3' }}>DATE</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>CUSTOMER</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>ITEMS</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>TOTAL</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>STATUS</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{merchRows}</Table.Tbody>
                </Table>
                {safeOrders.length === 0 && (
                  <Text ta="center" py="xl" color="dimmed">No merch orders found.</Text>
                )}
              </ScrollArea>
            )}
          </Tabs.Panel>

          <Tabs.Panel value="donations">
            {isLoadingDonations ? (
              <Center h={200}><Loader color="#F6F4D3" /></Center>
            ) : (
              <ScrollArea>
                <Table className="alexandria-font" style={{ color: 'white' }}>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th style={{ color: '#F6F4D3' }}>DATE</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>ARTIST SUPPORTER</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>AMOUNT</Table.Th>
                      <Table.Th style={{ color: '#F6F4D3' }}>STATUS</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{donationRows}</Table.Tbody>
                </Table>
                {safeDonations.length === 0 && (
                  <Text ta="center" py="xl" color="dimmed">No donations found.</Text>
                )}
              </ScrollArea>
            )}
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  );
};

export default OrdersPage;
