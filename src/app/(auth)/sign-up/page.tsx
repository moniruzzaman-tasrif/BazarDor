"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const [password, setPassword] = useState("");

  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data =Object.fromEntries(formData.entries())as Record<string, string>;

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
   redirect("profile");
    // alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F5F0] py-10 font-bengoli">
      {/* Header Title & Subtitle */}
      <div className="text-center mb-6 space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-xs text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md bg-white border border-gray-100 shadow-sm rounded-3xl p-6 sm:p-8">
        <Form className="w-full space-y-5" onSubmit={onSubmit}>
          <Fieldset className="space-y-4">
            <FieldGroup className="space-y-4">
              {/* Name Field */}
              <TextField
                isRequired
                name="name"
                validate={value => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label className="text-xs  text-gray-700 block mb-1 font-bold">
                  নাম
                </Label>
                <Input
                  placeholder="যেমন: রহিম উদ্দিন"
                  className="w-full border border-gray-200 rounded-xl h-11 bg-white hover:border-gray-300 focus-within:border-emerald-600 shadow-none text-sm text-gray-800 placeholder:text-gray-400"
                />
                <FieldError className="text-xs text-rose-500 mt-1" />
              </TextField>

              {/* Email Field */}
              <TextField isRequired name="email" type="email">
                <Label className="text-xs font-bold text-gray-700 block mb-1">
                  ইমেইল
                </Label>
                <Input
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl h-11 bg-white hover:border-gray-300 focus-within:border-emerald-600 shadow-none text-sm text-gray-800 placeholder:text-gray-400"
                />
                <FieldError className="text-xs text-rose-500 mt-1" />
              </TextField>

              {/* Password Field */}
              <TextField
                isRequired
                name="password"
                type="password"
                value={password}
                onChange={val => setPassword(val)}
                validate={value => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-bold text-gray-700 block mb-1">
                  পাসওয়ার্ড
                </Label>
                <Input
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="w-full border border-gray-200 rounded-xl h-11 bg-white hover:border-gray-300 focus-within:border-emerald-600 shadow-none text-sm text-gray-800 placeholder:text-gray-400"
                />
                <FieldError className="text-xs text-rose-500 mt-1" />
              </TextField>

              {/* Confirm Password Field */}
              <TextField
                isRequired
                name="confirmPassword"
                type="password"
                validate={value => {
                  if (value !== password) {
                    return "Passwords do not match";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-bold text-gray-700 block mb-1">
                  পাসওয়ার্ড নিশ্চিত করুন
                </Label>
                <Input
                  placeholder="আবার লিখুন"
                  className="w-full border border-gray-200 rounded-xl h-11 bg-white hover:border-gray-300 focus-within:border-emerald-600 shadow-none text-sm text-gray-800 placeholder:text-gray-400"
                />
                <FieldError className="text-xs text-rose-500 mt-1" />
              </TextField>
            </FieldGroup>

            {/* Actions / Submit Button */}
            <Fieldset.Actions className="pt-2">
              <Button
                type="submit"
                className="w-full bg-[#00873E] hover:bg-[#007032] text-white font-medium h-11 rounded-xl text-sm shadow-none"
              >
                অ্যাকাউন্ট তৈরি করুন
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="grow border-t border-gray-200"></div>
          <span className="px-3 text-xs text-gray-400 font-normal">অথবা</span>
          <div className="grow border-t border-gray-200"></div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="border-gray-200 rounded-xl h-11 text-xs text-gray-700 font-bold bg-white hover:bg-gray-50 flex items-center justify-center gap-2 shadow-none"
          >
            <FcGoogle className="w-4 h-4" />
            Google দিয়ে চালিয়ে যান
          </Button>

          <Button
            variant="outline"
            className="border-gray-200 rounded-xl h-11 text-xs text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 shadow-none font-bold"
          >
            <FaGithub className="w-4 h-4 text-gray-900 " />
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        {/* Sign In Link */}
        <div className="text-center pt-4">
          <p className="text-xs text-gray-500">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="text-[#00873E] font-medium hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Return Link */}
      <div className="mt-6">
        <Link
          href="/"
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
