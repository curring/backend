import dotenv from 'dotenv';

dotenv.config();

export const PORT: string | undefined = process.env.PORT;
export const MONGOOSE: string | undefined = process.env.DB_URL;
export const OPTIONS = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};
export const API: string = '/api/v1/';
