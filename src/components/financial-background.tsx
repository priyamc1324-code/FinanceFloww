"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const FinancialBackground = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Image
        src="/background.jpeg"
        alt="Financial data analysis background"
        fill
        className="object-cover -z-20 opacity-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 -z-10" />
    </>
  );
};

export default FinancialBackground;
