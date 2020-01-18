import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import {Mongoose, Schema} from 'mongoose';
import * as mongoose from 'mongoose';
import { MyModule } from 'src/improvedMongoose';

console.log('MyModule: ', MyModule);
// const test: any = new ImprovedMongoose()
// console.log('TEST',test)
// console.log('test: ', test);
// let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

