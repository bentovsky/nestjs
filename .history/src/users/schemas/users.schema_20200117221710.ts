import {ImprovedMongoose} from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'
import * as mongoose from 'mongoose';

const test = new ImprovedMongoose(mongoose)
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});