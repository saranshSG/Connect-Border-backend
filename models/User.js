import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    }
});

const User = mongoose.model("User", UserSchema);
export default User;
