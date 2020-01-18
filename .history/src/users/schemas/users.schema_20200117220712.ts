import {hello} from '../../improvedMongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt, {name: 'createdAt'});

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});