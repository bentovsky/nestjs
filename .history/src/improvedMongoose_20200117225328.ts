import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(name) {
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    const pluginToRemove: IPlugins[] = plugins.find(plugin => plugin.find(params => params.name === name))
    const index: number = plugins.indexOf(pluginToRemove);
    plugins = plugins.splice(index, 0)
    console.log('plugins: ', plugins);
    // console.log('test: ', pluginToRemove);

  }
  private setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  }
}

interface IPlugins extends Mongoose {
    name: string
}