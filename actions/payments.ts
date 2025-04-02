"use server"
import { connectToDatabase } from "@/lib";
import Payment from "@/lib/models/user.model";
import { currentUser } from "@clerk/nextjs/server";

type CreateUserParams = {
  clerkId: string;
  Balance: number;
}

type UpdateUserParams = {
  Balance: any
}



export async function addBalance(ammount: number, bal: number) {
  var totalBal = ammount + bal;
  return totalBal;
}



export async function getId(){

    const user = await currentUser();
    // console.log(user)
    return user?.id
}


export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    const id = await getId();
    console.log(id)
    const existingUser=await Payment.findOne({clerkId:id})

    if(!id){
      const newUser = await Payment.create(user);
      console.log(newUser)
      return JSON.parse(JSON.stringify(newUser));
    }

  } catch (error) {
console.log(error);
  }
}


export async function getUserBal(id:any,ammount:any) {
  try {
     await connectToDatabase()
     console.log("Connected to DB");
     // const id=await getId()
     // console.log(id)
    const user = await Payment.findOne({clerkId:id});
    console.log(user)
    const userBal = user.Balance;
    console.log(typeof userBal)


    const totalBal= userBal + ammount
    console.log(totalBal)

    // return JSON.parse(JSON.stringify(totalBal))

    user.Balance = totalBal;
    await user.save();  // Save the updated user object back to the DB

    console.log("Balance updated in DB");


  } catch (error) {
    console.log(error);
  }
}
export async function userBal(id:any,) {
  try {
     await connectToDatabase()
     console.log("Connected to DB");

    const user = await Payment.findOne({clerkId:id});
    console.log(user)
    const userBal = user.Balance;
    console.log(typeof userBal)

return userBal
  } catch (error) {
    console.log(error);
  }
}


export async function updateBal(clerkId: string, bal:any) {
  try {
    await connectToDatabase();

    const updatedUser = await Payment.findOneAndUpdate({ clerkId:id }, bal, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}


export const onCreatePayment= async(ammount:number)=>{
  try {
    const id=await getId()
     const data={
       clerkId:id,
       Balance:ammount
     }
    await createUser(data);
    await getUserBal(id,ammount)
  } catch (error) {
    consloe.log(error)
  }

}
