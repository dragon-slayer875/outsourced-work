import React, { Children } from "react";
import Image from "next/image";

const Navbar = ({ navItemList = ["Dashboard", "Experts"], children }) => {
    return (
        <nav className="sticky flex items-center justify-between w-full px-20 py-2 bg-[#F9F9FB] text-slate-900">
            <div className="">
                <Image
                    width={200}
                    height={20}
                    src="/founderHub.png"
                    alt="logo"
                    className="object-contain w-full aspect-auto h-auto"
                />
            </div>
            <div className="flex items-center justify-between">
                {/* nav items */}
                {navItemList.map((item, index) => (
                    <button key={index} className="font-medium text-[20px] p-4">
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
