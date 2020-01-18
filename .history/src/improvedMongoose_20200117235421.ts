import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import * as mongooseDelete from 'mongoose-delete';
import * as mongooseAutopopulate from 'mongoose-autopopulate';

export abstract class ImprovedMongoose extends Mongoose{
  constructor() {
    super()
    this.setDefaultPlugins();
    console.log()
  }
  removePlugin(names: DefaultPlugins[]) {
    if (!!names) {
      throw new Error('Add a plugin to remove');
    }
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    names.map(name => {
      const pluginToRemove: IPlugins[] = plugins.find(plugin =>
        plugin.find(params => params.name === name)
      );
      const index: number = plugins.indexOf(pluginToRemove);
      plugins.splice(index, 1);
    });
  }
  setDefaultPlugins() {
    mongoose.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
    mongoose.plugin(mongooseDelete, { name: 'softDelete' });
    mongoose.plugin(mongooseDelete, { name: 'autoPopulate' });
    const plugins: IPlugins[][] = (mongoose as any).plugins;
    console.log('plugins: ', plugins);
  }

  setVirtuals(name) {}
}

export class Hello {
  constructor(private bento: ImprovedMongoose) {
    this.bento.setDefaultPlugins()
  }

}

interface IPlugins extends Mongoose {
  name: DefaultPlugins;
}

type DefaultPlugins = 'createdAt' | 'softDelete' | 'autoPopulate';
