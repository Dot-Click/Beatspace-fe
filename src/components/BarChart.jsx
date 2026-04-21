import React, { useMemo, useState, useEffect } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ title, monthlyDonations = [] }) => {
  const currentYear = new Date().getFullYear();

  const availableYears = useMemo(() => {
    if (!monthlyDonations || monthlyDonations.length === 0)
      return [currentYear];
    const years = [
      ...new Set(monthlyDonations.map((item) => item.year)),
    ].filter(Boolean);
    if (!years.includes(currentYear)) years.push(currentYear);
    return years.sort((a, b) => b - a); // descending
  }, [monthlyDonations, currentYear]);

  const [selectedYear, setSelectedYear] = useState(availableYears[0]);

  // Update selected year if availableYears changes and current selection is not in it
  useEffect(() => {
    if (availableYears.length > 0 && !availableYears.includes(selectedYear)) {
      setSelectedYear(availableYears[0]);
    }
  }, [availableYears, selectedYear]);

  // Transform monthly donations data to match chart format
  const chartData = useMemo(() => {
    // Initialize array with 12 months (0-11), all starting at 0
    const monthlyData = new Array(12).fill(0);

    if (monthlyDonations && monthlyDonations.length > 0) {
      monthlyDonations.forEach((item) => {
        if (item.year === selectedYear) {
          // month is 0-indexed in JavaScript Date, but API uses 1-indexed (1-12)
          const monthIndex = item.month - 1;
          if (monthIndex >= 0 && monthIndex < 12) {
            monthlyData[monthIndex] = item.amount || 0;
          }
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
              colors: "#F6F4D3",
              fontSize: "10px",
              fontFamily: "monospace",
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
          colors: ["#E0BC5A"],
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
          y: { formatter: (val) => "€" + val },
          style: { fontSize: "10px", fontFamily: "'Press Start 2P', cursive" },
        },
        grid: {
          borderColor: "rgba(181, 179, 135, 0.2)",
          strokeDashArray: 3,
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        legend: { show: false },
      },
    };
  }, [monthlyDonations, selectedYear]);

  return (
    <div className="alexandria-font w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#CBC895] text-xs font-bold uppercase tracking-widest">
          {title}
        </h3>
        <select
          className="bg-[#CBC895]/20 text-[#CBC895] px-3 py-1 border border-[#CBC895]/30 rounded text-[10px] sm:text-xs font-bold outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-[#CBC895]"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {availableYears.map((year) => (
            <option
              key={year}
              value={year}
              className="bg-[#131319] text-[#CBC895]"
            >
              Year {year}
            </option>
          ))}
        </select>
      </div>

      {/* Chart wrapper */}
      <div className="h-[280px] w-full">
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
