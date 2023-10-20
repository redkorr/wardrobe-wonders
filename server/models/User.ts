import mongoose, { Schema } from 'mongoose';

interface User {
  id: string;
  created_at: string;
}

const userSchema = new Schema<User>({
  id: {
    type: mongoose.Schema.Types.String,
    require: true,
    unique: true,
  },
  created_at: {
    type: mongoose.Schema.Types.String,
    require: true,
    unique: true,
  },
});
