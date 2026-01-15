'use client';

import Image from "next/image";
import Month from "@/components/Month/Month";
import { monthData } from "./_data/MonthData";
import { useState } from "react";
import { useMonthStore } from "./_store/MonthStore";
import { activeMonths } from "./_data/activeMonths";
import { AnimatePresence, motion } from 'framer-motion';
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {

  const currentMonth = useMonthStore((state) => state.month);

  return (
    <AnimatePresence mode='wait'>
      {activeMonths[currentMonth].active ? <Month key={monthData[currentMonth].month} {...monthData[currentMonth]} /> : (
        <>
          <SidebarTrigger className='absolute top-2 right-2 z-10 bg-[#141414] rounded-full px-3 py-2 text-black flex gap-3 items-center lg:hidden'></SidebarTrigger>
          <motion.section key={currentMonth} initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }} className='flex flex-col gap-4 items-center justify-center w-full h-screen relative'>
            <span className='text-2xl'>The Month of</span>
            <h2>{currentMonth}</h2>
            <p>is not active just yet! Come back later!</p>
          </motion.section></>
      )}
    </AnimatePresence>
  );


}
