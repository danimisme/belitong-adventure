"use client";

import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

interface Props {
  included: string[];
  notIncluded: string[];
}

export default function IncludedSection({ included, notIncluded }: Props) {
  const [showIncluded, setShowIncluded] = useState(true);
  return (
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 mb-8">
      <h2 className="text-base md:text-lg font-medium mb-4 md:mb-6 lg:mb-8">What&apos;s Included</h2>
      
      <div className="grid grid-cols-2 p-1 bg-gray-200 rounded-full mb-6">
        <button
          className={`py-[2px] md:py-1 font-semibold text-sm md:text-base rounded-full ${
            showIncluded ? "bg-[#F9FAFB]" : "text-gray-500"
          }`}
          onClick={() => setShowIncluded(true)}
        >
          Included
        </button>
        <button
          className={`py-[2px] md:py-1 font-semibold text-sm md:text-base rounded-full ${
            !showIncluded ? "bg-[#F9FAFB]" : "text-gray-500"
          }`}
          onClick={() => setShowIncluded(false)}
        >
          Not Included
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Included */}
        {included && showIncluded && (
            <ul className="space-y-2">
              {included.map((item, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base flex items-center gap-2"
                >
                  <IoMdCheckmark className="text-primary"/>
                  {item}
                </li>
              ))}
            </ul>
        )}

        {/* Not Included */}
        {notIncluded && !showIncluded && (
            <ul className="space-y-2">
              {notIncluded.map((item, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base flex items-center gap-2"
                >
                  <RxCross2 className="text-red-600" />

                  {item}
                </li>
              ))}
            </ul>
        )}
      </div>
    </div>
  );
}
