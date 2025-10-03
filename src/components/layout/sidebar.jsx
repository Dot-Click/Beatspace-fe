import React from "react";

const menu = [
  {
    id: 0,
    label: "Global Vision",
    type: "label",
    role: "admin",
  },
  {
    id: 1,
    label: "Global Vision",
    type: "label",
    role: "user",
    subscription: [],
  },
  {
    id: 2,
    icon: null,
    label: "Dashboard",
    link: "/dashboard",
    type: "route",
    role: "user",
    subscription: [],
  },
  {
    id: 3,
    icon: null,
    label: "Projects",
    link: "/dashboard/projects",
    type: "route",
    role: "user",
    subscription: [],
    permissions: {},
    childrens: [
      {
        id: 4,
        label: "Active Projects",
        link: "/dashboard/active-projects",
        type: "route",
        subscription: [],
      },
      {
        id: 5,
        label: "Project Templates",
        link: "/dashboard/project-templates",
        type: "route",
        subscription: [],
      },
    ],
  },
  {
    id: 6,
    icon: null,
    label: "Analytics",
    link: "/dashboard/analytics",
    type: "route",
    role: "user",
    subscription: [],
    permissions: {},
  },
  {
    id: 7,
    icon: null,
    label: "Reports",
    link: "/dashboard/reports",
    type: "route",
    role: "user",
    subscription: [],
  },
  {
    id: 8,
    label: "Management",
    type: "label",
    role: "user",
    subscription: [],
  },
  {
    id: 9,
    icon: null,
    label: "Team Management",
    link: "/dashboard/team-management",
    type: "route",
    role: "user",
    subscription: [],
    permissions: {},
  },
  {
    id: 10,
    icon: null,
    label: "Resources",
    link: "/dashboard/resources",
    type: "route",
    role: "user",
    subscription: [],
    permissions: {},
  },
  {
    id: 11,
    icon: null,
    label: "Settings",
    link: "/dashboard/settings",
    type: "route",
    role: "user",
    subscription: [],
  },
  {
    id: 12,
    icon: null,
    label: "Support",
    link: "/dashboard/support",
    type: "route",
    role: "user",
    subscription: [],
  },
  {
    id: 13,
    icon: null,
    label: "Dashboard",
    link: "/dashboard",
    type: "route",
    role: "admin",
  },
  {
    id: 14,
    icon: null,
    label: "User Management",
    link: "/dashboard/users",
    type: "route",
    role: "admin",
  },
  {
    id: 15,
    icon: null,
    label: "System Analytics",
    link: "/dashboard/system-analytics",
    type: "route",
    role: "admin",
  },
  {
    id: 16,
    icon: null,
    label: "Support Tickets",
    link: "/dashboard/admin-support",
    type: "route",
    role: "admin",
  },
  {
    id: 17,
    icon: null,
    label: "Global Settings",
    link: "/dashboard/global-settings",
    type: "route",
    role: "admin",
  },
  {
    id: 18,
    icon: null,
    label: "Profile Settings",
    link: "/dashboard/profile-settings",
    type: "route",
    role: "admin",
  },
];

const Sidebar = ({ opened, toggle }) => {
  const user = {};
  const role = user?.role;
  const isTeamMember = user?.isTeamMember;
  const rawSubscriptionType = null;
  const normalizeSubscriptionType = (type) => null;
  const subscriptionType = normalizeSubscriptionType(rawSubscriptionType);
  const [logoUrl] = React.useState(null);
  const websiteSettings = {};
  React.useEffect(() => {}, [websiteSettings]);
  const pathname = "";

  return (
    <div className="">
      <div className="">
        <button />
        <div>
          <a href="/dashboard">
            {logoUrl ? (
              <img src={logoUrl} alt="Global Vision Logo" width={220} />
            ) : (
              <div className="text-2xl font-bold text-indigo-600">
                Global Vision
              </div>
            )}
          </a>
        </div>
        <div>
          {menu
            ?.filter((item) => {
              if (role === "admin" && role === item.role) return true;
              if (role === "user" && role === item.role) {
                if (isTeamMember) {
                  if (!item.permissions) return true;
                  return Object.entries(item.permissions).every(
                    ([key, value]) => {
                      return user?.permission?.[key] === value;
                    }
                  );
                }
                const isIncluded = item?.subscription?.includes(subscriptionType);
                return isIncluded;
              }
              return false;
            })
            ?.map((item, i) => {
              if (item?.type === "label") {
                return (
                  <p key={i}>{item?.label}</p>
                );
              } else {
                if (item?.childrens) {
                  return (
                    <div key={i}>
                      <div>
                        <a href={item?.link}>
                          <span>{item?.icon}</span>
                          {item?.label}
                        </a>
                      </div>
                      <div>
                        {item?.childrens?.map((elem, j) => (
                          <a key={j} href={elem?.link}>
                            <p key={j}>
                              <span></span>
                              {elem.label}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <a key={i} href={item?.link}>
                      <span>{item?.icon}</span>
                      {item?.label}
                    </a>
                  );
                }
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
