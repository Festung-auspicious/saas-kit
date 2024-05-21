import { dbConnect } from "@/lib/mongo";
import User from "@/models/User/User";
import bcrypt from "bcrypt-ts";
import { NextRequest, NextResponse } from "next/server";

/**
 * Register api for credintails provoider which create user accordingly.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} - The response to the request.
 */
export const POST = async (request: NextRequest) => {
  const {fullName, email, password } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name:fullName,
    email,
    password: hashedPassword,
    verified: false
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}