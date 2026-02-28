// import React from 'react';
// import Chart from 'react-apexcharts';

// const BarChart = ({ title = "DONATIONS OVER TIME", year = "Year 2025" }) => {
//   const chartData = {
//     series: [{
//       name: 'Donations',
//       data: [850, 750, 900, 800, 950, 1100, 750, 800, 850, 1000, 1200, 1150]
//     }],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 300,
//         background: 'transparent',
//         toolbar: {
//           show: false
//         }
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '60%',
//           endingShape: 'rounded',
//           borderRadius: 4,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//       },
//       xaxis: {
//         categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
//         labels: {
//           style: {
//             colors: '#C1BE91',
//             fontSize: '12px',
//             fontFamily: 'Alexandria, sans-serif'
//           }
//         },
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         }
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: '#C1BE91',
//             fontSize: '12px',
//             fontFamily: 'Alexandria, sans-serif'
//           },
//           formatter: function (val) {
//             return '€' + val;
//           }
//         }
//       },
//       fill: {
//         colors: ['#C1BE91'],
//         opacity: 1
//       },
//       tooltip: {
//         theme: 'dark',
//         y: {
//           formatter: function (val) {
//             return "€" + val;
//           }
//         },
//         style: {
//           fontSize: '12px',
//           fontFamily: 'Alexandria, sans-serif'
//         }
//       },
//       grid: {
//         borderColor: '#444',
//         strokeDashArray: 0,
//         xaxis: {
//           lines: {
//             show: false
//           }
//         },
//         yaxis: {
//           lines: {
//             show: true
//           }
//         }
//       },
//       legend: {
//         show: false
//       }
//     }
//   };

//   return (
//     <div className="bg-[#2A2B35] max-sm:w-[280px]   border-2 border-[#C1BE91] rounded-lg p-3 alexandria-font">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h3 className="text-[#C1BE91] text-sm font-semibold uppercase">
//           {title}
//         </h3>
//         <div className="bg-[#C1BE91] text-black px-3 py-1 rounded text-xs font-semibold">
//           {year} ▼
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="h-[250px] max-sm:overflow-hidden  w-full max-sm:overflow-x-auto ">
//         <Chart
//           options={chartData.options}
//           series={chartData.series}
//           type="bar"
//           height="100%"
         
//         />
//       </div>
//     </div>
//   );
// };

// export default BarChart;

import React, { useMemo } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ title = "DONATIONS OVER TIME", year = "Year 2025", monthlyDonations = [] }) => {
  // Transform monthly donations data to match chart format
  const chartData = useMemo(() => {
    // Initialize array with 12 months (0-11), all starting at 0
    const monthlyData = new Array(12).fill(0);
    
    if (monthlyDonations && monthlyDonations.length > 0) {
      monthlyDonations.forEach((item) => {
        // month is 0-indexed in JavaScript Date, but API uses 1-indexed (1-12)
        // So we subtract 1 to convert to 0-indexed array
        const monthIndex = item.month - 1;
        if (monthIndex >= 0 && monthIndex < 12) {
          monthlyData[monthIndex] = item.amount || 0;
        }
      });
    }

    return {
      series: [
        {
          name: "Donations",
          data: monthlyData,
        },
      ],
      options: {
      chart: {
        type: "bar",
        height: 300,
        background: "transparent",
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
          borderRadius: 4,
        },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: {
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        labels: {
          style: {
            colors: "#C1BE91",
            fontSize: "12px",
            fontFamily: "Alexandria, sans-serif",
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#C1BE91",
            fontSize: "12px",
            fontFamily: "Alexandria, sans-serif",
          },
          formatter: (val) => "€" + val,
        },
      },
      fill: {
        colors: ["#C1BE91"],
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
        y: { formatter: (val) => "€" + val },
        style: { fontSize: "12px", fontFamily: "Alexandria, sans-serif" },
      },
      grid: {
        borderColor: "#444",
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
      },
      legend: { show: false },
    },
  };
  }, [monthlyDonations]);

  return (
    <div className="bg-[#2A2B35] border-2 border-[#C1BE91] rounded-lg p-3 alexandria-font max-sm:w-[280px]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-[#C1BE91] text-sm font-semibold uppercase">
          {title}
        </h3>
        <div className="bg-[#C1BE91] text-black px-3 py-1 rounded text-xs font-semibold">
          {year} ▼
        </div>
      </div>

      {/* Chart wrapper with horizontal scroll on small screens */}
      <div className="h-[250px] overflow-y-hidden max-sm:overflow-x-auto max-sm:w-full">
        <div className="min-w-[600px] h-full sm:min-w-0 md:overflow-hidden">
          {" "}
          {/* 👈 force scrollable width on small screens */}
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
