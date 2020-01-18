import { Mongoose, Schema, SchemaDefinition, SchemaOptions } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import * as mongooseDelete from 'mongoose-delete';
import * as mongooseAutopopulate from 'mongoose-autopopulate';

export class ImprovedSchema extends Schema{
  constructor(definition?: SchemaDefinition, options?: SchemaOptions) {
    super()
    const test = !!options
      ? new Schema({ ...definition, options })
      : new Schema({ ...definition });
    console.log('TEST: ', test);
    console.log('this: ', this);
    // console.log('test : ', test );
    // this.setDefaultPlugins();
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
    this.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
    this.plugin(mongooseDelete, { name: 'softDelete' });
    this.plugin(mongooseDelete, { name: 'autoPopulate' });
    const plugins: IPlugins[][] = (this as any).plugins;
  }

  setVirtuals(name) {}
}

interface IPlugins extends Mongoose {
  name: DefaultPlugins;
}

type DefaultPlugins = 'createdAt' | 'softDelete' | 'autoPopulate';
