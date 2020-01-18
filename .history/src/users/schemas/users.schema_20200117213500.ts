import mongoose from '../../improvedMongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});