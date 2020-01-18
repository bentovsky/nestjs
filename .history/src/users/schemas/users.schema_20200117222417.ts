import {ImprovedMongoose} from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'
import * as mongoose from 'mongoose';

let test: ImprovedMongoose
console.log('test: ', test);
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});