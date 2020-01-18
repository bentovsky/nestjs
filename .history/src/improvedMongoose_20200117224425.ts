import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(name) {
    const plugins = (mongoose as any).plugins;
    const test = plugins.find(plugin => !!plugin[1].params && plugin[1].params.name===name)
    console.log('test: ', test);
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