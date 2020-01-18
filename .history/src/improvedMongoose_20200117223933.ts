import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin() {
    console.log('HELLO',(mongoose as mongooseWithPlugins).plugins);
  }
  private setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  }
}

interface mongooseWithPlugins extends Mongoose {
  plugins: [
    [
      {name: string}
    ]
  ]
}