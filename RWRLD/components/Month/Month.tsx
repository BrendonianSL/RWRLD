"use client";
import Location from "@/app/_blocks/Location";
import Photo from "@/app/_blocks/Photo";
import { useState, useEffect } from "react";
import type { MonthData } from "@/app/_data/MonthData";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { motion } from 'motion/react';

export default function Month({ ...props }: MonthData) {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

  const toggleModal = (image?: string) => {
    setIsModalActive(true);
    setActiveImage(image);
  };

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalActive]);

  return (
    <>
      <section id="top" className='w-full h-screen text-white relative'>
        <SidebarTrigger className='absolute top-2 right-2 z-10 bg-[#141414] rounded-full px-3 py-2 text-black flex gap-3 items-center lg:hidden'></SidebarTrigger>
        <div className="p-8 flex max-md:flex-col justify-between max-md:items-start items-end w-full lg:h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className='flex items-end relative rounded-lg overflow-hidden w-full aspect-square lg:h-full shadow-[10px_15px_10px_rgba(0,0,0,.5)]'>
            <img
              className="absolute top-0 w-full h-full object-cover object-center"
              src={props.heroImage}
            />
            <div className="z-10 max-md:p-8 p-16 w-full flex max-md:flex-col-reverse justify-between max-md:items-start items-end max-md:gap-8">
              <div className=" max-w-175 w-full z-10">
                <div className='w-full'>
                  <span className="lowercase text-[20px]">{props.quote}</span>
                  <h1 className="font-permanent-marker uppercase max-md:text-6xl text-8xl">{props.month}</h1>
                  <p>{props.description}</p>
                </div>
              </div>
              <Location location={props.location} />
            </div>
            {<div className="w-full bg-linear-to-t from-black via-black/70 to-transparent absolute bottom-0 left-0 h-50 lg:h-125"></div>}
          </motion.div>
        </div>
        <div className='flex flex-col gap-8 max-md:pt-15 lg:items-center justify-center py-8 px-8 fading-grid relative'>
          <div className="flex flex-col max-md:gap-24 gap-32 max-w-250 w-full relative">

            <div className="hidden max-md:flex flex-row-reverse gap-4 absolute top-[-40] right-0 text-black">
              <span className="font-patrick-hand text-[20px]">Click Me!</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 162 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3786 127.592C-4.30431 124.766 0.754714 104.785 0.616902 92.6562C1.24251 78.8862 1.66706 65.0527 2.3933 51.3196C3.63279 42.6266 16.8269 42.4186 18.275 50.9872C18.438 71.1158 16.1595 91.4666 16.3214 111.698C36.6458 107.125 53.8668 93.4591 72.825 85.1265C81.9138 79.9822 89.932 94.2249 80.7277 99.2336C58.81 108.275 36.5975 128.198 12.3786 127.592Z"
                  fill="black"
                />
                <path
                  d="M16.2132 118.912C6.95299 102.707 35.0827 52.2108 43.7406 35.7963C55.8014 10.6566 85.1033 -9.39643 112.618 4.61469C129.357 13.4573 142.813 27.3397 158.603 37.7285C166.773 44.2081 156.685 56.9918 148.539 50.3819C146.581 48.7338 144.532 47.2035 142.466 45.6931C130.063 38.4578 120.392 27.4635 107.958 20.3353C72.8257 2.36586 54.3598 48.715 42.5868 73.8093C37.8816 85.0587 32.9535 96.8539 30.3367 108.73C30.0296 110.018 30.3042 111.162 30.7863 112.368C33.0495 120.826 21.0985 126.172 16.2132 118.912Z"
                  fill="black"
                />
              </svg>
            </div>
            {props.images.map((image, idx) => (
              <Photo
                key={idx}
                flip={idx % 2 === 0 && true}
                setterFunction={toggleModal}
                {...image}
              />
            ))}
          </div>
          <div className=" text-black flex items-center justify-center">
            <small>
              RWRLD Created By Brendan Lewis. View Repository{" "}
              <a href="https://github.com/brendonianl/rwrld">Here</a>
            </small>
          </div>

        </div>
      </section>
      {isModalActive && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-10 flex flex-col items-center justify-center p-8"
          onClick={() => setIsModalActive(false)}
        >
          <img
            className="bg-white p-2 rounded-md border-2 border-slate-300 w-[600px] shadow-5xl overflow-hidden"
            src={activeImage}
          />
        </div>
      )}
    </>
  );
}
