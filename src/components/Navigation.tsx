import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PiHouse, PiPlaylist } from "react-icons/pi";
import { useMemo } from "react";

export interface NavItem {
  to: string;
  icon: React.ReactNode;
  label: string;
}

interface NavigationProps {
  items?: NavItem[];
  className?: string;
}

export default function Navigation({ items, className = "" }: NavigationProps) {
  const location = useLocation();

  const defaultItems: NavItem[] = useMemo(
    () => [
      { to: "/", label: "Home", icon: <PiHouse size={28} /> },
      { to: "/playlists", label: "Discover", icon: <PiPlaylist size={28} /> },
    ],
    []
  );

  const navItems = items && items.length > 0 ? items : defaultItems;

  return (
    <nav className={`relative flex gap-8 ${className}`}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;

        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={`relative flex flex-col items-center transition-colors duration-300 ${
              isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10">
              {item.icon}
            </div>

            {/* Animated underline */}
            {isActive && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 w-6 h-0.5 rounded-full bg-blue-400"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
