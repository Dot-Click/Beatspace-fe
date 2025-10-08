import React from 'react';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import DonutChart from '../../components/DonutChart';
import RecentActivityTable from '../../components/tables/admin/RecentActivityTable';
import { FaMusic, FaShoppingBag, FaDollarSign, FaDownload } from 'react-icons/fa';

const Dashboard = () => {
  const stats = [
    {
      title: 'Tracks',
      value: '1,247',
      subtitle: '12 files uploaded',
      icon: FaMusic
    },
    {
      title: 'Products',
      value: '1,247',
      subtitle: 'Merch Items',
      icon: FaShoppingBag
    },
    {
      title: 'This Month',
      value: '€ 2,847',
      subtitle: '€ 5,847 last month',
      icon: FaDollarSign
    },
    {
      title: 'Total',
      value: '45,892',
      subtitle: '4,567 this month',
      icon: FaDownload
    }
  ];

  return (
    <div>
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Bar Chart - Takes 3 columns (3/4 width) */}
        <div className="lg:col-span-3">
          <BarChart />
        </div>
        
        {/* Donut Chart - Takes 1 column (1/4 width) */}
        <div className="lg:col-span-1">
          <DonutChart />
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="w-full">
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default Dashboard;