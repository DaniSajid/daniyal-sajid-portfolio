"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Name() {
    const words = [
        {
            text: "Hello, ",
        },
        {
            text: "my",
        },
        {
            text: "name",
        },
        {
            text: "is ",
        },
        {
            text: "Daniyal",
            className: "text-primary dark:text-primary",
        },
        {
            text: "Sajid",
            className: "text-primary dark:text-primary",
        },
    ];
    return (
        <div className="flex flex-col items-center my-1 justify-center h-12 ">
            <TypewriterEffect words={words} />
        </div>
    );
}
