"use client";
import React from "react";
import { TimeSelector } from "@/app/Search/Noopur/timeSelector";
import { Divider } from "antd";
import { ExpertInfo } from "@/app/Search/Noopur/expertInfo";

const page = ({ personTimings = ["30 min", "60 min"] }) => {
    return (
        <main className="w-full p-24 !pt-5 items-stretch bg-white text-blackish font-medium">
            <div className="grid grid-flow-col grid-cols-[1fr_auto_1fr] w-full h-full">
                <ExpertInfo />
                <Divider type="vertical" className="bg-greyish border min-h-full" />
                <TimeSelector />
            </div>
        </main>
    );
};

export default page;
