import { Home, Moon, TrendingUp, User } from "lucide-react";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="/" className="bottom-nav__item">
        <Home size={28} />
      </a>

      <a href="/Sleep" className="bottom-nav__item">
        <Moon size={28} />
      </a>

      <a href="/Progress" className="bottom-nav__item">
        <TrendingUp size={28} />
      </a>

      <a href="/Account" className="bottom-nav__item">
        <User size={28} />
      </a>
    </nav>
  );
}
