import * as mongoose from '../../mongooseGlobals';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});