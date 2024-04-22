import { Client, Environment } from "square"
import { SQUARE_ACCESS_TOKEN } from "./constants"

export const squareClient = new Client({
    bearerAuthCredentials: {
      accessToken: SQUARE_ACCESS_TOKEN
    },
  environment: Environment.Sandbox,
});