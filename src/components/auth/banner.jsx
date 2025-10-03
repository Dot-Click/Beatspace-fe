import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Global Vision</h1>
        <p className="text-xl mb-8 opacity-90">
          Empowering organizations worldwide with innovative solutions
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Comprehensive project management</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Advanced analytics and reporting</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Global team collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
