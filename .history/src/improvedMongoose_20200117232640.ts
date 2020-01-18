import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import * as mongooseDelete from 'mongoose-delete';
import * as mongooseAutopopulate from 'mongoose-autopopulate';

export class ImprovedMongoose {
  constructor(private mongoose: Mongoose) {
    this.setDefaultPlugins();
  }
  removePlugin(names: DefaultPlugins[]) {
    if (!!names) {
      throw new Error('Add a plugin to remove');
    }
    const plugins: IPlugins[][] = (this.mongoose as any).plugins;
    names.map(name => {
      const pluginToRemove: IPlugins[] = plugins.find(plugin =>
        plugin.find(params => params.name === name)
      );
      const index: number = plugins.indexOf(pluginToRemove);
      plugins.splice(index, 1);
    });
  }
  private setDefaultPlugins() {
    this.mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
    this.mongoose.plugin(mongooseDelete, { name: 'softDelete' });
    this.mongoose.plugin(mongooseDelete, { name: 'autoPopulate' });
    const plugins: IPlugins[][] = (this.mongoose as any).plugins;
    console.log('plugins: ', plugins);
  }

  setVirtuals(name) {}
}

interface IPlugins extends Mongoose {
  name: DefaultPlugins;
}

type DefaultPlugins = 'createdAt' | 'softDelete' | 'autoPopulate';
