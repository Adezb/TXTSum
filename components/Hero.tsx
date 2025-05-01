import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="px-4 md:px-12 flex flex-col justify-center items-center h-[85vh] relative mx-auto text-center">
      <h1 className="text-3xl md:text-[70px] lg:text-[78px] font-bold max-w-4xl">
        Work Less, Summarize Better ⚡
      </h1>
      <p className="text-sm mt-2 md:text-base text-center text-gray-700 mb-8 max-w-4xl">
        ✨ Turn Lengthy Reads into Quick Insights with TXTSum! Get instant
        AI-powered summaries that cut the fluff, save you time, and spotlight
        what’s essential. Read less, know more—effortlessly. ✨
      </p>

      <Link href="/summarize">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Hero;
