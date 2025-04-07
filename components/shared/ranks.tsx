import React from 'react';
import Image from "next/image";


type Props={
  image:any,
  title:any,
  description:any,
  locked:boolean
}
const BadgeCard = ({ image, title, description, locked }:Props) => {
  return (
    <div
     className={`relative w-72 h-72 rounded-full flex flex-col items-center justify-center
       transition-transform duration-300 ${
         locked
           ? 'bg-[#1c2a34] opacity-40 cursor-not-allowed'
           : 'bg-[#1c2a34] hover:scale-105 hover:shadow-2xl cursor-pointer'
       }`}
   >
     <Image
       src={image}
       alt={title}
       className="w-24 h-24 object-contain mb-4"
       width={32}
       height={32}
     />
     <h2 className="text-white font-semibold text-xl text-center">{title}</h2>
     <p className="text-gray-300 text-center w-52 mt-2">{description}</p>
   </div>
  );
};



export default BadgeCard;
