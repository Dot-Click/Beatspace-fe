import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  DashboardIcon, 
  BeatmakerIcon, 
  BeatIcon, 
  MerchIcon, 
  ComicsIcon, 
  GamesIcon, 
  DonationsIcon, 
  AssessmentIcon, 
  SettingsIcon 
} from "../../customIcons";

const adminMenu = [
  {
    id: 1,
    label: "Dashboard",
    link: "/admin/dashboard",
    type: "route",
    icon: DashboardIcon,
  },
  {
    id: 2,
    label: "Beatmaker",
    link: "/admin/beatmaker",
    type: "route",
    icon: BeatmakerIcon,
  },
  {
    id: 3,
    label: "Beat",
    link: "/admin/beat",
    type: "route",
    icon: BeatIcon,
  },
  {
    id: 4,
    label: "Merch Management",
    link: "/admin/merch-management",
    type: "route",
    icon: MerchIcon,
  },
  {
    id: 5,
    label: "Comics Management",
    link: "/admin/comics-management",
    type: "route",
    icon: ComicsIcon,
  },
  {
    id: 6,
    label: "Games",
    link: "/admin/games",
    type: "route",
    icon: GamesIcon,
  },
  {
    id: 7,
    label: "Donations & Analytics",
    link: "/admin/donations-analytics",
    type: "route",
    icon: DonationsIcon,
  },
  {
    id: 8,
    label: "Asset Management",
    link: "/admin/asset-management",
    type: "route",
    icon: AssessmentIcon,
  },
  {
    id: 9,
    label: "Settings",
    link: "/admin/settings",
    type: "route",
    icon: SettingsIcon,
  },
];

const Sidebar = ({ opened, toggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen bg-[#D4C5A0] flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-[#B8A882]">
        <div className="flex items-center justify-center">
          <img 
            src="/assets/logo1.png" 
            alt="Global Vision Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 py-6">
        <nav className="space-y-2 px-4">
          {adminMenu.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.link)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 alexandria-font flex items-center gap-3 ${
                  isActive(item.link)
                    ? 'bg-[#191A22] text-[#C1BE91] font-semibold'
                    : 'text-[#25262F] hover:bg-[#C4B594] hover:text-[#25262F]'
                }`}
              >
                <div className="flex-shrink-0">
                  <IconComponent color={isActive(item.link) ? '#C1BE91' : '#25262F'} />
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
