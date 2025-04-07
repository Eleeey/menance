import React from 'react';
import BadgeCard from "@/components/shared/ranks"

const badges = [
   {
     image: '/bronze.png', // 👈 replace with your actual path
     title: 'Monance Member',
     description: 'By signing up to the account',
     locked: false,
   },
   {
     image: '/silver.png', // 👈 replace with your actual path
     title: 'Monance Leader',
     description: 'By earning $100 from the site',
     locked: true,
   },
   {
     image: '/Gold.png', // 👈 replace with your actual path
     title: 'Monance Veteran',
     description: 'By earning $300 from the site',
     locked: true,
   }
 ];
const Badges = () => {
  return (
    <div className="bg-[#00202c] min-h-screen text-white p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">All Badges</h1>
      <div className="flex flex-col items-center space-y-10">
        {badges.map((badge, i) => (
          <BadgeCard key={i} {...badge} />
        ))}
      </div>
    </div>
  );
};

export default Badges;
