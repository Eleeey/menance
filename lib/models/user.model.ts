import { Schema, model, models,Document } from "mongoose";


export interface IUser extends Document {
  clerkId: string;
  Balance: number;
 
}

const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  Balance: { type: Number, required: true },
  
});

const Payment = models.Payment || model("Payment", userSchema);

export default Payment
