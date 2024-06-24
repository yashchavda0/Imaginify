/* import { Schema, model, models } from "mongoose";

export interface UUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planId?: number;
  creditBalance?: number;
}

const UserSchema = new Schema({
  clerkId: { type: String,  unique: true },
  email: { type: String,  unique: true },
  username: { type: String,  unique: true },
  photo: { type: String, 
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
 */
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    
    unique: true,
  },
  email: {
    type: String,
    
    unique: true,
  },
  username: {
    type: String,
    
    
  },
  photo: {
    type: String,
    
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
