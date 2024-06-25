import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_WEBHOOK_URL: z.string().url(),
})

console.log("NEXT_PUBLIC_WEBHOOK_URL", process.env.NEXT_PUBLIC_WEBHOOK_URL)

export const env = envSchema.parse(process.env)