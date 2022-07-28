import dotenv from "dotenv";

dotenv.config();

export const { MONGO_URI, PORT, JWT_SECRET } = process.env;
