import React from 'react';

const StatCard = ({ icon: Icon, title, value, subtitle, className = "" }) => {
  return (
    <div className={`relative ${className}`}>  
      {/* Main card */}
      <div className="bg-[#2A2B35] rounded-lg p-6 relative min-h-[180px] alexandria-font">
        {/* Top right category label */}
        <div className="absolute top-4 right-4 text-[#C1BE91] text-xs font-semibold uppercase tracking-wide">
          {title}
        </div>
        
        {/* Icon */}
        <div className="absolute top-7 left-4">
          <Icon className="text-[#C1BE91] text-xl" />
        </div>
        
        {/* Main title */}
        <div className="absolute top-25 left-4 text-[#C1BE91] text-sm font-semibold">
          {title === 'Tracks' ? 'Total Beats' : 
           title === 'Products' ? 'Merch Items' :
           title === 'This Month' ? 'Donations' :
           title === 'Total' ? 'Downloads' : title}
        </div>
        
        {/* Value */}
        <div className="absolute top-30 left-4 text-[#C1BE91] text-2xl font-bold">
          {value}
        </div>
        
        {/* Subtitle */}
        {subtitle && (
          <div className="absolute bottom-4 left-4 text-[#C1BE91] text-xs">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;