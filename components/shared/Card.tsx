import React from 'react';
import Link from "next/link";


const InvestmentCard = () => {
  return (
    <div className="bg-[#0F2B36] min-h-screen flex flex-col gap-10 space-around justify-center p-4">
      <div className="bg-[#102D3E] text-white rounded-xl shadow-xl p-6 w-full max-w-md border border-pink-500 relative">
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-br from-pink-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          01
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src="/favicon.png" // replace with actual logo path
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Plan Name */}
        <h2 className="text-xl font-semibold text-center">Basic Plan</h2>
        <p className="text-yellow-400 text-center text-sm mb-4">Weekly 60%</p>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Investment</span>
            <span className="bg-green-600 px-2 py-1 rounded-full text-white">$200–$5000</span>
          </div>
          <div className="flex justify-between">
            <span>Capital Back</span>
            <span>Yes</span>
          </div>
          <div className="flex justify-between">
            <span>Return Type</span>
            <span>Period</span>
          </div>
          <div className="flex justify-between">
            <span>Number of Period</span>
            <span>1 Time</span>
          </div>
          <div className="flex justify-between">
            <span>Profit Withdraw</span>
            <span>Anytime</span>
          </div>
          <div className="flex justify-between">
            <span>Cancel</span>
            <span>No</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-yellow-400 text-xs mb-4 text-center">* No Profit Holidays</p>

        {/* Button */}
        <Link href='/Deposit' className="mt-10">
          <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-full font-semibold">
            ✓ INVEST NOW
          </button>
        </Link>
      </div>


      <div className="bg-[#102D3E] text-white rounded-xl shadow-xl p-6 w-full max-w-md border border-pink-500 relative">
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-br from-pink-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          02
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src="/favicon.png" // replace with actual logo path
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Plan Name */}
        <h2 className="text-xl font-semibold text-center">Standard Plan</h2>
        <p className="text-yellow-400 text-center text-sm mb-4">Weekly 65%</p>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Investment</span>
            <span className="bg-green-600 px-2 py-1 rounded-full text-white">$5100–$20000</span>
          </div>
          <div className="flex justify-between">
            <span>Capital Back</span>
            <span>Yes</span>
          </div>
          <div className="flex justify-between">
            <span>Return Type</span>
            <span>Period</span>
          </div>
          <div className="flex justify-between">
            <span>Number of Period</span>
            <span>1 Time</span>
          </div>
          <div className="flex justify-between">
            <span>Profit Withdraw</span>
            <span>Anytime</span>
          </div>
          <div className="flex justify-between">
            <span>Cancel</span>
            <span>No</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-yellow-400 text-xs mb-4 text-center">* No Profit Holidays</p>

        {/* Button */}
        <Link href='/Deposit' className="mt-10">
          <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-full font-semibold">
            ✓ INVEST NOW
          </button>
        </Link>
      </div>
      <div className="bg-[#102D3E] text-white rounded-xl shadow-xl p-6 w-full max-w-md border border-pink-500 relative">
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-br from-pink-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          03
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src="/favicon.png" // replace with actual logo path
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Plan Name */}
        <h2 className="text-xl font-semibold text-center">Master Plan</h2>
        <p className="text-yellow-400 text-center text-sm mb-4">Weekly 75%</p>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Investment</span>
            <span className="bg-green-600 px-2 py-1 rounded-full text-white">$20100–$50000</span>
          </div>
          <div className="flex justify-between">
            <span>Capital Back</span>
            <span>Yes</span>
          </div>
          <div className="flex justify-between">
            <span>Return Type</span>
            <span>Period</span>
          </div>
          <div className="flex justify-between">
            <span>Number of Period</span>
            <span>1 Time</span>
          </div>
          <div className="flex justify-between">
            <span>Profit Withdraw</span>
            <span>Anytime</span>
          </div>
          <div className="flex justify-between">
            <span>Cancel</span>
            <span>No</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-yellow-400 text-xs mb-4 text-center">* No Profit Holidays</p>

        {/* Button */}
        <Link href='/Deposit' className="mt-10">
          <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-full font-semibold">
            ✓ INVEST NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvestmentCard;
