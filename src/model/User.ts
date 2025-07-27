import mongoose , {Schema,Document} from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date
}
const MessageSchema = new Schema<Message>({
   content:{
    type:String,
    required: true
   },
   createdAt: {
    type: Date,
    default: Date.now,
    required: true
   }
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    veirfyCode: string;
    veirfyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage:boolean;
    messages: Message[];
}
const UserSchema = new Schema<User>({
   username:{
    type:String,
    required: [true,"Username is required"],
    trim: true,
    unique: true
   },
   email:{
    type:String,
    required: [true,"Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Email is not valid"],
   },
   password: {
    type: String,
     required: [true,"Password is required"],
   },
   veirfyCode: {
    type: String,
    required: [true,"Verification code is required"],
   },
   veirfyCodeExpiry: {
    type: Date,
    required: [true,"Verification code expiry is required"],
   },
   isVerified: {
    type: Boolean,
    default: false,
   },
   isAcceptingMessage: {
    type: Boolean,
    default: true,
   },
   messages: [MessageSchema] 
});
const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));
export default UserModel;