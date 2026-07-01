import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import Waveform from "./waveform";

const Topmenu = () => {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.mycart.cart);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/home" className="flex items-center gap-2 text-white">
          <Waveform className="h-5 text-cyan-400" />
          <span className="font-display text-xl font-bold tracking-tight">HeadPhones</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link to="home" className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-300">
            Home
          </Link>
          <Link to="about" className="cursor-pointer text-sm font-medium text-white/80 transition-colors hover:text-cyan-300">
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-cyan-300">
              Category
              <IoChevronDown className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full w-44 rounded-xl border border-white/10 bg-surface-800 py-2 shadow-xl">
                <Link to="wireless" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-cyan-300">
                  Wireless
                </Link>
                <Link to="neakband" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-cyan-300">
                  Neckband
                </Link>
              </div>
            )}
          </div>

          <Link to="review" className="cursor-pointer text-sm font-medium text-white/80 transition-colors hover:text-cyan-300">
            Review
          </Link>
          <Link to="search" className="text-sm font-medium text-white/80 transition-colors hover:text-cyan-300">
            Search
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/cartdata")}
            className="relative text-white/80 transition-colors hover:text-cyan-300"
            aria-label="Cart"
          >
            <FaShoppingCart size={19} />
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("/customber")}
            className="text-white/80 transition-colors hover:text-cyan-300"
            aria-label="Account"
          >
            <RiAdminFill size={20} />
          </button>
          <button className="text-white/80 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-surface-900 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="home" onClick={() => setOpen(false)} className="text-white/80">
              Home
            </Link>
            <Link to="wireless" onClick={() => setOpen(false)} className="text-white/80">
              Wireless
            </Link>
            <Link to="neakband" onClick={() => setOpen(false)} className="text-white/80">
              Neckband
            </Link>
            <Link to="search" onClick={() => setOpen(false)} className="text-white/80">
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Topmenu;
