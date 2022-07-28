import mongoose, { Schema, Document, Types } from "mongoose";
import bcrypt from "bcryptjs";

export interface User {
  username: string;
  displayName?: string;
  birthday?: string;
  email: string;
  password: string;
}

export interface UserDocument extends User, Document {
  hashPassword(password: string): Promise<string>;
}

// TODO: For some reason, I can't pass User interface to generic Schema type
// we should verify why and fix it
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 12,
  },
  displayName: {
    type: String,
    maxLength: 30,
    required: false,
  },
  birthday: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 64,
    minlength: [8, "Password must be more than 8 characters"],
    select: false,
  },
});

UserSchema.pre<UserDocument>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hashedPassword = await this.hashPassword(this.password);
    this.password = hashedPassword;
  }

  return next();
});

UserSchema.methods = {
  hashPassword: async function (password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  },
};

export const UserModel = mongoose.model<UserDocument>("User", UserSchema);
