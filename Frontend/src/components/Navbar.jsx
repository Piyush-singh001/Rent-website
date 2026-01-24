import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-11 py-4 flex items-center justify-between fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
      {/* Logo */}
      <div className="logo h-15">
        <img
          className="h-full  filter grayscale brightness-0"
          src="/logo.png"
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex w-2/4 text-lg font-medium justify-between text-black">
        <li className="cursor-pointer">
          <Link to="/" href="#">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" href="#">Contact</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" href="#">About us</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="location" href="#">Location</Link>
        </li>
      </ul>

      {/* Desktop WhatsApp Button */}
      <div
        className="hidden md:flex items-center gap-2 text-white bg-green-500 py-3 px-6 rounded-full cursor-pointer"
        onClick={() =>
          window.open(
            "https://wa.me/8510992504?text=Hi, I am interested in this room.",
            "_blank",
          )
        }
      >
        Contact <FaWhatsapp className="text-2xl" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-400 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a onClick={() => setOpen(false)} href="#">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Contact
          </a>
          <a onClick={() => setOpen(false)} href="#">
            About us
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Location
          </a>

          <div
            className="flex items-center gap-2 bg-green-500 py-3 px-6 rounded-full"
            onClick={() =>
              window.open(
                "https://wa.me/8510992504?text=Hi, I am interested in this room.",
                "_blank",
              )
            }
          >
            Contact <FaWhatsapp className="text-2xl" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
