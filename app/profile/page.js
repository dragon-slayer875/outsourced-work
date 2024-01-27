import EditableTextField from "@/app/profile/editableTextField";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCamera, CiLinkedin } from "react-icons/ci";

const page = () => {
    return (
        <main className="w-full h-[calc(100dvh-7rem)] p-24 !pt-10 items-stretch bg-white text-slate-800">
            <div className="flex flex-col w-full h-full gap-6">
                <div className="flex flex-col gap-5 items-center">
                    <Image
                        src=""
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className="rounded-full aspect-square"
                    />
                    <button className="border-slate-800 border rounded-full px-4 py-2 items-center">
                        <span>Edit image</span>
                        <CiCamera className="inline-block ml-2 text-2xl" />
                    </button>
                    <h1 className="text-3xl font-bold text-blue-500">Name</h1>
                    <EditableTextField val={"hello world"} className="text-center" />
                </div>
                <div className="border border-slate-200 rounded-xl p-10 flex flex-col gap-5">
                    <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-blue-500">About</h1>
                    <EditableTextField val={"hello world"} className="max-w-full" rows={2}/>
                    </div>
                    <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-blue-500">About</h1>
                    <EditableTextField val={"hello world"} className="max-w-full" rows={2}/>
                    </div>
                    <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-blue-500">About</h1>
                    <EditableTextField val={"hello world"} className="max-w-full" rows={2}/>
                    </div>
                </div>
                <div className="px-10">
                    <button className="text-blue-500 rounded-full flex items-center gap-2 text-lg"><CiLinkedin size={'1.8em'}/><span>LinkedIn</span></button>
                    <Link href="/profile/edit"><span className="underline ml-1">asjkdalkfh</span></Link>
                </div>
            </div>
        </main>
    );
};

export default page;
