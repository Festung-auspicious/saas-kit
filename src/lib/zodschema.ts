import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().email({
    message: 'Invalid Email',
  }),
  password: z.string().min(6,{message:" Invalid Password"})
})
export const loginEmailSchema = z.object({
  email: z.string().email({
    message: 'Invalid Email',
  }),
})
 