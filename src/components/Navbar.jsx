import { useState } from "react";
import { Logo, menu, close } from "../assets";
import { navLinks } from "../Constants";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center ">
      <div>
        <img src={Logo} alt="logo" className="md:w-[130px] w-[110px]" />
      </div>
      <div className="border border-gray-500 rounded-xl shadow-md shadow-gray-500">
        <ul className=" hidden md:flex gap-8 mx-8 my-6 text-lg text-white font-poppins cursor-pointer">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-gray-400">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="gradient_button transition-transform hover:scale-105">
          Book a call
        </button>
      </div>
      <div className="md:hidden">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)}/>
        <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute z-40 top-28 right-0 left-0 mx-4 my-2 rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end flex-1 text-center flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
