import BanarPage from "@/component/banar";
import UpDownPage from "@/component/home/PriceUp";
import { Suspense } from "react";



export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Suspense
        fallback={
          <div className="py-2 text-center text-gray-400">লোডিং...</div>
        }
      >
        <BanarPage></BanarPage>
        <UpDownPage></UpDownPage>
      </Suspense>
    </div>
  );
}
