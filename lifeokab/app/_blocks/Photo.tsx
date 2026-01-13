import type { ImageData } from "../_data/MonthData";
import { motion } from "motion/react";

type ComponentProps = {
  flip?: boolean;
  setterFunction: (image: string) => void;
};

export default function Photo({
  flip,
  setterFunction,
  ...props
}: ComponentProps & ImageData) {
  return (
    <div
      className={`flex ${
        flip ? "flex-row-reverse" : "flex-row"
      } max-md:flex-col max-md:gap-8 gap-16 lg:items-center`}
    >
      <motion.figure
        onClick={() => setterFunction(props.src)}
        whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.96 }}
        className="bg-white p-4 rounded-md border-2 border-slate-300 w-full shadow-5xl relative cursor-pointer flex flex-col"
      >
        <img
          className="object-cover aspect-5/3 object-center w-full rounded"
          src={props.src}
          alt="Some image"
        />

        <div className="mt-4 gap-4 flex items-center justify-center w-full text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#141414"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-map-pin-icon lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[20px] block">Brendans Place</span>
        </div>
      </motion.figure>

      <div className="text-black flex flex-col justify-center w-full">
        {props.aside && (
          <div className='flex gap-2 items-center'>
          <img className='w-12.5 h-12.5' src={props.aside.person === 'Brendan' ? '/btransparent.png' : '/ktransparent.png'} />
          <span className="font-patrick-hand">{`${props.aside.quote}  -${props.aside.person}`}</span>
          </div>
        )}
        <h2 className="lowercase">{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
