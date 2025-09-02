import React from "react";
import { Button } from "../ui/button";

const Marketing = () => {
  return (
    <div
      style={{
        backgroundImage: "url('marketing.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="min-h-[600px] mt-24 flex flex-col items-center justify-center"
    >
      <div className="container">
        <div className="bg-white max-w-xl text-center p-5 rounded-lg">
          <h1 className="text-2xl font-medium">Manufacture Your Products In Latin America</h1>
          <p className="text-primary text-sm mt-4 mb-5">Avoid Tariffs & Cut Lead Times by 50%</p>
          <div className="space-x-5 flex items-center">
            <Button className="w-1/2">Develop Your Products</Button>
            <Button className="w-1/2">Custom Quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
