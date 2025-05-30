import BgGradient from "@/components/common/BgGradient";
import UploadForm from "@/components/upload/UploadForm";
import UploadHeader from "@/components/upload/UploadHeader";
import React from "react";

const UploadPage = () => {
  return (
    <section className="min-h-screen">
      <BgGradient className="" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader/>
          <UploadForm/> 
        </div>
      </div>
    </section>
  );
};

export default UploadPage;
