import React, { Children } from "react";
import Image from "next/image";

const Navbar = ({ logo, navItemList = ["Dashboard", "Experts"], children }) => {
    return (
        <nav className="sticky flex items-center justify-between w-full px-20 py-2 bg-[#F9F9FB] text-slate-900">
            <div className="">
                {/* logo */}
                {logo ? (
                    <Image width={20} height={20} src={logo} alt="logo" />
                ) : (
                    <h1>Logo</h1>
                )}
            </div>
            <div className="flex items-center justify-between">
                {/* nav items */}
                {navItemList.map((item, index) => (
                    <button key={index} className="font-medium p-4">
                        {item}
                    </button>
                ))}
            </div>
            <div className="">
                {/* user options*/}
                {children}
            </div>
        </nav>
    );
};

export default Navbar;
