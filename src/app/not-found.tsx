import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F5F0] px-4 font-bengoli text-center">
      <div className="max-w-md w-full bg-white border border-gray-100 shadow-sm rounded-3xl p-8 space-y-6">
        {/* Icon / Illustration */}
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-inner">
          <FaExclamationTriangle />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            পৃষ্ঠাটি পাওয়া যায়নি
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা খুঁজে পাওয়া যায়নি। অনুগ্রহ করে
            সঠিক ইউআরএল (URL) চেক করুন অথবা হোম পেজে ফিরে যান।
          </p>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-[#00873E] hover:bg-[#007032] text-white font-medium h-11 rounded-xl text-sm shadow-none transition-colors"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
