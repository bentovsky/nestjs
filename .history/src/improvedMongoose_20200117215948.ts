import * as mongoose from 'mongoose'
import * as mongoosePluginCreatedAt from 'mongoose-plugin-createdat'

mongoose.plugin(mongoosePluginCreatedAt, {name: 'createdAt'});

export const test = (param) => console.log('TEST FUNCTION',param)

export default mongoose
// console.log((mongoose as any).plugins)
// export default mongoose;
