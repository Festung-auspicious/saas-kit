'use server'
import { dbConnect } from "@/lib/mongo";
import User from "@/models/User/User";
import { hash } from "bcrypt-ts";
import { redirect } from "next/navigation";



import { z } from 'zod'
 
const newUserSchema = z.object({
  name: z.string().min(2,{message:"Invalid Name"}),
  email: z.string().email({
    message: 'Invalid Email',
  }),
  password: z.string().min(6,{message:"Password must be at least 6 characters longminimum Password"})
})
 
export default async function createUser(state: any,formData: FormData) {
  const validatedFields = newUserSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name')
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return  {errors:validatedFields.error.flatten().fieldErrors}
  }
 
  // Mutate data
  const {name, email, password } = validatedFields.data;

  await dbConnect();

  const hashedPassword = await hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    verified: false
  });

  try {
    await newUser.save();
    redirect('/login')
  } catch (err: any) {
    return ({server:"User already exist!"});
  }
}