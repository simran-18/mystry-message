import {z} from "zod";

export const messageSchemsa = z.object({
    content: z.string()
    .min(10, "Message content should be at least 10 characters")
    .max(500, "Message content should not exceed 500 characters"),
});