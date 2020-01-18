import { ImprovedMongoose, } from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import {Mongoose} from 'mongoose';
import * as mongoose from 'mongoose';

const test = new ImprovedMongoose(mongoose)
console.log('test: ', test);
// let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
