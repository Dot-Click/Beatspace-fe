import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ title = "MOST PLAYED GENRES", genreDistribution = [] }) => {
  // Transform genre distribution data
  const { series, labels, colors, legendData } = useMemo(() => {
    if (!genreDistribution || genreDistribution.length === 0) {
      return {
        series: [],
        labels: [],
        colors: [],
        legendData: []
      };
    }

    const colorPalette = ['#C1BE91', '#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#E91E63', '#00BCD4', '#FFC107'];
    
    const seriesData = genreDistribution.map(item => item.count || 0);
    const labelsData = genreDistribution.map(item => item.genre || '');
    const colorsData = genreDistribution.map((_, index) => colorPalette[index % colorPalette.length]);
    const legendDataFormatted = genreDistribution.map((item, index) => ({
      label: item.genre || '',
      percentage: `${item.percentage || 0}%`,
      color: colorPalette[index % colorPalette.length]
    }));

    return {
      series: seriesData,
      labels: labelsData,
      colors: colorsData,
      legendData: legendDataFormatted
    };
  }, [genreDistribution]);

  const chartData = {
    series: series,
    options: {
      chart: {
        type: 'donut',
        height: 300,
        background: 'transparent'
      },
      colors: colors,
      labels: labels,
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '40%',
            labels: {
              show: false
            }
          }
        }
      },
      stroke: {
        show: false
      },
      tooltip: {
        theme: 'dark',
        style: {
          fontSize: '12px',
          fontFamily: 'Alexandria, sans-serif'
        },
        y: {
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };

  return (
    <div className="bg-[#2A2B35]  border-2 border-[#C1BE91] rounded-lg p-3 alexandria-font">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-[#C1BE91] text-sm font-semibold uppercase tracking-wide">
          {title}
        </h3>
      </div>
      
      {/* Chart */}
      <div className="flex justify-center mb-4">
        <div className="w-35 h-35">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      
      {/* Custom Legend */}
       <div className="grid grid-cols-2 gap-2">
         {legendData.map((item, index) => (
           <div key={index} className="flex items-center">
             <div 
               className="w-3 h-3 mr-2 flex-shrink-0"
               style={{ backgroundColor: item.color }}
             ></div>
             <span className="text-[#C1BE91] text-xs uppercase tracking-wide">
               {item.label} {item.percentage}
             </span>
           </div>
         ))}
       </div>
    </div>
  );
};

export default DonutChart;