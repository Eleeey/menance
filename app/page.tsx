
import { getUserBal, userBal } from "@/actions/payments";


import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { ChartSpline, Superscript,  Settings, Volume2 } from 'lucide-react';

const navItems = [
  { icon: <ChartSpline className="w-8 h-8 text-cyan-400" />,href:"/investment", label: 'Investment Plans' },
  { icon: <Superscript className="w-8 h-8 text-cyan-400" />,href:"/ranks", label: 'Badges' },
  { icon: <Volume2 className="w-8 h-8 text-cyan-400" />,href:"/referral", label: 'Refferals' },
  { icon: <Settings className="w-8 h-8 text-cyan-400" />,href:"/settings", label: 'Settings' },

];


// import { useRouter } from 'next/router';




export default async function  Home() {
  // const router = useRouter();
 const user = await currentUser()

 // if (!user) {
 //      router.push('/sign-in'); // Redirect to sign-in page if no user is found
 //
 // const id=user?.id
 // console.log(id)
const bal=await userBal()
 console.log(bal)

  return (
    <>


    <div className="hidden xl:flex space-around h-[100vh]">
    <p className="text-gray-500">Sorry, Application not available for this device, please switch to a mobile device</p>
    </div>

    <div className="min-h-screen flex flex-col items-center gap-10 bg-[#111827] text-white p-6 xl:hidden">
      {/* Profile Section */}
      <div className="w-full max-w-md p-5 bg-[#1F2937] rounded-lg flex flex-col items-center gap-2 mt-[3rem]">
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
          <Image src="/user.svg" alt="User" width={40} height={40} />
        </div>
        <h2 className="text-2xl font-semibold">Welcome, {user?.firstName}</h2>
        {user ? <p className="text-gray-400">Member - Level 1</p> : null}
      </div>

      {/* Balance Section */}
      <div className="w-full flex gap-10 h-[20rem] space-around max-w-md bg-[#0E1025] rounded-lg p-6 mt-6 text-center">
        <div className="flex flex-col items-center">
          <Image src="/wallet.svg" alt="Wallet" width={35} height={35} />
          <h2 className="text-xl text-gray-300 mt-2">Balance in USD</h2>
          <p className="text-6xl font-bold mt-2">{user ? `$${bal}.00` : "$0.00"}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex  gap-4 mt-6">
        <Link href={user ? "/Deposit" : "/sign-in"}>
          <button className="w-[8.5rem] space-around flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg">
            <Image src="/download.svg" alt="Deposit" width={20} height={20} />
            Deposit
          </button>
        </Link>


        <Link href={user ? "/Withrawal" : "/sign-in"}>
          <button className="w-[8.5rem] space-around flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg">
            <Image src="/withraw.svg" alt="Withdraw" width={20} height={20} />
            Withdraw
          </button>
        </Link>
      </div>

      {/*nav items*/}

      <div className="bg-[#1d3557] p-6 rounded-xl w-[75%] max-w-2xl mx-auto text-white">
        <h2 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-2">
          ALL NAVIGATIONS
        </h2>
        <div className="grid grid-cols-3 gap-y-8 gap-x-4 text-center">
          {navItems.map((item, index) => (
            <Link href={user ? item.href : '/sign-in'} key={index} className="relative flex flex-col items-center justify-center space-y-2">
              <div className="relative">
                {item.icon}
                <span className="absolute -top-2 -right-2 w-3.5 h-3.5 rounded-full bg-yellow-400 border border-[#1d3557]" />
              </div>
              <span className="text-sm font-medium text-gray-200">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Deposit History */}
      <div className="w-full max-w-md bg-[#1F2937] rounded-lg p-5 mt-6">
        <h2 className="text-lg font-semibold mb-3">Deposit History</h2>
        <div className="w-full h-24 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
          Payment history will appear here, wait a moment.
        </div>
      </div>
    </div>
    </>
  );
}
