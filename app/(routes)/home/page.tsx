"use client"
import React from 'react'
import SideBar from './_components/SideBar'
import { Ellipsis, Menu, Share, Star } from 'lucide-react'

function HomePage() {
  return (
    <div className="flex h-screen">
      <SideBar/>
      <div className="grow" >
        <div className='p-2 border-b-2 gap-3 flex items-center'>
            <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                <Menu className='hover:bg-gray-200x ' />
            </div>
            <div className='grow'>Title to the topic</div>
            <div>Share</div>
            <Star/>
            <Ellipsis/>

           
        </div>
        <div className='p-5 overflow-y-scroll h-[calc(100vh-64px)]'>
            haha
        </div>
      </div>
    </div>
  )
}

export default HomePage
