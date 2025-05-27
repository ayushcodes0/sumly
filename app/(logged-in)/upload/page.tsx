import BgGradient from "@/components/common/BgGradient";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from "lucide-react";
import React from "react";

const UploadPage = () => {
  return (
    <section className="min-h-screen">
      <BgGradient className="" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant={"secondary"}
              className="text-base relative px-6 py-2 font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
            >
              <Sparkle className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base ">AI-Powered Content Creation</p>
            </Badge>
          </div>
          <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start Uploading{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-2">Your PDF's</span>
                <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
              </span>
          </div>
          <div className="mt-2 leading-8 text-lg text-gray-600 max-w-2xl text-center">
            <p>Upload your pdf and let our AI do the magic!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadPage;
