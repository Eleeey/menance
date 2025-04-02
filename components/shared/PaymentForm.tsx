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

const [price, setPrice] = useState();
const handleSubmit = async(e) => {

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
    <form onSubmit={handleSubmit} className="flex flex-col  gap-10 w-[70vw] h-[10rem] mt-[1rem] p-4  rounded-lg ">
      <label className="block font-bold mb-2 text-gray-700">Price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full p-2 border rounded"
        required
      />
      <WalletAddresses/>
      <Link href="/">
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          I have Made Payment Of {`$${price}`}
        </button>
      </Link>

    </form>
  );
};






export default PaymentForm;
