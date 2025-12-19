// src/components/layout/Sidebar.jsx
import React from "react";
import {
  House,
  Network,
  Users,
  ChartSpline,
  Megaphone,
  Gift,
  Wallet,
  ArrowDownCircle,
  ChevronDown,
  ChevronRight,
  Minus,
} from "lucide-react";

import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import SmallLogo from "../../assets/SmallLogo.svg";

const items = [
  {
    key: "/",
    label: "Dashboards",
    icon: <House />,
    children: [
      { key: "/contact", label: "Snapshot" },
      { key: "/a", label: "Payments" },
      { key: "/b", label: "Registrations" },
      { key: "/c", label: "Registration Comparisons" },
      { key: "/d", label: "Alerts" },
    ],
  },
  {
    key: "/Deposit",
    label: "Deposit",
    icon: <Wallet />,
  },
  {
    key: "/Withdrawals",
    label: "Withdrawals",
    icon: <ArrowDownCircle />,
  },
  {
    key: "/Campaign",
    label: "Campaign",
    icon: <Megaphone />,
  },
  {
    key: "/Vouchers",
    label: "Vouchers",
    icon: <Gift />,
  },
  {
    key: "/Customers",
    label: "Customers",
    icon: <Users />,
  },
  {
    key: "/Reports", // ✅ unique key
    label: "Reports",
    icon: <ChartSpline />,
    children: [
      { key: "/contact", label: "Profile" },
      { key: "/settings/security", label: "Security" },
    ],
  },
  {
    key: "/Affiliates",
    label: "Affiliates",
    icon: <Network />,
  },
];

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div>
        <div className="px-6 py-4">
          {collapsed ? (
            <img src={SmallLogo} className="w-10" alt="Logo small" />
          ) : (
            <img src={Logo} className="min-w-48" alt="Logo full" />
          )}
        </div>
      </div>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ height: "100%" }}
        className="!border-0"
        items={items}
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
      />
    </>
  );
};

export default Sidebar;
