"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function ProfilePage() {
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: resData, error } = await updateUser({
      image: "",
      name: typeof data.name === "string" ? data.name : undefined,
    });
  };

  const { data: session } = useSession();
  // console.log(session);

  const handleSignOut = async () => {
    await signOut();
    redirect("sign-in");
  };

  return (
    <div className="min-h-screen bg-[#F0F5F0] py-12 px-4 sm:px-6 font-bengoli flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
          <p className="text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Card */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                  alt="Profile"
                  className="object-cover w-full h-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">
                {session?.user.name}
              </h2>
              <p className="text-xs text-gray-500">{session?.user.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="btn btn-sm btn-outline border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 rounded-xl font-normal gap-1.5 normal-case"
          >
            <FiLogOut className="w-3.5 h-3.5" />
            সাইন আউট
          </button>
        </div>

        {/* Update Form Card */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-base font-bold text-gray-900">তথ্য</h3>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-700 block">
                নাম
              </label>
              <input
                name="name"
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="input input-bordered w-full h-11 rounded-xl bg-white border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-[#00873E] hover:bg-[#007032] text-white font-medium h-11 rounded-xl text-sm border-none shadow-none normal-case"
            >
              আপডেট
            </button>
          </form>
        </div>

        {/* Footer Return Link */}
        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
