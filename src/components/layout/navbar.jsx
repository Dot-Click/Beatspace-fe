import {
  Avatar,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { IoEye, IoEyeOffSharp, IoWallet } from "react-icons/io5";
import ProfileMenu from "./profileMenu";
import Notifications from "./notifications";
import { useLocation } from "react-router-dom";
// TEMPLATE: Import your custom hooks here
// import { useGetMyWallet } from "../../hooks/useWallet";
// import { useGetMyAccounts } from "../../hooks/usePlaid";
import { cn } from "../../utils/cn";
import { useColorScheme } from "../../contexts/ColorSchemeContext";

// TEMPLATE: Custom component example - Wallet/Balance display
// Replace this with your own custom components
export const Wallet = () => {
  // TEMPLATE: Replace with your data fetching logic
  // const { wallet } = useGetMyWallet();
  // const { accounts } = useGetMyAccounts();
  const [accountSum, setAccountSum] = useState(0);
  const { colorScheme } = useColorScheme();

  // TEMPLATE: Replace with your data processing logic
  // useEffect(() => {
  //   if (accounts?.length > 0) {
  //     const totalSum = accounts?.reduce((acc, item) => {
  //       const accountSum = item?.accounts?.reduce((subAcc, single) => {
  //         return subAcc + (single?.balances?.current ?? 0);
  //       }, 0);
  //       return acc + accountSum;
  //     }, 0);
  //     setAccountSum(totalSum);
  //   }
  // }, [accounts]);

  const [isShown, setIsShown] = useState(false);
  const isDark = colorScheme === "dark";

  const handleSwitchShownState = () => {
    setIsShown(!isShown);
  };
  
  return (
    <div
      className={cn(
        "items-center hidden gap-3 px-6 py-3 border md:flex bg-slate-100 rounded-xl border-slate-300",
        isDark ? "bg-[#1d1e30]" : "bg-slate-100"
      )}
    >
      <IoWallet size={24} color="#21BED7" />
      <p className="text-xl font-semibold min-w-[130px]">
        {/* TEMPLATE: Replace with your data display logic */}
        {isShown
          ? `$ ${Math.round((0 || 0) + (accountSum || 0)).toLocaleString()}`
          : "*******"}
      </p>
      {isShown ? (
        <IoEyeOffSharp
          size={20}
          color="#7184B4"
          cursor="pointer"
          onClick={handleSwitchShownState}
        />
      ) : (
        <IoEye
          size={20}
          color="#7184B4"
          cursor="pointer"
          onClick={handleSwitchShownState}
        />
      )}
    </div>
  );
};

const Navbar = ({ opened, toggle }) => {
  const location = useLocation();
  // TEMPLATE: Uncomment and customize these if needed
  // const { setColorScheme, colorScheme } = useMantineColorScheme();
  // const computedColorScheme = useComputedColorScheme("light");

  // TEMPLATE: Replace with your user role logic
  const userRole = JSON.parse(localStorage?.getItem("user"))?.role || "user";

  let routeName;
  const currentPath = location.pathname;

  // TEMPLATE: Customize route name logic for your application
  if (currentPath === "/dashboard/manage-monthly-expenses" || currentPath.startsWith("/dashboard/add-expense") || currentPath.startsWith("/dashboard/edit-expense")) {
    routeName = "Monthly Expenses";
  } else {
    if (location.pathname?.split("/")[3]?.split("-")?.length === 3) {
      var routeNameArr = location.pathname?.split("/")[3]?.split("-");
    } else if (location.pathname?.split("/")[3]?.split("-")?.length === 2) {
      var routeNameArr = location.pathname?.split("/")[3]?.split("-");
    } else if (location.pathname?.split("/")[2]) {
      var routeNameArr = location.pathname?.split("/")[2]?.split("-");
    } else {
      var routeNameArr = location.pathname?.split("/")[1]?.split("-");
    }
    routeName = routeNameArr?.length > 2
      ? routeNameArr[0] + " " + routeNameArr[1] + " " + routeNameArr[2]
      : routeNameArr?.length > 1
      ? routeNameArr[0] + " " + routeNameArr[1]
      : routeNameArr;
  }

  const { toggleColorScheme, colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  
  return (
    <div
      className={cn(
        "h-[12vh] flex justify-between p-4 m-3 rounded-2xl border border-slate-200",
        isDark ? "bg-[#1d1e30]" : "bg-white"
      )}
    >
      <div className="flex items-center gap-2">
        <Burger
          className="block xl:hidden"
          opened={opened}
          onClick={toggle}
          aria-label="Toggle Sidebar"
        />
        <div>
          <p className="text-2xl font-medium capitalize">
            {routeName}
          </p>
          <p className="hidden text-sm lg:block ">
            {/* TEMPLATE: Replace with your application name */}
            Welcome to Global Vision
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ActionIcon
          variant="outline"
          onClick={toggleColorScheme}
          aria-label="Toggle color scheme"
        >
          {colorScheme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
        </ActionIcon>
        {/* TEMPLATE: Customize conditional rendering based on your user roles */}
        {userRole !== "admin" && <Wallet />}
        {userRole == "admin" && (
          <div className="relative">
            <Notifications>
              <FaBell size={20} color="#7184B4" />
            </Notifications>
          </div>
        )}
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navbar;