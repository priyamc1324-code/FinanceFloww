"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const FinancialBackground = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  if (!heroImage) {
    return <div className="absolute inset-0 -z-10 bg-background" />;
  }
  
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Image
        src={heroImage.imageUrl}
        alt="Financial data analysis background"
        fill
        className="object-cover -z-20 opacity-30"
        data-ai-hint={heroImage.imageHint}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/80 to-amber-500/50 -z-10" />
    </>
  );
};

export default FinancialBackground;
