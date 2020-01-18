import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import * as mongooseDelete from 'mongoose-delete';

export class ImprovedMongoose {
  constructor() {
    this.setDefaultPlugins();
  }
  removePlugin(names: DefaultPlugins[]) {
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    names.map(name => {
      const pluginToRemove: IPlugins[] = plugins.find(plugin => plugin.find(params => params.name === name))
      const index: number = plugins.indexOf(pluginToRemove);
      plugins.splice(index, 1)
    })
  }
  private setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
    mongoose.plugin(mongooseDelete, { name: 'softDelete' });
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    console.log('plugins: ', plugins);
  }
}


interface IPlugins extends Mongoose {
    name: DefaultPlugins
}

type DefaultPlugins = 'createdAt'