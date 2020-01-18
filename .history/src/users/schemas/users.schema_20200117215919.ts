import mongoose, {test} from '../../improvedMongoose';

test()
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});