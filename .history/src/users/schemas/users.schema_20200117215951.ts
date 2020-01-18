import mongoose, {test} from '../../improvedMongoose';

test('hello')
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});