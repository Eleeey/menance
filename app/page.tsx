
import { getUserBal, userBal } from "@/actions/payments";
import Nav from "@/components/shared/Header";


import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from 'next/router';




export default async function  Home() {
  // const router = useRouter();
 const user = await currentUser()

 // if (!user) {
 //      router.push('/sign-in'); // Redirect to sign-in page if no user is found
 //    }
 //
 const id=user?.id
const bal=await userBal(id)
 console.log(bal)

  return (
    <>

    <div className="hidden xl:flex space-around h-[100vh]">
    <p className="text-gray-500">Sorry, Application not available for this device, please switch to a mobile device</p>
    </div>

    <div  className="flex flex-col py-5 xl:hidden">


      <div className="flex flex-col items-center space-around gap-10">
        <div className="w-[70%] p-5 text-white bg-blue-400  rounded-lg space-around flex flex-row gap-3">
          {/* <img src="" alt="" width={20} height={20} /> */}
          <div className="mx-2 rounded flex gap-4 flex-col">
            <h2 className="text-[2rem]">Welcome, <span className="cursor-pointer text-black capitalize underline">{user?.fullName}</span> </h2>
            {user?<p>Monance Member-Level 1</p>:null}
          </div>
        </div>

        <div className=" w-[70%] border rounded-lg bg-gray-50">
          <div className=" flex flex-col w-full h-[15rem] space-around ">
            <h2 className="m-6 text-[1.5rem] font-bold">Balance in USD</h2>

            <p className="text-[5rem]">{user ? `$${bal}.00` : "$0.00"}</p>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <Link href={"/Deposit"} className="flex flex-col space-around w-[7rem] h-[4rem] rounded bg-yellow-300">
            <Image src="/download.svg" alt="" width={24} height={24} />
            <p>Deposit</p>
          </Link>

          <Link href="/Withrawal" className="flex flex-col space-around w-[7rem] h-[4rem] rounded bg-pink-400">
            <Image src="/withraw.svg" alt="" width={24} height={24} />
            <p>Withraw</p>
          </Link>


        </div>

        <div className="flex w-[70%] flex-col mt-7 space-around gap-3">
          <h2 className="text-lg font-bold mb-2">Deposit History</h2>
          <div className=" flex w-full space-around h-[10rem] rounded-lg border">
            <p className="text-gray-500">payment history will appear here, wait a moment.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
