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
        <div className="flex flex-col items-center max-h-[70dvh] w-full min-w-min px-24 gap-12 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent flex-1">
            <div className="w-full flex flex-col gap-5 relative">
                <div className="items-center flex gap-5 self-center">
                    <Image
                        src=""
                        alt=""
                        width={750}
                        height={500}
                        className="h-auto aspect-[4/3] rounded-2xl"
                    />
                </div>
                <div className="text-2xl ml-1 text-primary">
                    Noopur Gupta
                </div>
                <div className="flex justify-start basis-0">
                    <Divider
                        type="vertical"
                        className="m-0 mr-2 bg-neutral h-full"
                    />
                    <div className="text-xl">Position</div>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="flex gap-5 items-center">
                        <CiLinkedin className="text-2xl text-primary" />
                        <div className="text-xl text-blackish font-normal">LinkedIn</div>
                    </button>
                    <button className="flex gap-5 items-center">
                        <CiLocationOn className="text-2xl text-primary" />
                        <div className="text-xl text-blackish font-normal">Location</div>
                    </button>
                    <button className="flex gap-5 items-center">
                        <GiGlobe className="text-2xl text-primary" />
                        <div className="text-xl text-blackish font-normal">Languages</div>
                    </button>
                    <button className="absolute right-0 bottom-0 ml-5 flex gap-2 items-center">
                        <CiShare2 className="text-2xl text-primary" />
                        <div className="text-xl text-primary underline">
                            Share Profile
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-full border-2 border-greyish rounded-2xl p-7 items-center text-xl flex flex-col">
                <div className="flex flex-col gap-4 max-w-max ">
                <div className="text-primary">I can help you in:</div>
                    {textArray.map((text, index) => (
                        <div className="flex items-center" key={index}>
                            <FaCheck className="inline-block mx-4 text-primary" size={"22px"} />
                            <div>{text}</div>
                        </div>
                    ))}
                    </div>
            </div>
            <div className="w-full border-2 border-greyish rounded-2xl p-7 items-center flex flex-col">
                <div className="flex flex-col gap-4 max-w-max">
                <div className="text-2xl text-primary">Bio:</div>
                <div className="text-xl">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
