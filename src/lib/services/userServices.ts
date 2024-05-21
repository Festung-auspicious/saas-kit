import { UserProps } from '@/models/User/types';
import User from '@/models/User/User';
import { dbConnect } from '../mongo';



export async function getUserByEmail(email: string): Promise<UserProps | null> {
  await dbConnect();
  try {
    const user = await User.findOne({email}).exec();
    return user ? user.toObject() : null;
  } catch (error) {
    console.error('Error fetching user by ID', error);
    throw error;
  }
}

export async function createUser(userData: UserProps) {
  await dbConnect();
  try {
    const newUser = new User(userData);
    const result = await newUser.save();
    return result.id;
  } catch (error) {
    console.error('Error creating user with Mongoose:', error);
    throw error;
  }
}

