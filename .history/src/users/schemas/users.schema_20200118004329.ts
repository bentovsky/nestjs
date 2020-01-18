import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import {Mongoose, Schema} from 'mongoose';
import * as mongoose from 'mongoose';

// console.log('test: ', test);
// let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

console.log('UserSchema: ', UserSchema);

