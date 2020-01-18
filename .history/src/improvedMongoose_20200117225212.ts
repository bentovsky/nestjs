import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(name) {
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    const pluginToRemove = plugins.find(plugin => plugin.find(params => params.name === name))
    console.log('plugins: ', plugins.indexOf(pluginToRemove));
    // console.log('test: ', pluginToRemove);

  }
  private setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  }
}

interface IPlugins extends Mongoose {
    name: string
}