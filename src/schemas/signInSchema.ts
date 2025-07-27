import {z} from "zod";

export const signInSchemsa = z.object({
    username: z.string(),
    password: z.string(),
});