
import React from 'react';
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server"

const SettingsForm = async() => {
  const user= await currentUser()
  return (
    <div className="bg-[#0F2B36] min-h-screen flex flex-col items-center justify-center p-4">
      <form  className="bg-[#102D3E] text-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-4">
        {/* First Name */}
        <div>
          <label className="block mb-1 text-sm">First Name</label>
          <input
            type="text"
            defaultValue={user?.firstName}
            className="w-full px-3 py-2 rounded-md bg-[#0F2B36] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 text-sm">Last Name</label>
          <input
            type="text"
            defaultValue={user?.lastName}
            className="w-full px-3 py-2 rounded-md bg-[#0F2B36] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 text-sm">User Name</label>
          <input
            type="text"
            defaultValue={`${user?.firstName}${user?.lastName}`}
            className="w-full px-3 py-2 rounded-md bg-[#0F2B36] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}


        {/* Date of Birth */}
        <div>
          <label className="block mb-1 text-sm">Date of Birth</label>
          <input
            type="date"
            className="w-full px-3 py-2 rounded-md bg-[#0F2B36] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block mb-1 text-sm">Email Address</label>
          <input
            type="email"
            defaultValue={user?.Email}
            disabled
            className="w-full px-3 py-2 rounded-md bg-[#0F2B36] border border-gray-500 text-gray-400 cursor-not-allowed"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm">Phone</label>
          <input
            type="tel"
            defaultValue=""
            className="w-full px-3 py-2 rounded-md bg-[#0F2B36] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button
          disabled
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 w-full rounded-lg flex items-center justify-center space-x-2"
        >

          Save Changes
        </Button>
      </form>

      <div className="space-y-6 bg-[#0E2A36] w-[90%] p-6 rounded-lg max-w-md mx-auto text-white">
  {/* 2FA Security */}
  <div className="border border-[#1f3a4a]  rounded-lg p-4">
    <h3 className="text-lg font-semibold mb-4">2FA Security</h3>
    <Button
      disabled
      className="bg-[#EF476F] text-white px-6 py-3 rounded-full text-sm font-semibold w-full opacity-50 cursor-not-allowed"
    >
      OBTAIN KEY FOR 2FA
    </Button>
  </div>

  {/* KYC */}
  <div className="border border-[#1f3a4a] rounded-lg p-4">
    <h3 className="text-lg font-semibold mb-4">KYC</h3>
    <Button
      disabled
      className="bg-[#EF476F] text-white px-6 py-3 rounded-full text-sm font-semibold w-full opacity-50 cursor-not-allowed"
    >
      UPLOAD KYC
    </Button>
  </div>

  {/* Change Password */}
  <div className="border border-[#1f3a4a] rounded-lg p-4">
    <h3 className="text-lg font-semibold mb-4">Change Password</h3>
    <Button
      disabled
      className="bg-[#EF476F] text-white px-6 py-3 rounded-full text-sm font-semibold w-full opacity-50 cursor-not-allowed"
    >
      CHANGE PASSWORD
    </Button>
  </div>
</div>
    </div>
  );
};

export default SettingsForm;
