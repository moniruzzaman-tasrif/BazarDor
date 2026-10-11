"use client";

import Logo from "@/assest/logo-icon.png";
import { signOut, useSession } from "@/lib/auth-client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaChevronDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import NavLinkPage from "./NavLink";

const date = new Date().toLocaleDateString("bn-BD", {
  day: "numeric",
  weekday: "long",
  month: "long",
  year: "numeric",
});

const NavBarPage = () => {
  const { data: session, isPending } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (isPending) {
    return (
      <div className="">
        <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse" />
            <div className="flex flex-col gap-1.5">
              <div className="w-24 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="w-36 h-3 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-3 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full animate-pulse">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="w-28 h-4 bg-gray-200 rounded hidden sm:block" />
          </div>
        </div>
      </div>
    );
  }

  const handelSignout = async () => {
    await signOut();
    redirect("sign-in");
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#FAFCFA] border border-gray-300">
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 justify-between">
          {/* Logo & Branding */}
          <div className="navbar-start gap-3 sm:gap-4 w-auto">
            <Link className="flex items-center gap-3" href="/">
              <div className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-[10px] shrink-0">
                <Image src={Logo} alt="Logo" className="w-5 rounded-2xl" />
              </div>
              <div className="flex items-start flex-col">
                <p className="text-lg sm:text-xl font-bold leading-tight">
                  বাজার দর
                </p>
                <span className="text-[0.7rem] sm:text-[0.8rem] text-gray-500 whitespace-nowrap">
                  {date}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop & General Actions Navbar End */}
          <div className="navbar-end gap-2 sm:gap-4 w-auto">
            {session?.user ? (
              <div className="flex items-center justify-end font-bengoli">
                <div className="dropdown dropdown-end">
                  {/* Profile Trigger Button */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 py-1.5 px-2.5 sm:px-3 rounded-full shadow-sm transition-all"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <Image
                        src={
                          session?.user.image ??
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                        }
                        alt="Profile"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800 max-w-[100px] sm:max-w-xs truncate">
                      {session?.user.name}
                    </span>
                    <FaChevronDown className="w-3 h-3 text-gray-500 shrink-0" />
                  </div>

                  {/* Dropdown Menu Box */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-3 shadow-xl bg-white rounded-3xl w-64 sm:w-72 mt-2 border border-gray-100 space-y-1"
                  >
                    {/* User Info Header inside Dropdown */}
                    <li className="px-3 py-2 border-b border-gray-100 pointer-events-none">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {session?.user.name}
                      </p>
                      <p className="text-xs text-gray-500 font-normal truncate">
                        {session?.user.email}
                      </p>
                    </li>

                    {/* Profile Link */}
                    <li>
                      <Link
                        href="/profile"
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors"
                      >
                        <FaUser className="text-gray-600" />
                        আমার প্রোফাইল
                      </Link>
                    </li>

                    {/* Sign Out Link */}
                    <li>
                      <button
                        onClick={handelSignout}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-rose-600 hover:bg-rose-50 rounded-xl font-medium transition-colors text-left"
                      >
                        <FiLogOut className="w-4 h-4 text-rose-500" />
                        সাইন আউট
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/sign-in"
                  className="btn btn-sm sm:btn-md font-normal text-xs sm:text-sm"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/sign-up"
                  className="btn btn-sm sm:btn-md bg-[#05893E] hover:bg-[#047234] border-none text-white text-xs sm:text-sm"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPage;
