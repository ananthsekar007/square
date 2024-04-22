import jwt from "jsonwebtoken";
import { JWT_SECRET_TOKEN } from "./constants";

export const jwtSign = (claims: string | object | Buffer): string => {
    const token = jwt.sign(claims, JWT_SECRET_TOKEN);
    return token;
}

export const jwtVerify = (token: string): boolean => {
    const verified = jwt.verify(token, JWT_SECRET_TOKEN);
    if(!verified) return false;
    return true;
}