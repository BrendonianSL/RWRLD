'use client';

import Image from "next/image";
import Month from "@/components/Month/Month";
import { monthData } from "./_data/MonthData";
import { useState } from "react";
import { useMonthStore } from "./_store/MonthStore";
import { activeMonths } from "./_data/activeMonths";

export default function Home() {

  const currentMonth = useMonthStore((state) => state.month);

  if(activeMonths[currentMonth].active) {
      return (
      <Month key={monthData[currentMonth].month} {...monthData[currentMonth]} />
    );
  } else {
    return (
      <section className='flex flex-col gap-4 items-center justify-center w-full h-screen relative'>
          <img src='/empty.png' className='z-[-1] absolute top-0 left-0 w-full h-full object-cover object-center' alt='Busy Japanese Street' />
          <span className='text-2xl'>The Month of</span>
          <h1>{currentMonth}</h1>
          <p>is not active just yet! Come back later!</p>
      </section>
    )
  }
  
}
