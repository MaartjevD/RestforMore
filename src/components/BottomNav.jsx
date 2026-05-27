import { Home, Moon, TrendingUp, User } from "lucide-react";

import { useLocation } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      icon: <Home size={24} strokeWidth={2.2} />,
      path: "/",
    },
    {
      icon: <Moon size={24} strokeWidth={2.2} />,
      path: "/Sleep",
    },
    {
      icon: <TrendingUp size={24} strokeWidth={2.2} />,
      path: "/Progress",
    },
    {
      icon: <User size={24} strokeWidth={2.2} />,
      path: "/Account",
    },
  ];

  return (
    <nav className="bottomNav">
      {navItems.map((item) => {
        const active = location.pathname === item.path;

        return (
          <a
            key={item.path}
            href={item.path}
            className={`bottomNavItem ${active ? "active" : ""}`}
          >
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
}
