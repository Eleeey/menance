"use client"
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import WalletAddresses from "@/components/shared/Wallets"
// import { currentUser } from "@clerk/nextjs/";
import { createUser, getUserBal, getId } from "@/actions/payments";


const PaymentForm = () => {

const [price, setPrice] = useState<number>(0);
const handleSubmit = async(e:any) => {

      e.preventDefault();
      try{
        const id = await getId()
        // console.log(id)

        const data={
          clerkId:id,
          Balance:price
        }
        console.log(typeof price)
        // console.log(data)
        // await createUser(data)
        console.log("created")
        await getUserBal(id,price)
        console.log("updated")
      }catch(error){
        console.error("Error fetching ID:", error)
      }
  };



  return (

    <form onSubmit={handleSubmit} className=" z-100 relative flex-col  gap-10 w-[70vw] h-[10rem] mt-[1rem] p-4  rounded-lg space-around ">

    <label className="block font-bold mb-10 text-gray-700">How much Are you Depositing:</label>
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(Number(e.target.value))}
      className="w-full p-2 border rounded "
      required
    />
    <WalletAddresses/>



    </form>
  );
};






export default PaymentForm;
