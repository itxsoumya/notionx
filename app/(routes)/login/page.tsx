import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

function LoginPage() {
  return (
    <div>
      {/* nav section */}
      <div className="p-5 flex display flex-row items-center gap-3">
        <Image
          className="opacity-70"
          src={"notionlogo.svg"}
          alt="logo"
          height={30}
          width={30}
        />

        <div className="opacity-20 text-2xl">|</div>

        <div className="flex items-center gap-1 opacity-50 text-sm hover:bg-zinc-200 rounded-md p-1 hover:shadow">
          <Globe width={20} />
          English (US)
          <ChevronDown width={20} />
        </div>
      </div>
      {/* main section */}

      <div className="flex flex-col items-center justify-center">
        <div className="border-2x mt-10">
          <div className="font-bold text-xl">Your AI workspace.</div>
          <div className="text-xl font-bold opacity-50">
            Login to your Notion account
          </div>

          <div className="text-sm mt-10 mb-5">
            <div className=" flex items-center border rounded bg-gray-50 hover:bg-gray-100 cursor-pointer mt-1.5 p-2">
              <Image
                src={"https://img.icons8.com/color/48/google-logo.png"}
                alt="google logo"
                width={20}
                height={20}
              />
              <div className="text-center bg-red-300x grow">
                Continue with Google
              </div>
            </div>
            <div className=" flex items-center border rounded bg-gray-50 hover:bg-gray-100 cursor-pointer mt-1.5 p-2">
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                }
                alt="google logo"
                width={20}
                height={20}
              />
              <div className="text-center bg-red-300x grow">
                Continue with Apple
              </div>
            </div>
            <div className=" flex items-center border rounded bg-gray-50 hover:bg-gray-100 cursor-pointer mt-1.5 p-2">
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
                }
                alt="google logo"
                width={20}
                height={20}
              />
              <div className="text-center bg-red-300x grow">
                Continue with Microsoft
              </div>
            </div>
          </div>
<hr />
          <div className="mt-5">
            <label htmlFor="email" className="opacity-50 text-sm">
              Email
            </label>
            <Input className="text-sm" name="email" id="email" placeholder="Enter your email address..."/>
            <div className="text-xs opacity-50 mt-2">
              Use an organization email to easily collaborate with teammates
            </div>
            <Button className="w-full mt-8 rounded">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
