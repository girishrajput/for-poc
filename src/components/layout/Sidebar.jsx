import { useState } from "react";
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

import Logo from "../../assets/logo.svg";

const menus = [
  {
    label: "Dashboards",
    icon: House,
    children: [
      "Snapshot",
      "Payments",
      "Registrations",
      "Registration Comparisons",
      "Alerts",
    ],
  },
  {
    label: "Deposit",
    icon: Wallet,
    
  },
  { label: "Withdrawals", icon: ArrowDownCircle, 
    children: [
      "Snapshot",
      "Payments",
    ],
   },
  { label: "Campaign", icon: Megaphone },
  { label: "Vouchers", icon: Gift },
  { label: "Customers", icon: Users },
  { label: "Reports", icon: ChartSpline },
  { label: "Affiliates", icon: Network },
];

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState("Dashboards");

  return (
    <aside className="h-full w-full lg:w-64 border-r border-gray-light1 bg-white">
      {/* Logo */}
      <div className="px-6 py-4">
        <img src={Logo} alt="Logo" />
      </div>

      <nav className="space-y-1 px-0">
        {menus.map(({ label, icon: Icon, children }) => {
          const isOpen = openMenu === label;

          return (
            <div key={label}>
              <button
                onClick={() => setOpenMenu(isOpen ? null : label)}
                className={`flex relative w-full items-center justify-between px-6 py-3 text-sm transition
                  ${isOpen ? "text-primary-color after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-10 after:w-1.5 after:bg-blue-500 after:rounded-tr-2xl after:rounded-br-2xl" : "text-title-color-50 hover:text-primary-color"}`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
                {children && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
              </button>

              {children && isOpen && (
                <div className="ml-7 mt-1 space-y-1 border-l border-title-color-50 pl-3">
                  {children.map((item) => (
                    <div
                      key={item}
                      className="flex cursor-pointer items-center gap-2.5 py-1 text-sm text-title-color-50 hover:text-primary-color"
                    >
                      <Minus className="ml-[-19px]  h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
