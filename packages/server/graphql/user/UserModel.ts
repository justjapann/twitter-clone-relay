import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface User {
  username: string;
  displayName?: string;
  birthday: string;
  email: string;
  password: string;
}

export interface UserInterface extends User, Document {
  hashPassword(password: string): Promise<string>;
  comparePasswords(
    candidatePassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

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
  },
  birthday: {
    type: String,
    required: true,
    // TODO: add validation
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

UserSchema.index({ email: 1 });

UserSchema.pre<UserInterface>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hashedPassword = await this.hashPassword(this.password);
    this.password = hashedPassword;
  }

  return next();
});

UserSchema.methods = {
  hashPassword: async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  },

  comparePasswords: async (
    candidatePassword: string,
    hashedPassword: string
  ) => {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  },
};

export const UserModel = mongoose.model<UserInterface>("User", UserSchema);