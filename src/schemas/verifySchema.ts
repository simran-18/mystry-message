import {z} from "zod";

export const verifySchemsa = z.object({
    code: z.string().length(6, { message: "Verification code must be exactly 6 characters long" }),
});