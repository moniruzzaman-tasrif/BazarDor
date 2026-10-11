import BanarPage from "@/component/banar";
import UpDownPage from "@/component/home/PriceUp";
import { Suspense } from "react";



export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#F0F5F0] py-8 px-4 sm:px-6 font-bengoli animate-pulse">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Hero Section Skeleton */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="space-y-4 w-full md:w-2/3">
                  <div className="w-32 h-6 bg-gray-200 rounded-full" />
                  <div className="w-3/4 h-8 bg-gray-200 rounded-xl" />
                  <div className="w-full h-4 bg-gray-200 rounded-lg" />
                  <div className="w-36 h-11 bg-gray-200 rounded-xl mt-2" />
                </div>
                <div className="w-48 h-48 bg-gray-200 rounded-2xl shrink-0 hidden md:block" />
              </div>

              {/* Section Title Skeleton */}
              <div className="space-y-3">
                <div className="w-48 h-6 bg-gray-200 rounded-lg" />

                {/* Cards Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map(item => (
                    <div
                      key={item}
                      className="bg-white border border-gray-100 rounded-2xl p-6 space-y-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                        <div className="space-y-2">
                          <div className="w-24 h-5 bg-gray-200 rounded" />
                          <div className="w-16 h-3 bg-gray-200 rounded" />
                        </div>
                      </div>
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <div className="w-20 h-3 bg-gray-200 rounded" />
                        <div className="w-28 h-6 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      >
        <BanarPage></BanarPage>
        <UpDownPage></UpDownPage>
      </Suspense>
    </div>
  );
}
