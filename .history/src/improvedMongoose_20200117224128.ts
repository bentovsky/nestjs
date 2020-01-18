import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(name) {
    const plugins = (mongoose as any).plugins;
    plugins.map(plugin => console.log(plugin[1]))
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