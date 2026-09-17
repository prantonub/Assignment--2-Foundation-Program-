import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";


const navLinkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-white" : "text-fog hover:text-white"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close the mobile menu on route change (Link clicks) rather than leaving it open.
  useEffect(() => {
    setMenuOpen(false);
  }, [navigate]);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-marquee/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Movie World home"
        >
          <img
            src="/logo.svg"
            alt="Movie World"
            className="h-[25px] w-[34px]"
          />
          <span className="font-display text-2xl tracking-wide text-white">
            Movie <span className="text-bulb">World</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClasses}>
            Movies
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/movies"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-95"
          >
            Explore Movies
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-hairline bg-marquee px-4 pb-5 pt-2 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4 pt-3">
            <NavLink
              to="/"
              end
              className={navLinkClasses}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={navLinkClasses}
              onClick={() => setMenuOpen(false)}
            >
              Movies
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Explore Movies
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
