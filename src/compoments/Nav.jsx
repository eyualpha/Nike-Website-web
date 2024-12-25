import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";

const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute w-full z-10">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex gap-16 justify-center items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className=" font-monserat leading-normal text-lg text-slate-600"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className=" hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
