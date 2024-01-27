"use client";
import React from "react";
import { usePathname } from "next/navigation";

export const RouteDisplay = () => {
    const pathname = usePathname();

    return (
        <div className="bg-white text-blackish text-md w-full px-20 py-8 font-medium">
            <span key={0}>
                <button className="underline">Home</button>
            </span>
            {pathname === "/"
                ? null
                : pathname.split("/").map((item, index) => {
                      return (
                          <span key={index + 1}>
                              <button className=" underline">{item}</button>
                              {index !== pathname.split("/").length - 1 ? (
                                  <span className="mx-2">{">"}</span>
                              ) : null}
                          </span>
                      );
                  })}
        </div>
    );
};
