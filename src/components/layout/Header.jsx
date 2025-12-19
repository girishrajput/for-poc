import Profile from "../../assets/profile-photo.png";
import { BellDot, Settings, UserRoundPen, Info, LogOut, X,TextAlignJustify } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Header = ({ collapsed, setCollapsed }) => {

  const notifications = [
    {
    name: "Terry Franci",
    time: "5 min ago",
    online: true,
    avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
    name: "Alena Franci",
    time: "8 min ago",
    online: true,
    avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
    name: "Jocelyn Kenter",
    time: "15 min ago",
    online: true,
    avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
    name: "Brandon Philips",
    time: "1 hr ago",
    online: false,
    avatar: "https://i.pravatar.cc/100?img=14",
    },
  ];

  const [bellOpen, setBellOpen] = useState(false);
  const bellRef = useRef(null);

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setBellOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full flex items-center justify-between bg-white border-b border-gray-light1 py-2.5 px-6">
      
      <div className="flex gap-2.5 items-center">
        <button className="cursor-pointer border border-gray-300 p-2 rounded-xl"    
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "18px" }}
        ><TextAlignJustify /></button>
        <h1 className="font-semibold text-2xl leading-none !m-0">Snapshot</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* 🔔 Bell Dropdown */}
        <div className="relative" ref={bellRef}>
          <button
            className="p-3 rounded-full bg-gray-light cursor-pointer"
            onClick={() => {
              setBellOpen(!bellOpen);
              setProfileOpen(false);
            }}
          >
            <BellDot className="w-6 h-6 text-gray-600 hover:text-primary-color" />
          </button>

          {bellOpen && (
            <div className="absolute right-0 top-16 w-96 p-4 rounded-2xl bg-white shadow-lg">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Notification</h2>
              <button className="p-1 rounded-full hover:bg-gray-100">
              <X className="w-4 h-4 text-gray-500" />
              </button>
              </div>


              {/* List */}
              <div className="space-y-2 max-h-[370px] overflow-y-auto">
              {notifications.map((n, i) => (
              <div
              key={i}
              className={`flex items-start gap-3 p-3 rounded-xl transition ${
              i === notifications.length - 1
              ? "bg-gray-50"
              : "hover:bg-gray-50"
              }`}
              >
              {/* Avatar */}
              <div className="relative">
              <img
              src={n.avatar}
              alt={n.name}
              className="w-10 h-10 rounded-full object-cover"
              />
              <span
              className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
              n.online ? "bg-green-500" : "bg-red-500"
              }`}
              />
              </div>


              {/* Text */}
              <div className="flex-1 text-sm">
              <p className="text-gray-900">
              <span className="font-semibold">{n.name}</span> requests permission
              to change <span className="font-semibold">Project - Nganter App</span>
              </p>
              <p className="text-gray-500 mt-1">Project • {n.time}</p>
              </div>
              </div>
              ))}
              </div>


              {/* Footer */}
              <button className="cursor-pointer mt-4 w-full rounded-xl border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50">
              View All Notifications
              </button>
              

            </div>
          )}
        </div>

        {/* ⚙️ Settings Button */}
        <button className="p-3 rounded-full bg-gray-light">
          <Settings className="w-6 h-6 text-primary-color" />
        </button>

        {/* 👤 Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            className="w-15 h-15 rounded-full overflow-hidden cursor-pointer"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setBellOpen(false);
            }}
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {profileOpen && (
            <div className="absolute right-0 top-16 mt-2 w-64 p-4 rounded-2xl bg-white shadow-lg">
              <div>
                <span className="block font-medium text-gray-700 text-theme-sm">
                  Musharof Chowdhury
                </span>
                <span className="mt-0.5 block text-theme-xs text-gray-500">
                  randomuser@pimjo.com
                </span>
              </div>

              <ul className="mt-6">
                <li>
                  <a href="#" className="flex gap-2.5 py-3 px-1.5 text-title-color-50">
                    <UserRoundPen />
                    Edit profile
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2.5 py-3 px-1.5 text-title-color-50">
                    <Settings />
                    Account settings
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2.5 py-3 px-1.5 text-title-color-50">
                    <Info />
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2.5 py-3 px-1.5 text-title-color-50">
                    <LogOut />
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
