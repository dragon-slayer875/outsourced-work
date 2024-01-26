"use client";
import React from "react";
import { useState } from "react";
import { TimeSelector } from "@/components/timeSelector";
import timingData from "@/public/timing.json";
import { Divider } from "antd";
import { ExpertInfo } from "@/components/expertInfo";

const page = ({ personTimings = ["30 min", "60 min"] }) => {
    return (
        <main className="w-full h-[calc(100dvh-7rem)] p-24 !pt-10 items-stretch bg-white text-slate-800">
            <div className="flex w-full h-full">
                <ExpertInfo />
                <Divider type="vertical" className=" bg-slate-100 border-2 h-full" />
                <TimeSelector />
            </div>
        </main>
    );
};

export default page;
