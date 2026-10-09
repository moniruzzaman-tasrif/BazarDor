import Link from 'next/link';
import React from 'react';
import BanarImage from "@/assest/bazar-hero.png"
import Image from 'next/image';
  const date = new Date().toLocaleDateString("bn-BD", {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
  });

const BanarPage = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 py-10 font-bengoli">
        <div className="card bg-base-100 border border-base-200 shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          {/* Left Content Section */}
          <div className="flex flex-col items-start gap-3 flex-1">
            {/* Date Badge */}
            <div className="badge bg-emerald-50 text-emerald-600 border-none font-medium px-3 py-2 text-xs sm:text-sm">
              {date}
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              আজকের বাজারের দাম এক নজরে
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন, সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* Action Button */}
            <div className="card-actions mt-2">
              <Link
                href="/all-market"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white font-medium border-none px-6 shadow-md"
              >
                সব পণ্য দেখুন
              </Link>
            </div>
          </div>

          {/* Right Illustration Section (Basket with Fruits/Veg) */}
          <div className="flex justify-center items-center shrink-0 w-full md:w-auto">
            <div className="relative w-48 h-44 sm:w-56 sm:h-54 flex items-center justify-center bg-gray-50/50 rounded-2xl">
            <Image src={BanarImage} alt="banar" height={500} width={500}></Image>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanarPage;
