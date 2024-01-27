"use client";
import React from "react";
import { TimeSelector } from "@/app/search/person/timeSelector";
import { Divider } from "antd";
import { ExpertInfo } from "@/app/search/person/expertInfo";

const page = ({ personTimings = ["30 min", "60 min"] }) => {
    return (
        <main className="w-full h-[calc(100vh-10em)] p-24 !pt-2 items-stretch bg-white text-slate-800 font-medium">
            <div className="flex w-full h-full">
                <ExpertInfo />
                <Divider type="vertical" className="bg-greyish border min-h-full mx-2" />
                <TimeSelector />
            </div>
        </main>
    );
};

export default page;
