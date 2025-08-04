"use client";
import { jageLautData } from "@/data/adventure-packages/jageLaut";
import PackageCard from "../Cards/PackageCard";
import Toggle from "../Input/Toggle";
import { useState } from "react";
import { jageBumiData } from "@/data/adventure-packages/jageBumi";
import "./Packages.css"; 

export default function Packages() {
  const [isJageLautVisible, setIsJageLautVisible] = useState(true);
  return (
    <div className="packages-section md:h-[100vh]">
      <div className="container flex flex-col items-center justify-center md:text-center mt-24">
        <h2 className="text-2xl font-extrabold lg:mb-6 mb-4">
          Featured Advanture Packages
        </h2>
        <p className="max-w-xl text-gray-500 md:font-bold">
          Explore our most popular boat voyages around Belitong Island. Each
          package offers a unique experience of the island&#39;s natural beauty.
        </p>
      </div>
      <div className="container mx-auto flex gap-4 justify-center mt-4 md:py-4 py-2 md:mt-8">
        <div className={`jage font-semibold ${isJageLautVisible ? 'text-gray-500' : 'active  text-primary'}`} onClick={() => setIsJageLautVisible(false)}>Jage Bumi</div>
        <Toggle label="Jage Laut" checked={isJageLautVisible} value={isJageLautVisible ? "jageLaut" : "jageBumi"} onChange={() => setIsJageLautVisible(!isJageLautVisible)} />
        <div className={`jage font-semibold ${isJageLautVisible ? 'active  text-primary' : 'text-gray-500'}`} onClick={() => setIsJageLautVisible(true)}>Jage Laut</div>
      </div>
      <div className="overflow-hidden">
        <div 
          className="md:mt-8 flex transition-transform duration-500 ease-in-out py-8"
          style={{ 
            transform: `translateX(${isJageLautVisible ? '-100vw' : '0'})`,
            width: '200vw'
          }}
        >
          <div className="jage-bumi w-[100vw] container mx-auto flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 lg:gap-32 px-4 justify-items-center">
            {jageBumiData.map((packageItem) => (
              <PackageCard
                key={packageItem.id}
                {...packageItem}
                link={`#`}
              />
            ))}
          </div>
          </div>
          <div className="jage-laut w-[100vw] container mx-auto flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 lg:gap-32 px-4 justify-items-center">
            {jageLautData.map((packageItem) => (
              <PackageCard
                key={packageItem.id}
                {...packageItem}
                link={`#`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
