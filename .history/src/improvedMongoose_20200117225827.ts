import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import { type } from 'os';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(name: DefaultPlugins) {
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    const pluginToRemove: IPlugins[] = plugins.find(plugin => plugin.find(params => params.name === name))
    const index: number = plugins.indexOf(pluginToRemove);
    plugins.splice(index, 1)
  }
  private setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  }
}

interface IPlugins extends Mongoose {
    name: string
}

interface DefaultPlugins {['createdAt']}