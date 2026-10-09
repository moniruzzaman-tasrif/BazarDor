"use client"

import Logo from "@/assest/logo-icon.png"
import Image from 'next/image';
import Link from "next/link";

  const date = new Date().toLocaleDateString("bn-BD", {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
  });
const NavBarPage =  () => {


  return (
    <div>
      <div className="bg-[#FAFCFA] border border-gray-300 ">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start gap-4">
            <Link className="navbar-start gap-4" href="/">
              <div className=" bg-green-600 w-10 h-10 flex items-center justify-center rounded-[10px]">
                <Image
                  src={Logo}
                  alt="Logo"
                  className=" w-5  rounded-2xl"
                ></Image>
              </div>
              <div className="flex items-start flex-col">
                <p className=" btn-ghost text-xl font-bold">বাজার দর</p>
                <span className="text-[0.8rem]">{date}</span>
              </div>
            </Link>
          </div>

          <div className="navbar-end gap-4 ">
            <Link href="/" className="btn">
              সাইন ইন
            </Link>
            <Link href="/" className="btn bg-[#05893E] text-white">
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPage;
