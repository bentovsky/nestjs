import { Mongoose, Schema, SchemaDefinition, SchemaOptions } from 'mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat';
import * as mongooseDelete from 'mongoose-delete';
import * as mongooseAutopopulate from 'mongoose-autopopulate';

export class ImprovedSchema extends Schema {
  constructor(definition?: SchemaDefinition, options?: SchemaOptions) {
    super();
    const schema = !!options
      ? new Schema({ ...definition, options })
      : new Schema({ ...definition });
    this.obj = schema.obj
    this['paths'] = schema['paths']
    this['options'] = schema['options']
    // this.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
    // this.plugin(mongooseDelete, { name: 'softDelete' });
    // this.plugin(mongooseDelete, { name: 'autoPopulate' });
    setDefaultPlugins()
    return this;
    // return schema
  }
  removePlugin(names: DefaultPlugins[]) {
    console.log(this);
    if (!names) {
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

  static setVirtuals(name) {}
}

function setDefaultPlugins(this) {
  this.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  this.plugin(mongooseDelete, { name: 'softDelete' });
  this.plugin(mongooseDelete, { name: 'autoPopulate' });
}

interface IPlugins extends Mongoose {
  name: DefaultPlugins;
}

type DefaultPlugins = 'createdAt' | 'softDelete' | 'autoPopulate';
