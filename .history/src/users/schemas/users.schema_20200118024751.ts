import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import {Mongoose, Schema} from 'mongoose';
import * as mongoose from 'mongoose';
import { ImprovedSchema } from 'src/improvedMongoose';

// console.log('test: ', test);
// let test = new ImprovedMongoose().removePlugin([]);

export const UserSchema = new ImprovedSchema({
  name: String,
  age: Number
});

console.log('UserSchema: ', UserSchema);
UserSchema.remove
// UserSchema.removePlugin(['createdAt'])
// UserSchema.removePlugin([])

// UserSchema.removePlugin(["createdAt"]);
