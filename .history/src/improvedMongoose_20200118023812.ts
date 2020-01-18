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
    // setDefaultPlugins(schema);
    console.log('{...this, ...schema}: ', this);
    return {...schema}
  }
  static removePlugin(names: DefaultPlugins[]) {
    // console.log(this)
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

function setDefaultPlugins(schema: Schema) {
  schema.plugin(mongoosePluginCreatedAt, { name: 'createdAt' });
  schema.plugin(mongooseDelete, { name: 'softDelete' });
  schema.plugin(mongooseDelete, { name: 'autoPopulate' });
}

interface IPlugins extends Mongoose {
  name: DefaultPlugins;
}

type DefaultPlugins = 'createdAt' | 'softDelete' | 'autoPopulate';
