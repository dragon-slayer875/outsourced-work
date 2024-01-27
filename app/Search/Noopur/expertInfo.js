import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import { FaCheck } from "react-icons/fa";

export const ExpertInfo = ({ classname }) => {
    const textArray = [
        "Ramping up in your new role as a people manager",
        "Building a marketing team",
        "Developing growth strategy for your startup",
        "Demand generation through Google Ads",
        "Conversion rate optimization",
    ];
    const badgeArray = [
        "Design",
        "Technology",
        "Frontend",
        "Conversion",
        "Crypto",
        "Crypto",
    ];

    return (
        <div className="flex flex-col items-center w-full min-w-min md:px-24 gap-14 flex-1">
            <div className="w-full flex flex-col gap-5 relative">
                <div className="items-center flex gap-5 self-center">
                    <Image
                        src="/person.png"
                        alt=""
                        width={750}
                        height={500}
                        className="sm:max-lg:max-w-[60dvh] h-auto rounded-2xl"
                    />
                </div>
                <div className="text-2xl  text-primary">
                    Noopur Gupta
                </div>
                <div className="flex justify-start basis-0">
                    <Divider
                        type="vertical"
                        className="m-0 mr-2 bg-neutral h-full"
                    />
                    <div className="text-md text-neutral">Product Manager ex. Google</div>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                    <button className="flex gap-5 items-center">
                        <Image src={"/linkedin.svg"} width={20} height={20} />
                        <div className="text-blackish font-normal">/NoopurGupta</div>
                    </button>
                    <button className="flex gap-5 items-center">
                        <Image src={"/locationPin.svg"} width={20} height={20} />
                        <div className="text-blackish font-normal">Bengaluru, India</div>
                    </button>
                    <div className="flex justify-between">
                    <button className="flex gap-5 items-center">
                        <Image src={"/globe.svg"} width={20} height={20} />
                        <div className="text-blackish font-normal">English Hindi</div>
                    </button>
                    <button className=" bottom-0 ml-5 flex gap-2 items-center">
                        <Image src={"/share.svg"} width={19} height={19} />
                        <div className="text-primary underline">
                            Share Profile
                        </div>
                    </button>
                    </div>
                </div>
            </div>
            <div className="w-full border-2 border-greyish rounded-2xl py-6 px-8 items-center text-md flex flex-col">
                <div className="flex flex-col gap-4 max-w-max ">
                <div className="text-primary">I can help you in:</div>
                    {textArray.map((text, index) => (
                        <div className="flex items-center" key={index}>
                            <Image src={"/check.svg"} width={20} height={20} className="mr-3"/>
                            <div>{text}</div>
                        </div>
                    ))}
                    </div>
            </div>
            <div className="w-full border-2 border-greyish text-md rounded-2xl py-6 px-8 items-center flex flex-col">
                <div className="flex flex-col gap-5 max-w-max">
                <div className="text-primary">Bio:</div>
                <div className="">
                    Feeling burned out? After years of working with CEOs, Heads of Growth, & Marketers from all over the world, I have stories & experience ready to support you on your growth journey. I'll help you identify your biggest opportunities for sustainable growth for yourself and/or your business.
                </div>
                <div className="flex gap-2 flex-wrap">
                {badgeArray.map((badge, index) => (
                    <div className="text-md text-center font-normal border border-neutral text-blackish px-3 rounded-2xl" key={index}>
                        {badge}
                    </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    );
};
