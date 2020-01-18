import {ImprovedMongoose} from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'
import * as mongoose from 'mongoose';

let test = new ImprovedMongoose(mongoose).hello()
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});