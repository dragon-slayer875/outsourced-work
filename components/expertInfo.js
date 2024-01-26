import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import { CiLinkedin, CiLocationOn, CiShare2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";

export const ExpertInfo = ({ classname }) => {
    const textArray = [
        "I can help you with your career and job search related questions.",
        "I can help you with your career and job search related questions.",
        "I can help you with your career and job search related questions.",
        "I can help you with your career and job search related questions.",
        "I can help you with your career and job search related questions.",
        "I can help you with your career and job search related questions.",
    ];
    const badgeArray = [
        "Career Coach",
        "Career Coach",
        "Career Coach",
        "Career Coach",
        "Career Coach",
        "Career Coach",
    ];

    return (
        <div className="flex flex-col items-center w-full px-6 gap-6 overflow-y-scroll flex-1">
            <div className="w-full flex flex-col gap-5 relative">
                <div className="items-center flex gap-5 self-center">
                    <Image
                        src=""
                        alt=""
                        width={500}
                        height={500}
                        className=" w-72 aspect-square"
                    />
                </div>
                <div className="text-2xl font-semibold ml-1 text-blue-500">
                    Name
                </div>
                <div className="flex justify-start basis-0">
                    <Divider
                        type="vertical"
                        className="m-0 mr-2 bg-black h-full"
                    />
                    <div className="text-xl font-semibold">Position</div>
                </div>
                <div className="flex flex-col">
                    <button className="flex gap-5 items-center">
                        <CiLinkedin className="text-2xl text-blue-500" />
                        <div className="text-xl font-semibold">LinkedIn</div>
                    </button>
                    <button className="flex gap-5 items-center">
                        <CiLocationOn className="text-2xl text-blue-500" />
                        <div className="text-xl font-semibold">Location</div>
                    </button>
                    <button className="flex gap-5 items-center">
                        <GiGlobe className="text-2xl text-blue-500" />
                        <div className="text-xl font-semibold">Languages</div>
                    </button>
                    <button className="absolute right-0 bottom-0 flex gap-5 items-center">
                        <CiShare2 className="text-2xl text-blue-500" />
                        <div className="text-xl text-blue-500 font-semibold underline">
                            Share
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-full border-2 border-slate-300 rounded-lg p-5">
                <div className="text-2xl text-blue-500">I can help you in:</div>
                <div className="text-xl">
                    {textArray.map((text, index) => (
                        <div className="" key={index}>
                            <FaCheck className="inline-block mr-2 text-blue-500" />
                            {text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full border-2 border-slate-300 rounded-lg p-5 flex flex-col gap-6">
                <div className="text-2xl text-blue-500">Bio:</div>
                <div className="text-xl">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex gap-2 flex-wrap">
                {badgeArray.map((badge, index) => (
                    <div className="text-md text-center border border-black px-2 rounded-full" key={index}>
                        {badge}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};
