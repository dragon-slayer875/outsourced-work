import React from "react";
import Image from "next/image";

const Navbar = ({ navItemList = ["Dashboard", "Experts"] }) => {
    return (
        <nav className="sticky flex items-center justify-between w-full px-20 py-2 bg-whitish text-slate-900">
            <div className="min-w-max">
                <Image
                    width={200}
                    height={20}
                    src="/founderHub.png"
                    alt="logo"
                    className="object-contain min-w-full aspect-auto h-auto"
                />
            </div>
            <div className="hidden lg:flex items-center justify-between">
                {/* nav items */}
                {navItemList.map((item, index) => (
                    <button key={index} className="font-medium text-xl p-4">
                        {item}
                    </button>
                ))}
            </div>
            <div className="flex gap-5">
                {/* user options*/}
                <Image
                    src={"/question.svg"}
                    width={22}
                    height={22}
                    className=""
                />
                <Image
                    src={"/notification.svg"}
                    width={22}
                    height={22}
                    className=""
                />
                <div className="flex items-center justify-between gap-3 bg-white border border-[#E0E2E3] rounded-lg font-medium py-2 px-3">
                    <Image
                        src={"/ellipse.png"}
                        width={22}
                        height={22}
                        className="object-contain w-8 h-auto aspect-square"
                    />
                        <span>John Doe</span>
                        <Image
                            src={"/downArrow.svg"}
                            width={12}
                            height={7}
                            className=""
                        />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
