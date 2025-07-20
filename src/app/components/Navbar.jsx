import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center py-2 bg-slate-800">
      <ul className="flex justify-center gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
