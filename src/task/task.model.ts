import * as mongoose from 'mongoose';
import { User } from '../auth/user.schema';

export const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export interface task {
  id: string;
  user: User;
  name: string;
  status: boolean;
}
