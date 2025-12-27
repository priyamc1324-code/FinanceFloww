"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const FinancialBackground = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  if (!heroImage) {
    return <div className="absolute inset-0 -z-10 bg-background" />;
  }

  return (
    <>
      <Image
        src={heroImage.imageUrl}
        alt="Financial data analysis background"
        fill
        className="object-cover -z-20"
        data-ai-hint={heroImage.imageHint}
        priority
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />
    </>
  );
};

export default FinancialBackground;
