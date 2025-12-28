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
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
};

export default FinancialBackground;
