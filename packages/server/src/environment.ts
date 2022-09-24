import dotenv from 'dotenv'
import { Secret } from 'jsonwebtoken'

dotenv.config()

const { MONGO_URI, PORT, JWT_SECRET, NODE_ENV } = process.env

export const config = {
  PORT: PORT || 3000,
  MONGO_URI,
  JWT_SECRET,
  NODE_ENV,
}
