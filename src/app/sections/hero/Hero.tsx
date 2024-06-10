"use client"
import React, { useState, useEffect } from 'react';
import One from "../../../../public/assets/carousel-1.webp";
import Two from "../../../../public/assets/carousel-2.webp";
import Three from "../../../../public/assets/carousel-3.webp";
import Image from 'next/image';

const Hero = () => {
  const images = [One, Two, Three];
  const [selectedImage, setSelectedImage] = useState(Two); // Default to Two

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, []);

  return (
    <div className="relative w-full h-[100vh]">
      <Image src={selectedImage} alt="Hero Image" layout="fill" objectFit="cover" className="z-10" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <h1 className="text-black text-4xl font-bold animate-fadeIn font-serif">Your path to victory</h1>
      </div>
    </div>
  );
}

export default Hero;
