import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

// mongoose.plugin(mongoosePluginCreatedAt, {name: 'createdAt'});

// export const test = (param) => console.log((mongoose as any).plugins[4])

export class hello {
  constructor(private mongoose: mongoose.Mongoose) {
    console.log('mongoose: ', mongoose);
    
  }
}