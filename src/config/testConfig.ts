import dotenv from "dotenv";

dotenv.config();

const fallbackBaseUrl = "https://www.saucedemo.com/";

export const testConfig = {
  baseUrl: process.env.BASE_URL ?? fallbackBaseUrl,
  credentials: {
    standardUser: {
      username: process.env.STANDARD_USER ?? "standard_user",
      password: process.env.SAUCE_PASSWORD ?? "secret_sauce"
    },
    lockedOutUser: {
      username: process.env.LOCKED_OUT_USER ?? "locked_out_user",
      password: process.env.SAUCE_PASSWORD ?? "secret_sauce"
    }
  }
} as const;
