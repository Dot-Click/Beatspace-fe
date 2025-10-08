import React from 'react';

const StatCard = ({ icon: Icon, title, value, subtitle, className = "" }) => {
  return (
    <div className={`bg-[#2A2B35] border-2 border-[#C1BE91] rounded-lg p-6 flex flex-col items-center text-center min-h-[160px] alexandria-font ${className}`}>
      {/* Icon */}
      <div className="mb-4">
        <Icon className="text-[#C1BE91] text-3xl" />
      </div>
      
      {/* Title */}
      <h3 className="text-[#C1BE91] text-sm font-semibold mb-2 uppercase tracking-wide">
        {title}
      </h3>
      
      {/* Value */}
      <div className="text-white text-2xl font-bold mb-1">
        {value}
      </div>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-400 text-xs">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatCard;