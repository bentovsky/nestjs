import mongoose, {test} from '../../improvedMongoose';

test('helo')
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});