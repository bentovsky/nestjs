import { ImprovedMongoose } from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import * as mongoose from 'mongoose';

let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new test.Schema({
  name: String,
  age: Number
});
