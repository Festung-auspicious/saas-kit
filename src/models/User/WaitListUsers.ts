import { model, models, Schema } from 'mongoose';

interface WaitListUserProps {
  email: string;
}

const waitListUserSchema = new Schema<WaitListUserProps>({
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

const WaitListUser = models.WaitListUser || model<WaitListUserProps>('WaitListUser', waitListUserSchema);

export default WaitListUser;
