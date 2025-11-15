import React, {useEffect, useMemo} from 'react';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import DonutChart from '../../components/DonutChart';
import RecentActivityTable from '../../components/tables/admin/RecentActivityTable';
import { MusicIcon1, ClothesIcon, DollarIcon, DownloadIcon } from '../../customIcons';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../../store/actions/authActions';
import { dashboard } from '../../store/actions/adminActions';
import { Loader } from '@mantine/core';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { dashboardData, isLoading } = useSelector((state) => state.admin);


  useEffect(() => {
    dispatch(me());
    dispatch(dashboard());
  }, []);

  const stats = useMemo(() => {
    if (!dashboardData?.stats) return [];
    
    const { stats: statsData } = dashboardData;
    return [
      {
        title: 'Tracks',
        value: statsData.totalBeats?.toLocaleString() || '0',
        subtitle: `+${statsData.beatsThisWeek || 0} this week`,
        icon: MusicIcon1
      },
      {
        title: 'Products',
        value: statsData.totalMerch?.toLocaleString() || '0',
        subtitle: `+${statsData.merchThisWeek || 0} new items`,
        icon: ClothesIcon
      },
      {
        title: 'This Month',
        value: `€ ${statsData.totalDonations?.toFixed(2) || '0.00'}`,
        subtitle: `+ €${statsData.donationsThisWeek?.toFixed(2) || '0.00'} this week`,
        icon: DollarIcon
      },
      {
        title: 'Total',
        value: statsData.totalDownloads?.toLocaleString() || '0',
        subtitle: `+${statsData.downloadsThisWeek || 0} this week`,
        icon: DownloadIcon
      }
    ];
  }, [dashboardData]);

  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'><Loader type='dots' color='#2A2B35'/></div>;
  }

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
          <BarChart monthlyDonations={dashboardData?.charts?.monthlyDonations} />
        </div>
        
        
        {/* Donut Chart - Takes 1 column (1/4 width) */}
        <div className="lg:col-span-1">
          <DonutChart genreDistribution={dashboardData?.charts?.genreDistribution} />
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="w-full">
        <RecentActivityTable activity={dashboardData?.activity} />
      </div>
    </div>
  );
};

export default Dashboard;