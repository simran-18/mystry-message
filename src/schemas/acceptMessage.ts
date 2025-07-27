import {z} from "zod";

export const acceptMessageSchemsa = z.object({
    acceptMessages: z.boolean()
});