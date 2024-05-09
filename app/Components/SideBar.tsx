'use client'
import React, { useEffect, useState } from "react";
import SideBarComponent from "./SideBarComponent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const SideBar = () => {
  const sideBarArray = [
    {
      id: 1,
      name: "Partners",
      Actions: ["Update Partner", "Create Partner"],
      icon: GroupIcon,
    },
    {
      id: 2,
      name: "OTP Management",
      Actions: ["Update OTP Profile", "Create OTP Profile"],
      icon: SettingsCellIcon,
    },
    {
      id: 3,
      name: "User Portal",
      Actions: ["Update User", "Create User"],
      icon: PersonIcon,
    },
    {
      id: 4,
      name: "Access Permission",
      Actions: ["Update Role", "Create Role", "Assign Role"],
      icon: ManageAccountsIcon,
    },
  ];

  const [sidebarHeight, setSidebarHeight] = useState("100vh");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const newHeight = windowHeight - scrollTop;
      setSidebarHeight(`${newHeight}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-gray-200"
      style={{ height: sidebarHeight, overflowY: "auto" }}
    >
      <div className="p-2">
        <div className="flex flex-row w-56 p-2 h-9 bg-zinc-300 rounded-lg">
          <div className="flex flex-row items-center">
            <DashboardIcon />
          </div>
          <div className="flex flex-row items-center pl-2">Dashboard</div>
        </div>
        <hr />
        <div className="pt-2">
          {sideBarArray.map((item) => (
            <SideBarComponent
              key={item.id}
              name={item.name}
              actions={item.Actions}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
