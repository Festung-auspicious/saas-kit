import { model, models, Schema } from 'mongoose';
import { UserProps } from './types';


const userSchema = new Schema<UserProps>({
    _id: {type: String, require:false},
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hasPlan: { type: Boolean, default: false },
    planType: {type: String, default:"Standard", require:false},
    password: { type: String, required: true },
  }, { timestamps: true });


  const User = models.User<UserProps>  || model<UserProps>('User', userSchema);

export default User;
