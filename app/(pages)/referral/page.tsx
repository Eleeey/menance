"use client"
import React from 'react';
import { ClipboardCopy, Network } from 'lucide-react';

const ReferralDashboard = () => {
  const referralUrl = 'https://securemonance.com/us-en/';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralUrl);
    alert('Referral URL copied!');
  };

  return (
    <div className="bg-[#0F2B36] min-h-screen text-white p-4 space-y-6">
      {/* Identity Verification Banner */}
      <div className="bg-[#0F2B36] p-3 border-b border-gray-700 flex items-center justify-center text-sm">
        <span>Please Verify Your Identity </span>
        <a href="#" className="text-pink-400 ml-1 underline">Submit Now</a>
      </div>

      {/* Referral URL Section */}
      <div className="bg-[#102D3E] rounded-lg p-4 space-y-4 shadow-md">
        <h2 className="text-lg font-semibold">Referral URL and Tree</h2>

        <div className="bg-[#0F2B36] border border-gray-500 rounded-md px-4 py-3 text-lg font-medium break-all">
          {referralUrl}
        </div>

        <button
          onClick={copyToClipboard}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 w-full rounded-lg flex items-center justify-center space-x-2"
        >
          <ClipboardCopy className="w-4 h-4" />
          <span>Copy Url</span>
        </button>

        <p className="text-sm text-gray-300">0 people are joined by using this URL</p>
      </div>

      {/* Referral Logs Section */}
      <div className="bg-[#102D3E] rounded-lg p-4 shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">All Referral Logs</h2>
          <div className="bg-pink-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            REFERRAL PROFIT: 0 USD
          </div>
        </div>

        {/* General Tree Button */}
        <div className="bg-[#0F2B36] rounded-lg p-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2">
            <Network className="w-4 h-4" />
            <span>General</span>
          </button>
        </div>

        {/* Placeholder for referral log list */}
        <div className="h-4 bg-gray-700 rounded-full w-full animate-pulse" />
      </div>
    </div>
  );
};

export default ReferralDashboard;
