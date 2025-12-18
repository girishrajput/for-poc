import Profile from "../../assets/profile-photo.png";
import { BellDot, Settings, UserRoundPen, Info, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from "react";

const Header = () => {

  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
  function handleClickOutside(event) {
  if (boxRef.current && !boxRef.current.contains(event.target)) {
  setOpen(false);
  }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="w-full flex items-center justify-between bg-white border-b border-gray-light1 py-2.5 px-6">
      <h1 className="font-semibold text-2xl leading-none ">Snapshot</h1>
      <div className="flex items-center gap-4">
        <button className="p-3 rounded-full bg-gray-light">
          <BellDot className="w-6 h-6 text-gray-600 hover:text-primary-color" />
        </button>

         <button className="p-3 rounded-full bg-gray-light">
          <Settings className="w-6 h-6 text-primary-color hover:text-primary-color active:text-primary-color" />
        </button>       

        <div className="relative">
          <div className="w-15 h-15 rounded-full overflow-hidden">
            <img
              src={Profile}
              onClick={() => setOpen(!open)}
              alt="Profile"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          {open && (
            <div
            ref={boxRef}
            className="absolute mt-2 w-64 p-4 rounded-2xl bg-white shadow-lg right-0 top-16"
            >
              <div>
                <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">Musharof Chowdhury</span>
                <span class="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">randomuser@pimjo.com</span>
              </div>
              <ul className="mt-6">
                <li>
                  <a href="#" className="text-title-color-50 flex gap-2.5 py-3 px-1.5">
                    <UserRoundPen />
                    Edit profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-title-color-50 flex gap-2.5 py-3 px-1.5">
                    <Settings />
                    Account settings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-title-color-50 flex gap-2.5 py-3 px-1.5">
                    <Info />
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-title-color-50 flex gap-2.5 py-3 px-1.5">
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
