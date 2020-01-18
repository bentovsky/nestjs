import {ImprovedMongoose} from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'
import * as mongoose from 'mongoose';

// let test = new ImprovedMongoose()
let test = new ImprovedMongoose().removePlugin('createdAt')

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});