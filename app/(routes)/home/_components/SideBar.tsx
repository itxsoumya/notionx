"use client"
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronLeft, ChevronsLeft, FilePlus, HomeIcon, InboxIcon, Plus, Search } from "lucide-react";
function SideBar() {
    const [sidebar,setSidebar] = useState(true)
  return (
    <div className="bg-slate-100 w-72 border-r-2 p-2" hidden={!sidebar}>
      <div className="flex gap-2 items-center mb-5  p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
        <Avatar className="rounded-sm w-6 h-6" >
          <AvatarImage  src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grow">username</div>
        <ChevronsLeft className="opacity-70 hover:bg-gray-300 rounded-full"/>
        <Plus className="opacity-70 hover:bg-gray-300 rounded-full"/>
        <ChevronDown className="opacity-70 hover:bg-gray-300 rounded-full"/>
      </div>

      <div>
        <div className="flex gap-2 items-center   p-2 hover:bg-gray-200 rounded-xl cursor-pointer opacity-70">
            <Search/>
            <div>Search</div>
        </div>
        <div className="flex gap-2 items-center   p-2 hover:bg-gray-200 rounded-xl cursor-pointer opacity-70">
            <HomeIcon/>
            <div>Home</div>
        </div>
        <div className="flex gap-2 items-center   p-2 hover:bg-gray-200 rounded-xl cursor-pointer opacity-70">
            <InboxIcon/>
            <div>Inbox</div>
        </div>
        

      </div>
    </div>
  );
}

export default SideBar;
