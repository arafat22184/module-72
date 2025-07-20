import Link from "next/link";
import React from "react";

const CarService = () => {
  return (
    <div>
      <h1 className="font-bold tex-4xl mb-5">Car Service</h1>
      <Link href={"/services"} className="px-6 py-2 bg-lime-500 rounded-2xl">
        Go Back
      </Link>
    </div>
  );
};

export default CarService;
