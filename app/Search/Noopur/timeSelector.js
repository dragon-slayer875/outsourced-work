"use client";
import React, { useState } from "react";
import timingData from "@/public/times.json";
import { Divider } from "antd";
import { MdNavigateNext } from "react-icons/md";
import { Modal } from "antd";

export const TimeSelector = ({
    personTimings = ["30 min", "60 min"],
    // schedule,
}) => {
    const [selectedDuration, setSelectedDuration] = useState("30 min");
    const [selectedTime, setSelectedTime] = useState(null);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("Content of the modal");

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText("The modal will be closed after two seconds");
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log("Clicked cancel button");
        setOpen(false);
    };

    const schedule = timingData[selectedDuration];

    return (
        <div className="flex flex-col items-center flex-1 md:px-24 overflow-auto">
            <div className="flex flex-col w-full">
                <div className="text-xl font-semibold">Book A session</div>
                <div className="flex gap-5">
                    {personTimings.map((time, index) => (
                        <button
                            onClick={() => setSelectedDuration(time)}
                            key={index}
                            className={`border-2 rounded-2xl border-neutral px-3 py-1 my-2 ${
                                selectedDuration === time
                                    ? " !border-primary text-primary"
                                    : null
                            }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-7 pr-5 mt-5 max-h-[40vh] overflow-y-scroll text-neutral custom-scrollbar">
                    {!schedule && (
                        <div className="text-xl font-semibold min-h-full">
                            No slots available
                        </div>
                    )}
                    {schedule &&
                        schedule.map((day, index) => (
                            <div key={index} className="flex flex-col">
                                <div>
                                    <div>{Object.keys(day)}</div>
                                    <div className="flex flex-wrap gap-5">
                                        {Object.values(day).map((times) =>
                                            times.map((time, index) => (
                                                <button
                                                    onClick={() =>
                                                        setSelectedTime(time)
                                                    }
                                                    key={index}
                                                    className={`border-2 rounded-xl border-neutral px-3 py-5 my-0 ${
                                                        selectedTime === time
                                                            ? " !border-primary text-primary"
                                                            : null
                                                    }`}
                                                >
                                                    {time}
                                                </button>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex flex-col w-full">
                <Divider className="w-full bg-blackish" />
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-xl font-medium text-blackish">
                            {"$4500"}
                        </span>
                        <span className="text-neutralish">{`/${selectedDuration}`}</span>
                    </div>
                    <button
                        onClick={showModal}
                        className=" bg-primary px-4 py-3 text-white shadow-xl rounded-xl"
                    >
                        <span className="flex items-center">
                            Next
                            <MdNavigateNext />
                        </span>
                    </button>
                    <Modal
                        okButtonProps={{ className: "hidden" }}
                        cancelButtonProps={{ className: "hidden" }}
                        title=" "
                        className="w-[90dvw] sm:min-w-[70dvw]"
                        centered
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                    >
                        <form className="flex flex-col gap-8 p-6 text-blackish">
                            <div className="text-xl font-medium text-primary mr-5">
                                Before proceeding, please add more context to
                                make best use of your time with the Expert
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-lg">
                                    What do you want to discuss?
                                </label>
                                <input
                                    type="text"
                                    className="border rounded-lg border-black px-5 py-3"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-lg">
                                    Can you provide more context on the problems
                                    you need advice on?
                                </label>
                                <input
                                    type="text"
                                    className="border rounded-lg border-black px-5 py-3"
                                />
                            </div>
                            <button
                                onClick={handleOk}
                                className="bg-primary px-14 py-2 text-xl text-white rounded-2xl self-center "
                            >
                                <span>Book your session</span>
                            </button>
                        </form>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
