import React, {useEffect} from 'react';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import DonutChart from '../../components/DonutChart';
import RecentActivityTable from '../../components/tables/admin/RecentActivityTable';
import { MusicIcon1, ClothesIcon, DollarIcon, DownloadIcon } from '../../customIcons';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../../../store/actions/authActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    dispatch(me());
  }, []);
  const stats = [
    {
      title: 'Tracks',
      value: '1,247',
      subtitle: '+12 this week',
      icon: MusicIcon1
    },
    {
      title: 'Products',
      value: '1,247',
      subtitle: '+3 new items',
      icon: ClothesIcon
    },
    {
      title: 'This Month',
      value: '€ 2,847',
      subtitle: '+ €340 this week',
      icon: DollarIcon
    },
    {
      title: 'Total',
      value: '45,892',
      subtitle: '+1,247 this week',
      icon: DownloadIcon
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