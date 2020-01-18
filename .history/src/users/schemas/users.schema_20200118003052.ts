import { ImprovedMongoose } from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import {Mongoose, Schema} from 'mongoose';
import * as mongoose from 'mongoose';

const test = new ImprovedMongoose()
console.log('test: ', test);
// let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new Schema({
  name: String,
  age: Number
});
