import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl mb-3">Sevices</h1>
      <Link
        href={"/services/carService"}
        className="px-6 py-2 bg-lime-500 rounded-2xl"
      >
        Car Service
      </Link>
    </div>
  );
};

export default Services;
