import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import {Mongoose, Schema} from 'mongoose';
import * as mongoose from 'mongoose';
import { ImprovedMongoose } from 'src/improvedMongoose';

const test: any = new ImprovedMongoose()
console.log('TEST',test.plugins)
// console.log('test: ', test);
// let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

