import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(name) {
    const plugins: any[] = (mongoose as any).plugins;
    console.log('plugins: ', plugins);
    plugins.map((el: IPlugins[]) => console.log(el))
    // const test = plugins.find(plugin => plugin.find(params => params.name === name))
    // console.log('test: ', test);
  }
  private setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  }
}

interface IPlugins extends Mongoose {
    name: string
}