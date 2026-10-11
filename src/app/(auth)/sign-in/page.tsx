"use client";

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
import { signIn } from "@/lib/auth-client";
import { Bounce, toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())as Record<string, string>;

const { data: resData, error } = await signIn.email({
  email: data.email,
  password: data.password,
  rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
  callbackURL:"/profile",
});
if (error?.message){
  toast.error(error?.message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
}else{
    toast.success("submitted successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
}
console.log(data);
console.log(resData, error);
  };

const google= async()=>{
   await signIn.social({
     provider: "google",

   });

       toast.success("google sign in successfully!", {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         theme: "light",
         transition: Bounce,
       });
}
const github= async()=>{
   await signIn.social({
     provider: "github",
   });
        toast.success("github sign in successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F5F0] py-10 font-bengoli">
      {/* Header Title & Subtitle */}
      <div className="text-center mb-6 space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">সাইন ইন</h1>
        <p className="text-xs text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md bg-white border border-gray-100 shadow-sm rounded-3xl p-6 sm:p-8">
        <Form className="w-full space-y-5" onSubmit={onSubmit}>
          <Fieldset className="space-y-4">
            <FieldGroup className="space-y-4">
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
              <TextField isRequired name="password" type="password">
                <Label className="text-xs font-bold text-gray-700 block mb-1">
                  পাসওয়ার্ড
                </Label>
                <Input
                  placeholder="কমপক্ষে ৮ অক্ষর"
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
                সাইন ইন
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
            onClick={google}
            variant="outline"
            className="border-gray-200 rounded-xl h-11 text-xs text-gray-700 font-bold bg-white hover:bg-gray-50 flex items-center justify-center gap-2 shadow-none"
          >
            <FcGoogle className="w-4 h-4" />
            Google দিয়ে চালিয়ে যান
          </Button>

          <Button
            variant="outline"
            onClick={github}
            className="border-gray-200 rounded-xl h-11 text-xs text-gray-700 font-bold bg-white hover:bg-gray-50 flex items-center justify-center gap-2 shadow-none"
          >
            <FaGithub className="w-4 h-4 text-gray-900" />
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center pt-4">
          <p className="text-xs text-gray-500">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="text-[#00873E] font-medium hover:underline"
            >
              সাইন আপ করুন
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
